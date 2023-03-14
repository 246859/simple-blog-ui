import {fileURLToPath, URL} from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    // 加载环境变量
    const env = loadEnv(mode, "./env", "");
    return {
        base: "/",
        envDir: "./env",
        plugins: [
            vue(),
            // element-plus自动按需导入插件
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url))
            }
        },
        server: {
            cors: true,
            port: 7090,
            proxy: {
                "/api": {
                    target: env.VITE_SERVER_API,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, "")
                }
            }
        },
        build: {
            reportCompressedSize: false
        }
    };
});

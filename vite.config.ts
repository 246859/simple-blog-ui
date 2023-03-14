import {fileURLToPath, URL} from "node:url";

import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    // 加载环境变量
    const env = loadEnv(mode, "./env", "");
    return {
        base: "/",
        envDir: "./env",
        plugins: [vue()],
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

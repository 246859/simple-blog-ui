<template>
  <div class="app-logo">
    <img src="../../assets/img/global/logo.svg" alt="轻言小站">
    <h3>轻言小站</h3>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

h3 {
  font-size: 20px;
}
</style>
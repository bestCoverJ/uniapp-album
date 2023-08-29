<template>
  <view>
    <van-tabbar :active="app.active" @change="onChange">
      <!-- <van-tabbar-item icon="home-o">广场</van-tabbar-item> -->
      <van-tabbar-item icon="photo-o">相册</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script setup>
import { useAppStore } from "@/store/index"
const app = useAppStore()
const onChange = (event) => {
  app.changeActive(event)
}
</script>

<style lang="scss">
</style>

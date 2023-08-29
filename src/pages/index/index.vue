<template>
  <view class="content">
    <album v-show="app.active === 0" />
    <tab-list />
  </view>
</template>
 
<script setup>
import { ref } from "vue"
import { useAppStore } from "@/store/index"
import TabList from '../components/tabbar'
import Album from '../album'
const app = useAppStore()

</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 32rpx;
}
</style>

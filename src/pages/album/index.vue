<template>
  <view class="album-page">
    <text class="album-title">我的相册</text>
    <view class="album-list-wrapper">
      <album-list
        v-for="(album, aIndex) in albumList"
        :key="aIndex"
        :album="album"
      />
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue"
import AlbumList from "./components/albumList"
import avatar from "@/static/avatar.jpg"
const albumList = ref([
  {
    cover: avatar,
    AlbumTitle: "默认相册",
    AlbumDes: "233张",
  },
  {
    cover: avatar,
    AlbumTitle: "默认相册",
    AlbumDes: "233张",
  },
])
</script>

<style lang="scss">
.album-page {
  display: flex;
  flex-direction: column;
  .album-title {
    font-weight: bold;
    font-size: 36rpx;
    margin-bottom: 32rpx;
  }
}
</style>

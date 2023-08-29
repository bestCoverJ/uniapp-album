<template>
  <view class="album-list">
    <view class="album-item-wrapper">
      <van-image
        width="10rem"
        height="10rem"
        fit="contain"
        radius="4"
        lazy-load
        :src="props.album.cover"
      />
      <text class="album-item-title">
        {{ props.album.AlbumTitle }}
      </text>
      <text class="album-item-des">
        {{ props.album.AlbumDes }}
      </text>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  album: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss">
.album-list {
  .album-item-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8rpx;
    .album-item-title {
      font-weight: bold;
    }
  }
}
</style>

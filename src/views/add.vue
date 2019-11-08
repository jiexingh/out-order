<template>
  <div>
    <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" />
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
import { Uploader, Button } from "vant";
export default {
  components: {
    [Uploader.name]: Uploader,
    [Button.name]: Button
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    afterRead(){
      console.log(this.fileList);
    }
  }
};
</script>
<style scoped>
</style>
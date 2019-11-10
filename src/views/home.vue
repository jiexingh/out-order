<template>
  <div>
    <van-button type="danger" v-on:click="dangerTap">危险按钮</van-button>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {};
  },
  methods: {
    dangerTap(){
      console.log('123');
      this.$router.push({
        path:'/add',
        query:{
          id:123
        }
      })
    }

  }
};
</script>
<style scoped>
div {
  color: red;
}
</style>
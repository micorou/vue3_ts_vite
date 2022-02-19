<template>
  <p>test</p>
  <el-button type="primary" @click="getData">测试axios</el-button>
</template>

<script lang="ts" setup>
import axios from '../utils/axios'

function getData() {
  axios
    .get('/users/XPoet')
    .then((res: object) => {
      // console.log('res: ', res)
      return res
    })
    .catch((err: object) => {
      // console.log('err: ', err)
      return err
    })
}
</script>

<style lang="scss" scoped>
$link-color: red;
p {
  color: $link-color;
}
</style>

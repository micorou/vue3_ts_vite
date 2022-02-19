<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

defineProps<{ msg: string }>()

const count = ref(0)

const store = useStore()
const countStore = computed(() => store.state.count)
const doubleCountStore = computed(() => store.getters.double)

function countStoreAdd() {
  store.commit('increment')
}
// function countStoreAdd(){
//   store.dispatch('increment')
// }
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    {{ doubleCountStore }}
  </p>
  <button type="button" @click="countStoreAdd">count is: {{ countStore }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

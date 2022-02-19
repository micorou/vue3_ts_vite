import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      // console.log('mutations')
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      // console.log('action')
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})

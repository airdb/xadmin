import {
  getArticleList
} from '@/api/data'

export default {
  namespaced: true,
  state: {
    Babyid: ''
  },
  mutations: {
    setBabyid (state, Babyid) {
      state.Babyid = Babyid
    }
  },
  actions: {
    // get article
    getArticleList({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getArticleList(state.token).then(res => {
            const data = res.data
            window.console.log('=======', data[0].Babyid)
            commit('setBabyid', data[0].Babyid)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}

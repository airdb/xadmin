<template>
  <div class="block">
    <span class="demonstration">完整功能</span>
    {{ msg }}
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import store from '@/store'
  export default {
    data () {
      return {
        currentPage4: 4,
        msg: 'init',
        emsg: 'init'
      }
    },
    methods: {
      ...mapActions([
        'getArticleList'
      ])
    },
    created () {
      store.dispatch('data/getArticleList').then(res => {
        this.msg = res[0]
      })
    }
  }
</script>

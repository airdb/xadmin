<template>
  <div class="block">
    <span class="demonstration">完整功能</span>
    {{ msg }}
    {{ emsg }}
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
        emsg: store.state.Babyid
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
        window.console.log('==========', this.msg)
      })
    }
  }
</script>

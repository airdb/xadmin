<template>
<div>
  <head-er></head-er>

  <main role="main">
    <div class="jumbotron pb-2 pt-0">
      <div class="container">
        <nav aria-label="breadcrumb" class="">
          <ol class="breadcrumb border-bottom" style="font-size:20px;">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Forum</li>
          </ol>
        </nav>
        <!-- nav end -->

        <h2 class="display-4">宝贝回家论坛</h2>
        <p class="pb-5">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <!-- p end -->
        
        <div class="row">
          <div class="col-10"> 
            <nav>
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
            <!-- nav end -->
          </div>
          <!-- col-9 end -->
          <div class="col-2 float-right">
            <router-link to="/forum/edit" class="btn btn-primary btn-md">发表主题</router-link>
          </div>
          <!-- col-3 end -->
        </div>
        <!-- row end -->
      </div>
    </div>
    <!-- jumbotron end -->

    <div class="container">
      <div class="row px-3 mb-2">
        <ul class="nav nav-pills" style="font-size:10px">
          <li class="nav-item">
            <a class="nav-link active" href="#">全部</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">精华</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">投票</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">辩论</a>
          </li>
        </ul>
        <!-- ul end -->
        <form class="form-inline float-right ml-3">
          <input class="form-control form-control-sm" type="search" placeholder="Search">
          <button class="btn btn-outline-secondary btn-sm" type="button">Search</button>
        </form>
        <!-- form end -->
      </div>
      <!-- row end -->

      <div class="border-bottom bg-light d-flex pl-3">
        <span style="font-size:15px">排序：</span>
      </div>
      <div class="media pt-3 border-bottom" v-for="card in cards">
        <img class="mr-3" src="../../assets/img1.jpg" width="40px" height="40px">
        <div class="media-body row">
          <div class="col-10">
            <h5 class="mt-0 text-primary"><a href="/#/forum/article">{{card.title}}</a></h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
          </div>
          <!-- col-9 end -->
          <div class="col-2">
            <div class="d-inline-block bg-light mb-3 rounded p-2" style="width:60px">
              <p class="text-center text-secondary mb-0" style="font-size:10px">浏览 {{card.browseNum}}</p>
            </div>
            <div class="d-inline-block bg-light mb-3 rounded p-2" style="width:60px">
              <p class="text-center text-secondary mb-0" style="font-size:10px">回复 {{card.replyNum}}</p>
            </div>
          </div>
          <!-- col-3 end -->
        </div>
        <!-- media-body end -->
      </div>
      <!-- media end -->

      <div class="row py-4">
        <div class="col-10"> 
          <nav>
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          <!-- nav end -->
        </div>
        <!-- col-10 end -->
        <div class="col-2 float-right">
          <router-link to="/edit" class="btn btn-primary btn-md">发表主题</router-link>
        </div>
        <!-- col-2 end -->
      </div>
      <!-- row end -->
    </div>
    <!-- container end -->

  </main>
  <!-- main end -->
  
  <foot-er></foot-er>
</div>
</template>

<script>
import headEr from '@/components/header'
import footEr from '@/components/footer'
export default {
  components: {
    headEr,
    footEr
  },
  data () {
    return {
      cards: [
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018},
        {title: '标题一', avatarImg: '../assets/img1.jpg', browseNum: 2018, replyNum: 2018}
      ]
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style>
</style>

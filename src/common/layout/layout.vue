// no need to customize layout for now
<template>
  <div class="noahv-layout">
    <div class="noahv-layout-header">
      <!-- dasdsadadasd -->
      <!-- you can diy header in this content -->
    <!-- <Header /> -->
    </div>
    <!-- pleas keep this node -->
    <div class="noahv-layout-content">
      <div class="noahv-layout-content-main">
          <div style="display:flex">
        <Tree />
        <router-view></router-view>
      </div>
      </div>
    </div>
    <div class="noahv-layout-footer">
      <!-- dddsa -->
      <!-- you can diy footer in this content -->
      <NvFooter />
    </div>
  </div>
</template>
<script>
import noahv from 'noahv-core';
import NvFooter from "./footer.vue";
import headerConfig from "../header";
// import Header from "./header.vue"
import Tree from "../../bbs/tree"
// import '../assets/css/header.less'
export default {
  components: {
    headerConfig,
    NvFooter,
    // Header,
    Tree
  },
  name: "NvHeader",
};
</script>

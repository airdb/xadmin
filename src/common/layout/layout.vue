// no need to customize layout for now
<template>
  <div class="noahv-layout">
    <div class="noahv-layout-header">
      <Header :header-conf="headerConf" />
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
      <NvFooter />
    </div>
  </div>
</template>
<script>
import noahv from "noahv-core";
import NvFooter from "./footer.vue";
import headerConfig from "../header";
import Header from "./header.vue";
import Tree from "../../bbs/tree";

export default {
  created() {
    this.headerConf = headerConfig;
  },
  components: {
    NvFooter,
    Header,
    Tree,
  },
  data() {
    return {
      headerConf: null,
    };
  },
  name: "NvHeader",
};
</script>

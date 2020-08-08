<template>
  <div class="treeWrapper">
    <NvTree
      :items="items"
      :search="search"
      :checkbox="checkbox"
      :width="50"
      :editIcon="editIcon"
      @on-check-change="onCheckChangeHandler"
    ></NvTree>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "nvTreeCheckedDemo",
  computed: mapState({ items: "treeItems" }),
  data() {
    const self = this;
    return {
      search: true,
      checkbox: true
      // items: []  // refer: mockup/api/tree/default.js
    };
  },
  methods: {
    ...mapActions(["getTreeItems"]),
    onCheckChangeHandler: function() {
      this.$Message.info("check changed");
    },
    initTree() {
      this.$store.dispatch("getTreeItems");
    }
  },
  mounted() {
    this.initTree();
  }
};
</script>

<style src="./tree.less" lang="less">
</style>

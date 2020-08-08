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
      //   items: [
      //     {
      //       title: "node1",
      //       name: "node1",
      //       icon: "pie",
      //       children: [
      //         {
      //           title: "node1-2",
      //           name: "node1-2",
      //           icon: "heart"
      //         },
      //         {
      //           title: "node1-3",
      //           name: "node1-3",
      //           icon: "star"
      //         }
      //       ]
      //     },
      //     {
      //       title: "node2",
      //       name: "node2",
      //       icon: "star",
      //       children: [
      //         {
      //           title: "node2-1",
      //           name: "node2-1",
      //           icon: "star"
      //         },
      //         {
      //           title: "node2-2",
      //           name: "node2-2",
      //           icon: "star"
      //         }
      //       ]
      //     },
      //     {
      //       title: "node3",
      //       name: "node3",
      //       icon: "star"
      //     }
      //   ]
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

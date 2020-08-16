<template>
  <div class="noahv-layout-header-inner">
    <div>
      <!--TODO： <Logo :logo="logo"></Logo> -->
      <Menu mode="horizontal" theme="dark" class="noahv-layout-nav">
        <MenuItem
          :name="item.key ? item.key : '|'"
          :key="index"
          v-for="(item, index) in this.headerConf.header"
        >
          <!--FIX: this.header doesn't work,, change this.headerConf to header -->
          <headerLink :item="item" :parent="null"></headerLink>
        </MenuItem>
      </Menu>
      <Login :login="this.headerConf.login"></Login>
      <!--FIX: change headerConf  to header.login -->
    </div>
  </div>
</template>

<script>
import headerLink from "./header/headerLink";
import Login from "./header/login";
// import Logo from './logo';

export default {
  mounted() {
    console.log("header in header" + this.headerConf);
  },
  props: ["headerConf"],
  data() {
    return {};
  },
  components: {
    headerLink,
    Login,
  },
  computed: {
    header: () => {
      return this.headerConf.header; // why doesn't work?
    },
  },
  watch: {
    headerConf(val, oldVal) {
      if (val !== oldVal) alert(JSON.stringify(this.header));
    },
  },
};
</script>
<template>
  <div class="noahv-layout-header-inner">
    <div>
      <Logo :logo="logo"></Logo>
      <!-- <Logo></Logo> -->
      <Menu mode="horizontal" theme="dark" class="noahv-layout-nav">
        <MenuItem :name="item.key ? item.key : '|'" :key="index" v-for="(item, index) in header">
          <headerLink :item="item" :parent="null"></headerLink>
        </MenuItem>
      </Menu>
      <Login :login="header.login"></Login>
    </div>
  </div>
</template>

<script>
import headerLink from "./header/headerLink";
import Login from "./header/login";
import Logo from "./header/logo";

export default {
  props: ["headerConf", "logo"], //or header-conf
  data() {
    return {};
  },
  components: {
    headerLink,
    Login,
    Logo,
  },
  computed: {
    header() {
      return this.headerConf.header;
    },
    logo() {
      return this.headerConf.logo
    }
  },
};

//https://stackoverflow.com/questions/49614574/vuejs-computed-is-not-working-with-props
// v-bind props in parent component need to be kebab-case
</script>
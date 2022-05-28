<template>
  <div id="Sidebar" class="reset-menu-style">
    <!--logo-->
    <Logo v-if="settings.sidebarLogo" :collapse="!isCollapse" />
    <!--router nav-->
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical"
        :default-active="activeMenu"
        :collapse="!isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        :background-color="scssJson.menuBg"
        :text-color="scssJson.menuText"
        :active-text-color="scssJson.menuActiveText"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <p class="version">当前版本: {{ version }}</p>
  </div>
</template>

<script setup>
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import { version } from '../../../../package.json'
//导入配置文件

const appStore = useAppStore()
const settings = computed(() => {
  return appStore.settings
})

const route = useRoute()
const permissionStore = usePermissionStore()
const routes = computed(() => {
  return permissionStore.routes
})
const isCollapse = computed(() => {
  return appStore.sidebar.opened
})

//change  scss variable to js
const dillScssExportToJson = (scssExportJson) => {
  const jsonString = scssExportJson.replace(/:export\s*/, '').replace(/[\s+\r\n]/g, '')
  const scssJson = {}
  jsonString
    .slice(1, jsonString.length - 2)
    .split(';')
    .forEach((fItem) => {
      const arr = fItem.split(':')
      scssJson[arr[0]] = arr[1]
    })
  return scssJson
}

//get scss variable
import scssExportJson from '@/styles/variables-to-js.scss'
import { useAppStore } from '@/store/app'
import { usePermissionStore } from '@/store/permission'
const scssJson = dillScssExportToJson(scssExportJson)
const activeMenu = computed(() => {
  const { meta, fullPath } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return fullPath
})
</script>

<style lang="scss">
.reset-menu-style {
  .el-menu {
    border-right: none;
  }
  .el-scrollbar__wrap {
    padding-bottom: 10vh;
  }
}

.el-menu-vertical {
  width: $sideBarWidth;
}

.version {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto 8px;
  background-color: #304156;
  font-size: 12px;
  color: var(--el-text-color-placeholder);
  text-align: center;
}
</style>

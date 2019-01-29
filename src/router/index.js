import Vue from 'vue'
import Router from 'vue-router'

import transfer from '@/components/transfer'
import tree from '@/components/tree'
import newtree from '@/components/newtree'
import navmenu from '@/components/navmenu'
import signin from '@/components/signin'
import signup from '@/components/signup'
import root from '@/components/root'
import Main from '@/components/Main'

// main
import home from '@/views/home'
// import login from '@/views/login'
import login from '@/views/login/login'

// forum
import forum from '@/views/forum/forum'
import edit from '@/views/forum/edit'
import article from '@/views/forum/article'

// user
import test from '@/views/test'
import userInfo from '@/views/user/userInfo'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // home
    { meta: { title: 'Home     | airdb.com' }, path: '/', name: 'root', component: home },
    { meta: { title: 'Sign in  | airdb.com' }, path: '/login', name: 'login', component: login },

    // forum
    { meta: { title: 'Forum    | airdb.com' }, path: '/forum', name: 'forum', component: forum },
    { meta: { title: 'Edit     | airdb.com' }, path: '/forum/edit', name: 'edit', component: edit },
    { meta: { title: 'Article  | airdb.com' }, path: '/forum/article', name: 'article', component: article },

    // uer
    { meta: { title: 'User Info| airdb.com' }, path: '/user/userInfo', name: 'userInfo', component: userInfo },

    { meta: { title: 'root     | airdb.com' }, path: '/servicetree', name: 'servicetree', component: root },
    { meta: { title: 'admin    | airdb.com' }, path: '/admin', name: 'test', component: test },
    { meta: { title: 'Tree     | airdb.com' }, path: '/tree', name: 'Hello Ztree', component: tree },
    { meta: { title: 'New Tree | airdb.com' }, path: '/newtree', name: 'newtree', component: newtree },
    { meta: { title: 'nav menu | airdb.com' }, path: '/navmenu', name: 'Hello nav menu', component: navmenu },
    { meta: { title: 'signin   | airdb.com' }, path: '/signin', name: 'signin', component: signin },
    { meta: { title: 'signup   | airdb.com' }, path: '/signup', name: 'signup', component: signup },
    { meta: { title: 'transfer | airdb.com' }, path: '/transfer', name: 'transfer', component: transfer },
    { meta: { title: 'signout  | airdb.com' }, path: '/signout', name: 'signout', component: Main }
  ]
})

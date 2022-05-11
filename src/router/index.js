import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'

/* Router Modules */
import chartsRouter from './modules/charts'

export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path(.*)',
            component: () =>
                import ('@/views/redirect')
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/Login.vue'),
        hidden: true
    },
    {
        path: '/callback',
        component: () =>
            import ('@/views/callback/index.vue'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/error-page/404.vue'),
        hidden: true
    },
    {
        path: '/401',
        component: () =>
            import ('@/views/error-page/401.vue'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () =>
                import ('@/views/dashboard/index.vue'),
            //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
            meta: { title: 'Dashboard', elSvgIcon: 'Fold' }
        }]
    },
    {
        path: '/teamwork',
        component: Layout,
        meta: { title: '团队协作', icon: 'guide' },
        alwaysShow: true,
        children: [{
                path: 'crud',
                component: () =>
                    import ('@/views/teamwork'),
                //name: 'crud',
                meta: { title: '值班' }
            },
            {
                path: 'import-export',
                component: () =>
                    import ('@/views/teamwork/project.vue'),
                // name: 'ImportExport',
                meta: { title: '项目周报' }
            },
            {
                path: 'img-address-packing',
                component: () =>
                    import ('@/views/teamwork/personal.vue'),
                //  name: 'ImgAddressPacking',
                meta: { title: '个人周报' }
            }
        ]
    }
    /*
        {
            path: '/setting-switch',
            component: Layout,
            children: [{
                path: 'index',
                component: () =>
                    import ('@/views/setting-switch'),
                name: 'SettingSwitch',
                meta: { title: 'Setting Switch', icon: 'example' }
            }]
        },
        {
            path: '/guide',
            component: Layout,
            children: [{
                path: 'index',
                component: () =>
                    import ('@/views/guide/index.vue'),
                name: 'Guide',
                meta: { title: 'Guide', icon: 'guide' }
            }]
        },
        {
            path: '/error-log',
            component: Layout,
            name: 'ErrorLog',
            redirect: '/error-log/list',
            meta: { title: 'ErrorLog', icon: 'bug' },
            children: [{
                    path: 'list',
                    component: () =>
                        import ('@/views/error-log'),
                    name: 'ErrorLog',
                    meta: { title: 'ErrorLog' }
                },
                {
                    path: 'error-log-test',
                    component: () =>
                        import ('@/views/error-log/ErrorLogTest.vue'),
                    name: 'ErrorLogTest',
                    meta: { title: 'ErrorLog Test' }
                }
            ]
        },
        {
            path: '/nested',
            component: Layout,
            redirect: '/nested/menu1',
            name: 'Nested',
            meta: {
                title: 'Nested',
                icon: 'nested'
            },
            children: [{
                    path: 'menu1',
                    component: () =>
                        import ('@/views/nested/menu1/index.vue'), // Parent router-view
                    name: 'Menu1',
                    meta: { title: 'Menu1' },
                    children: [{
                            path: 'menu1-1',
                            component: () =>
                                import ('@/views/nested/menu1/menu1-1/index.vue'),
                            name: 'Menu1-1',
                            meta: { title: 'Menu1-1' }
                        },
                        {
                            path: 'menu1-2',
                            component: () =>
                                import ('@/views/nested/menu1/menu1-2/index.vue'),
                            name: 'Menu1-2',
                            meta: { title: 'Menu1-2' },
                            children: [{
                                    path: 'menu1-2-1',
                                    component: () =>
                                        import ('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                                    name: 'Menu1-2-1',
                                    meta: { title: 'Menu1-2-1' }
                                },
                                {
                                    path: 'menu1-2-2',
                                    component: () =>
                                        import ('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                                    name: 'Menu1-2-2',
                                    meta: { title: 'Menu1-2-2' }
                                }
                            ]
                        },
                        {
                            path: 'menu1-3',
                            component: () =>
                                import ('@/views/nested/menu1/menu1-3/index.vue'),
                            name: 'Menu1-3',
                            meta: { title: 'Menu1-3' }
                        }
                    ]
                },
                {
                    path: 'menu2',
                    component: () =>
                        import ('@/views/nested/menu2/index.vue'),
                    name: 'Menu2',
                    meta: { title: 'menu2' }
                }
            ]
        },
        {
            path: '/external-link',
            component: Layout,
            children: [{
                path: 'https://github.com/airdb/xadmin',
                meta: { title: 'Github Repo', icon: 'link' }
            }]
        },
        chartsRouter,
        {
            path: '/crud',
            component: Layout,
            meta: { title: 'CRUD', icon: 'guide' },
            alwaysShow: true,
            children: [{
                    path: 'crud',
                    component: () =>
                        import ('@/views/crud'),
                    name: 'crud',
                    meta: { title: 'CRUD-Demo' }
                },
                {
                    path: 'import-export',
                    component: () =>
                        import ('@/views/crud/Vci.vue'),
                    name: 'ImportExport',
                    meta: { title: 'Import Export' }
                },
                {
                    path: 'img-address-packing',
                    component: () =>
                        import ('@/views/crud/ImgAddressPacking.vue'),
                    name: 'ImgAddressPacking',
                    meta: { title: 'ImgAdd Pack' }
                }
            ]
        },
        {
            path: '/writing-demo',
            component: Layout,
            meta: { title: 'Writing Demo', icon: 'eye-open' },
            alwaysShow: true,
            children: [{
                    path: 'hook',
                    component: () =>
                        import ('@/views/example/hook/Hook.vue'),
                    name: 'Hook',
                    meta: { title: 'Hook-Demo' }
                },
                {
                    path: 'vuex-use',
                    component: () =>
                        import ('@/views/example/vuex-use/VuexUse.vue'),
                    name: 'VuexUse',
                    meta: { title: 'Vuex-Demo' }
                },
                {
                    path: 'mock-test',
                    component: () =>
                        import ('@/views/example/mock-test/MockTest.vue'),
                    name: 'MockTest',
                    meta: { title: 'Mock-Demo' }
                },
                {
                    path: 'svg-icon',
                    component: () =>
                        import ('@/views/example/svg-icon/SvgIcon.vue'),
                    name: 'SvgIcon',
                    meta: { title: 'Svg-Demo' }
                },
                {
                    path: 'parent-children',
                    component: () =>
                        import ('@/views/example/parent-children/Parent.vue'),
                    name: 'Parent',
                    meta: { title: 'Parent-Children' }
                },
                {
                    path: 'keep-alive',
                    component: () =>
                        import ('@/views/example/keep-alive'),
                    name: 'KeepAlive',
                    //cachePage: cachePage when page enter, default false
                    //leaveRmCachePage: remove cachePage when page leave, default false
                    meta: { title: 'Keep-Alive', cachePage: true, leaveRmCachePage: false }
                },
                {
                    path: 'tab-keep-alive',
                    component: () =>
                        import ('@/views/example/keep-alive/TabKeepAlive.vue'),
                    name: 'TabKeepAlive',
                    //closeTabRmCache: remove cachePage when tabs close, default false
                    meta: { title: 'Tab-Keep-Alive', cachePage: true, closeTabRmCache: true }
                },
                {
                    path: 'router-demo-f',
                    name: 'routerDemoF',
                    hidden: true,
                    component: () =>
                        import ('@/views/example/keep-alive/RouterDemoF.vue'),
                    meta: { title: 'RouterDemo-F', cachePage: true, activeMenu: '/writing-demo/keep-alive' }
                },
                {
                    path: 'router-demo-s',
                    name: 'routerDemoS',
                    hidden: true,
                    component: () =>
                        import ('@/views/example/keep-alive/RouterDemoS.vue'),
                    meta: { title: 'RouterDemo-S', cachePage: true, activeMenu: '/writing-demo/keep-alive' }
                },
                {
                    path: 'deep-router-keep-alive',
                    name: 'DeepRouterKeepAlive',
                    component: () =>
                        import ('@/views/example/keep-alive/DeepRouterKeepAlive.vue'),
                    //注：移除父容器页面缓存会把子页面一起移除了
                    meta: { title: 'Deep KeepAlive', cachePage: true, leaveRmCachePage: false },
                    alwaysShow: true,
                    children: [{
                            path: 'deep-children',
                            name: 'DeepChildren',
                            component: () =>
                                import ('@/views/example/keep-alive/deep-children/DeepChildren.vue'),
                            meta: { title: 'DeepChildren', cachePage: true, leaveRmCachePage: true }
                        },
                        {
                            path: 'deep-children-sd',
                            name: 'DeepChildrenSd',
                            component: () =>
                                import ('@/views/example/keep-alive/deep-children/DeepChildrenSd.vue'),
                            meta: { title: 'DeepChildrenSd', cachePage: true, leaveRmCachePage: false }
                        }
                    ]
                },
                {
                    path: 'table-with-pagination',
                    component: () =>
                        import ('@/views/table-with-pagination/index.vue'),
                    name: 'TableWithPagination',
                    meta: { title: 'Table With Pagination' }
                }
            ]
        },
        {
            path: '/use-example',
            component: Layout,
            meta: { title: 'Use Example', icon: 'documentation' },
            alwaysShow: true,
            children: [
                // {
                //   path: 'tinymce',
                //   component: () => import('@/views/use-example/tinymce-example/TinymceExample.vue'),
                //   name: 'Tinymce',
                //   meta: { title: 'Tinymce', icon: 'documentation' }
                // },
                {
                    path: 'i18n-demo',
                    component: () =>
                        import ('@/views/use-example/i18n/I18n-Demo.vue'),
                    name: 'I18nDemo',
                    meta: { title: 'I18n-Demo', icon: 'documentation' }
                },
                {
                    path: 'd3',
                    component: () =>
                        import ('@/views/use-example/d3/D3.vue'),
                    name: 'D3',
                    meta: { title: 'd3-force', icon: 'documentation' }
                },
                {
                    path: 'signboard',
                    component: () =>
                        import ('@/views/use-example/signboard/SignBoard.vue'),
                    name: 'SignBoard-demo',
                    meta: { title: 'signboard', icon: 'documentation' }
                },
                {
                    path: 'worker-Demo',
                    name: 'WorkerDemo',
                    component: () =>
                        import ('@/views/use-example/worker'),
                    meta: { title: 'Worker Demo', icon: 'nested' }
                }
            ]
        },
        {
            path: '/directive',
            component: Layout,
            meta: { title: 'Directive', icon: 'education' },
            alwaysShow: true,
            children: [{
                    path: 'copy',
                    component: () =>
                        import ('@/views/directive/copy.vue'),
                    name: 'copy',
                    meta: { title: 'v-copy' }
                },
                {
                    path: 'debounce',
                    component: () =>
                        import ('@/views/directive/debounce.vue'),
                    name: 'debounce',
                    meta: { title: 'v-debounce' }
                },
                {
                    path: 'longpress',
                    component: () =>
                        import ('@/views/directive/longpress.vue'),
                    name: 'longpress',
                    meta: { title: 'v-longpress' }
                },
                {
                    path: 'watermark',
                    component: () =>
                        import ('@/views/directive/watermark.vue'),
                    name: 'watermark',
                    meta: { title: 'v-watermark' }
                },
                {
                    path: 'waves',
                    component: () =>
                        import ('@/views/directive/waves.vue'),
                    name: 'waves',
                    meta: { title: 'v-waves' }
                }
            ]
        }
        */
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
        name: 'Permission',
        meta: {
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [{
                path: 'roleIndex',
                component: () =>
                    import ('@/views/permission'),
                name: 'Permission',
                meta: {
                    title: 'Role Index'
                        //roles: ['admin'] // or you can only set roles in sub nav
                }
            },
            {
                path: 'page',
                component: () =>
                    import ('@/views/permission/page.vue'),
                name: 'PagePermission',
                meta: {
                    title: 'Page Permission',
                    roles: ['admin'] // or you can only set roles in sub nav
                }
            },
            {
                path: 'directive',
                component: () =>
                    import ('@/views/permission/directive.vue'),
                name: 'DirectivePermission',
                meta: {
                    title: 'Directive Permission'
                        // if do not set roles, means: this page does not require permission
                }
            },
            {
                path: 'code-index',
                component: () =>
                    import ('@/views/permission/CodePermission.vue'),
                name: 'CodePermission',
                meta: {
                    title: 'Code Index'
                }
            },
            {
                path: 'code-page',
                component: () =>
                    import ('@/views/permission/CodePage.vue'),
                name: 'CodePage',
                meta: {
                    title: 'Code Page',
                    code: 1
                }
            }
        ]
    },
    // 404 page must be placed at the end !!!
    // using pathMatch install of "*" in vue-router 4.0
    { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: constantRoutes
})

export default router
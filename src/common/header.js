/**
 * @file header config
 */

export default {
    header: [
        {
            label: '论坛管理',
            key: 'tplDemo',
            children: [
                {
                    label: '文章',
                    key: 'tableDemo',
                    link: 'tableDemo'
                },
                {
                    label: '评论',
                    key: 'formDemo',
                    link: 'formDemo'
                },
                {
                    label: '用户',
                    key: 'filterTableDemo',
                    link: 'filterTableDemo'
                },
				{
                    label: '标签',
                    key: 'filterTableDemo',
                    link: 'filterTableDemo'
                }
            ]
        },
        {
            label: '图表示例',
            key: 'chart',
            children: [
                {
                    label: '图表示例',
                    key: 'chartDemo',
                    link: 'chartDemo'
                },
                {
                    label: '时序趋势图示例',
                    key: 'demo/chart/trend',
                    selected: true,
                    link: 'demo/chart/trend'
                }
            ]
        },
        {
            label: '使用文档',
            linkTarget: 'https://baidu.github.io/NoahV/#/guide/about'
        }
    ],
    hasBread: true,
    logo: {
        // 是否需要logo
        hasLogo: true,
        title: 'NoahV',
        // eslint-disable-next-line no-undef
        src: require('common/assets/img/logo.png')
    },
    login: {
        hasLogin: true,
        url: '/api/user',
        logout: '/api/logout'
    },
    type: 'header-sidebar',
    separator: '/'
};

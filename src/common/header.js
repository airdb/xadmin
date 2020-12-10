/**
 * @file header config
 */

export default {
    header: [
        {
            label: "论坛数据",
            key: "bbs",
            children: [
                {
                    label: "分类信息",
                    key: "bbs/list",
                    link: "bbs/list"
                },
                {
                    label: "信息",
                    key: "formDemo",
                    link: "formDemo"
                },
                {
                    label: "筛选表格示例",
                    key: "filterTableDemo",
                    link: "filterTableDemo"
                }
            ]
        },
        {
            label: "图表示例",
            key: "chart",
            children: [
                {
                    label: "图表示例",
                    key: "chartDemo",
                    link: "chartDemo"
                },
                {
                    label: "时序趋势图示例",
                    key: "demo/chart/trend",
                    selected: true,
                    link: "demo/chart/trend"
                }
            ]
        },
        {
            label: "使用文档",
            linkTarget: "https://baidu.github.io/NoahV/#/guide/about"
        }
    ],
    hasBread: false,
    logo: {
        // 是否需要logo
        hasLogo: false,
        title: "Airdb",
        // eslint-disable-next-line no-undef
        // src: require('common/assets/img/logo.png')
        src: require("common/assets/img/favicon.ico")
    },
    login: {
        hasLogin: true,
        url: "https://bbhj.airdb.io/release/oauth2/api/user",
        logout: "https://bbhj.airdb.io/release/oauth2/api/logout"
    },
    type: "header",
    separator: "/"
};

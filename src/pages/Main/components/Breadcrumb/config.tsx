export default [
    {
        path: '/app/index',
        title: '首页'
    },
    {
        path: '/app/dataMgmt',
        title: '数据管理',
        children: [
            {
                path: '/app/dataMgmt/createProject',
                title: '项目创建'
            },
            {
                path: '/app/dataMgmt/admin',
                title: '项目管理员'
            }
        ]
    },
    {
        path: '/app/dataRetrieval',
        title: '数据检索',
        children: [
            {
                path: '/app/dataRetrieval/fullTextSearch',
                title: '全文搜索'
            },
        ]
    },
]
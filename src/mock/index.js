// 引用 Mock

import Mock from 'mockjs';

const baseUrl = '/api';

const id = 1;
export const list = Mock.mock(`${baseUrl}/project`, 'get', {
    data: {
        'data|10': [
            {
                'id|+1': 1,
                // 项目名称
                'projectName': '@ctitle',
                // 渠道
                'channel|1':[1,2,3],
                // 甲方
                'firstParty': '@cname',
                // 保密等级
                'secretLevel|1':[1,2,3],
                // 经费
                'funds|1-100':1,
                // 周期
                'cycle|1-22':1,
                // 状态
                'status|1':[1,2,3],
                // 项目描述
                'projectDescribe': '@cparagraph',
                // 项目成员 id集合
                'projectMember|1':[1,2,3,4,5,6,7,8,9,10],
                // 存储大小
                'storageSize|1-8':1,
                // 数据连接类型
                'dataConnectionType|1':[1,2,3],
                // 服务地址
                'serviceAddress':'@url',
            },
        ],
        result:30,
    },
    code: 200,
    message: 'ok',
});


export const channelLst = Mock.mock(`${baseUrl}/channel`, 'get', {
    data: [
        {
            'id': 1,
            'name': '渠道A',
            'des': '渠道A描述',
        },
        {
            'id': 2,
            'name': '渠道B',
            'des': '渠道B描述', 
        },
        {
            'id': 3,
            'name': '渠道C',
            'des': '渠道C描述',
        }
    ],
    code: 200,
    message: 'ok',
})


export const secretLevelLst = Mock.mock(`${baseUrl}/secretLevel`, 'get', {
    data: [
        {
            'id': 1,
            'name': '绝密',
            'des': '保密等级A描述',
        },
        {
            'id': 2,
            'name': '商业机密',
            'des': '保密等级B描述',
        },
        {
            'id': 3,
            'name': '秘密',
            'des': '保密等级C描述',
        },
    ],
    code: 200,
    message: 'ok'
})


export const statusLst = Mock.mock(`${baseUrl}/status`, 'get', {
    data: [
        {
            'id': 1,
            'name': '未开始',
            'des': '进行中描述',
        },
        {
            'id': 2,
            'name': '进行中',
            'des': '进行中描述', 
        },
        {
            'id': 3,
            'name': '已结束',
            'des': '已结束描述', 
        }
    ],
    code: 200,
    message: 'ok'
})

export const linkTypeList = Mock.mock(`${baseUrl}/linkType`, 'get', {
    data: [
        {
            'id': 1,
            'name': '软链接',
            'des': '软链接描述',
        },
        {
            'id': 2,
            'name': '硬链接',
            'des': '硬链接描述', 
        },
    ],
    code: 200,
    message: 'ok'
})


export const add = Mock.mock(`${baseUrl}/project`, 'post', {
    code: 200,
    message: 'ok',
});


export const edit = Mock.mock(`${baseUrl}/project/${id}`, 'put', {
    code: 200,
    message: 'ok',
});


export const del = Mock.mock(`${baseUrl}/project/${id}`, 'delete', {
    code: 200,
    message: 'ok',
});

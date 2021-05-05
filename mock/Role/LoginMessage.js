const { PROXY_KEY } = process.env;

export default PROXY_KEY === 'Yapi'
  ? {
      'get /web/basicDataManage/loginMessage': {
        retCode: 'T200',
        retMsg: '操作成功',
        data: {
          data: {
            groupId: '4028338177f202f90177f7349cc4031c',
            groupName: '清能互联',
            id: '4028338177f202f90177f75a76dd035c',
            username: 'zhenghaojian',
            enable: 1,
            nickname: '清能互联-郑皓健',
            phoneno: '18814095679',
            roleList: [
              {
                id: '4028338177f202f90177f22116ca0003',
                role: 'ROLE_PROJECT',
                descpt: '项目单位权限说明：',
                category: '项目单位',
              },
              {
                id: '402881006dccf8a2016dccf8c98b0060',
                role: 'ROLE_ADMIN',
                descpt: '超级管理员权限说明：',
                category: '超级管理员',
              },
              {
                id: '4028338177f202f90177f224bbdb0071',
                role: 'ROLE_MANAGE',
                descpt: '管理单位权限说明：',
                category: '管理单位',
              },
              {
                id: '4028338177f202f90177f22551560072',
                role: 'ROLE_CONTROL',
                descpt: '调控中心权限说明：',
                category: '调控中心',
              },
              {
                id: '4028338177f202f90177f221f234003a',
                role: 'ROLE_APPLY',
                descpt: '申报单位权限说明：',
                category: '申报单位',
              },
            ],
          },
        },
      },
    }
  : {};

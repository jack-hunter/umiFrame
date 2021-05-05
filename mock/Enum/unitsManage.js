/*
 * @FilePath: \mss_frontend\mock\Enum\unitsManage.ts
 * @Author: hunter
 * @Date: 2021-04-12 16:02:45
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-28 10:51:46
 */

const { PROXY_KEY } = process.env;

export default PROXY_KEY === 'Yapi'
  ? {
      'get /web/basicDataManage/unitsManage': {
        retCode: 'T200',
        retMsg: '操作成功',
        data: {
          data: {
            datas: [
              { uid: '2010001', unitId: '2010001', name: '南宁供电局', type: 2, subType: 201 },
              { uid: '2010002', unitId: '2010002', name: '百色供电局', type: 2, subType: 201 },
              { uid: '2010003', unitId: '2010003', name: '桂林供电局', type: 2, subType: 201 },
              { uid: '2010004', unitId: '2010004', name: '柳州供电局', type: 2, subType: 201 },
              { uid: '2010005', unitId: '2010005', name: '贵港供电局', type: 2, subType: 201 },
              { uid: '2010006', unitId: '2010006', name: '崇左供电局', type: 2, subType: 201 },
              { uid: '2010007', unitId: '2010007', name: '梧州供电局', type: 2, subType: 201 },
              { uid: '2010008', unitId: '2010008', name: '钦州供电局', type: 2, subType: 201 },
              { uid: '2010009', unitId: '2010009', name: '河池供电局', type: 2, subType: 201 },
              { uid: '2010010', unitId: '2010010', name: '玉林供电局', type: 2, subType: 201 },
              { uid: '2010011', unitId: '2010011', name: '来宾供电局', type: 2, subType: 201 },
              { uid: '2010012', unitId: '2010012', name: '贺州供电局', type: 2, subType: 201 },
              { uid: '2010013', unitId: '2010013', name: '防城港供电局', type: 2, subType: 201 },
            ],
            publishUnitsList: [
              { uid: '2010001', unitId: '2010001', name: '南宁供电局', type: 2, subType: 201 },
              { uid: '2010002', unitId: '2010002', name: '百色供电局', type: 2, subType: 201 },
              { uid: '2010003', unitId: '2010003', name: '桂林供电局', type: 2, subType: 201 },
              { uid: '2010004', unitId: '2010004', name: '柳州供电局', type: 2, subType: 201 },
              { uid: '2010005', unitId: '2010005', name: '贵港供电局', type: 2, subType: 201 },
              { uid: '2010006', unitId: '2010006', name: '崇左供电局', type: 2, subType: 201 },
              { uid: '2010007', unitId: '2010007', name: '梧州供电局', type: 2, subType: 201 },
              { uid: '2010008', unitId: '2010008', name: '钦州供电局', type: 2, subType: 201 },
              { uid: '2010009', unitId: '2010009', name: '河池供电局', type: 2, subType: 201 },
              { uid: '2010010', unitId: '2010010', name: '玉林供电局', type: 2, subType: 201 },
              { uid: '2010011', unitId: '2010011', name: '来宾供电局', type: 2, subType: 201 },
              { uid: '2010012', unitId: '2010012', name: '贺州供电局', type: 2, subType: 201 },
              { uid: '2010013', unitId: '2010013', name: '防城港供电局', type: 2, subType: 201 },
            ],
            waringUnitsList: [],
            manageUnitsList: [],
          },
          unitsTypeEnum: [
            { text: '总调', id: 0 },
            { text: '中调', id: 1 },
            { text: '地市供电局', id: 2 },
            { text: '超高压', id: 3 },
            { text: '电厂', id: 4 },
            { text: '大用户', id: 5 },
            { text: '检修单位', id: 12 },
            { text: '建设单位', id: 13 },
            { text: '火电厂', id: 14 },
            { text: '水电厂', id: 15 },
            { text: '光伏电站', id: 16 },
            { text: '其他', id: 17 },
            { text: '供电公司', id: 18 },
            { text: '调度中心', id: 19 },
          ],
        },
      },
    }
  : {};

// 1.获取所有数据包信息接口
const data01 = [
  {
    id: 2,
    name: 'POI信息-2',
    type: 'XX',
    format: 'TXT',
    amount: '1000',
    sort: 2,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  {
    id: 1,
    name: 'POI信息',
    type: 'XX',
    format: 'TXT',
    amount: '1000288',
    sort: 1,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  {
    id: 3,
    name: '警情信息',
    type: 'JQ',
    format: 'CSV',
    amount: '5201',
    sort: 3,
    price: 3.99,
    detail: '主要包含北京的海淀区的警情数据信息',
    remark: '北京的海淀区的警情数据信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  }
]

// 2.根据类型及分页参数获取数据包列表
const data02 = [
  {
    id: 3,
    name: '警情信息',
    type: 'JQ',
    format: 'CSV',
    amount: '5201',
    sort: 3,
    price: 3.99,
    detail: '主要包含北京的海淀区的警情数据信息',
    remark: '北京的海淀区的警情数据信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  {
    id: 2,
    name: 'POI信息-2',
    type: 'XX',
    format: 'TXT',
    amount: '1000',
    sort: 2,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  {
    id: 1,
    name: 'POI信息',
    type: 'XX',
    format: 'TXT',
    amount: '1000288',
    sort: 1,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  }
]

// 3.根据名称获取数据包列表
const data03 = [
  {
    id: 3,
    name: '警情信息',
    type: 'JQ',
    format: 'CSV',
    amount: '5201',
    sort: 3,
    price: 3.99,
    detail: '主要包含北京的海淀区的警情数据信息',
    remark: '北京的海淀区的警情数据信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  {
    id: 2,
    name: 'POI信息-2',
    type: 'XX',
    format: 'TXT',
    amount: '1000',
    sort: 2,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  {
    id: 1,
    name: 'POI信息',
    type: 'XX',
    format: 'TXT',
    amount: '1000288',
    sort: 1,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  }
]

// 4.根据条件获取数据包列表
const data04 = [
  {
    id: 2,
    name: 'POI信息-2',
    type: 'XX',
    format: 'TXT',
    amount: '1000',
    sort: 2,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  {
    id: 1,
    name: 'POI信息',
    type: 'XX',
    format: 'TXT',
    amount: '1000288',
    sort: 1,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  }
]

// 5.获取数据包总条数
const data05 = 3

// 6.根据类型获取数据包数量
const data06 = 2

// 7.根据名称获取数据包数量
const data07 = 1

// 8.根据条件获取数据包条数
const data08 = 3

// 9.获取所有类型数据总条数
const data09 = [
  {
    type: 'XX',
    cnt: 2
  },
  {
    type: 'JQ',
    cnt: 1
  }
]

// 10.获取所有类型数据总条数
const data10 = [
  {
    id: 10010011,
    parentId: 1,
    name: '北京POI数据信息-01',
    amount: '53264',
    format: 'TXT',
    sort: 1,
    size: '53.12MB',
    url: '/dataset/typename/poi/北京POI-01.zip',
    imageUrl: '/dataset/typename/poi/poi-exapmle-01.jpg',
    detail: '北京POI数据信息-01',
    remark: '北京POI数据信息-01',
    downloadCnt: 0,
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606978445000,
    updateTime: 1606978448000
  },
  {
    id: 10010012,
    parentId: 1,
    name: '北京POI数据信息-02',
    amount: '1000',
    format: 'TXT',
    sort: 1,
    size: '1.12MB',
    url: '/dataset/typename/poi/北京POI-02.zip',
    imageUrl: '/dataset/typename/poi/poi-exapmle-02.jpg',
    detail: '北京POI数据信息-02',
    remark: '北京POI数据信息-02',
    downloadCnt: 12,
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606978445000,
    updateTime: 1606978448000
  },
  {
    id: 10010012,
    parentId: 1,
    name: '北京POI数据信息-02',
    amount: '1000',
    format: 'TXT',
    sort: 1,
    size: '1.12MB',
    url: '/dataset/typename/poi/北京POI-02.zip',
    imageUrl: '/dataset/typename/poi/poi-exapmle-02.jpg',
    detail: '北京POI数据信息-02',
    remark: '北京POI数据信息-02',
    downloadCnt: 12,
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606978445000,
    updateTime: 1606978448000
  }
]

// 11.根据数据包父ID获取数据包的所有信息，包括子数据包信息
const data11 = {
  dataPackageBase: {
    id: 1,
    name: 'POI信息',
    type: 'XX',
    format: 'TXT',
    amount: '1000288',
    sort: 1,
    price: 1.99,
    detail: '主要包含北京的地理位置坐标信息，精确到5m。',
    remark: '北京地址坐标信息',
    createPerson: 'admin',
    updatePerson: 'rhino',
    createTime: 1606838400000,
    updateTime: 1606838400000
  },
  dataPackageDetailList: [
    {
      id: 10010011,
      parentId: 1,
      name: '北京POI数据信息-01',
      amount: '53264',
      format: 'TXT',
      sort: 1,
      size: '53.12MB',
      url: 'http://10.45.150.181:8003/dataset/typename/poi/北京POI-01.zip',
      imageUrl: 'http://10.45.150.181:8003/dataset/typename/poi/poi-exapmle-01.jpg',
      detail: '北京POI数据信息-01',
      remark: '北京POI数据信息-01',
      downloadCnt: 0,
      createPerson: 'admin',
      updatePerson: 'rhino',
      createTime: 1606978445000,
      updateTime: 1606978448000
    },
    {
      id: 10010012,
      parentId: 1,
      name: '北京POI数据信息-02',
      amount: '1000',
      format: 'TXT',
      sort: 1,
      size: '1.12MB',
      url: 'http://10.45.150.181:8003/dataset/typename/poi/北京POI-02.zip',
      imageUrl: 'http://10.45.150.181:8003/dataset/typename/poi/poi-exapmle-02.jpg',
      detail: '北京POI数据信息-02',
      remark: '北京POI数据信息-02',
      downloadCnt: 12,
      createPerson: 'admin',
      updatePerson: 'rhino',
      createTime: 1606978445000,
      updateTime: 1606978448000
    }
  ]
}

export default {
  getAllDataPackages: () => {
    return data01
  },
  getDataPackagesByType: () => {
    return data02
  },
  getDataPackagesByName: () => {
    return data03
  },
  getDataPackagesByCondition: () => {
    return data04
  },
  getAllDataPackagesCount: () => {
    return data05
  },
  getDataPackagesCountByType: () => {
    return data06
  },
  getDataPackagesCountByName: () => {
    return data07
  },
  getDataPackagesCountByCondition: () => {
    return data08
  },
  getAllTypes: () => {
    return data09
  },
  getDataPackageDetailByParentId: () => {
    return data10
  },
  getDataPackageInfoById: () => {
    return data11
  }
}

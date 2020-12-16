// 1.获取所有数据包信息接口
const data01 = {
  errcode: '0',
  errmsg: 'success',
  data: {
    total: 3,
    rows: [
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
  }
}

// 2.根据类型及分页参数获取数据包列表
const data02 = {
  errcode: '0',
  errmsg: 'success',
  data: {
    total: 2,
    rows: [
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
  }
}

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
    name: 'POI信息-2c',
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
    name: 'POI信息c',
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
const data09 = {
  errcode: '0',
  errmsg: 'success',
  data: [
    {
      type: 'XX',
      cnt: 2
    },
    {
      type: 'JQ',
      cnt: 1
    }
  ]
}

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
  errcode: '0',
  errmsg: 'success',
  data: {
    dataPackageBase: {
      id: 1,
      name: 'POI信息',
      type: 'XX',
      format: 'TXT',
      amount: '1000288',
      imageUrl: 'http://10.45.150.181:8003/example.png',
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
        url: 'http://10.45.150.181:8003/qy_xiangao.txt',
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
        url: 'http://10.45.150.181:8003/qy_xiangao.txt',
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
}

// 12.获取所有类型及每个类型包含的能力个数
const data12 = {
  errcode: '400',
  errmsg: '数据请求响应成功',
  data: [
    {
      type: '全部',
      cnt: 22
    },
    {
      type: '自然语言处理',
      cnt: 11
    },
    {
      type: 'OCR识别',
      cnt: 6
    },
    {
      type: '语音识别',
      cnt: 2
    },
    {
      type: '外部数据接入',
      cnt: 3
    }
  ]
}

// 13.获取所有能力信息
const data13 = {
  errcode: '400',
  errmsg: '数据请求响应成功',
  data: {
    total: 22,
    rows: [
      {
        id: 10040301,
        functionId: 100403,
        type: '外部数据接入',
        subtype: null,
        name: '汉德数据接入',
        detail: '汉德数据接入',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '22',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10040201,
        functionId: 100402,
        type: '外部数据接入',
        subtype: null,
        name: '用友数据接入',
        detail: '用友数据接入',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '21',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10040101,
        functionId: 100401,
        type: '外部数据接入',
        subtype: null,
        name: '金蝶数据接入',
        detail: '金蝶数据接入',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '20',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10031101,
        functionId: 100311,
        type: '自然语言处理',
        subtype: null,
        name: '新闻摘要',
        detail: '新闻摘要',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '19',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10031001,
        functionId: 100310,
        type: '自然语言处理',
        subtype: null,
        name: '情感分析',
        detail: '通用版、新闻舆情、商品评论',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '18',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030901,
        functionId: 100309,
        type: '自然语言处理',
        subtype: null,
        name: '事件识别',
        detail: '警情文本案件识别、新闻事件识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '17',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030801,
        functionId: 100308,
        type: '自然语言处理',
        subtype: null,
        name: '关系识别',
        detail: '投资任职关系提取',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '16',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030701,
        functionId: 100307,
        type: '自然语言处理',
        subtype: null,
        name: '文本纠错',
        detail: '文本纠错（通用版）',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '15',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030601,
        functionId: 100306,
        type: '自然语言处理',
        subtype: null,
        name: '实体识别',
        detail: '警情文本实体识别、社交账号提取、政策条件提取（通用版）',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '14',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030501,
        functionId: 100305,
        type: '自然语言处理',
        subtype: null,
        name: '文本分类',
        detail: '新闻文章分类、短信分类、警情文本分类、涉诈短信识别与分类',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '13',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030401,
        functionId: 100304,
        type: '自然语言处理',
        subtype: null,
        name: '文本聚类',
        detail: '舆情事件发现',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '12',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030301,
        functionId: 100303,
        type: '自然语言处理',
        subtype: null,
        name: '短文本相似度',
        detail: '短文本相似度',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '11',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030201,
        functionId: 100302,
        type: '自然语言处理',
        subtype: null,
        name: '词向量表示',
        detail: '词向量表示',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '10',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030101,
        functionId: 100301,
        type: '自然语言处理',
        subtype: null,
        name: '分词、词性、词频、热词、新词分析',
        detail: '分词、词性、词频、热词、新词分析',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '9',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10020601,
        functionId: 100206,
        type: 'OCR识别',
        subtype: null,
        name: '医疗票据文字识别',
        detail: '医疗发票识别、医疗费用结算单识别、保险单识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '8',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10020501,
        functionId: 100205,
        type: 'OCR识别',
        subtype: null,
        name: '教育场景文字识别',
        detail: '试卷分析与识别、公式识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '7',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10020401,
        functionId: 100204,
        type: 'OCR识别',
        subtype: null,
        name: '财务票据文字识别',
        detail: '混贴票据识别、银行回单识别、增值税发票识别、定额发票识别、通用机打发票识别、火车票识别、出租车票识别、行程单识别、通用票据识别、银行汇票识别、银行支票识别、汽车票识别、通行费发票识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '6',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10020301,
        functionId: 100203,
        type: 'OCR识别',
        subtype: null,
        name: '卡证文字识别',
        detail: '身份证识别、银行卡识别、营业执照识别、护照识别、户口本识别、名片识别、出生医学证明识别、多卡证类别检测',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '5',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10020201,
        functionId: 100202,
        type: 'OCR识别',
        subtype: null,
        name: '汽车场景文字识别',
        detail: '行驶证识别、驾驶证识别、车牌识别、VIN码识别、机动车销售发票识别、车辆合格证识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '4',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10020101,
        functionId: 100201,
        type: 'OCR识别',
        subtype: null,
        name: '通用场景文字识别',
        detail: '包括通用文字识别、办公文档识别、网络图片文字识别、数字识别、手写文字识别、表格文字识别、二维码识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '3',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10010201,
        functionId: 100102,
        type: '语音识别',
        subtype: null,
        name: '语音自训练平台',
        detail: '语音自训练平台',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '2',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10010101,
        functionId: 100101,
        type: '语音识别',
        subtype: null,
        name: '音频文件转写',
        detail: '音频文件转写',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '1',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      }
    ]
  }
}

// 14.根据类型获取能力详情
const data14 = {
  errcode: '400',
  errmsg: '数据请求响应成功',
  data: {
    total: 6,
    rows: [
      {
        id: 10020601,
        functionId: 100206,
        type: 'OCR识别',
        subtype: null,
        name: '医疗票据文字识别',
        detail: '医疗发票识别、医疗费用结算单识别、保险单识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '8',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10020501,
        functionId: 100205,
        type: 'OCR识别',
        subtype: null,
        name: '教育场景文字识别',
        detail: '试卷分析与识别、公式识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '7',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      }
    ]
  }
}

// 15.根据条件获取能力详情
const data15 = {
  errcode: '400',
  errmsg: '数据请求响应成功',
  data: {
    total: 6,
    rows: [
      {
        id: 10030901,
        functionId: 100309,
        type: '自然语言处理',
        subtype: null,
        name: '事件识别',
        detail: '警情文本案件识别、新闻事件识别',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '17',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030701,
        functionId: 100307,
        type: '自然语言处理',
        subtype: null,
        name: '文本纠错',
        detail: '文本纠错（通用版）',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '15',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030601,
        functionId: 100306,
        type: '自然语言处理',
        subtype: null,
        name: '实体识别',
        detail: '警情文本实体识别、社交账号提取、政策条件提取（通用版）',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '14',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030501,
        functionId: 100305,
        type: '自然语言处理',
        subtype: null,
        name: '文本分类',
        detail: '新闻文章分类、短信分类、警情文本分类、涉诈短信识别与分类',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '13',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030401,
        functionId: 100304,
        type: '自然语言处理',
        subtype: null,
        name: '文本聚类',
        detail: '舆情事件发现',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '12',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      },
      {
        id: 10030301,
        functionId: 100303,
        type: '自然语言处理',
        subtype: null,
        name: '短文本相似度',
        detail: '短文本相似度',
        remark: null,
        originalPrice: '999.00',
        currentPrice: '0.00',
        useTime: '365',
        useTimeDesc: '一年无限制使用',
        iconUrl: 'http://10.45.150.181:8003//icon/function/音频文件转写.png',
        guideUrl: 'http://10.45.150.181:8003/null',
        sort: '11',
        extend: null,
        createPerson: null,
        updatePerson: null,
        createTime: null,
        updateTime: null
      }
    ]
  }
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
  },
  getAllFunctionTypes: () => {
    return data12
  },
  getAllFunctionDetails: () => {
    return data13
  },
  getFunctionDetailByType: () => {
    return data14
  },
  getFunctionDetailByCondition: () => {
    return data15
  }
}

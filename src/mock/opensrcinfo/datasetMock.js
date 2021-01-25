// 1.获取所有监控树方案接口
const data01 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    caseinfo: [
      /*{ id: '1', name: '监控方案1' },
      { id: '2', name: '监控方案2' },
      { id: '3', name: '监控方案3' },
      { id: '4', name: '监控方案4' }*/
    ]
  }
}

// 3.查询舆情详情信息列表接口
const data03 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    case_id: 'xxxxx',
    total: 1314,
    filter_total: 314,
    rows: [
      {
        id: 'xxxx',
        text_sentiment: '中性',
        title: '对目前行情把握不准确',
        sim_text_count: 2,
        content: '这里说新闻信息的摘要，很很长很很长很很长很，最多2行以省略号展示。。。。。不超过120字',
        important_events: ['重大事件1', '重大事件2', '重大事件3'],
        match_key_words: ['关键词1', '关键词2', '关键词3'],
        website_name: '新浪微博',
        publisher: '老黄看市',
        date: '2021-01-07 12:00:00'
      }]
  }
}

// 4.查询监控方案配置详情接口
const data04 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    name: '南京中新赛克科技有限公司监控方案',
    monitorwords: {
      company: ['南京中新赛克有限责任有限公司', '南京中新赛克'],
      staff: ['凌东胜', '王明意'],
      sub_company: ['南京中新赛克有限责任公司北京分公司', '南京中新赛克有限责任北京分公司'],
      industry: ['计算机软件'],
      technology: ['java', 'c++']
    },
    excludewords: {
      words: ['排除词1']
    },
    alarmmode: {
      words: ['冻结', '处罚'],
      mediawords: ['新浪微博'],
      author: ['李嘉诚']
    }
  }
}

export default {
  // 1.获取所有监控树方案接口
  getAllDataMonitorCase: () => {
    return data01
  },
  // 3.查询舆情详情信息列表接口
  getDataDetailByCondition: () => {
    return data03
  },
  // 4.查询监控方案配置详情接口
  getMonitorCase: () => {
    return data04
  }
}

import request from '@/utils/request'

// 1.获取所有监控树方案接口
export function getAllDataMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/getAllDataMonitorCase',
    method: 'post',
    data
  })
}

// 2.删除监控方案接口
export function delMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/delMonitorCase',
    method: 'post',
    data
  })
}
// 3.查询舆情详情信息列表接口
export function getDataDetailByCondition(data) {
  return request({
    url: 'osintelligence/dataset/getDataDetailByCondition',
    method: 'post',
    data
  })
}

// 4.查询监控方案配置详情接口
export function getMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/getMonitorCase',
    method: 'post',
    data
  })
}

// 5.保存监控方案配置接口
export function saveMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/saveMonitorCase',
    method: 'post',
    data
  })
}

// 6.爬虫启动接口
export function startSpider(data) {
  return request({
    url: 'osintelligence/spider/start',
    method: 'post',
    data
  })
}

// 5.获取公司全名接口
export function getCompanyFullName(data) {
  return request({
    url: 'osintelligence/dataset/getCompanyFullName',
    method: 'post',
    data
  })
}

// 6.根据公司名称获取公司信息人员与机构接口
export function getCompanySimpleInfoWithName(data) {
  return request({
    url: 'osintelligence/dataset/getCompanySimpleInfoWithName',
    method: 'post',
    data
  })
}

export default { getAllDataMonitorCase, delMonitorCase, getDataDetailByCondition, getMonitorCase, saveMonitorCase, startSpider, getCompanyFullName, getCompanySimpleInfoWithName }

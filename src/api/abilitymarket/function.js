import request from '@/utils/request'

// 1.获取所有类型及每个类型包含的能力个数
export function getAllFunctionTypes(params) {
  return request({
    url: 'market/function/getAllTypes',
    method: 'get',
    params
  })
}

// 2.获取所有能力信息
export function getAllFunctionDetails(params) {
  return request({
    url: 'market/function/getAllFunctionDetails',
    method: 'get',
    params
  })
}

// 3.根据类型获取能力详情
export function getFunctionDetailByType(params) {
  return request({
    url: 'market/function/getFunctionDetailByType',
    method: 'get',
    params
  })
}

// 4.根据条件获取能力详情
export function getFunctionDetailByCondition(params) {
  return request({
    url: 'market/function/getFunctionDetailByCondition',
    method: 'get',
    params
  })
}

// 5.根据条件获取能力信息
export function getAllTypesByCondition(params) {
  return request({
    url: 'market/function/getAllTypesByCondition',
    method: 'get',
    params
  })
}

// 获取授权码
export function getFuncCode(data) {
  return request({
    url: 'market/account/getFuncCode',
    method: 'post',
    data
  })
}

// 下载授权码
export function downloadFuncCode(data) {
  return request({
    url: 'market/account/downloadFuncCode',
    method: 'post',
    data
  })
}

export default { getAllFunctionTypes, getAllFunctionDetails, getFunctionDetailByType, getFunctionDetailByCondition, getAllTypesByCondition, getFuncCode, downloadFuncCode }

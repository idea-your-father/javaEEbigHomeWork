import request from '@/common/utils/request'
export function commonApi(api,postData) {
  if(postData==='') {
    return request(
      {
        url:'/'+api,
        method:'post'
      }
    )
  }else {
    return request({
      url:'/'+api,
      method:'post',
      data:postData
    })
  }
}

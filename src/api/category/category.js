import axios from 'axios'
export const categoryUtil = {
  request(parentId,sort){
    if(parentId==null) {
      parentId=''

    }
    return axios.get(`/category?parentId=${parentId}&sort=${sort}`)

  }
}

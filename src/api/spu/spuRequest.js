import axios from 'axios'
export const spuRequest={
  request(page,size,categoryId) {
    console.log(page+'|'+size+'sss'+categoryId)
    return axios.get(`spu/spu_info/category?page=${page}&size=${size}&categoryId=${categoryId}`)
  },
  fuzzySearch(categoryName,brandName,title,page,size) {
    console.log(page+'|'+size+'sss'+brandName)
    return axios.get(`spu/spu_info/_search?page=
    ${page}&size=${size}&categoryName=${categoryName}&brandName=${brandName}&title=${title}`)
  }
}

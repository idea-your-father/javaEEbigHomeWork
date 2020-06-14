import axios from 'axios'
import {logger} from '@/common/utils/PrintUtil'

export const webUtil = {
  showBrand(page, size) {
    if (page == null || size == null) {
      page = 1
      size = 5
    }

    return axios.get(`/brand/all?page=${page}&size=${size}`)

  },
  getTotalCount() {
    return axios.get('/brand/all/_count')
  },
  searchLike(page,size,name,letter) {
    if(name==''&&letter=='') {
      return this.showBrand(page,size)

    }

    return axios.get(`/brand?page=${page}&size=${size}&name=${name}&letter=${letter}`)
  }

}

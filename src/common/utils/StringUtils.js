import fa from "element-ui/src/locale/lang/fa";

export const StringUtils={
  isBlank(s) {
    if(s==undefined||s==null) {
      return true
    }
    if(s.replace(/(^\s*)|(\s*$)/g, "").length ==0) {
      return true
    }
    return  false
  },
  isAnyBlank(...s) {
    for(let i=0;i<s.length;++i) {
      if(this.isBlank(s[i])) {
        return true
      }
    }
    return false
  }
  ,
  isEmpty(s) {
    return s==null||s==undefined
  }
}

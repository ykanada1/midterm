function isLeapYear(a){
  if(a % 400 == 0 && a % 4 == !0){
    return true
  }else{
    if(a % 100 == 0){
      return false
    }
  }else{
    if(a % 4 == 0){
    return true
  }
}
}

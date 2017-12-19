const menu = {
  'home/index': {
    path: '/index',
    name: 'index'
  }
}

export const getRouteInfoByUrl = url => {
  for (let m in menu) {
    if (url === m) {
      return menu[m]
    }
  }
  return {
    path: '/404',
    name: '404'
  }
}

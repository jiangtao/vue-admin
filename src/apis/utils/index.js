import Vue from 'vue'
import router from '../../router/index'

const convertData = data => typeof data === 'string' ? JSON.parse(data) : data
const handleLogic = response => {
  Vue.loading(false)
  if (response.code == 0) {
    const data = convertData(response.data)
    if (data) {
      return Promise.resolve(data)
    }
    return Promise.reject({
      message: 'invalid format data'
    })
  } else if (response.code == -100) {
    Vue.alert({
      title: 'error',
      text: 'Login is timeout',
      hide: () => {
        router.replace('/login')
      }
    })
  } else {
    return Promise.reject(response)
  }
}

const parseData = data => {
  if (data && data instanceof window.FormData) {
    return data
  }
  return JSON.stringify(data)
}

export const post = (url, data, opts = {}) => {
  return Vue.http.post(url, parseData(data), opts).then(handleLogic)
}
export const get = (url, data, opts = {}) => {
  return Vue.http.get(url, Object.assign({}, {params: data}, opts)).then(handleLogic)
}

export const dateFormatter = (date, isAddZero) => {
  date = date ? new Date(date) : new Date()
  let formatter = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    ms: date.getMilliseconds(),
    s: +date
  }
  isAddZero && Object.keys(formatter).forEach(k => {
    let n = formatter[k]
    formatter[k] = String(n).length == 1 ? `0${n}` : n
  })
  return formatter
}

export const query2str = (opts, href) => {
  let url = []
  for (let i in opts) {
    url.push(`${i}=${opts[i]}`)
  }
  if (url.length === 0) return ''
  return `${href}?${url.join('&')}`
}

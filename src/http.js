import axios from 'axios'
axios.interceptors.request.use()

axios.interceptors.response.use()

function checkStatus(response) {
  //做一些判断
  return response
}

function checkCode(res, errMsg) {
  //做一些判断
  return res.data
}

export default {
  POST(url, data, errMsg) {
    return axios.post(url, data, {
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  },
  GET(url, params, errMsg) {
    return axios.get(url, {
      params: {
        _t: +(new Date()),
        ...params
      },
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  },
  DELETE(url, errMsg) {
    return axios.delete(url, {
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  },
  PUT(url, data, errMsg) {
    return axios.put(url, data, {
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  }
}

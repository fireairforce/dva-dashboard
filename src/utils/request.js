// request.js
import axios from 'axios'
const axiosOption = (config) => ({
  timeout: 30000,
  header: config.token ? {'token': 'someway to get token'} : {},
  baseURL: 'http://154.8.214.49:8080/'  // set request base url
})

const fetch = options => {
  let {
    method = 'get',
    data,
    url,
    token = false,
  } = options

  const axiosOptions = axiosOption({
    token
  })
  console.log(axiosOptions);
  const myAxios = axios.create({axiosOptions})
  switch (method.toLowerCase()) {
    case 'get':
      return myAxios.get(url, {
        params: data
      })
    case 'delete':
      return myAxios.delete(url, {
        data: data
      })
    case 'post':
      return myAxios.post(url, data)
    case 'put':
      return myAxios.put(url, data)
    case 'patch':
      return myAxios.patch(url, data)
    case 'export':
      return myAxios.get(url, {
        params: data,
        responseType: 'blob'
      })
    default:
      return myAxios(options)
  }
}
const downFile = (blob, fileName) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, fileName)
  } else {
    let link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    link.target = '_blank'
    link.click()
    window.URL.revokeObjectURL(link.href)
  }
}
/**
 * Custom request based on axios
 * @param options See below examples
 * @returns {Promise.<*>}
 */
export default async options => {
  const res = await fetch(options)
  if (options.method === 'export') {
    downFile(res.data, options.filename)
    return true
  }
  const {data} = res
  return data
}
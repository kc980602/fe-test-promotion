import axios, { AxiosRequestConfig } from 'axios'

const createClient = (options: AxiosRequestConfig = {}) => {
  const instance = axios.create({
    timeout: 30000,
    ...options,
  })

  instance.interceptors.response.use(
    response => response.data,
    (err) => {
      console.error(err)
      throw err
    }
  )

  return instance
}

export const apiClient = createClient({
  baseURL: '/',
})

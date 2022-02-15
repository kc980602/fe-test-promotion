import { apiClient } from '~/utils/apiClient'
import { Category, Promotion } from '~/types/promotion.type'
import { AxiosRequestConfig } from 'axios'

export const getCategories = (): Promise<Category[]> =>
  apiClient.get(`data/categories.json`)

export const getPromotions = ({ id }: { id: number }, config ?: AxiosRequestConfig): Promise<Promotion[]> =>
  apiClient.get(`data/content-${id}.json`, config)


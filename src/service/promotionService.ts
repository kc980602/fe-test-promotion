import CategoriesData from 'public/data/categories.json'
import Content1 from 'public/data/content-1.json'
import Content2 from 'public/data/content-2.json'
import Content3 from 'public/data/content-3.json'
import { Category, Promotion } from '~/types/promotion.type'

const ContentDict: Record<number, Promotion[]> = {
  1: Content1,
  2: Content2,
  3: Content3
}

export const getCategories = (): Promise<Category[]> => {
  const categories: Category[] = CategoriesData

  return Promise.resolve(categories)
}

export const getPromotions = ({ id }: { id: number }): Promise<Promotion[]> => {
  const promotions: Promotion[] = ContentDict[id]

  return Promise.resolve(promotions)
}


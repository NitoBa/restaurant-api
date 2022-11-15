import { Category } from '../entities/category'

export interface ICategoryRepository {
  create(name: string, iconPath: string): Promise<void>
  listAll(): Promise<Category[]>
}

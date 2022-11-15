import { prisma } from '../../../../../infra/database/prisma/prismaService'
import { Category } from '../../domain/entities/category'
import { ICategoryRepository } from '../../domain/repositories/ICategoryRepository'

export class CategoryRepositoryPrisma implements ICategoryRepository {
  async create(name: string, iconPath: string): Promise<void> {
    await prisma.category.create({ data: { name, iconPath } })
  }

  async listAll(): Promise<Category[]> {
    return await prisma.category.findMany()
  }
}

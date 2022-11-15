import { MissingArgumentsError } from '../errors/missingArguments'
import { ICategoryRepository } from '../repositories/ICategoryRepository'

type CreateCategoryData = {
  name: string
  iconPath: string
}

export class CreateCategory {
  constructor(private readonly repository: ICategoryRepository) {}

  async execute({ name, iconPath }: CreateCategoryData) {
    if (!name || !iconPath) {
      throw new MissingArgumentsError('Name and iconPath is required fields!')
    }

    await this.repository.create(name, iconPath)
  }
}

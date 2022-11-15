import { ICategoryRepository } from '../repositories/ICategoryRepository'

export class ListAllCategories {
  constructor(private readonly repository: ICategoryRepository) {}

  async execute() {
    return await this.repository.listAll()
  }
}

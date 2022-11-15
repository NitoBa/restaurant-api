import {
  IController,
  IResponse,
  Status,
} from '../../../../infra/interfaces/reqResController'
import { ListAllCategories } from '../domain/useCases/listAllCategories'

export class ListAllCategoryController implements IController {
  constructor(private readonly usecase: ListAllCategories) {}

  async handle(): Promise<IResponse> {
    try {
      const categories = await this.usecase.execute()
      return {
        body: categories,
      }
    } catch (error) {
      return { status: Status.InternalServerError }
    }
  }
}

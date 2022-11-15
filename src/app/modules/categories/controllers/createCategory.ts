import {
  IController,
  IResponse,
  Status,
} from '../../../../infra/interfaces/reqResController'
import { MissingArgumentsError } from '../domain/errors/missingArguments'
import { CreateCategory } from '../domain/useCases/createCategory'

type RequestData = {
  body: {
    name: string
    iconPath: string
  }
}

export class CreateCategoryController implements IController {
  constructor(private readonly usecase: CreateCategory) {}

  async handle(req: RequestData): Promise<IResponse> {
    try {
      await this.usecase.execute(req.body)
      return {
        status: Status.Created,
      }
    } catch (error) {
      if (error instanceof MissingArgumentsError) {
        return {
          body: { message: error.message },
          status: Status.BadRequest,
        }
      }

      return { status: Status.InternalServerError }
    }
  }
}

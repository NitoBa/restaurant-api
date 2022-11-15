import { Router } from 'express'
import { CreateCategoryController } from '../../../../app/modules/categories/controllers/createCategory'
import { ListAllCategoryController } from '../../../../app/modules/categories/controllers/listAllCategories'
import { CreateCategory } from '../../../../app/modules/categories/domain/useCases/createCategory'
import { ListAllCategories } from '../../../../app/modules/categories/domain/useCases/listAllCategories'
import { CategoryRepositoryPrisma } from '../../../../app/modules/categories/infra/repositories/categoryRepositoryPrisma'
import { controllerAdapter } from '../adapters/controllerAdapter'

export const categoryRouter = Router()

// # Repositories
const repository = new CategoryRepositoryPrisma()

// # Usecases
const createCategory = new CreateCategory(repository)
const listAllCategories = new ListAllCategories(repository)

// # Controllers
const createCategoryController = controllerAdapter(
  new CreateCategoryController(createCategory),
)
const listAllCategoryController = controllerAdapter(
  new ListAllCategoryController(listAllCategories),
)

categoryRouter.post('/', createCategoryController)
categoryRouter.get('/', listAllCategoryController)

import { Request, Response } from 'express'
import { IController } from '../../../interfaces/reqResController'

export function controllerAdapter(controller: IController) {
  return async (req: Request, res: Response) => {
    const response = await controller.handle(req)

    if (response) {
      return res.status(response.status ?? 200).json(response.body)
    } else {
      return res.send()
    }
  }
}

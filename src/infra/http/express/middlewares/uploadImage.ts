import { Request, Response, NextFunction } from 'express'
import { upload } from '../../../storage/upload/multer'

export function uploadImage(req: Request, res: Response, next: NextFunction) {
  return upload.single('file')(req, res, () => {
    next()
  })
}

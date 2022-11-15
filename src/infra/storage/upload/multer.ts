import multer from 'multer'
import { resolve } from 'node:path'

export const upload = multer({
  storage: multer.diskStorage({
    filename(_, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
    destination: (_, __, callback) => {
      callback(null, resolve(__dirname, '..', '..', '..', '..', 'uploads'))
    },
  }),
})

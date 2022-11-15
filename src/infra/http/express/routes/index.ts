import { Router } from 'express'
import { uploadImage } from '../middlewares/uploadImage'

export const router = Router()

router.post('/', uploadImage, (req, res) => {
  res.json({ ok: true })
})

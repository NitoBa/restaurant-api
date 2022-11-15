import express from 'express'
import { resolve } from 'node:path'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(
  '/images',
  express.static(resolve(__dirname, '..', '..', '..', '..', 'uploads')),
)
app.use(router)

app.listen(3333, () => console.log('Server is listening on 3333'))

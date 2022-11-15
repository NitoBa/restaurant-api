import { PrismaClient } from '@prisma/client'

class Prisma extends PrismaClient {
  constructor() {
    super()
  }
}

export const prisma = new Prisma()

import { PrismaClient } from '@prisma/client'
import { CATEGORIES } from './categories'

const prisma = new PrismaClient()


function seed() {
  Promise.all(CATEGORIES.map((n) => prisma.category.create(
    { data: { name: n.name}, include: { subCategories: true } 
  })))
  .then(() => Promise.all(CATEGORIES.map((n) => Promise.all(n.subcategories.map((s) => prisma.subCategory.create(
    { data: { name: s.name, categoryName: n.name } }
  ))))).then(() => console.log('[SEED] Created category records')))
  .catch(e => console.error('[SEED] Failed to create category records', e))
}

seed();
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const run = async () => {
  //wrapper function
//salt when we are making a hash, salt makes it unqiue. 
  const salt = bcrypt.genSaltSync()
  
  const user = await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      email: 'user@test.com',
      password: bcrypt.hashSync('password', salt),
      user_name: 'Scott',
    },
  })

}

run()
.catch((e) => {
    console.error(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})
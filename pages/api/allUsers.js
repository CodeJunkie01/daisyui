import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main() {
    
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    prisma.$disconnect;
  
    return allUsers;
  }

export default async function handler(req, res) {
    const users = await main().catch((e)=> {
        throw e
    })
    
    return res.status(200).json(users);
  }






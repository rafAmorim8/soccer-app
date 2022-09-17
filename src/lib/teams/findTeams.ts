import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getTeams(){
  const teams = await prisma.teams.findMany();

  return teams;
}
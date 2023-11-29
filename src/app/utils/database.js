import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectToDB = async () => {
  try {
    // You might not need to explicitly connect to Prisma as it manages connections automatically
    // But you can place your connection logic here if needed
    console.log('Prisma connected');
  } catch (error) {
    console.error('Error connecting to Prisma:', error);
  }
};

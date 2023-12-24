"use server";
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, status } = req.body;

  try {
    await prisma.user.update({
      where: { email },
      data: { status },
    });
    
    return res.status(200).json({ message: 'Status updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}

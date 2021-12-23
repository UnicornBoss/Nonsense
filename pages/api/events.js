import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  try {
    const allEvents = await prisma.events.findMany();

    return res.status(200).json({ allEvents });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

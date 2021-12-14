import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  try {
    const slug = req.query.slug.toString();
    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.views.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      });
      const total = newOrUpdatedViews.count.toString();

      return res.status(200).json({
        total
      });
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          slug
        }
      });

      console.log('views: ' + views);

      return res.status(200).json({ total: views.count.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

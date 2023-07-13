import prisma from "@/app/libs/prismadb";

export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('q')

  if (!q) return new Response('Invalid query', { status: 400 })

  const results = await prisma.listing.findMany({
       where: {
      OR: [
        {
          title: {
            contains: q,
            mode: 'insensitive',
          },
        },
        {
          category: {
            contains: q,
            mode: 'insensitive',
          },
        },
        {
          title: {
            contains: q.toLowerCase(),
            mode: 'insensitive',
          },
        },
        {
          category: {
            contains: q.toLowerCase(),
            mode: 'insensitive',
          },},
          
            {
        locationValue: {
          contains: q,
          mode: 'insensitive',
        },
      },
      {
        locationValue: {
          contains: q.toLowerCase(),
          mode: 'insensitive',
        },
        },
      ],
    },
  
    take: 15,
  });

  return new Response(JSON.stringify(results))
}
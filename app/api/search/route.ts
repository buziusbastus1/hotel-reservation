// import prisma from "@/app/libs/prismadb";

// export async function filterProductsAction(query: string) {
//   if (query.length === 0) return null;

//   const filteredProducts = await prisma.listing.findMany({
//     select: {
//       id: true,
//       title: true,
//       category: true,
//     },
//     where: {
//       title: {
//         contains: query,
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//     take: 10,
//   });

//   const categories = Array.from(
//     new Set(filteredProducts.map((product) => product.category))
//   );

//   const productsByCategory = categories.map((category) => ({
//     category,
//     products: filteredProducts.filter((product) => product.category === category),
//   }));

//   return productsByCategory;
// }

// export default prisma;
import prisma from "@/app/libs/prismadb";

export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('q')

  if (!q) return new Response('Invalid query', { status: 400 })

  const results = await prisma.listing.findMany({
    where: {
      title: {
        startsWith: q,
      },
    },
    include: {
      _count: true,
    },
    take: 5,
  })

  return new Response(JSON.stringify(results))
}
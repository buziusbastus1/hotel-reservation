import prisma from "@/app/libs/prismadb";

export async function getSearch(searchQuery: string) {
  try {
    const listings = await prisma.listing.findMany({
      where: {
        title: {
          contains: searchQuery,
          mode: "insensitive", // Case-insensitive search
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}

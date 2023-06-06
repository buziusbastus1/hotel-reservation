import  prisma  from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

interface IParams {
    listingId?: string;
}
export async function POST(request: Request, { params }: { params: IParams }) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error();
    }
    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
        throw new Error("invalid id");
    }

    let favoriteIds = [...(currentUser.favouriteIds || [])];

    favoriteIds.push(listingId);

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        },
    });
    return NextResponse.json(user);
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error()
    }

    const { listingId } = params

    if (!listingId || typeof listingId !== 'string') {
        throw new Error("invalid id");
    }

    let favoriteIds = [...(currentUser.favouriteIds || [])]

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    })
    return NextResponse.json(user)
}

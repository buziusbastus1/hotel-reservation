import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request,
) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const body = await request.json()

    const {
        listingId,
        StertDate,
        endDate,
        totalPrice
    } = body;

    if (!listingId || !StertDate || !endDate || !totalPrice) {
        return NextResponse.error
    }
    const listingAndReservation = await prisma.listing.update({
        where: {
            id: listingId
        },
        data: {
            reservations: {
                create: {
                    userId: currentUser.id,
                    StertDate,
                    endDate,
                    totalPrice,
                }
            }
        }
    })
    return NextResponse.json(listingAndReservation)
}
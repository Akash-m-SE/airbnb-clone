import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

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
    throw new Error("Invalid Id");
  }

  //   creating an array of favorite ids by spreading the already existing favorite ids and adding the new one
  let favorideIds = [...(currentUser.favoriteIds || [])];
  favorideIds.push(listingId);

  //   updating the user in the database with the updated favorite id listing
  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: favorideIds,
    },
  });

  return NextResponse.json(user);
}

// delete function to delete listing
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid Id");
  }

  let favorideIds = [...(currentUser.favoriteIds || [])];

  //filtering the ids which does not matches with the listing id
  favorideIds = favorideIds.filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: favorideIds,
    },
  });

  return NextResponse.json(user);
}

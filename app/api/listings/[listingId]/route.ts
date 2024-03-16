import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface IParams {
  listingId?: string;
}

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

  const listing = await prisma.listing.findUnique({
    where: {
      id: listingId,
    },
  });

  if (!listing) {
    throw new Error("Invalid Listing Id");
  }

  // console.log("listing details = ", listing);

  const deleteListingImageFromCloudinary = await cloudinary.uploader.destroy(
    listing.publicId
  );

  if (!deleteListingImageFromCloudinary) {
    throw new Error("Failed to delete listing image from cloudinary");
  }

  const deleteListing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(deleteListing);
}

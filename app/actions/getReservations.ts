import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};
    // creating queries based on what we are receiving

    //   if we get listing id we are going to fetch all reservations for this single listing
    if (listingId) {
      query.listingId = listingId;
    }

    //   if we get user id we are going to fetch all the trips the user have
    if (userId) {
      query.userId = userId;
    }

    //   if we have author id we are going to fetch all the reservations that other users made on our listings
    if (authorId) {
      query.listing = { userId: authorId };
    }

    //   fetching the reservations from the database
    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}

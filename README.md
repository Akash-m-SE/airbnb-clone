# Airbnb Clone

<img src="https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/logo.png" alt="Logo" width="600" height="200">

**Airbnb Clone** is a web application built with Next.js 13, leveraging TypeScript, Zustand, Prisma, and NextAuth. The platform features advanced search and filtering capabilities, allowing users to easily find and book properties. Users can manage their listings, view trip history, and track favorites and reservations, all through a user-friendly interface. The project includes a CI/CD pipeline integrated with DockerHub, optimizing build and deployment processes.

## Features 🌟

- **User Authentication:** Secure user authentication and authorization using NextAuth, allowing users to manage their profiles and bookings.

- **Detailed Property Views:** Comprehensive property pages with detailed information and photos to aid in decision-making.

- **Property Listings:** Users can browse and search for properties with advanced filtering options to enhance their booking experience.

- **Property Management:** Owners can list and manage their properties, view trip history, and track favorites and reservations.

- **CI/CD Pipeline:** Streamlined build and deployment process with DockerHub integration, reducing deployment time and improving efficiency.

## Screenshots 📸

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/homepage.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/advancedsearchandfiltering.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/airbnbyourhome.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/propertydescription.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/propertydescription1.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/favourites.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/listings.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Airbnb+Clone/Airbnb+Clone+Github+Readme+Files/reservations.jpg)

## Deployment 🚀

You can access the live version of Airbnb Clone here: [Live Demo](https://cloudhavenstays-airbnb-clone.vercel.app/)

## Environment Setup 🛠️ {#environment-setup}

To run this project, you will need to add the following environment variables to your .env.local file (a template has been provided as .env.example)

You will need to obtain credentials from the respective services:

- **MongoDB:** Sign in at at [MongoDB](https://www.mongodb.com/) and create a MongoDB cluster to get your `DATABASE_URL`.

- **Cloudinary:** Sign in at [Cloudinary](https://cloudinary.com/) to get your `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET`.

Add the following env variables with their values to your `.env.local` file:

`DATABASE_URL` `NEXTAUTH_SECRET`

`GITHUB_ID` `GITHUB_SECRET`

`GOOGLE_CLIENT_ID` `GOOGLE_CLIENT_SECRET`

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` `CLOUDINARY_API_KEY` `CLOUDINARY_API_SECRET`

## Installation 🔧

**Via Docker**

**1.** Git Clone the Repository

**2.** Navigate to the directory where the repository was downloaded

**3.** Set up the [Environment Variables](#environment-setup)

**4.** Build the Docker Image

```
docker build -t airbnb-clone-image .
```

**5.** Run the Docker Container

```
docker run -d --name airbnb-clone-container -p 3000:3000 airbnb-clone-image
```

**6.** Open your application via port - http://localhost:3000

##

**Local Installation**

**1.** Git Clone the Repository

**2.** Navigate to the directory where the repository was downloaded

**3.** Set up the [Environment Variables](#environment-setup)

**4.** Install the Dependencies

```
npm install
```

**5.** Start the application in development mode

```
npm run dev
```

**6.** Open your application via port - http://localhost:3000

## Authors ✍️

- [Akash](https://github.com/Akash-m-SE)

## Tech Stack 💻

**Language:** TypeScript

**Frontend:** Next.js, TailwindCSS, React Hook Form, Zustand

**Backend:** Node.js

**Authentication:** NextAuth

**Database:** MongoDb, Prisma

**Cloud Storage:** Cloudinary

**Containerization:** Docker

**CI/CD:** GitHub Actions

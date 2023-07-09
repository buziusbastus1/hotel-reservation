/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
// use('test');

// db.getCollection('Listing').insertOne({
//   "title": "Cozy Apartment in the City",
//   "description": "A comfortable apartment located in the heart of the city.",
//   "imageSrc": "https://i.postimg.cc/ZRWdddTb/download.jpg",
//   "locationValue": "City Center",
//   "price": 150,
//   "roomCount": 2,
//   "bathroomCount": 3,
//   "category": "Beach",
//   "createdAt": ISODate("2023-03-29T06:53:20.077Z"),
//   "guestCount": 3,
//   "userId": ObjectId("6484ed9633c0534806b9ba1a")
// });
// db.getCollection('Listing').insertMany([
//   {
//     "title": "Cozy Apartment in the City",
//     "description": "A comfortable apartment located in the heart of the city.",
//     "imageSrc": "https://i.postimg.cc/ZRWdddTb/download.jpg",
//     "locationValue": "City Center",
//     "price": 150,
//     "roomCount": 2,
//     "bathroomCount": 3,
//     "category": "Beach",
//     "createdAt": ISODate("2023-03-29T06:53:20.077Z"),
//     "guestCount": 3,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//   {
//     "title": "Beachfront Hotel Paradise",
//     "description": "Experience the ultimate beachfront getaway in this luxurious hotel.",
//     "imageSrc": "https://i.postimg.cc/5tNpgp3V/DALL-E-2023-06-13-22-56-16-hotel-on-a-beach.png",
//     "locationValue": "Beachfront",
//     "price": 300,
//     "roomCount": 4,
//     "bathroomCount": 5,
//     "category": "Beach",
//     "createdAt": ISODate("2023-06-15T00:00:00.000Z"),
//     "guestCount": 6,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//   {
//     "title": "Luxury Beachside Villa",
//     "description": "Indulge in the elegance and charm of this beachside villa, offering breathtaking ocean views.",
//     "imageSrc": "https://i.postimg.cc/W17LCTPD/DALL-E-2023-06-14-23-56-11-hotel-by-the-beach-photo.png",
//     "locationValue": "Beachside",
//     "price": 500,
//     "roomCount": 6,
//     "bathroomCount": 7,
//     "category": "Beach",
//     "createdAt": ISODate("2023-06-15T00:00:00.000Z"),
//     "guestCount": 10,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//   {
//     "title": "Seaside Bungalow Retreat",
//     "description": "Escape to this charming seaside bungalow and enjoy tranquility by the beach.",
//     "imageSrc": "https://i.postimg.cc/bvCXYgrp/DALL-E-2023-06-14-23-56-13-hotel-by-the-beach-photo.png",
//     "locationValue": "Seaside",
//     "price": 200,
//     "roomCount": 3,
//     "bathroomCount": 2,
//     "category": "Beach",
//     "createdAt": ISODate("2023-06-15T00:00:00.000Z"),
//     "guestCount": 4,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//  {
//     "title": "Oceanfront Resort Getaway",
//     "description": "Indulge in the luxurious amenities and stunning ocean views at this oceanfront resort.",
//     "imageSrc": "https://i.postimg.cc/SKNFp3yg/DALL-E-2023-06-14-23-56-15-hotel-by-the-beach-photo.png",
//     "locationValue": "Oceanfront",
//     "price": 400,
//     "roomCount": 5,
//     "bathroomCount": 4,
//     "category": "Beach",
//     "createdAt": ISODate("2023-06-15T00:00:00.000Z"),
//     "guestCount": 8,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
// },
// {
//     "title": "Beachside Cabin Retreat",
//     "description": "Experience a cozy and peaceful retreat in this charming beachside cabin.",
//     "imageSrc": "https://i.postimg.cc/9Mr6D9wT/DALL-E-2023-06-14-23-56-15-hotel-by-the-beach-photo-1.png",
//     "locationValue": "Beachside",
//     "price": 250,
//     "roomCount": 2,
//     "bathroomCount": 1,
//     "category": "Beach",
//     "createdAt": ISODate("2023-06-15T00:00:00.000Z"),
//     "guestCount": 2,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
// }
// ]);
// db.getCollection('Listing').insertOne({
//   "title": "Cozy Apartment in the Mountains",
//   "description": "A comfortable apartment located in the heart of the city.",
//   "imageSrc": "https://i.postimg.cc/mkq9kpfQ/DALL-E-2023-06-19-18-04-39-hotel-in-the-mountains.png",
//   "locationValue": "City Center",
//   "price": 150,
//   "roomCount": 2,
//   "bathroomCount": 3,
//   "category": "Beach",
//   "createdAt": ISODate("2023-05-29T06:53:20.077Z"),
//   "guestuserIdCount": 3,
//   "": ObjectId("6484ed9633c0534806b9ba1a")
// });
db.getCollection('Listing').updateMany({}, { $set: { userId: "64ab1920c698a72eef733b0d" } })


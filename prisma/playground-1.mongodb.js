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
// db.getCollection('Listing').insertMany([
//   {
//     "title": "Cozy Cabin Retreat in the Mountains",
//     "description": "Escape to our cozy cabin retreat nestled in the breathtaking mountains. Experience the tranquility of nature, enjoy hiking trails with scenic views, and unwind in front of a warm fireplace. The perfect getaway for mountain lovers.",
//     "imageSrc": "https://i.postimg.cc/NGPmdF95/DALL-E-2023-06-19-18-04-40-hotel-in-the-mountains.png",
//     "locationValue": "Switzerland, Zermatt",
//     "price": 200,
//     "roomCount": 2,
//     "bathroomCount": 1,
//     "category": "Mountains",
//     "createdAt": ISODate("2023-03-29T06:53:20.077Z"),
//     "guestCount": 4,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//   {
//     "title": "Mountain Chalet with Panoramic Views",
//     "description": "Indulge in luxury at our mountain chalet with stunning panoramic views. Relax on the spacious deck, breathe in the fresh mountain air, and immerse yourself in the beauty of the surrounding nature. A true mountain paradise.",
//     "imageSrc": "https://i.postimg.cc/LX9LbZ3Z/DALL-E-2023-06-19-18-04-41-hotel-in-the-mountains.png",
//     "locationValue": "Canada, Banff",
//     "price": 300,
//     "roomCount": 3,
//     "bathroomCount": 2,
//     "category": "Mountains",
//     "createdAt": ISODate("2023-03-29T06:53:20.077Z"),
//     "guestCount": 6,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//   {
//     "title": "Rustic Mountain Lodge with Modern Comforts",
//     "description": "Experience the perfect blend of rustic charm and modern comforts at our mountain lodge. Surrounded by towering pines and majestic peaks, this lodge offers a cozy retreat for mountain enthusiasts seeking relaxation and adventure.",
//     "imageSrc": "https://i.postimg.cc/90zTW5Sm/DALL-E-2023-06-19-18-04-48-hotel-in-the-mountains-photo.png",
//     "locationValue": "United States, Aspen",
//     "price": 400,
//     "roomCount": 4,
//     "bathroomCount": 3,
//     "category": "Mountains",
//     "createdAt": ISODate("2023-03-29T06:53:20.077Z"),
//     "guestCount": 8,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//   {
//     "title": "Mountain View Resort and Spa",
//     "description": "Immerse yourself in tranquility and serenity at our mountain view resort and spa. Enjoy breathtaking views, rejuvenating spa treatments, and a range of outdoor activities. Experience the ultimate mountain retreat.",
//     "imageSrc": "https://i.postimg.cc/9FRTK2Z1/DALL-E-2023-06-19-18-04-49-hotel-in-the-mountains-photo.png",
//     "locationValue": "Austria, Tyrol",
//     "price": 500,
//     "roomCount": 5,
//     "bathroomCount": 4,
//     "category": "Mountains",
//     "createdAt": ISODate("2023-03-29T06:53:20.077Z"),
//     "guestCount": 10,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   },
//   {
//     "title": "Alpine Retreat with Luxury Accommodations",
//     "description": "Discover the epitome of luxury at our alpine retreat. With lavish accommodations, gourmet dining, and stunning alpine vistas, this retreat offers an unforgettable experience for those seeking the ultimate mountain getaway.",
//     "imageSrc": "https://i.postimg.cc/LsBjDVLp/DALL-E-2023-06-19-18-04-50-hotel-in-the-mountains-photo.png",
//     "locationValue": "France, Chamonix",
//     "price": 600,
//     "roomCount": 6,
//     "bathroomCount": 5,
//     "category": "Mountains",
//     "createdAt": ISODate("2023-03-29T06:53:20.077Z"),
//     "guestCount": 12,
//     "userId": ObjectId("6484ed9633c0534806b9ba1a")
//   }
// ]);

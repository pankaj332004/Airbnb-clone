require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = process.env.ATLASDB_URL;
console.log(MONGO_URL)

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
  ...obj,
  owner:'6986a696e279bf129ea59127',
  geometry: {
    type: "Point",
    coordinates: [77.1025, 28.7041]
  },
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
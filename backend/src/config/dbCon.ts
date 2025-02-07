import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

if (!mongo_uri) {
  throw new Error("Variable MONGO_URI no encontrada");
}

const dbCon = async () => {
  await mongoose.connect(mongo_uri);
};

export default dbCon;

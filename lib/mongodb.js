import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "MONGODB_URI is missing. Add it to .env.local."
  );
}

const options = {};

let mongoClient;

if (process.env.NODE_ENV === "development") {
  if (!global._tileMuseMongoClient) {
    global._tileMuseMongoClient = new MongoClient(
      uri,
      options
    );
  }

  mongoClient = global._tileMuseMongoClient;
} else {
  mongoClient = new MongoClient(
    uri,
    options
  );
}

const databaseName =
  process.env.MONGODB_DB || "tilemuse";

const db = mongoClient.db(databaseName);

export {
  mongoClient,
  db,
};
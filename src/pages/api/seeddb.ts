import {NextApiResponse} from "next";
import dbConnect from "../../db/dbcon/dbcon";
import User from "../../db/models/User";
import Home from "../../db/models/Home"

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */
import {ObjectId} from "mongodb";
import fs from "fs/promises";

/**
 * Converts the specified field.$oid in the Json to a mongo ObjectId.
 * @returns dataJson
 * @param dataJson - the data to use
 * @param field - the field to edit
 * @param arrayField - specify whether the field is an array or not
 * @returns
 */
function convertId(dataJson, field, arrayField: boolean) {
  if (arrayField == false) {
    for (let i = 0; i < dataJson.length; i++) {
      const newId = new ObjectId(dataJson[i][field]["$oid"]);
      dataJson[i][field] = newId;
    }
  } else {
    for (let i = 0; i < dataJson.length; i++) {
      for (let j = 0; j < dataJson[i][field].length; j++) {
        const newId = new ObjectId(dataJson[i][field][j]["$oid"]);
        dataJson[i][field][j] = newId;
        // console.log(dataJson[i][field][j]["$oid"]);
      }
    }
  }
  return dataJson;
}

export default async function handler(_, res: NextApiResponse) {
  try {
    const conn = await dbConnect();

    const results = await Home.countDocuments();
    /**
     * If existing records then delete the current collections
     */
    if (results) {
      console.log("Wiping seeded database");
      await conn.connections[0].db.dropDatabase();
    }

    /**
     * Retrieve data from local files.
     * N.b. Create them on mockaroo in the same order.
     */
    const userData = await fs.readFile("./src/db/seed/users.json", "utf8");

    const homeData = await fs.readFile("./src/db/seed/homes.json", "utf8");


    // const accountData = await fs.readFile(
    //   "./src/db/seed/accounts.json",
    //   "utf8"
    // );

    // const sessionData = await fs.readFile(
    //   "./src/db/seed/sessions.json",
    //   "utf8"
    // );

    /**
     * Set the reviews
     */
    console.log("----Editing homes----");
    let reviewJson = JSON.parse(homeData);
    reviewJson = convertId(reviewJson, "_id", false);
    reviewJson = convertId(reviewJson, "owner", false);

    // Insert
    await Home.insertMany(reviewJson);
    console.log("----Inserted homes----");

    /**
     * Set the users
     */
    console.log("----Editing users----");
    let userJson = JSON.parse(userData);
    userJson = convertId(userJson, "_id", false);
    // Insert
    await User.insertMany(userJson);
    console.log("----Inserted users----");

    /**
     * Set the recipes
     */


    res.json({success: true});
    return;

    res.status(500).json({
      success: false,
      err: "Found recipes did not match the expected amount.",
    });
  } catch (e) {
    console.error("error:", e);
    res.status(500).json({
      success: false,
      err: e,
    });
  }
}

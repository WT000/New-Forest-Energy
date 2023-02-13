import mongoose from "mongoose";

// Based on the next.js mongoose example (https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js)

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error(
        "MONGODB_URI has not been specified"
    )
}

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {conn: null, promise: null};
}

async function dbConnect() {
    // If a cached connection exists, return it
    if (cached.conn) {
        return cached.conn;
    }

    // If no promise currently exists, connect, cache and return mongoose connection
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            strictQuery: true,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
            return mongoose;
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn
}

// Export dbConnect, code only needs await dbConnect() before querying mongoose
export default dbConnect;

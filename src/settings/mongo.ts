import mongoose from 'mongoose'
require('dotenv').config()

export class Mongo {
    constructor() { this.connection() }

    connection() {
        /* Database configuration */
        const MONGO_URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.olpxk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
        mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database connected")).catch(e => console.log("Database error: ", e))
    }
}
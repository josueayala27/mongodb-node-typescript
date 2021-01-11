import express from 'express'
const bodyParser = require('body-parser');
import routes from './routes/index'
import mongoose from 'mongoose'
require('dotenv').config()
const cors = require('cors');

class Server {
    public app: express.Application
    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    config() {
        /* Enviroment data configuration */
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))

        /* Database configuration */
        const MONGO_URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.olpxk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
        mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database connected")).catch(e => console.log("Database error: ", e))

        /* CORS configuration */
        this.app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
    }

    routes() {
        /* Router configuration */
        this.app.use('/api', routes)
    }

    start() {
        /* Start my app */
        this.app.listen(this.app.get('port'), () => {
            console.log("Mi server esta corriendo", this.app.get('port'))
        })
    }
}
const server = new Server()
server.start()

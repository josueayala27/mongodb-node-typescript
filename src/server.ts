import express from 'express'
const bodyParser = require('body-parser');
import routes from './routes/index'
import { Mongo } from './settings/mongo'
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

        /* Mongo configuration */
        new Mongo()

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

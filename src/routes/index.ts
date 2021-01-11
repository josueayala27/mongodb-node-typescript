/* Configuration of all my routes */

import { Router } from 'express'
import auth from './auth'

class Routes {
    router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        /* Routes configuration */
        this.router.use('/auth', auth)
    }
}

const routes = new Routes()

export default routes.router
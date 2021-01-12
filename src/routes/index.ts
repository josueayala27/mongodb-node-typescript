/* Configuration of all my routes */

import { Router } from 'express'
import auth from './auth'
import quiz from './quiz'

class Routes {
    router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        /* Routes configuration */
        this.router.use('/auth', auth)
        this.router.use('/quiz', quiz)
    }
}

const routes = new Routes()

export default routes.router
import { Request, Response, Router } from 'express'

class AuthRoutes {
    router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    register(req: Request, res: Response) {
        res.json({ register: true })
    }

    login(req: Request, res: Response) {
        res.json({ login: true })
    }

    routes() {
        this.router.get('/login', this.login)
        this.router.get('/register', this.register)
    }
}

const authRoutes = new AuthRoutes()
export default authRoutes.router
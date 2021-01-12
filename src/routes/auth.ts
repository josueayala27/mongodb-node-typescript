import { Request, Response, Router } from 'express'
import { AuthController } from '../controllers/auth.controller'

class AuthRoutes {
    router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    async login(req: Request, res: Response) {
        let auth = new AuthController()
        const response = await auth.login(req.body)
        res.status(200).json({ response })
    }

    async create(req: Request, res: Response) {
        let auth = new AuthController()
        const response = await auth.register(req.body)
        res.status(200).json({ response })
    }

    async delete(req: Request, res: Response) {
        let auth = new AuthController()
        const response = await auth.deleteUser(req.params.id)
        res.status(200).json({ response })
    }

    async update(req: Request, res: Response) {
        let auth = new AuthController()
        const response = await auth.updateUser(req.params.id, req.body)
        res.status(200).json({ response })
    }

    routes() {
        this.router.post('/login', this.login)
        this.router.post('/create', this.create)
        this.router.delete('/delete/:id', this.delete)
        this.router.put('/update/:id', this.update)
    }
}

const authRoutes = new AuthRoutes()
export default authRoutes.router
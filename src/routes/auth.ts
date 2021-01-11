import { Request, Response, Router } from 'express'
import { AuthController } from '../controllers/auth.controller'

class AuthRoutes {
    router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    async search(req: Request, res: Response) {
        let auth = new AuthController()
        const response = await auth.searchUser(req.body.email)
        res.status(200).json({ response })
    }

    async create(req: Request, res: Response) {
        let auth = new AuthController()
        const response = await auth.insertUser(req.body)
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
        this.router.post('/search', this.search)
        this.router.post('/create', this.create)
        this.router.delete('/delete/:id', this.delete)
        this.router.put('/update/:id', this.update)
    }
}

const authRoutes = new AuthRoutes()
export default authRoutes.router
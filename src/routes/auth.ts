import { Request, Response, Router } from 'express'
import { HelloWorld } from '../controllers/HelloWorld/helloWorld'

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

    hello(req: Request, res: Response) {
        let hello = new HelloWorld()
        const response = hello.sayHi(req.body.greet)
        res.json({ response })
    }

    routes() {
        this.router.get('/login', this.login)
        this.router.get('/register', this.register)
        this.router.post('/hi', this.hello)
    }
}

const authRoutes = new AuthRoutes()
export default authRoutes.router
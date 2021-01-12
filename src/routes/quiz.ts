import { Request, Response, Router } from 'express'
import { QuizController } from '../controllers/quiz.controller'

class QuizRoutes {
    router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    async create(req: Request, res: Response) {
        let auth = new QuizController()
        const response = await auth.createQuiz(req.body)
        res.status(200).json({ response })
    }

    async code(req: Request, res: Response) {
        let auth = new QuizController()
        const response = await auth.code(req.params.code)
        res.status(200).json({ response })
    }

    routes() {
        this.router.post('/create', this.create)
        this.router.post('/code/:code', this.code)
    }
}

const authRoutes = new QuizRoutes()
export default authRoutes.router
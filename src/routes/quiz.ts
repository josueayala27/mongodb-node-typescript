import { Request, Response, Router } from 'express'
import { QuizController } from '../controllers/quiz.controller'
import { PartController } from '../controllers/part.controller'

class QuizRoutes {
    router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    async create(req: Request, res: Response) {
        let quiz = new QuizController()
        const response = await quiz.createQuiz(req.body)
        res.status(200).json({ response })
    }

    async code(req: Request, res: Response) {
        let quiz = new QuizController()
        const response = await quiz.code(req.params.code)
        res.status(200).json({ response })
    }

    async me(req: Request, res: Response) {
        let quiz = new QuizController()
        const response = await quiz.myQuiz(req.body.email)
        res.status(200).json({ response })
    }

    async update(req: Request, res: Response) {
        let quiz = new QuizController()
        const response = await quiz.updateQuiz(req.params._id, req.body)
        res.status(200).json({ response })
    }

    async registerForQuiz(req: Request, res: Response) {
        let part = new PartController()
        const response = await part.sendQuiz(req.body)
        res.status(200).json({ response })
    }

    async getPart(req: Request, res: Response) {
        let part = new PartController()
        const response = await part.getParticipants(req.params.code)
        res.status(200).json({ response })
    }

    routes() {
        /* Routes for quiz maintance */
        this.router.post('/create', this.create)
        this.router.post('/code/:code', this.code)
        this.router.post('/me', this.me)
        this.router.post('/update/:_id', this.update)

        /* Participant routes */
        this.router.post('/register', this.registerForQuiz)
        this.router.get('/participant/:code', this.getPart)
    }
}

const quizRoutes = new QuizRoutes()
export default quizRoutes.router
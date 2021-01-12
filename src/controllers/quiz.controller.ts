import Quiz from '../schema/quiz'
import { StringGenerate } from '../lib/string'

export class QuizController {

    constructor() {

    }

    async createQuiz(quizParams: any | {}) {
        let { members, quiz, title, author } = quizParams
        let instance = new StringGenerate()
        let code = instance.generate()
        let create = await new Quiz({ members, quiz, author, title, code })
        try {
            let quiz = await create.save()
            return { error: false, message: "Quiz created correctly", quiz }
        } catch (exeption) {
            return { error: true, exeption }
        }
    }

    async code(code: string | number) {
        let quiz: any = await Quiz.find({ code })
        /* Error validation */
        let error: boolean = quiz.length == 0 ? true : false
        let message: string = error ? "No quiz found" : quiz.title
        return { error, message, data: quiz }
    }

}
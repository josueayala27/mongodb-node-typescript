import { Schema, model } from 'mongoose'

const QuizSchema = new Schema({
    quiz: { type: Array, required: false },
    title: { type: String },
    members: { type: Array, required: false },
    code: { type: String },
    author: { type: String }
})

export default model('Quiz', QuizSchema)
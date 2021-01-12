import { Schema, model } from 'mongoose'

const PartSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    punctuation: {
        type: String,
        required: true
    },
    code: {
        type: String
    }
})

export default model('Participant', PartSchema)
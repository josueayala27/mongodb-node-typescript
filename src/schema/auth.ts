import { Schema, model } from 'mongoose'

new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    isCreated: {
        type: Date,
        default: Date.now
    },
})
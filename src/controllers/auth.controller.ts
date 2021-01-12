import Auth from '../schema/auth'
const bcrypt = require('bcrypt')

export class AuthController {
    constructor() {

    }

    /* Register user */
    async register(userInformation: any) {
        /* Encrypt password */
        let { email, password } = userInformation
        password = await bcrypt.hash(password, 10)
        let data = { email, password }
        /* return userInformation */
        let auth = new Auth(data)
        try {
            let isSave = await auth.save()
            return { error: false, message: "Successfully registered", isSave }
        } catch (response) {
            return { error: true, duplicate: true, message: "This email is already registered", response }
        }
    }

    async deleteUser(parameter: string) {
        let id = await Auth.deleteOne({ _id: parameter })
        let error = false
        id.deletedCount == 0 ? error = true : error = false
        return { error, id }
    }

    async updateUser(_id: {}, body: {}) {
        let filter = { _id }
        let update = body
        let user = await Auth.findOneAndUpdate(filter, update, { new: true })
        return { error: false, user }
    }

    async login(user: any) {
        let { email, password } = user
        let data: any = await Auth.findOne({ email })
        let validation: boolean = await bcrypt.compare(password, data.password)
        let message: string = validation ? "Correct fields" : "It seems that the username or password does not match any registry"
        return { error: !validation, message, data }
    }

}
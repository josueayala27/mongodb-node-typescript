import Auth from '../schema/auth'

export class AuthController {
    constructor() {

    }

    async insertUser(userInformation: {}) {
        let auth = new Auth(userInformation)
        try {
            let isSave = await auth.save()
            return { error: false, isSave }
        } catch (e) {
            return { error: true, e }
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

    async searchUser(email: {}) {
        let user = await Auth.find({ email })
        return { error: false, user }
    }

}
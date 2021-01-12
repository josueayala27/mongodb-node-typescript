import Participant from '../schema/participant'

export class PartController {
    init() {
        console.log("This is my participant controller")
    }

    async sendQuiz(body: any) {
        /* Register new participant */
        let reg = await new Participant(body)
        try {
            let participant = reg.save()
            return { error: false, message: "Your data was sent", participant }
        } catch (exeption) {
            return { error: true, exeption }
        }
    }

    async getParticipants(code: string) {
        let participants = await Participant.find({ code })
        let error: boolean = participants.length == 0 ? true : false
        let message: string = error ? "There are no participants yet" : "Participants were found"
        return { error, message, data: participants }
    }
}
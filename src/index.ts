import { Server } from './server'

class App {
    constructor() {
        this.init()
    }

    init() {
        new Server()
    }
}

//Runing server
new App()

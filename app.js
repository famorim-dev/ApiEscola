import express from 'express'

// import rotas
import router from './src/router/HomeRouter'

class App{
    constructor() {
        this.app = express()
        this.middleware()
        this.router()
    }
    middleware() {

    }
    router() {
        this.app.use('/home', router)
    }
}

export default new App().app
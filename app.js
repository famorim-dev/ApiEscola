import express from 'express'

//banco config
import dotenv from 'dotenv';
dotenv.config();

//models
import connection from './src/models/indexModel'

// import rotas
import router from './src/router/HomeRouter'


class App{
    constructor() {
        this.app = express()
        this.middleware()
        this.router()
        this.connectBanco()
    }
    middleware() {
        this.app.use(express.json())
    }
    router() {
        this.app.use('/home', router)
    }
    async connectBanco(){
        await connection.authenticate()
        console.log('sucesso ao conectar no banco')
    }cath(e){
        console.log('erro ao conectar no banco', e)
        process.exit(1)
    }
}

export default new App().app
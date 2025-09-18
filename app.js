import express from 'express'
import cors from 'cors'

//banco config
import dotenv from 'dotenv';
dotenv.config();

//models
import connection from './src/models/indexModel'

// import rotas
import AlunoRotas from './src/router/AlunoRouter'
import userRotas from './src/router/UserRoutes';
import authLoginRotas from './src/router/AuthLoginRouter';


class App{
    constructor() {
        this.app = express()
        this.middleware()
        this.router()
        this.connectBanco()
    }
    middleware() {
        this.app.use(express.json())
        this.app.use(cors())
    }
    router() {
        this.app.use('/aluno', AlunoRotas)
        this.app.use('/user', userRotas)
        this.app.use('/auth', authLoginRotas)
    }
    async connectBanco(){
        await connection.authenticate()
        console.log('sucesso ao conectar no banco')
    }cath(e) {
        console.log('erro ao conectar no banco', e)
        process.exit(1)
    }
}

export default new App().app
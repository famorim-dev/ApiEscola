import { Router } from "express"
const homeRotas = new Router()

// Import Controllers
import AlunoCadastroController from '../controllers/Home/AlunoCadastroController'

// Rotas Home
homeRotas.post('/aluno-cadastro', AlunoCadastroController.index)

export default homeRotas
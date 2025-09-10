import { Router } from "express"
const rotas = new Router()

// Import Controllers
import AlunoCadastroController from '../controllers/Home/AlunoCadastroController'

// Rotas Home
rotas.post('/aluno-cadastro', AlunoCadastroController.index)

export default rotas
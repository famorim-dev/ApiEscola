import { Router } from "express"
const rotas = new Router()

// Import Controllers
import AlunoCadastroController from '../controllers/Home/AlunoCadastroController'
import UsuarioCadastroController from "../controllers/Usuarios/UsuarioCadastroController"

// Rotas Home
rotas.post('/aluno-cadastro', AlunoCadastroController.index)
rotas.post('/usuario-cadastro', UsuarioCadastroController.index)

export default rotas
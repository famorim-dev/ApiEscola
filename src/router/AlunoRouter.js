import { Router } from "express"
const AlunoRotas = new Router()

// Middleware de Token de usuarios
import AuthUsuarioToken from "../middleware/AuthUsuarioToken"

// Import Controllers
import AlunoCadastroController from '../controllers/Alunos/AlunoCadastroController'

// Rotas Home
AlunoRotas.post('/cadastro',AuthUsuarioToken, AlunoCadastroController.index)

export default AlunoRotas
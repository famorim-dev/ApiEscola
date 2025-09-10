import { Router } from "express"
const userRotas = new Router()

// Import Controllers
import UsuarioCadastroController from "../controllers/Usuarios/UsuarioCadastroController"

// Rotas
userRotas.post('/cadastro', UsuarioCadastroController.create)

export default userRotas
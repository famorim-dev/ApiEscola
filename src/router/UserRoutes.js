import { Router } from "express"
const userRotas = new Router()

// Import Controllers
import UsuarioCadastroController from "../controllers/Usuarios/UsuarioCadastroController"
import UsuarioBuscarController from "../controllers/Usuarios/UsuarioBuscarController"

// Rotas
userRotas.post('/cadastro', UsuarioCadastroController.create)
userRotas.get('/buscar', UsuarioBuscarController.index)

export default userRotas
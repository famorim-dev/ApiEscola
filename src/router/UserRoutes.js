import { Router } from "express"
const userRotas = new Router()

// Import Controllers
import UsuarioCadastroController from "../controllers/Usuarios/UsuarioCadastroController"
import UsuarioBuscarController from "../controllers/Usuarios/UsuarioBuscarController"
import UsuarioBuscarIdController from "../controllers/Usuarios/UsuarioBuscarIdController"

// Rotas
userRotas.post('/cadastro', UsuarioCadastroController.create)
userRotas.get('/buscar', UsuarioBuscarController.index)
userRotas.get('/buscar/:id', UsuarioBuscarIdController.show)


export default userRotas
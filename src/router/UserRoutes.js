import { Router } from "express"
const userRotas = new Router()

// Import Controllers
import UsuarioCadastroController from "../controllers/Usuarios/UsuarioCadastroController"
import UsuarioBuscarController from "../controllers/Usuarios/UsuarioBuscarController"
import UsuarioBuscarIdController from "../controllers/Usuarios/UsuarioBuscarIdController"
import UsuarioEditarController from "../controllers/Usuarios/UsuarioEditarController"
import UsuarioDeletarController from "../controllers/Usuarios/UsuarioDeletarController"

// Rotas
userRotas.post('/cadastro', UsuarioCadastroController.create)
userRotas.get('/buscar', UsuarioBuscarController.index)
userRotas.get('/buscar/:id', UsuarioBuscarIdController.show)
userRotas.put('/editar/:id', UsuarioEditarController.update)
userRotas.delete('/deletar/:id', UsuarioDeletarController.delete)

export default userRotas
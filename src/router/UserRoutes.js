import { Router } from "express"
const userRotas = new Router()

// Middleware de Token de usuarios
import AuthUsuarioToken from "../middleware/AuthUsuarioToken"

// Import Controllers
import UsuarioCadastroController from "../controllers/Usuarios/UsuarioCadastroController"
import UsuarioBuscarController from "../controllers/Usuarios/UsuarioBuscarController"
import UsuarioBuscarIdController from "../controllers/Usuarios/UsuarioBuscarIdController"
import UsuarioEditarController from "../controllers/Usuarios/UsuarioEditarController"
import UsuarioDeletarController from "../controllers/Usuarios/UsuarioDeletarController"

// Rotas
userRotas.post('/cadastro',AuthUsuarioToken, UsuarioCadastroController.create)
userRotas.get('/buscar',AuthUsuarioToken, UsuarioBuscarController.index)
userRotas.get('/buscar/:id',AuthUsuarioToken, UsuarioBuscarIdController.show)
userRotas.put('/editar/:id',AuthUsuarioToken, UsuarioEditarController.update)
userRotas.delete('/deletar/:id',AuthUsuarioToken, UsuarioDeletarController.delete)

export default userRotas
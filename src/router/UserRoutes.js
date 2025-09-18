import { Router } from "express"
const userRotas = new Router()

// Middleware
import VerificaUsuarioLogado from "../middleware/AuthUsuarioToken" //Verifica se usuario está logado por token
import autorizarProprioUsuario from "../middleware/autorizarProprioUsuario" // Verifica se usuário é ele mesmo
// Import Controllers
import UsuarioCadastroController from "../controllers/Usuarios/UsuarioCadastroController"
import UsuarioEditarSenhaController from "../controllers/Usuarios/UsuarioEditarSenhaController"
import UsuarioDeletarController from "../controllers/Usuarios/UsuarioDeletarController"

// Rotas
userRotas.post('/cadastro', UsuarioCadastroController.create)
userRotas.put('/editar/:id', VerificaUsuarioLogado, autorizarProprioUsuario, UsuarioEditarSenhaController.update)
userRotas.delete('/deletar/:id', VerificaUsuarioLogado, autorizarProprioUsuario, UsuarioDeletarController.delete)

export default userRotas
import { Router } from "express"
const AlunoRotas = new Router()

// Middleware de Token de usuarios
import VerificaUsuarioLogado from "../middleware/AuthUsuarioToken"

// Import Controllers
import CadastroAlunoController from '../controllers/Alunos/CadastroAlunoController'
import EditarAlunoController from "../controllers/Alunos/EditarAlunoController"
import BuscarTodosAlunosController from "../controllers/Alunos/BuscarTodosAlunosController"

// Rotas Home
AlunoRotas.post('/cadastro',VerificaUsuarioLogado, CadastroAlunoController.create)
AlunoRotas.get('/editar/:id', VerificaUsuarioLogado, EditarAlunoController.update)
AlunoRotas.get('/buscar', VerificaUsuarioLogado, BuscarTodosAlunosController.index)



export default AlunoRotas
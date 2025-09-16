import { Router } from "express"
const AlunoRotas = new Router()

// Middleware de Token de usuarios
import VerificaUsuarioLogado from "../middleware/AuthUsuarioToken"

// Import Controllers
import CadastroAlunoController from '../controllers/Alunos/CadastroAlunoController'
import BuscarAlunoController from "../controllers/Alunos/BuscarAlunoController"

// Rotas Home
AlunoRotas.post('/cadastro',VerificaUsuarioLogado, CadastroAlunoController.create)
AlunoRotas.get('/buscar/:id', VerificaUsuarioLogado, BuscarAlunoController.index)


export default AlunoRotas
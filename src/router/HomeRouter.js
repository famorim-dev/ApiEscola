import { Router } from "express"
const rotas = new Router()

// Import Controllers
import HomeCadastroController from '../controllers/Home/HomeCadastroController'

// Rotas Home
rotas.get('/', HomeCadastroController.index)

export default rotas
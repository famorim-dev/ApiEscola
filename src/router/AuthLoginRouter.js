import { Router } from "express"
const authLoginRotas = new Router()

// Import Controllers
import LoginUsuarioTokenController from "../controllers/Auth/LoginUsuarioTokenController"

// Rotas Home
authLoginRotas.post('/login', LoginUsuarioTokenController.store)

export default authLoginRotas
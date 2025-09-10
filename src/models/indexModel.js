import { Sequelize } from "sequelize";
import Config from '../config/db.cjs'

// Import Models
import Alunos from "./AlunoModel";
import Usuarios from "./UsuarioModel"

const models = [Alunos, Usuarios]

const connection = new Sequelize(Config)

models.forEach((model) => model.init(connection))

export default connection
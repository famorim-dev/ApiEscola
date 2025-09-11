import Usuarios from "../../models/UsuarioModel"

class UsuarioCadastroController{
    async index(req, res) {
        try{
            const dadosUsuario = await Usuarios.findAll()
            res.status(200).json(dadosUsuario)
        }catch(e){
            res.status(400).json(e.errors.map((err) => err.message))
        }
    }
}

export default new UsuarioCadastroController()
import Usuarios from "../../models/UsuarioModel"

class UsuarioBuscarIdController{
    async show(req, res) {
        try{
            const id = req.params.id
            const dadosUsuario = await Usuarios.findByPk(id)
            res.status(201).json(dadosUsuario)
        }catch(e){
            res.status(400).json(e.errors.map((err) => err.message))
        }
    }
}

export default new UsuarioBuscarIdController()
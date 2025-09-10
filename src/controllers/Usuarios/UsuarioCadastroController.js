import Usuarios from "../../models/UsuarioModel"

class UsuarioCadastroController{
    async index(req, res) {
        try{
            const criarUsuario = {
            nome_usuario: req.body.nome_usuario,
            email_usuario: req.body.email_usuario,
            password_usuario: req.body.password_usuario,
            }
            const dadosUsuario = await Usuarios.create(criarUsuario)
            res.status(201).json(dadosUsuario)
        }catch(e){
            res.status(500).json(e)
        }
    }
}

export default new UsuarioCadastroController()
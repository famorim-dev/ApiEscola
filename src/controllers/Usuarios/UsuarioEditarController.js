import Usuarios from "../../models/UsuarioModel"

class UsuarioEditarController{
    async update(req, res) {
        try{
            const id = req.params.id
            const dadosUsuario = await Usuarios.findByPk(id)
            if (!dadosUsuario){
                return res.status(404).json({ erro: 'Usuário não encontrado.' })
            }
            
            const dados = req.body
            await dadosUsuario.update(dados)
            res.status(200).json(dadosUsuario)
        }catch(e){
            if (e.errors){
                res.status(404).json(e.errors.map((err) => err.message))
            }
        }
    }
}

export default new UsuarioEditarController()
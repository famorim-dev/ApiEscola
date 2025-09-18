import Usuarios from "../../models/UsuarioModel"

class UsuarioEditarSenhaController{
    async update(req, res) {
        try{
            const id = req.params.id
            const Usuario = await Usuarios.findByPk(id)
            if (!Usuario){
                return res.status(404).json({ erro: 'Usuário não encontrado.' })
            }
            
            const SenhaRecebida  = {password_usuario: req.body.password_usuario}
            await Usuario.update(SenhaRecebida)
            res.status(200).json({mensagem: 'Senha Editada com sucesso!'})
        }catch(e){
            if (e.errors){
                res.status(404).json(e.errors.map((err) => err.message))
            }
            return res.status(500).json({ erro: 'Erro interno do servidor.' })
        }
    }
}

export default new UsuarioEditarSenhaController()
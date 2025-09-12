import Usuarios from "../../models/UsuarioModel"

class UsuarioDeleteController{
    async delete(req, res) {
        try{
            const id = req.params.id
            const usuarioDeletado = await Usuarios.destroy({where: {id_usuario: id}})
            if(usuarioDeletado === 0 ){
                return res.status(404).json({ erro: 'ID do usuário não encontrado.' })
            }
            res.status(200).json({mensagem: 'usuário deletado com sucesso'})
        }catch(e){
            console.error('Erro ao deletar usuário:', e);
            return res.status(500).json({error: 'não foi possivel deletar esse usuário'})
        }
    }
}

export default new UsuarioDeleteController()
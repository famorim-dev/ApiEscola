import Alunos from "../../models/AlunoModel"

class EditarAlunoController{
    async update(req, res) {
        const id_aluno = req.params.id
        try{
            const dadosAluno = await Alunos.findByPk(id_aluno, {
                attributes: [
                'nome_aluno',
                'idade_aluno',
                'peso_aluno',
                'altura_aluno',
                'email_aluno'
            ]
            })
            if (!dadosAluno) {
                return res.status(404).json({ error: 'Aluno não encontrado.' });
            }

            const dadosRecebidos = req.body
            await dadosAluno.update(dadosRecebidos)
            res.status(200).json({mensagem: 'Usuario Editado com sucesso!'})
        }catch(e){
            res.status(500).json({error: 'não foi possivel buscar o aluno'})
        }
    }
}

export default new EditarAlunoController()
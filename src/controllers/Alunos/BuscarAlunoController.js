import Alunos from "../../models/AlunoModel"

class CadastroAlunoController{
    async index(req, res) {
        try{
            const id_aluno = req.params.id
            const dadosAluno = await Alunos.findByPk(id_aluno, {
                attributes: [
                'nome_aluno',
                'idade_aluno',
                'peso_aluno',
                'altura_aluno',
                'email_aluno',
                'created_at_aluno'
            ]
            })

            if(!dadosAluno){
                res.status(500).json({error: 'Esse aluno Não existe em nosso banco de dados!'})
            }
            
            res.status(201).json(dadosAluno)
        }catch(e){
            res.status(500).json({error: 'não foi possivel buscar o aluno'}, e)
        }
    }
}

export default new CadastroAlunoController()
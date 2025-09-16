import Alunos from "../../models/AlunoModel"

class BuscarTodosAlunosController{
    async index(req, res) {
        try{
            const dadosAlunos = await Alunos.findAll({
                attributes: [
                'nome_aluno',
                'idade_aluno',
                'peso_aluno',
                'altura_aluno',
                'email_aluno',
                'created_at_aluno'
            ]
            })

            res.status(200).json(dadosAlunos)
        }catch(e){
            res.status(500).json({error: 'Não foi possivel buscar a lista de alunos'}, e)
        }
    }
}

export default new BuscarTodosAlunosController()
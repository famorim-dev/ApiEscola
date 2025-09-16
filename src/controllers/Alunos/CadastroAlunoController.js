import Alunos from "../../models/AlunoModel"

class CadastroAlunoController{
    async create(req, res) {
        try{
            const criarAluno = {
            nome_aluno: req.body.nome_aluno,
            idade_aluno: req.body.idade_aluno,
            peso_aluno: req.body.peso_aluno,
            altura_aluno: req.body.altura_aluno,
            email_aluno: req.body.email_aluno,
            }
            const dadosAluno = await Alunos.create(criarAluno)
            res.status(201).json({message: 'Aluno cadastrado com sucesso!'})
        }catch(e){
            res.status(500).json({error: 'não foi possivel cadastrar o aluno'}, e)
        }
    }
}

export default new CadastroAlunoController()
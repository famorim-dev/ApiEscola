import Alunos from "../../models/AlunoModel"

class AlunoCadastroController{
    async index(req, res) {
        try{
            const criarAluno = {
            nome_aluno: req.body.nome_aluno,
            idade_aluno: req.body.idade_aluno,
            peso_aluno: req.body.peso_aluno,
            altura_aluno: req.body.altura_aluno,
            email_aluno: req.body.email_aluno,
            password_aluno: req.body.password_aluno,
            }
            const dadosAluno = await Alunos.create(criarAluno)
            res.status(201).json(dadosAluno)
        }catch(e){
            res.status(500).json(e)
        }
    }
}

export default new AlunoCadastroController()
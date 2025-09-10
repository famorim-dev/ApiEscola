import { Sequelize, Model } from "sequelize";

// Model Alunos
class Alunos extends Model{
    static init(sequelize){
        super.init({
            nome_aluno:{
                type: Sequelize.STRING,
            },
            idade_aluno: {
                type: Sequelize.INTEGER,
            },
            peso_aluno:{
                type: Sequelize.FLOAT,
            },
            altura_aluno:{
                type: Sequelize.FLOAT,
            },
            email_aluno:{
                type: Sequelize.STRING,
            },
            password_aluno:{
                type: Sequelize.STRING(100),
            },
        },{
            sequelize,
            tableName: 'alunos',
            createdAt: 'created_at_aluno',  // nome customizado
            updatedAt: 'updated_at_aluno',  // nome customizado
            timestamps: true, // garante que o Sequelize atualize os campos
        })
    }
}

export default Alunos
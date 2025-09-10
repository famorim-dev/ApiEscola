import { Sequelize, Model } from "sequelize";

// Model Alunos
class Alunos extends Model{
    static init(sequelize){
        super.init({
            id_aluno: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            nome_aluno:{
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: 'Nome do aluno é obrigatorio'
                    },
                    len:{
                        args: [3,100],
                        msg:'Nome do aluno deve ter mais de 3 caracteres'
                    }
                }
            },
            idade_aluno: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            peso_aluno:{
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            altura_aluno:{
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            email_aluno:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            password_aluno:{
                type: Sequelize.STRING(100),
                allowNull: false,
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
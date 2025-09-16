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
                validate: {
                    notEmpty:{
                        msg: 'idade é obrigatorio'
                    },
                    min: {
                        args: 1,
                        msg: 'Idade mínima é 1'
                    },
                    max: {
                        args: 150,
                        msg: 'Idade máxima é 150'
                    }
                }
            },
            peso_aluno:{
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: 'peso é obrigatorio'
                    },
                    min: {
                        args: 1,
                        msg: 'peso mínimo é 1'
                    },
                    max: {
                        args: 150,
                        msg: 'peso máximo é 150'
                    }
                }
            },
            altura_aluno:{
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: 'altura é obrigatorio'
                    },
                    min: {
                        args: 1,
                        msg: 'altura mínima é 1'
                    },
                    max: {
                        args: 150,
                        msg: 'altura máxima é 150'
                    }
                }
            },
            email_aluno:{
                type: Sequelize.STRING,
                allowNull: false,
                unique: {
                    msg: 'E-mail ja está em uso'
                },
                 validate: {
                    isEmail: {
                        msg: 'E-mail inválido'
                    }
                }
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
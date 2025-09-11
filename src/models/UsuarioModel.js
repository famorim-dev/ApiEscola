import { Sequelize, Model } from "sequelize";
import bcrypt from "bcryptjs";

// Model Alunos
class Usuarios extends Model{
    static init(sequelize){
        super.init({
            id_usuario: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            nome_usuario:{
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty:{
                        msg: 'Nome é obrigatorio'
                    },
                    len:{
                        args: [3,100],
                        msg:'Nome deve ter mais de 3 caracteres'
                    }
                }
            },
            email_usuario:{
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
            password_usuario_hash:{
                type: Sequelize.STRING(100),
                defaultValue: '',
                field: 'password_usuario',
                
            },
            password_usuario:{
                type: Sequelize.VIRTUAL,
                validate: {
                    notEmpty:{
                        msg: 'Senha é obrigatorio'
                    },
                    len:{
                        args: [6,50],
                        msg:'Senha deve ter mais de 6 caracteres'
                    }
                }
            },
        },{
            sequelize,
            tableName: 'usuarios',
            createdAt: 'created_at_usuario',  // nome customizado
            updatedAt: 'updated_at_usuario',  // nome customizado
            timestamps: true, // garante que o Sequelize atualize os campos
        })
        this.addHook('beforeSave', async user => {
            if (user.password_usuario){
                user.password_usuario_hash = await bcrypt.hash(user.password_usuario, 8)
            }
        })
    }
}

export default Usuarios
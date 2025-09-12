import Usuarios from "../../models/UsuarioModel"
import bcrypt from "bcryptjs"

class LoginUsuarioTokenController{
    async store(req, res) {
        try{
            const loginUsuario = {
            email_usuario: req.body.email_usuario,
            password_usuario: req.body.password_usuario,
            }
            if(!loginUsuario.email_usuario || !loginUsuario.password_usuario){
               return res.status(400).json('Complete os campos')
            }
            // Verificação de usuario
            const userEmailEnviado = await Usuarios.findOne({where : {email_usuario: loginUsuario.email_usuario}}) // optei por verificar por email, pois em model eu coloquei que email é UNICO
            if (!userEmailEnviado){
                return res.status(400).json('Usuário não existe')
            }
            // Verificando senha
            const senhaValida = await bcrypt.compare(loginUsuario.password_usuario, userEmailEnviado.password_usuario_hash)
            if(!senhaValida){
                return res.status(400).json('Senha inválida')
            }
            // Gerando Token
            

            res.status(201).json('ok')
        }catch(e){      
            res.status(400).json(e)
        }
    }
}

export default new LoginUsuarioTokenController()
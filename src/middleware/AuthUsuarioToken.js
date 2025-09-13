import jwt from 'jsonwebtoken'

export default (req, res, next) =>{
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({errors: 'token expirado ou inválido'})
    }
    const [, token] = authorization.split(' ')

    try{
        const tokenVerificado = jwt.verify(token, process.env.TOKEN_SECRET)
        const {id_usuario, email_usuario} = tokenVerificado
        req.id_usuario = id_usuario
        req.email_usuario = email_usuario
        return next()
    }catch(e){
        return res.status(400).json({errors: 'token expirado ou inválido'})
    }

}
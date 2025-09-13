// Verifica se usuario é ele mesmo para colocarmos em rotas especificas(ex: editar USUARIO)
export default function autorizarProprioUsuario(req, res, next) {
  const idDoToken = req.id_usuario
  const idDaRota = req.params.id
  console.log(typeof(idDoToken))
  console.log(typeof(idDaRota))
  if (idDoToken !== idDaRota) {
    return res.status(403).json({ erro: 'Você só pode acessar seus próprios dados.' })
  }

  return next()
}
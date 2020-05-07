const VerificaUsuárioLogado = (req,res,next) => {
    // se session do usuário não estiver setada, redireciona para login
    if(!req.session.usuario){
        res.redirect('/login?error=2')
    }


    //se chegou até aqui, a session está ok... go ahead!

    next();
}

module.exports = VerificaUsuárioLogado;
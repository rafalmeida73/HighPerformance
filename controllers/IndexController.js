const { Treinador, EquipeAdmin, Contato } = require('../models')
const bcrypt = require('bcrypt')


module.exports = {
    index: (req, res)=>{
		res.render("index");
    },
    sobre:async (req, res)=>{
      let equipe = await EquipeAdmin.findAll();
      console.log(equipe)
          
		  res.render("sobre", {equipe});
    },

    facaParte: async(req,res)=>{
      let {nome, email, file, message} = req.body;

  
      
      await Contato.create({nome, email,docs:file, mensagem:message});

      res.redirect('/sobre');
    },
    
    showCadastro: (req,res) => {
      res.render('cadastro');
    },

    storeCadastro: async(req, res) =>{
        let {name, email, cel, senha, repSenha} = req.body;
        // res.send(req.body)
        console.log('passei aqui => ' + name +' '+email+' '+cel+' '+senha+' '+repSenha)
        if (senha !== repSenha){
          return res.render('cadastro', {error: "As senhas devem ser iguais"});
          console.log('passei aqui error')
        }else{

        let hashPassword = bcrypt.hashSync(senha, 10);

        await Treinador.create({nome:name, email,telefone:cel, senha:hashPassword});
        res.redirect('/login');
        }
    },
}
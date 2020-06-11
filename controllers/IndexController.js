const { Treinador, EquipeAdmin, Contato } = require('../models')
const nodemailer = require('nodejs-nodemailer-outlook')
const path = require('path')
const bcrypt = require('bcrypt')


module.exports = {
    index: (req, res)=>{
		res.render("index");
    },
    sobre:async (req, res)=>{
      let equipe = await EquipeAdmin.findAll();
		  res.render("sobre", {equipe});		 
    },

    facaParte: async (req,res)=>{
      let {name, email, msg} = req.body
      nodemailer.sendEmail({
        auth: {
              user: 'highperformancedh@outlook.com',
              pass: 'senha123'
            },
            host :'smtp.office365.com',
            port : 587,
            secure : false,
            from: 'HIGH PERFORMANCE <highperformancedh@outlook.com>',
            to: 'ronycleber_pm@hotmail.com,pauloernestom@gmail.com,rafaelsantana7213@gmail.com,diogofcar@gmail.com',
            subject: 'Interessado em fazer parte do Time HIGH PERFORMANCE',
            html: `<h3>Dados do interessado em fazer parte do Time HIGH PERFORMANCE</h3><p><strong>Nome:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensagem:</strong> ${msg}</p>`,
            replyTo: 'highperformancedh@outlook.com',
            attachments: [
                  {   // utf-8 string as an attachment
                      filename: req.nomeAquivo,
                      path: path.join(__dirname, '../curriculos/'+ req.nomeAquivo) // stream this file
                  }
            ],
            onError: (e) => console.log(e),
            //onSuccess: (i) => console.log(i)        
      })
      req.flash('menssage', email)
      await Contato.create({nome:name, email,docs:req.nomeAquivo, mensagem:msg});
      res.redirect('/sobre');
      
    },

    depoimentos:async (req, res)=>{
		  res.render("depoimentos");
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
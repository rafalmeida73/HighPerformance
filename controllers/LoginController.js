const { sequelize, Treinador, Aluno, Aula, Presenca} = require('../models');
const bcrypt = require('bcrypt')

module.exports = {
    showLogin: (req, res)=>{
		res.render("login");
    },
    showCrie: (req,res) =>{
      res.render("crie");
    },
    showAlunos:(req,res) =>{

      res.render("alunos");
    },
    showTreino:(req,res)=>{
      res.render("treino");
    },
    showFinancas:(req,res)=>{
      res.render("financas");
    },
    login: async (req,res) =>{
      // Lendo as info do body
      const { email, senha } = req.body;
      
      // console.log(req.body)
      //Tentar carregar um usuário
      const user = await Treinador.findOne({ where: { email } });  


      // Verificar se existe usuario com email passado
      if(!user){
          res.redirect('/login?error=1');
      }

      // Validar a senha passada via post contra a guardada no banco
      if(!bcrypt.compareSync(senha, user.senha)){
          res.redirect('/login?error=1');
      }

      // Setar uma session com o usuario
      req.session.usuario = user;
      
      //Redirecionar o usuario para a rota home
      res.redirect('/home')

  },
  logout:(req,res) => {
        req.session.destroy();
        res.redirect('/login')
    }
}


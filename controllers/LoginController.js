const { Treinador, Aluno, Aula, Presenca, Financa } = require('../models');
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const multer = require('multer');
const { json, JSON } = require('sequelize');
const { formatDate, addDias } = require('../helpers/funcoes');
const helpers = require('../helpers/funcoes');


module.exports = {
    showLogin: (req, res) => {
        res.render("login");
    },
    //####################################################################################################################################
    showCrie: async(req, res) => {
        let user = req.session.usuario;
        

        let aulas = await Aula.findAndCountAll({
        //     attributes: ['data_aula'],
             group: ['data_aula'],            
             where: {
                 treinadores_id: user.id

             },
             raw:true
         })
         console.log(aulas)
         console.log('==================================================================')        

         let periodo = await helpers.periodo()
            // atualizando o array criado acima com as aulas cadastradas no banco EX: 16/6/2020 ---- 1 aula, 21/6/2020 ---- 2 aula
            for await (dia of periodo){                
                for(qtde of aulas.count){
                    if (dia.data === helpers.formatDate(qtde.data_aula) ){
                        console.log(dia.data,helpers.formatDate(qtde.data_aula), true) 
                        dia.qtde = await parseInt(qtde.count)
                    }
                }                   


    },

    showAlunos: async(req, res) => {        
        let user = req.session.usuario;
        
        let alunos = await Aluno.findAll({
            where:{
                treinadores_id: user.id
            }
        })
        console.log(alunos)
        res.render("alunos", { user, alunos });
    },

    showCadastroAluno: (req,res) => {
        res.render('cadastrarAlunos');
    },
    showNovoAluno: async (req,res) => {
        let treinadores_id = req.session.usuario.id;
        console.log('=================> ' + req.file)
        // console.log('=================> ' + req.file)
        //Capturar as info enviadas pelo usuário
       let {nome, email, telefone, meta } = req.body
       let img = `/img/${req.file.originalname}`;
       const resultado = await Aluno.create({
        img,
        nome,
        email,
        telefone,
        meta,
        treinadores_id
       })
    //    console.log(resultado)
		//Redirecionar o usuário para a lista de alunos
		res.redirect("/home/alunos")		
    },

    showNovaAula: async (req,res) => {
        let alunos = await Aluno.findAll();
        res.render('novaAula', { alunos });
    },  

    criarNovaAula: async (req,res) =>{
        let treinadores_id = req.session.usuario.id;
        let {nome, observacoes, alunos_id, data_aula, horario} = req.body;
 
      
        const resultado = await Aula.create({
            nome,
            observacoes,
            treinadores_id,
            alunos_id,
            data_aula,
            horario,
            status: 'a'
           })
        
        
        res.redirect("/home")	
    },
    showTreino: async (req, res) => {
        let user = req.session.usuario;


       let aluno = await Aluno.findOne({
           where:{
               id: req.params.id
           }
       })

        if (aluno) {
			res.render("treino", {aluno});
		} else {
			res.render("404")
		}
    },
    editarAlunos: async (req, res) => {
        let user = req.session.usuario;
        
        let aluno = await Aluno.findOne({
            where:{
                id: req.params.id
            }
        })

        if (aluno) {
			res.render("editarAluno", {aluno});
		} else {
			res.render("404")
		}

    },
    showUpdateAlunos: async (req, res) => {
        let user = req.session.usuario;
        let {nome, email, telefone, meta, metaFeita } = req.body
        let edicao = await Aluno.update({
            nome,
            email,
            telefone,
            meta,
            metaFeita,
            treinadores_id: user.id
        },{
            where: {
                id: req.params.id
            }
        });

        
		return res.redirect('/home/alunos');
    },
    showDeleteAlunos: async (req, res) => {3
        let resultado = await Aluno.destroy({
            where: {
                id: req.params.id
            }
        });
        
        return res.redirect('/home/alunos')
    },
    showFinancas: async (req, res) => {
        let user = req.session.usuario;

        
        let financas = await Financa.findAll(
            {
                where: {
                    treinadores_id: user.id
                }
            });
            
            // listar todos os meses
            let mes = [];
            
            for(financa of financas){
                mes.push(financa.mes)
            };
            
             // listar todos os meses
            let valor = [];
            for(financa of financas){
                valor.push(financa.valor)
            }

             //Total de dinheiro
        let total = await Financa.sum('valor')

        res.render("financas", {user,financas, mes, valor, total});
    },
    showCadastroFinancas:(req, res)=>{
        res.render('cadastroFinancas.ejs')
    },
    showNovoFinancas: async (req, res)=>{
        let treinadores_id = req.session.usuario.id;
       let {mes, valor} = req.body;
    //    console.log(mes);
    //     console.log(valor);

       const resultado = await Financa.create({
        mes,
        valor,
        treinadores_id
       })
    //    console.log(resultado)
		res.redirect("/home/financas")		
    },
    showDeleteFinancas: async (req, res)=>{
        let user = req.session.usuario;
        let {mes, valor} = req.body;
        let resultado = await Financa.destroy({
            where: {
                mes,
                treinadores_id: user.id
            }
        });
        
        return res.redirect('/home/financas')
    },
    showUpdateFinancas:  async(req,res)=>{
        let user = req.session.usuario;

        let {mes, valor} = req.body;

        let edicao = await Financa.update({
            valor,
        },{
            where: {
                mes,
                treinadores_id: user.id
            }
        });

        
		return res.redirect('/home/financas');

    },
    search: async(req, res) => {
        let user = req.session.usuario;
		let busca = req.query.q;
		if (busca) {
			let result = await Aluno.findAll(
                {
                    where: {
                        nome: {
                            [Op.substring]: busca
                        },
                        treinadores_id: user.id
                    }
                });
            
			return res.render('alunos', { alunos: result});
		} else {
			return res.redirect('/home/alunos');
		}
	},
    login: async(req, res) => {
        // Lendo as info do body
        const { email, senha } = req.body;

        // console.log(req.body)
        //Tentar carregar um usuário
        const user = await Treinador.findOne({ where: { email } });


        // Verificar se existe usuario com email passado
        if (!user) {
            req.flash('menssage', 'Email não cadastrado!')
            res.redirect('/login');
        }

        // Validar a senha passada via post contra a guardada no banco
        if (!bcrypt.compareSync(senha, user.senha)) {
            req.flash('menssage', 'Senha Inválida!')
            res.redirect('/login');
        }

        // Setar uma session com o usuario
        req.session.usuario = user;        

        //Redirecionar o usuario para a rota home
        res.redirect('/home')

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/login')
    }
}
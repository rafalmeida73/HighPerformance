const { Treinador, Aluno, Aula, Presenca, Financa } = require('../models');
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const multer = require('multer');
const { json } = require('sequelize');
const { formatDate, addDias } = require('../helpers/funcoes');
const helpers = require('../helpers/funcoes');


module.exports = {
    showLogin: (req, res) => {
        res.render("login");
    },
    showCrie: async(req, res) => {
        let user = req.session.usuario;
        let aulasArray = []
        let dt = new Date().toLocaleDateString().split('/').reverse().join('-')
        let dataInicio = new Date(dt).getTime()
        let dataFinal  = addDias(dataInicio,10)

        const aulas = await Aula.findAndCountAll({
            attributes: ['data_aula'],
            group: ['data_aula'],            
            where: {
                treinadores_id: user.id,
                data_aula:{[Op.between]: ['2020-06-01', '2020-06-24']}
            },            
            include: [{
                    model: Aluno,
                    as: 'aluno'
                },
            ]
        }).then(aulas => {
            // criando array com as datas do calendário conforme período dataInicio e dataFinal definidas acima
            while(new Date(dataInicio) <= new Date(dataFinal)) {
                
                aulasArray.push({data:dataInicio,qtde:0})
                dataInicio=addDias(dataInicio,1)
            }

            // atualizando o array criado acima com as aulas cadastradas no banco EX: 16/6/2020 ---- 1 aula, 21/6/2020 ---- 2 aula
            for(dia of aulasArray){
                for(qtde of aulas.count){
                    if (formatDate(dia.data) === formatDate(qtde.data_aula) ){
                        dia.qtde = qtde.count                            
                    }
                }                   
            }
            //console.log(aulasArray)
            //console.log('==================================================================')
            res.render("crie", { user, aulasArray});
        });

    },

    showAlunos: async(req, res) => {        
        let user = req.session.usuario;

        let alunos = await Aluno.findAll({
            where:{
                treinadores_id: user.id
            }
        })
        // console.log(alunos)

        res.render("alunos", { user, alunos });
    },

    showCadastroAluno: (req,res) => {
        res.render('cadastrarAlunos');
    },
    showNovoAluno: async (req,res) => {
        let treinadores_id = req.session.usuario.id;
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
    //    console.log(mes)
    //    console.log(valor)

       const resultado = await Financa.create({
        mes,
        valor,
        treinadores_id
       })
    
		res.redirect("/home/financas")		
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
    showUpdateFinancas:  async(req,res)=>{
        let user = req.session.usuario;

        let {mes, valor} = req.body;

        let edicao = await Financa.update({
            valor,
        },{
            where: {
                mes,
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
const { Treinador, Aluno, Aula, Presenca } = require('../models');
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const multer = require('multer')


module.exports = {
    showLogin: (req, res) => {
        res.render("login");
    },
    showCrie: async(req, res) => {
        let user = req.session.usuario;
        const aulas = await Aula.findAll({
            where: {
                treinadores_id: user.id
            },
            include: [{
                    model: Aluno,
                    as: 'aluno'
                },
            ]
        });

        let datas = await Aula.findAll()  

        res.render("crie", { user, aulas, datas });


    },
    showAlunos: async(req, res) => {        
        let user = req.session.usuario;
        
        let alunos = await Aluno.findAll()

        res.render("alunos", { user, alunos });
    },

    showCadastroAluno: (req,res) => {
        res.render('cadastrarAlunos');
    },
    showNovoAluno: async (req,res) => {
        console.log('=================> ' + req.file)
        //Capturar as info enviadas pelo usuário
       let {nome, email, telefone, meta } = req.body
       let img = `/img/${req.file.originalname}`;

       const resultado = await Aluno.create({
        img,
        nome,
        email,
        telefone,
        meta
       })
       //console.log(resultado)
		//Redirecionar o usuário para a lista de alunos
		res.redirect("/home/alunos")		
    },

    showNovaAula: async (req,res) => {
        let alunos = await Aluno.findAll();
        res.render('novaAula', { alunos });
    },  

    criarNovaAula: async (req,res) =>{
        let treinadores_id = req.session.usuario.id;
        let {nome, observacoes, aluno_id, data_aula, horario} = req.body;
        console.log(req.body);
        
        const resultado = await Aula.create({
            nome,
            observacoes,
            treinadores_id,
            aluno_id,
            data_aula,
            horario,
            status: 'a'
           })
        
        console.log(resultado)
        res.send(resultado)
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
        let {nome, email, telefone, meta, metaFeita } = req.body
        let edicao = await Aluno.update({
            nome,
            email,
            telefone,
            meta,
            metaFeita
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
    showFinancas: (req, res) => {
        let user = req.session.usuario;
        res.render("financas", { user });
    },
    search: async(req, res) => {
		let busca = req.query.q;
		if (busca) {
			let result = await Aluno.findAll(
                {
                    where: {
                        nome: {
                            [Op.substring]: busca
                        }
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
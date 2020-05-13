const { sequelize, Treinador, Aluno, Aula, Presenca } = require('../models');
const bcrypt = require('bcrypt')

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


        let datas = await Aula.findAll({
            where: {
                treinadores_id: user.id
            },
            group: ['data_aula'],
            attributes: ['data_aula', [sequelize.fn('COUNT', 'data_aula'), 'count']],
            raw: true,

        })



        console.log(aulas);


        res.render("crie", { user, aulas, datas });


    },
    showAlunos: (req, res) => {
        let user = req.session.usuario;

        res.render("alunos", { user });
    },
    showTreino: (req, res) => {
        let user = req.session.usuario;
        res.render("treino", { user });
    },
    showFinancas: (req, res) => {
        let user = req.session.usuario;
        res.render("financas", { user });
    },
    login: async(req, res) => {
        // Lendo as info do body
        const { email, senha } = req.body;

        // console.log(req.body)
        //Tentar carregar um usuário
        const user = await Treinador.findOne({ where: { email } });


        // Verificar se existe usuario com email passado
        if (!user) {
            res.redirect('/login?error=1');
        }

        // Validar a senha passada via post contra a guardada no banco
        if (!bcrypt.compareSync(senha, user.senha)) {
            res.redirect('/login?error=1');
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
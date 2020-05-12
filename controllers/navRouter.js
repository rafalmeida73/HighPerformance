module.exports = {
    showIndex: (req, res) => {
        res.render('index');
    },
    showSobre: (req, res) => {
        res.render('sobre');
    },
    showLogin: (req, res) => {
        res.render('login');
    },
    showCadastro: (req, res) => {
        res.render('cadastro');
    },
    showAlunos: (req, res) => {
        res.render('alunos');
    },
    showCrie: (req, res) => {
        res.render('crie');
    },
    showFinancas: (req, res) => {
        res.render('financas');
    },
    showCadAluno: (req, res) => {
        res.render('financas');
    },
    showEditarAluno: (req, res) => {
        res.render('treino');
    },
    showTreino: (req, res) => {
        res.render('treino');
    },
}
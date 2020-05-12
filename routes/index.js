var express = require('express');
var router = express.Router();

const navRouter = require('../controllers/navRouter')

/* GET home page. */
router.get('/', navRouter.showIndex);
router.get('/sobre', navRouter.showSobre);
router.post('/login', navRouter.showLogin);
router.post('/cadastro', navRouter.showCadastro);
router.get('/alunos', navRouter.showAlunos);
router.get('/crie', navRouter.showCrie);
router.get('/financas', navRouter.showFinancas);
router.get('/cadastroAluno', navRouter.showCadAluno);
router.get('/treino', navRouter.showTreino);
router.get('/editarAluno', navRouter.showEditarAluno);

module.exports = router;
var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/IndexController');
const LoginController = require('../controllers/LoginController');
const VerificaUsuárioLogado = require('../middlewares/VerificaUsuárioLogado');


/* GET home page. */
router.get('/', IndexController.index);
router.get('/sobre', IndexController.sobre);
router.get('/cadastro', IndexController.cadastro);

router.get('/home',VerificaUsuárioLogado, LoginController.showCrie);
router.get('/home/alunos',VerificaUsuárioLogado, LoginController.showAlunos);
router.get('/home/treino',VerificaUsuárioLogado, LoginController.showTreino);
router.get('/home/financas',VerificaUsuárioLogado, LoginController.showFinancas);
router.get('/login', LoginController.showLogin);
router.post('/login', LoginController.login);


module.exports = router;

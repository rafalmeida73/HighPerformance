var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
let storage = multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join('docs', 'enviados'));
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);

    }
});
let upload = multer({ storage: storage})


const IndexController = require('../controllers/IndexController');
const LoginController = require('../controllers/LoginController');
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');


/* GET home page. */
router.get('/', IndexController.index);
router.get('/sobre', IndexController.sobre);
router.get('/cadastro', IndexController.showCadastro);
router.get('/cadastrarAlunos', IndexController.showCadastroAluno);
router.post('/cadastro', IndexController.storeCadastro);
router.post('/sobre', IndexController.facaParte);

router.get('/home',VerificaUsuarioLogado, LoginController.showCrie);
router.get('/home/agenda',VerificaUsuarioLogado, LoginController.showCrie);
router.get('/home/alunos',VerificaUsuarioLogado, LoginController.showAlunos);
router.get('/home/treino',VerificaUsuarioLogado, LoginController.showTreino);
router.get('/home/financas',VerificaUsuarioLogado, LoginController.showFinancas);
router.get('/depoimento',VerificaUsuarioLogado, IndexController.depoimentos)
router.get('/login', LoginController.showLogin);
router.post('/login', LoginController.login);
router.get('/logout', LoginController.logout);

module.exports = router;

var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const methodOverride = require('method-override')

let storage = multer.diskStorage ({
    
    destination: (req, file, cb) =>{
        var regex = /image\//;
        console.log('===================> '+file.mimetype)
        console.log('===================> '+ regex.test(file.mimetype))                
        if ( regex.test(file.mimetype)) {
             cb(null, 'public/img');
        } else {
            cb(null, 'curriculos');
        }
            
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
        req.nomeAquivo = file.originalname        
   }
});
let upload =multer({ storage })
let uploadImg =multer({storage})


const IndexController = require('../controllers/IndexController');
const LoginController = require('../controllers/LoginController');
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');


/* GET home page. */
router.get('/', IndexController.index);
router.get('/sobre', IndexController.sobre);
router.get('/cadastro', IndexController.showCadastro);
router.post('/cadastro', IndexController.storeCadastro);
router.post('/sobre', upload.single('file'), IndexController.facaParte);

router.get('/home',VerificaUsuarioLogado, LoginController.showCrie);
router.get('/home/novaAula',VerificaUsuarioLogado, LoginController.showNovaAula);
router.post('/home/novaAula',VerificaUsuarioLogado, LoginController.criarNovaAula);
router.get('/home/agenda',VerificaUsuarioLogado, LoginController.showCrie);
router.get('/home/cadastrarAlunos', VerificaUsuarioLogado, LoginController.showCadastroAluno);

router.post('/home/cadastrarAlunos', VerificaUsuarioLogado, uploadImg.single('imgUser'), LoginController.showNovoAluno)
router.get('/home/alunos',VerificaUsuarioLogado, LoginController.showAlunos);
router.get('/home/alunos/editar/:id',VerificaUsuarioLogado, LoginController.editarAlunos);
router.put('/home/alunos/editar/:id',VerificaUsuarioLogado, LoginController.showUpdateAlunos);
router.delete('/home/alunos/deletar/:id',VerificaUsuarioLogado, LoginController.showDeleteAlunos);
router.get('/busca', VerificaUsuarioLogado, LoginController.search);
router.get('/home/treino/:id',VerificaUsuarioLogado, LoginController.showTreino);
router.get('/home/financas',VerificaUsuarioLogado, LoginController.showFinancas);
router.get('/depoimento',VerificaUsuarioLogado, IndexController.depoimentos)
router.post('/cadastrarDepoimento',VerificaUsuarioLogado, uploadImg.single('inputOpnion'), IndexController.showNovoDepoimento);
router.get('/login', LoginController.showLogin);
router.post('/login', LoginController.login);
router.get('/logout', LoginController.logout);

module.exports = router;

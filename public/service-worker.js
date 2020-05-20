const CACHE_NAME = 'sw-cache-example';
const toCache = [
  'js/calendario.js',       
  'js/carrousel.js',        
  'js/crie.js',
  'js/exportar.js',
  'js/finacas.js',
  'js/formCadastro.js',     
  'js/formCadastroAluno.js',
  'js/formEditarAluno.js',  
  'js/formLogin.js',        
  'js/formSobre.js',        
  'js/html2canvas.min.js',  
  'js/loader.js',
  'js/main.js',
  'js/maskTel.js',
  'js/messages_pt_BR.js',   
  'js/pwa.js',
  'js/pwa.webmanifest',     
  'js/status.js',
  'js/sw.js',
  'js/topo.js',
  'js/treino.js',
  'css/alunos.css',
  'css/cadastro.css',
  'css/cadastroAlunos.css',
  'css/crie.css',
  'css/editarAluno.css',
  'css/financas.css',
  'css/index.css',
  'css/login.css',
  'css/sobre.css',
  'css/treino.css',
  'img/8.png',
  'img/apple-touch-icon.png',
  'img/atividades.png',
  'img/avatar.png',
  'img/bike.svg',
  'img/diogo.png',
  'img/icon128.png',
  'img/icon144.png',
  'img/icon152.png',
  'img/icon192.png',
  'img/icon384.png',
  'img/icon512.png',
  'img/icon72.png',
  'img/icon96.png',
  'img/Iconlogo.png',
  'img/ilustracao.svg',
  'img/imagem.png',
  'img/login.png',
  'img/logo.png',
  'img/money.png',
  'img/paulo.png',
  'img/rafael.jpg',
  'img/roni.png',
  'img/splash-screen.png',
  'img/strava.png',
  'img/up.png',
  'img/user.png' 
]  

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(toCache)
        })
        .then(self.skipWaiting())
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.match(event.request)
                })
        })
    )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key)
                    return caches.delete(key)
                }
            }))
        })
        .then(() => self.clients.claim())
    )
})
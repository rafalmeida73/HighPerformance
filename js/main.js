// SIDEBAR
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "left"
});


let myPrompt;
const pwaAlert = document.querySelector('.pwa__alert');
const btnPwa = document.querySelector('.pwa__alert__btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();

    myPrompt = e;

    pwaAlert.style.display = 'block';
});

btnPwa.addEventListener('click', () => {
    pwaAlert.style.display = 'none';
    myPrompt.prompt();
    myPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult == 'accepted') {
                console.log('Usuário aceito o prompt');
            } else {
                onsole.log('Usuário cancelou o prompt');
            }
        });
});
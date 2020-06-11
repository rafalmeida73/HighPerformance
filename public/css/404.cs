.loader {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
}

.loader.hidden {
    animation: fadeOut 1s;
    animation-fill-mode: forwards;
}

.loader img {
    width: 400px;
}

@keyframes fadeOut {
    100% {
        opacity: 0;
        visibility: hidden;
    }
}

img{
 max-width: 100%;
 max-height: 100%;
}

@media (max-width:600px) {

    .loader img {
        margin-top: 0;
        max-height: 100vh;
    }
    
    }

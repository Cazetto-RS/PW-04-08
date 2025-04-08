const rotas = [{
        'path': '',
        'component': '/page/home.html'
    },
    {
        'path': '/',
        'component': '/page/home.html'
    },
    {
        'path': '/teste',
        'component': '/page/teste.html'
    },
    {
        'path': '/teste/teste',
        'component': '/page/teste.html'
    },
    {
        'path': '/veiculos/cadastro',
        'component': '/page/veiculos/cadastro.html'
    }
];

const rotear = (rotaUrl = window.location.pathname) => {
    const rotaEncontrada = rotas.find(rota => rota.path.toLowerCase() === rotaUrl.toLowerCase());
    return rotaEncontrada || {
        path: '/error',
        component: '/page/erro.html'
    };
}


$(function () {
    let rota = rotear(window.location.pathname);
    $("#root").empty();
    $("#root").load(rota.component);    
});
window.onload = ()=>{
    listar();
}

function listar(){
    const request = get('http://localhost:8080/api/produto/listar');
    const dados = JSON.parse(request);

    dados.forEach(dados => {
        criaDiv(dados);
    });
}

function get(url){
    const request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaDiv(dados){
    $('#container').append(
    '<div class="produto">'+
        '<div class="titulo">'+dados.local+'</div>'+
        '<div class="img">'+'<img src="img/coxinha.png" width="150px">'+'</div>'+
        '<div class="descricao">'+dados.descricao+'</div>'+
        '<hr class="linha"></hr>'+
        '<div class="valor">'+'R$ '+dados.valor+'</div>'+
    '</div>'
    );
}
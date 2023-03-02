window.onload = ()=>{
    listar();
}

function listar(){
    const request = get('http://localhost:8080/api/recado/listar');
    const dados = JSON.parse(request);

    dados.forEach(dados => criaDiv(dados));
}

function get(url){
    const request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaDiv(dados){
    $('#containerRecado').append(
        '<div class="divRecado">'+
            '<div class="divTitulo"><h1 class="h1Recado">'+dados.titulo+'</h1></div>'+
            '<div class="divInfo">'+
                '<p class="subtituloRecado">Descrição</p>'+
                '<p class="texto">'+dados.recado+'</p>'+
            '</div>'+
            '<div class="divData">'+
                '<div class="divisor">'+
                    '<p class="subtitulo">Data</p>'+
                    '<p class="texto">'+dados.data.split("-")[2]+'/'+dados.data.split("-")[1]+'/'+dados.data.split("-")[0]+'</p>'+
                '</div>'+
                '<div class="divisor">'+
                    '<p class="subtitulo">Horário</p>'+
                    '<p class="texto">'+dados.horario+'</p>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
}
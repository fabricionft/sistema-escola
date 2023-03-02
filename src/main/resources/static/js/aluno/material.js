window.onload = () => {
    listarPorSala(localStorage.getItem('turma'));
}

function listarPorSala(turma){
    $.ajax({
        method: "GET",
        url: "buscarMaterialPorSala",
        data: "turma=" + turma,
        success: function (response){
            response.forEach(dados => criaMaterial(dados));
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao listar: " +xhr.responseText);
    });
}

function criaMaterial(dados){
    console.log(dados)
    $('#containerMaterial').append(
        '<div class="divMaterial">'+
            '<div class="divTitulo">'+
                '<div id="tipo'+dados.codigo+'" class="classificacao"></div>'+
                '<h1 class="h1Material">'+dados.disciplina+'</h1>'+
                '<p class="pMaterial">Por: '+dados.professor+'</p>'+
                '<p class="dataMaterial">'+dados.data+'</p>'+
            '</div>'+
            '<div class="divInfo">'+
                '<div class="info">'+
                    '<p class="subtitulo">Descrição</p>'+
                    '<p class="texto">'+dados.descricao+'</p>'+
                '</div>'+
            '</div>'+
            '<div class="divBotoes">'+
                '<p class="texto1">Acesse o link do conteúdo por aqui</p>'+
                '<div class="linha">'+
                    '<button class="btn" onclick="link('+dados.codigo+')">Link</button>'+
                    '<div class="moldura"> <img src="icon/link.png" class="iconeMaterial" width="20px"> </div>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
    if(dados.tipo == "padrão") document.getElementById('tipo'+dados.codigo).style.background="rgb(41, 199, 213)";
    else document.getElementById('tipo'+dados.codigo).style.background="rgb(3, 65, 103)";
}

function link(link){
    $.ajax({
        method: "GET",
        url: "buscarMaterialPorID",
        data: "codigo=" + link,
        success: function (dados){
            location.href=dados.link;
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao listar: " +xhr.responseText);
    });
}
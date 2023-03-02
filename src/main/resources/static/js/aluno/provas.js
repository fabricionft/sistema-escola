window.onload = () => {
    listarPorSala(localStorage.getItem('turma'));
}

function listarPorSala(turma){
    $.ajax({
        method: "GET",
        url: "buscarProvaPorSala",
        data: "turma=" + turma,
        success: function (response){
            response.forEach(dados => criaProva(dados));
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao listar: " +xhr.responseText);
    });
}

function criaProva(dados){
     $('#containerProvas').append(
        '<div class="card__giratorio">'+
            '<div class="card__giratorio-conteudo">'+
                '<div class="card__giratorio-conteudo--frente">'+
                    '<div class="numero">'+dados.data.split('-')[2]+'/'+dados.data.split('-')[1]+'</div>'+
                    '<div class="disciplina">'+dados.disciplina+'</div>'+
                '</div>'+
                '<div class="card__giratorio-conteudo--traseira">'+
                    '<p class="conteudo">'+dados.materia+'</p>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
}
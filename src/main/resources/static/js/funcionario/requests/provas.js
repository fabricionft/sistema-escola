window.onload = () => listar();

//GET
function listar(){
    const request = get('http://localhost:8080/api/prova/listar');
    const dados = JSON.parse(request);
    dados.forEach(dados => criaLinha(dados));
}

function get(url){
    const request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaLinha(dados){
    var [anoVal, mesVal, diaVal] = dados.data.split('-');
    if(mesVal == 01) mesVal = "Janeiro";
    else if(mesVal == 01) mesVal = "Janeiro";
    else if(mesVal == 02) mesVal = "Fevereiro";
    else if(mesVal == 03) mesVal = "Março";
    else if(mesVal == 04) mesVal = "Abril";
    else if(mesVal == 05) mesVal = "Maio";
    else if(mesVal == 06) mesVal = "Junho";
    else if(mesVal == 07) mesVal = "Julho";
    else if(mesVal == 08) mesVal = "Agosto";
    else if(mesVal == 09) mesVal = "Setembro";
    else if(mesVal == 10) mesVal = "Outubro";
    else if(mesVal == 11) mesVal = "Novembro";
    else mesVal = "Dezembro";
    $('#painel').append(
        '<div class="linha">'+
            '<div class="coluna_1"> <p class="texto">'+dados.codigo+'</p> </div>'+
            '<div class="coluna_2"> <p class="texto">'+mesVal+'</p> </div>'+
            '<div class="coluna_3"> <p class="texto">'+diaVal+'</p> </div>'+
            '<div class="coluna_4"> <p class="texto">'+dados.disciplina+'</p> </div>'+
            '<div class="coluna_5"> <p class="texto">'+dados.turma+'</p> </div>'+
            '<div class="coluna_6">'+
                '<button class="btnEditar" onclick="editar('+dados.codigo+')">'+'Editar'+'</button>'+
                '<button class="btnExcluir" onclick="deletar('+dados.codigo+')">'+'Excluir'+'</button>'+
            '</div>'+
        '</div>'
    );
}

function salvar(){
    $.ajax({
        method: "POST",
        url: "salvarProva",
        data: JSON.stringify(
        {
            codigo: $("#codigo").val(),
            disciplina: $("#disciplina").val(),
            turma: $("#turma").val(),
            data: $("#data").val(),
            materia: $("#materia").val()
        }),
        contentType: "application/json; charset-utf8",
        success: function (response){
            alert("Registro salvo com suesso!");
            location.reload();
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao salvar: " +xhr.responseText);
    });
}

function editar(id){
    $.ajax({
        method: "GET",
        url: "buscarProvaPorID",
        data: "codigo=" + id,
        success: function (dados){
            document.getElementById('containerNovoProva').classList.add('active');
            $("#codigo").val(dados.codigo);
            $("#data").val(dados.data);
            $("#turma").val(dados.turma);
            $("#disciplina").val(dados.disciplina);
            $("#materia").val(dados.materia);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}

//DELETE
function deletar(id){
    $.ajax({
        method: "DELETE",
        url: "deletarProva",
        data: "codigo=" + id,
        success: function (response){
            alert("Registro apagado com suesso!");
            location.reload();
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}
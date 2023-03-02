window.onload = () => listar();

//GET
function listar(){
    const request = get('http://localhost:8080/api/recado/listar');
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
    $('#painel').append(
        '<div class="linha">'+
            '<div class="coluna_1"> <p class="texto">'+dados.codigo+'</p> </div>'+
            '<div class="coluna_3"> <p class="texto">'+dados.data.split("-")[2]+'/'+dados.data.split("-")[1]+"/"+dados.data.split("-")[0]+'</p> </div>'+
            '<div class="coluna_2"> <p class="texto">'+dados.recado+'</p> </div>'+
            '<div class="coluna_4">'+
                '<button class="btnEditar" onclick="editar('+dados.codigo+')">'+'Editar'+'</button>'+
                '<button class="btnExcluir" onclick="deletar('+dados.codigo+')">'+'Excluir'+'</button>'+
            '</div>'+
        '</div>'
    );
}

//POST
function salvar(){
    $.ajax({
        method: "POST",
        url: "salvar",
        data: JSON.stringify(
        {
            codigo: $("#codigo").val(),
            titulo: $("#titulo").val(),
            recado: $("#recado").val(),
            data: $("#data").val(),
            horario: $("#horario").val()
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
        url: "buscarRecadoPorID",
        data: "codigo=" + id,
        success: function (dados){
            document.getElementById('containerNovoRecado').classList.add('active');
            $('#codigo').val(dados.codigo);
            $('#titulo').val(dados.titulo);
            $('#recado').val(dados.recado);
            $('#data').val(dados.data);
            $('#horario').val(dados.horario);
        }
        }).fail(function(xhr, status, errorThrown){
            alert("Erro ao editar: " +xhr.responseText);
        });
}

//DELETE
function deletar(id){
    $.ajax({
        method: "DELETE",
        url: "deletar",
        data: "codigo=" + id,
        success: function (response){
            alert("Registro apagado com suesso!");
            location.reload();
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}
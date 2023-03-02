window.onload = () => listar();

//GET
function listar(){
    const request = get('http://localhost:8080/api/material/listar');
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
            '<div class="coluna_2"> <p class="texto">'+dados.disciplina+'</p> </div>'+
            '<div class="coluna_3"> <p class="texto">'+dados.data.split("-")[0]+'/'+dados.data.split("-")[1]+"/"+dados.data.split("-")[2]+'</p> </div>'+
            '<div class="coluna_4"> <p class="texto">'+dados.descricao.substring(0, dados.descricao.length/2)+' ...'+'</p> </div>'+
            '<div class="coluna_5">'+
                '<button class="btnEditar" onclick="editar('+dados.codigo+')">'+'Editar'+'</button>'+
                '<button class="btnExcluir" onclick="deletar('+dados.codigo+')">'+'Excluir'+'</button>'+
            '</div>'+
        '</div>'
    );
}

//POST
function salvar(){
    var data = new Date();
    var dataF = String(data.getDate()).padStart(2, '0')+"-"+String(data.getMonth() + 1).padStart(2, '0')+"-"+data.getFullYear();
    $.ajax({
        method: "POST",
        url: "salvarMaterial",
        data: JSON.stringify(
        {
            codigo: $('#codigo').val(),
            turma: $('#turma').val(),
            link: $('#link').val(),
            disciplina: $('#disciplina').val(),
            professor: $('#professor').val(),
            data: dataF,
            descricao: $('#descricao').val(),
            tipo: $('#tipo').val()
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
        url: "buscarMaterialPorID",
        data: "codigo=" + id,
        success: function (dados){
            document.getElementById('containerNovoMaterial').classList.add('active');

            $('#codigo').val(dados.codigo);
            $('#link').val(dados.link);
            $('#professor').val(dados.professor);
            $('#turma').val(dados.turma);
            $('#disciplina').val(dados.disciplina);
            $('#descricao').val(dados.descricao);
            $('#tipo').val(dados.tipo);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}

//DELETE
function deletar(id){
    $.ajax({
        method: "DELETE",
        url: "deletarMaterial",
        data: "codigo=" + id,
        success: function (response){
            alert("Registro apagado com suesso!");
            location.reload();
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}
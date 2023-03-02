window.onload = () => listar();

//GET
function listar(){
    const request = get('http://localhost:8080/api/produto/listar');
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
            '<div class="coluna_2"> <p class="texto">'+dados.local+'</p> </div>'+
            '<div class="coluna_3"> <p class="texto">'+'R$ '+dados.valor+'</p> </div>'+
            '<div class="coluna_4"> <p class="texto">'+dados.descricao+'</p> </div>'+
            '<div class="coluna_5">'+
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
        url: "salvarProduto",
        data: JSON.stringify(
        {
            codigo: $('#codigo').val(),
            local: $("#local").val(),
            descricao: $("#descricao").val(),
            valor: $("#valor").val(),
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
        url: "buscarProdutoPorID",
        data: "codigo=" + id,
        success: function (dados){
            document.getElementById('containerNovoProduto').classList.add('active');
            $('#codigo').val(dados.codigo);
            $('#local').val(dados.local);
            $('#descricao').val(dados.descricao);
            $('#valor').val(dados.valor);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}

//DELETE
function deletar(id){
    $.ajax({
        method: "DELETE",
        url: "deletarProduto",
        data: "codigo=" + id,
        success: function (response){
            alert("Registro apagado com suesso!");
            location.reload();
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}
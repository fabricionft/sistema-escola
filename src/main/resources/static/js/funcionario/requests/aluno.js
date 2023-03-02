window.onload = () => listar();

//GET
function listar(){
    const request = get('http://localhost:8080/api/aluno/listar');
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
            '<div class="coluna_2"> <p class="texto">'+dados.nome.split(" ")[0]+'</p> </div>'+
            '<div class="coluna_3"> <p class="texto">'+dados.turma+'</p> </div>'+
            '<div class="coluna_4"> <p class="texto">'+dados.ra+'</p> </div>'+
            '<div class="coluna_5"> <p class="texto">'+dados.usuario+'</p> </div>'+
            '<div class="coluna_6">'+
                '<button class="btnEditar" onclick="editar('+dados.codigo+')">'+'Editar'+'</button>'+
                '<button class="btnExcluir" onclick="deletar('+dados.codigo+')">'+'Excluir'+'</button>'+
            '</div>'+
        '</div>'
    );
}

//POST
function checar(){
    $.ajax({
        method: "GET",
        url: "buscarUSuario",
        data: "usuario=" + $("#user").val(),
        success: function (dados){
            if(dados.usuario == null) salvar();
            else{
                alert("Esse usuário já existe, por favor digite outro");
                $("#user").val("");
            }
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}

function salvar(){
    $.ajax({
        method: "POST",
        url: "salvarAluno",
        data: JSON.stringify(
        {
            codigo: $("#codigo").val(),
            nome: $("#nome").val(),
            dataNascimento: $("#dataNascimento").val(),
            mae: $("#nomeMae").val(),
            cidade: $("#cidade").val(),
            sexo: $("#sexo").val(),
            escola: $("#escola").val(),
            turma: $("#turma").val(),
            ra: $("#ra").val(),
            matricula: $("#matricula").val(),
            usuario: $("#user").val(),
            senha: $("#senha").val()
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
        url: "buscarAlunoPorID",
        data: "codigo=" + id,
        success: function (dados){
            document.getElementById('containerNovoAluno').classList.add('active');
            document.getElementById('btnChecar').style.display="none";
            document.getElementById("user").readOnly="true";

            $("#codigo").val(dados.codigo);
            $("#nome").val(dados.nome);
            $("#dataNascimento").val(dados.dataNascimento);
            $("#nomeMae").val(dados.mae);
            $("#cidade").val(dados.cidade);
            $("#escola").val(dados.escola);
            $("#turma").val(dados.turma);
            $("#ra").val(dados.ra);
            $("#matricula").val(dados.matricula);
            $("#sexo").val(dados.sexo);
            $("#user").val(dados.usuario);
            $("#senha").val(dados.senha);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}

//DELETE
function deletar(id){
    $.ajax({
        method: "DELETE",
        url: "deletarAluno",
        data: "codigo=" + id,
        success: function (response){
            alert("Registro apagado com suesso!");
            location.reload();
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}

const btn = document.getElementById('btnSenha');
btn.onclick = () =>{
    const senha = document.getElementById('senha');
    if(senha.type == "password"){
        senha.type = "text";
        btn.src = 'icon/olhoF.png'
    }else{
        senha.type = "password";
        btn.src = 'icon/olho.png';
    }
}
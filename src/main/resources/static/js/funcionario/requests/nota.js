window.onload = () => listar();

function listar(){
    const request = get('http://localhost:8080/api/notas1/listar');
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
            '<div class="coluna_2"> <p class="texto">'+dados.aluno+'</p> </div>'+
            '<div class="coluna_3"> <p class="texto">'+dados.turma+'</p> </div>'+
            '<div class="coluna_4">'+
                '<button class="btnEditar" onclick="editar('+dados.codigo+','+dados.bimestre+')">'+'Editar'+'</button>'+
                '<button class="btnExcluir" onclick="deletar('+dados.codigo+')">'+'Excluir'+'</button>'+
            '</div>'+
        '</div>'
    );
}

var i = 0;
function escolherTurma(){
    if($('#turma').val() != "escolha"){
        if(i == 0){
            $.ajax({
               method: "GET",
               url: "buscarAlunoPorSala",
               data: "turma=" + $('#turma').val(),
               success: function (dados){
                   dados.forEach(dados => $('#aluno').append('<option id="option" value="'+dados.codigo+'-'+dados.nome+'">'+dados.nome+'</option>'));
               }
            }).fail(function(xhr, status, errorThrown){
                alert("Erro ao excluir: " +xhr.responseText);
            });
        }
        if(i == 1){
            $('#option').remove();
            i--;
        }
        else i++;
    }
}

function salvar(){
    $.ajax({
        method: "POST",
        url: "salvarNotas1",
        data: JSON.stringify({
            codigo: $('#aluno').val().split("-")[0],
            turma: $('#turma').val(),
            aluno: $('#aluno').val().split("-")[1],
            bimestre: $('#bimestre').val(),
            portugues: $('#portugues').val(),
            matematica: $('#matematica').val(),
            historia: $('#historia').val(),
            geografia: $('#geografia').val(),
            biologia: $('#biologia').val(),
            fisica: $('#fisica').val(),
            quimica: $('#quimica').val(),
            edfisica: $('#edFisica').val(),
            ingles: $('#ingles').val(),
            sociologia: $('#sociologia').val(),
            filosofia: $('#filosofia').val(),
            faltasmatematica: $('#faltasMatematica').val(),
            faltasportugues: $('#faltasPortugues').val(),
            faltashistoria: $('#faltasHistoria').val(),
            faltasgeografia: $('#faltasGeografia').val(),
            faltasfilosofia: $('#faltasFilosofia').val(),
            faltassociologia: $('#faltasSociologia').val(),
            faltasquimica: $('#faltasQuimica').val(),
            faltasfisica: $('#faltasFisica').val(),
            faltasedfisica: $('#faltasEdFisica').val(),
            faltasingles: $('#faltasIngles').val(),
            faltasbiologia: $('#faltasBiologia').val()
        }),
        contentType: "application/json; charset-utf8",
        success: function (response){
            alert("Registro salvo com suesso!");
            location.reload();
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao salvar: " +xhr.responseText);
    });

    for(var i = 2; i <= 4; i++){
        console.log("NUM: "+i)
        $.ajax({
            method: "POST",
            url: "salvarNotas"+i,
            data: JSON.stringify({
                codigo: $('#aluno').val().split("-")[0],
                turma: $('#turma').val(),
                aluno: $('#aluno').val().split("-")[1],
                bimestre: 0,
                portugues: 0,
                matematica: 0,
                historia: 0,
                geografia: 0,
                biologia: 0,
                fisica: 0,
                quimica: 0,
                edfisica: 0,
                ingles: 0,
                sociologia: 0,
                filosofia: 0,
                faltasmatematica: 0,
                faltasportugues: 0,
                faltashistoria: 0,
                faltasgeografia: 0,
                faltasfilosofia: 0,
                faltassociologia: 0,
                faltasquimica: 0,
                faltasfisica: 0,
                faltasedfisica: 0,
                faltasingles: 0,
                faltasbiologia: 0
            }),
            contentType: "application/json; charset-utf8",
            success: function (response){}
        }).fail(function(xhr, status, errorThrown){
            alert("Erro ao salvar: " +xhr.responseText);
        });
    }
}

function salvarEdicao(){
    $.ajax({
        method: "POST",
        url: "salvarNotas"+$('#bimestreEditar').val(),
        data: JSON.stringify({
            codigo: localStorage.getItem('codigo'),
            turma: $('#turmaEditar').val(),
            aluno: $('#alunoEditar').val(),
            bimestre: $('#bimestreEditar').val(),
            portugues: $('#portugues').val(),
            matematica: $('#matematica').val(),
            historia: $('#historia').val(),
            geografia: $('#geografia').val(),
            biologia: $('#biologia').val(),
            fisica: $('#fisica').val(),
            quimica: $('#quimica').val(),
            edfisica: $('#edFisica').val(),
            ingles: $('#ingles').val(),
            sociologia: $('#sociologia').val(),
            filosofia: $('#filosofia').val(),
            faltasmatematica: $('#faltasMatematica').val(),
            faltasportugues: $('#faltasPortugues').val(),
            faltashistoria: $('#faltasHistoria').val(),
            faltasgeografia: $('#faltasGeografia').val(),
            faltasfilosofia: $('#faltasFilosofia').val(),
            faltassociologia: $('#faltasSociologia').val(),
            faltasquimica: $('#faltasQuimica').val(),
            faltasfisica: $('#faltasFisica').val(),
            faltasedfisica: $('#faltasEdFisica').val(),
            faltasingles: $('#faltasIngles').val(),
            faltasbiologia: $('#faltasBiologia').val()
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

function mudar(){
    if(i == 1){
        editar(localStorage.getItem('codigo'), $('#bimestreEditar').val());
        i--;
    }else i++;
}

function editar(id, bimestre){
    console.log("Mudou")
    $.ajax({
        method: "GET",
        url: "buscarNotas"+bimestre+"PorID",
        data: "codigo=" + id,
        success: function (dados){
            document.getElementById('containerNovoNota').classList.add('active');
            document.getElementById('bimestre').style.display="none";
            document.getElementById('aluno').style.display="none";
            document.getElementById('turma').style.display="none";
            document.getElementById('salvar').style.display="none";

            $('#turmaEditar').val(dados.turma);
            $('#alunoEditar').val(dados.aluno);
            $('#bimestre').val(dados.bimestre);
            $('#matematica').val(dados.codigo);
            $('#portugues').val(dados.portugues);
            $('#matematica').val(dados.matematica);
            $('#geografia').val(dados.geografia);
            $('#historia').val(dados.historia);
            $('#biologia').val(dados.biologia);
            $('#fisica').val(dados.fisica);
            $('#quimica').val(dados.quimica);
            $('#edFisica').val(dados.edfisica);
            $('#ingles').val(dados.ingles);
            $('#sociologia').val(dados.sociologia);
            $('#filosofia').val(dados.filosofia);
            $('#faltasMatematica').val(dados.faltasmatematica);
            $('#faltasPortugues').val(dados.faltasportugues);
            $('#faltasHistoria').val(dados.faltashistoria);
            $('#faltasGeografia').val(dados.faltasgeografia);
            $('#faltasFilosofia').val(dados.faltasfilosofia);
            $('#faltasSociologia').val(dados.faltassociologia);
            $('#faltasQuimica').val(dados.faltasquimica);
            $('#faltasFisica').val(dados.faltasfisica);
            $('#faltasEdFisica').val(dados.faltasedfisica);
            $('#faltasIngles').val(dados.faltasingles);
            $('#faltasBiologia').val(dados.faltasbiologia);

            localStorage.setItem('codigo', dados.codigo);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao excluir: " +xhr.responseText);
    });
}

function deletar(id){
    for(var i = 1; i <=4; i++){
        $.ajax({
            method: "DELETE",
            url: "deletarNotas"+i,
            data: "codigo=" + id,
            success: function (response){}
        }).fail(function(xhr, status, errorThrown){
           alert("Errp!")
        });
    }
    alert("Excluído com sucesso!");
    location.reload();
}
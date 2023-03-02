window.onload = () => {
    buscarAluno(localStorage.getItem('codigo'));
}

function buscarAluno(id){
    $.ajax({
        method: "GET",
        url: "buscarAlunoPorID",
        data: "codigo=" + id,
        success: function (dados){
            escreve(dados);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao buscar dados: " +xhr.responseText);
    });
}

function escreve(dados){
    document.getElementById('aluno').innerHTML = dados.nome.split(" ")[0];
    document.getElementById('nome').innerHTML = dados.nome;
    document.getElementById('dataNascimento').innerHTML = dados.dataNascimento.split("-")[2]+"/"+dados.dataNascimento.split("-")[1]+"/"+dados.dataNascimento.split("-")[0];
    document.getElementById('mae').innerHTML = dados.mae;
    document.getElementById('cidade').innerHTML = dados.cidade;
    document.getElementById('escola').innerHTML = dados.escola;
    document.getElementById('turma').innerHTML = dados.turma;
    document.getElementById('ra').innerHTML = dados.ra;
    document.getElementById('matricula').innerHTML = dados.matricula;
    document.getElementById('usuario').innerHTML = dados.usuario;

    var esconde = "";
    for(var i = 1; i <= dados.senha.length; i++) esconde += "*";
    document.getElementById('senha').innerHTML = esconde;

    if(dados.sexo == "masculino")document.getElementById('masculino').style.opacity="1";
    if(dados.sexo == "feminino") document.getElementById('feminino').style.opacity="1";
}

function trocarSenha(){
    if($('#senhaAtual').val() == localStorage.getItem('senha')){

        if($('#novaSenha').val() == $('#confNovaSenha').val() && $('#novaSenha').val() != ""){
            $.ajax({
                method: "POST",
                url: "trocarSenha",
                data: "codigo=" + localStorage.getItem('codigo') + "&" + "senha=" + $('#novaSenha').val(),
                success: function (dados){
                    localStorage.setItem('senha', $('#novaSenha').val());
                    alert("Senha alterada com sucesso!");
                    fecharFormAlterarSenha();
                }
            }).fail(function(xhr, status, errorThrown){
                alert("Erro inesperao ao trocar de senha!!");
            });
        }
        else alert("Atenção, a nova senha e sua confirmação devem ser iguais!");

    }
    else alert("Senha atual incorreta, tente novamente!");
}

//Botão olhinho
const btn1 = document.getElementById('senha1');
const btn2 = document.getElementById('senha2');
const btn3 = document.getElementById('senha3');

btn1.onclick = () =>{
    const input1 = document.getElementById('senhaAtual');
    if(input1.type == "password"){
        input1.type = "text";
        btn1.src = 'icon/olhoF.png'
    }else{
        input1.type = "password";
        btn1.src = 'icon/olho.png';
    }
}

btn2.onclick = () =>{
    const input2 = document.getElementById('novaSenha');
    if(input2.type == "password"){
        input2.type = "text";
        btn2.src = 'icon/olhoF.png'
    }else{
        input2.type = "password";
        btn2.src = 'icon/olho.png';
    }
}

btn3.onclick = () =>{
    const input3 = document.getElementById('confNovaSenha');
    if(input3.type == "password"){
        input3.type = "text";
        btn3.src = 'icon/olhoF.png'
    }else{
        input3.type = "password";
        btn3.src = 'icon/olho.png';
    }
}
function logar(){
    var usuario = $("#user").val();
    var senha = $("#senha").val();
    var escolha = $("#escolha").val();

    if(escolha == "aluno"){
        $.ajax({
            method: "GET",
            url: "loginAluno",
            data: "usuario=" + usuario + "&" + "senha=" + senha,
            success: function (dados){
                if(dados.usuario != null && dados.senha != null){
                    localStorage.setItem('codigo', dados.codigo);
                    localStorage.setItem('nome', dados.nome);
                    localStorage.setItem('turma', dados.turma);
                    localStorage.setItem('senha', dados.senha);
                    localStorage.setItem('escola', dados.escola);
                    window.location.href = "http://localhost:8080/menuAluno.html";
                }else{
                    alert("Email ou senha inválidos, tente novamente")
                }
            }
        }).fail(function(xhr, status, errorThrown){
            console.log("Erro ao logar");
        });
    }
    else if (escolha == "funcionario"){
        console.log("AA")
        $.ajax({
            method: "GET",
            url: "loginFuncionario",
            data: "usuario=" + usuario + "&" + "senha=" + senha,
            success: function (dados){
                if(dados.usuario != null && dados.senha != null){
                    window.location.href = "http://localhost:8080/menuFuncionario.html";
                }else{
                    alert("Email ou senha inválidos, tente novamente")
                }
            }
        }).fail(function(xhr, status, errorThrown){
            console.log("Erro ao logar");
        });
    }
    else{
        alert("EScolha uma opção válida!");
    }
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
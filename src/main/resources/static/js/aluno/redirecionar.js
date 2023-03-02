/*function validar(){
    const email = document.querySelector("#email");
    const valEmail = email.value;
    const senha = document.querySelector("#senha");
    const valSenha = senha.value;

    console.log(valEmail)
    if(valEmail == "fa"){
        alert("Email correto")
        if(valSenha == "123"){
            alert("Senha correta");
        }
    }else{
        alert("Email errado");
    }
}*/

function redirecionar(){
    const select = document.querySelector("#opc");
    const val = select.value;

    //validar();

    if(val == 1){
        window.location.href="file:///C:/Users/fabri/OneDrive/%C3%81rea%20de%20Trabalho/TCC/staticVersions/static_2/menuAluno.html";
    }else if(val == 2){
        window.location.href="file:///C:/Users/fabri/OneDrive/%C3%81rea%20de%20Trabalho/TCC/staticVersions/static_2/menuFuncionario.html";
    }else{
        alert("Escolha uma opçao válida!");
    }
}


function abrirFormAlterarSenha(){
    document.getElementById('containerForm').classList.add('active');
}

function fecharFormAlterarSenha(){
    document.getElementById('containerForm').classList.remove('active');
    location.reload();
}
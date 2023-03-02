window.onload = () => listar(localStorage.getItem('codigo'));

function listar(id){
    $.ajax({
        method: "GET",
        url: "buscarNotas1PorID",
        data: "codigo=" + id,
        success: function(dados){
            escrevePrimeiroBimestre(dados);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao listar: " +xhr.responseText);
    });

    $.ajax({
        method: "GET",
        url: "buscarNotas2PorID",
        data: "codigo=" + id,
        success: function(dados){
            escreveSegundoBimestre(dados);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao listar: " +xhr.responseText);
    });

    $.ajax({
        method: "GET",
        url: "buscarNotas3PorID",
        data: "codigo=" + id,
        success: function(dados){
            escreveTerceiroBimestre(dados);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao listar: " +xhr.responseText);
    });

    $.ajax({
        method: "GET",
        url: "buscarNotas4PorID",
        data: "codigo=" + id,
        success: function(dados){
            escreveQuartoBimestre(dados);
        }
    }).fail(function(xhr, status, errorThrown){
        alert("Erro ao listar: " +xhr.responseText);
    });
}

function escrevePrimeiroBimestre(dados){
    document.getElementById('nota-1').innerHTML = dados.matematica;
    document.getElementById('nota-2').innerHTML = dados.portugues;
    document.getElementById('nota-3').innerHTML = dados.historia;
    document.getElementById('nota-4').innerHTML = dados.geografia;
    document.getElementById('nota-5').innerHTML = dados.biologia;
    document.getElementById('nota-6').innerHTML = dados.fisica;
    document.getElementById('nota-7').innerHTML = dados.ingles;
    document.getElementById('nota-8').innerHTML = dados.filosofia;
    document.getElementById('nota-9').innerHTML = dados.sociologia;
    document.getElementById('nota-10').innerHTML = dados.edfisica;
    document.getElementById('nota-11').innerHTML = dados.quimica;

    document.getElementById('falta-1').innerHTML = dados.faltasmatematica;
    document.getElementById('falta-2').innerHTML = dados.faltasportugues;
    document.getElementById('falta-3').innerHTML = dados.faltashistoria;
    document.getElementById('falta-4').innerHTML = dados.faltasgeografia;
    document.getElementById('falta-5').innerHTML = dados.faltasbiologia;
    document.getElementById('falta-6').innerHTML = dados.faltasfisica;
    document.getElementById('falta-7').innerHTML = dados.faltasingles;
    document.getElementById('falta-8').innerHTML = dados.faltasfilosofia;
    document.getElementById('falta-9').innerHTML = dados.faltassociologia;
    document.getElementById('falta-10').innerHTML = dados.faltasedfisica;
    document.getElementById('falta-11').innerHTML = dados.faltasquimica;

    for(var i = 1; i <= 11; i++){
        var nota = document.getElementById('nota-'+i)
        if(nota.innerHTML == 0 || nota.innerHTML == "undefined") nota.innerHTML = "-";
        if(nota.innerHTML < 6) nota.style.color = "red";

        var falta = document.getElementById('falta-'+i)
        if(falta.innerHTML == "undefined") falta.innerHTML = "0";
    }
}

function escreveSegundoBimestre(dados){
    document.getElementById('nota-12').innerHTML = dados.matematica;
    document.getElementById('nota-13').innerHTML = dados.portugues;
    document.getElementById('nota-14').innerHTML = dados.historia;
    document.getElementById('nota-15').innerHTML = dados.geografia;
    document.getElementById('nota-16').innerHTML = dados.biologia;
    document.getElementById('nota-17').innerHTML = dados.fisica;
    document.getElementById('nota-18').innerHTML = dados.ingles;
    document.getElementById('nota-19').innerHTML = dados.filosofia;
    document.getElementById('nota-20').innerHTML = dados.sociologia;
    document.getElementById('nota-21').innerHTML = dados.edfisica;
    document.getElementById('nota-22').innerHTML = dados.quimica;

    document.getElementById('falta-12').innerHTML = dados.faltasmatematica;
    document.getElementById('falta-13').innerHTML = dados.faltasportugues;
    document.getElementById('falta-14').innerHTML = dados.faltashistoria;
    document.getElementById('falta-15').innerHTML = dados.faltasgeografia;
    document.getElementById('falta-16').innerHTML = dados.faltasbiologia;
    document.getElementById('falta-17').innerHTML = dados.faltasfisica;
    document.getElementById('falta-18').innerHTML = dados.faltasingles;
    document.getElementById('falta-19').innerHTML = dados.faltasfilosofia;
    document.getElementById('falta-20').innerHTML = dados.faltassociologia;
    document.getElementById('falta-21').innerHTML = dados.faltasedfisica;
    document.getElementById('falta-22').innerHTML = dados.faltasquimica;

    for(var i = 12; i <= 22; i++){
        var nota = document.getElementById('nota-'+i)
        if(nota.innerHTML == 0 || nota.innerHTML == "undefined") nota.innerHTML = "-";
        if(nota.innerHTML < 6) nota.style.color = "red";

        var falta = document.getElementById('falta-'+i)
        if(falta.innerHTML == "undefined") falta.innerHTML = "0";
    }
}

function escreveTerceiroBimestre(dados){
    document.getElementById('nota-23').innerHTML = dados.matematica;
    document.getElementById('nota-24').innerHTML = dados.portugues;
    document.getElementById('nota-25').innerHTML = dados.historia;
    document.getElementById('nota-26').innerHTML = dados.geografia;
    document.getElementById('nota-27').innerHTML = dados.biologia;
    document.getElementById('nota-28').innerHTML = dados.fisica;
    document.getElementById('nota-29').innerHTML = dados.ingles;
    document.getElementById('nota-30').innerHTML = dados.filosofia;
    document.getElementById('nota-31').innerHTML = dados.sociologia;
    document.getElementById('nota-32').innerHTML = dados.edfisica;
    document.getElementById('nota-33').innerHTML = dados.quimica;

    document.getElementById('falta-23').innerHTML = dados.faltasportugues;
    document.getElementById('falta-24').innerHTML = dados.faltashistoria;
    document.getElementById('falta-25').innerHTML = dados.faltasgeografia;
    document.getElementById('falta-26').innerHTML = dados.faltasbiologia;
    document.getElementById('falta-27').innerHTML = dados.faltasfisica;
    document.getElementById('falta-28').innerHTML = dados.faltasingles;
    document.getElementById('falta-29').innerHTML = dados.faltasfilosofia;
    document.getElementById('falta-30').innerHTML = dados.faltassociologia;
    document.getElementById('falta-31').innerHTML = dados.faltasedfisica;
    document.getElementById('falta-32').innerHTML = dados.faltasquimica;
    document.getElementById('falta-33').innerHTML = dados.faltasmatematica;

    for(var i = 23; i <= 33; i++){
        var nota = document.getElementById('nota-'+i)
        if(nota.innerHTML == 0 || nota.innerHTML == "undefined") nota.innerHTML = "-";
        if(nota.innerHTML < 6) nota.style.color = "red";

        var falta = document.getElementById('falta-'+i)
        if(falta.innerHTML == "undefined") falta.innerHTML = "0";
    }
}

function escreveQuartoBimestre(dados){
    document.getElementById('nota-34').innerHTML = dados.matematica;
    document.getElementById('nota-35').innerHTML = dados.portugues;
    document.getElementById('nota-36').innerHTML = dados.historia;
    document.getElementById('nota-37').innerHTML = dados.geografia;
    document.getElementById('nota-38').innerHTML = dados.biologia;
    document.getElementById('nota-39').innerHTML = dados.fisica;
    document.getElementById('nota-40').innerHTML = dados.ingles;
    document.getElementById('nota-41').innerHTML = dados.filosofia;
    document.getElementById('nota-42').innerHTML = dados.sociologia;
    document.getElementById('nota-43').innerHTML = dados.edfisica;
    document.getElementById('nota-44').innerHTML = dados.quimica;

    document.getElementById('falta-34').innerHTML = dados.faltashistoria;
    document.getElementById('falta-35').innerHTML = dados.faltasgeografia;
    document.getElementById('falta-36').innerHTML = dados.faltasbiologia;
    document.getElementById('falta-37').innerHTML = dados.faltasfisica;
    document.getElementById('falta-38').innerHTML = dados.faltasingles;
    document.getElementById('falta-39').innerHTML = dados.faltasfilosofia;
    document.getElementById('falta-40').innerHTML = dados.faltassociologia;
    document.getElementById('falta-41').innerHTML = dados.faltasedfisica;
    document.getElementById('falta-42').innerHTML = dados.faltasquimica;
    document.getElementById('falta-43').innerHTML = dados.faltasmatematica;
    document.getElementById('falta-44').innerHTML = dados.faltasportugues;

    for(var i = 34; i <= 44; i++){
        var nota = document.getElementById('nota-'+i)
        if(nota.innerHTML == 0 || nota.innerHTML == "undefined") nota.innerHTML = "-";
        if(nota.innerHTML < 6) nota.style.color = "red";

        var falta = document.getElementById('falta-'+i)
        if(falta.innerHTML == "undefined") falta.innerHTML = "0";
    }
}

let opc = false;
function mudar(){
    if(opc){
        if($('#escolha').val() == "notas"){
            for(var j = 1; j <= 44; j++){
                document.getElementById('nota-'+j).style.display="flex";
                document.getElementById('falta-'+j).style.display="none";
                document.getElementById('titulo').innerHTML="NOTAS";
            }
        }
        if($('#escolha').val() == "faltas"){
            for(var j = 1; j <= 44; j++){
                document.getElementById('nota-'+j).style.display="none";
                document.getElementById('falta-'+j).style.display="flex";
                document.getElementById('titulo').innerHTML="FALTAS";
            }
        }
        opc = false;
    }
    else opc = true;
}

function gerarPDF(){
    var data = new Date();
    const txt = document.getElementById("info").innerHTML;

    var style = "<style>"
    + "p{font-size: 17.5px; color: rgb(52, 50, 50); margin-bottom: 30px;}"
    + ".info{ width: 40%;height: 85%;background: white;}"
    + ".linha{width: 100%;height: 5%;display: flex;}"
    + ".coluna, .coluna2{width: 14%;height: 100%;display: flex;align-items: center; justify-content: center;color: rgb(52, 50, 50);border: 1px solid rgb(177, 174, 174);}"
    + ".coluna2{width: 7.5%;}"
    + "</style>";

    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<title>Notas '+data.getFullYear()+'</title>');
    win.document.write('<p>Escola: '+localStorage.getItem('escola')+'<br><br>Nome: '+localStorage.getItem('nome')+'<br><br>Turma: '+localStorage.getItem('turma')+'</p>');
    win.document.write(style);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(txt);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
}
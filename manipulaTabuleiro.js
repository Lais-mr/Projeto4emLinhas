var jogador = 1;
console.log("/"+document.getElementById("57").textContent+"/");
if(document.getElementById("57").textContent == ""){
    console.log("entrou");
}else{
    console.log("bugou");
}
// Função para realizar as jogas
$('#container div.row div').click(function(){
    
    // Captura o ID da posição da peça
    var id = $(this).attr('id');
    //console.log(id);

    if(id == 1 || id == 9 || id == 17 || id == 25 || id == 33 || id == 41 || id == 49 || id == 57){
        //console.log(id);
        for (let i = 57; i > 0; i = i - 8) {
            var j = i.toString();
            console.log(j);
            if(document.getElementById(j).textContent == ""){
                console.log('cheguei aq');
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }else if(id == 2 || id == 10 || id == 18 || id == 26 || id == 34 || id == 42 || id == 50 || id == 58){
        for (let i = 58; i > 0; i = i - 8) {
            if(document.getElementById(i).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }else if(id == 3 || id == 11 || id == 19 || id == 27 || id == 35 || id == 43 || id == 51 || id == 59){
        for (let i = 59; i > 0; i = i - 8) {
            if(document.getElementById(i).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }else if(id == 4 || id == 12 || id == 20 || id == 28 || id == 36 || id == 44 || id == 52 || id == 60){
        for (let i = 60; i > 0; i = i - 8) {
            if(document.getElementById(i).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }else if(id == 5 || id == 13 || id == 21 || id == 29 || id == 37 || id == 45 || id == 53 || id == 61){
        for (let i = 61; i > 0; i = i - 8) {
            if(document.getElementById(i).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }else if(id == 6 || id == 14 || id == 22 || id == 30 || id == 38 || id == 46 || id == 54 || id == 62){
        for (let i = 62; i > 0; i = i - 8) {
            if(document.getElementById(i).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }else if(id == 7 || id == 15 || id == 23 || id == 31 || id == 39 || id == 47 || id == 55 || id == 63){
        for (let i = 63; i > 0; i = i - 8) {
            if(document.getElementById(i).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }
    else if(id == 8 || id == 16 || id == 24 || id == 32 || id == 40 || id == 48 || id == 56 || id == 64){
        for (let i = 64; i > 0; i = i - 8) {
            if(document.getElementById(i).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    jogador = 2;
                }else{
                    jogador = 1;
                }
            }
        }
    }
    // Uma hora temos que limpar o storaged


 })
 
 // Função para setar a posição da peça e salvar no webstoraged
 function setPosicaoJogador(id, jogador) {
    console.log(id);
    if(jogador == 1){
        $('#'+id).text("&#9675");
       localStorage.setItem("jogador", "&#9675");
    }else {
       localStorage.setItem("jogador", "&#9634");
    }
    localStorage.setItem("id", id);

 }
 
 // Função para retornar o ID do jogador que havia sido selecionado anteriormente
 function getPosicaoID() {
   return localStorage.getItem("id");
 }
 
 // Função para o retorno do jogador selecionado anteriormente
 function getJogador() {
   return localStorage.getItem('jogador');
 }
 
 // Função para limpar todos os dados 
 function limparDados() {
   localStorage.clear();
 }
 
//  // Função para validar os dados da jogada
//  function validarJogada(posicaoInicial, posicaFinal, peca)
//  {
//    // Cavalo preto
//    if (peca == '&#9816') 
//    {
//      if (!(posicaoInicial - posicaFinal) == 17)
//      {
//        alert("Jogada Inválida");
//      }
//    }
//  }
var jogadorAtual = 1 // quem comeca jogar é sempre o X
var jogador = 1; 
var guardaUltimoJogador = 1;

//JOGADOR 1 = X -> Usuario
//JOGADOR 2 = O -> IA

//matriz utilizada para verificar ganhador
matrizTabuleiro = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];

//Objeto EstadoTabuleiro
let objEstado = new EstadoTabuleiro();

// Função para realizar as jogas
$('#container div.rowT div').click(function(){

    // Captura o ID da posição da peça
    var id = $(this).attr('id');
    //console.log(id);

    //if utilizado para verificar que coluna o usuario clicou
    if(id == 1 || id == 9 || id == 17 || id == 25 || id == 33 || id == 41 || id == 49 || id == 57){
        for (let i = 57; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){

                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }else if(id == 2 || id == 10 || id == 18 || id == 26 || id == 34 || id == 42 || id == 50 || id == 58){
        for (let i = 58; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }else if(id == 3 || id == 11 || id == 19 || id == 27 || id == 35 || id == 43 || id == 51 || id == 59){
        for (let i = 59; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }else if(id == 4 || id == 12 || id == 20 || id == 28 || id == 36 || id == 44 || id == 52 || id == 60){
        for (let i = 60; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }else if(id == 5 || id == 13 || id == 21 || id == 29 || id == 37 || id == 45 || id == 53 || id == 61){
        for (let i = 61; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }else if(id == 6 || id == 14 || id == 22 || id == 30 || id == 38 || id == 46 || id == 54 || id == 62){
        for (let i = 62; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }else if(id == 7 || id == 15 || id == 23 || id == 31 || id == 39 || id == 47 || id == 55 || id == 63){
        for (let i = 63; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }
    else if(id == 8 || id == 16 || id == 24 || id == 32 || id == 40 || id == 48 || id == 56 || id == 64){
        for (let i = 64; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                let posI = calculaPosicao(j)[0];
                let posJ = calculaPosicao(j)[1];
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    let e = objEstado.clonar();
                    let ia = new MiniMax(e);
                    let m = ia.melhorJogado();
                    jogadorAtual = 2;
                    objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    setPosicaoJogador(calculaId,jogadorAtual);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;

                }else{
                    setPosicaoJogador(i,jogador);
                    objEstado.matrizTabuleiro[posI][posJ] = jogadorAtual;
                    jogadorAtual = 1;
                }
                break;
            }
        }
    }
    // Uma hora temos que limpar o storaged
    
    //printaMatriz();
     var vencedor = determinarVencedor();
     console.log(vencedor);
    if(vencedor == 1)
    {
         console.log('Jogador 1');
         //alertify.alert('Vencedor', 'Jogador'.vencedor);
    }
     else if(vencedor == 2){
         console.log('Jogador 2');
         //alertify.alert('Vencedor', 'Jogador'.vencedor);
    }
    

 })
 
 // Função para setar a posição da peça e salvar no webstoraged
 function setPosicaoJogador(id, jogador) {
    localStorage.setItem("id", id);
    if(jogador == 1){
        // $('#'+id).text('&#9675');
        $('#'+id).text('X');
       localStorage.setItem("jogador", 'X');
    }else {
        // $('#'+id).text('&#9634');
        $('#'+id).text('O');
       localStorage.setItem("jogador", 'O');
    }
    

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

function printaMatriz(){
    for (let i = 0; i < matrizTabuleiro.length; i++) {
        for (let j = 0; j < matrizTabuleiro.length; j++) {
            console.log(matrizTabuleiro[i][j]);
        }
        
    }
    
}

function calculaPosicao(id){
    i = (id - 1) / 8;
    j = (id - 1) % 8;
    posId = [];
    posId.push(i);
    posId.push(j);
    return posId;
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
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
                
                if(jogadorAtual == 1){
                    setPosicaoJogador(i,jogadorAtual); // coloca o jogador no tabuleiro
                    //novo
                    
                    //let e = objEstado.clonar();
                    //let ia = new MiniMax(e);
                    //let m = ia.melhorJogado();
                    //jogadorAtual = 2;
                    //objEstado.realizarJogada(jogadorAtual,m[0],m[1]);
                    //let calculaId = (m[0]*(objEstado.matrizTabuleiro.length)) + (m[1] + 1);
                    //setPosicaoJogador(calculaId,jogadorAtual);
                    //jogadorAtual = 1;
                    

                    //antigo
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    //novo
                    //setPosicaoJogador(i,jogador);
                    //jogadorAtual = 1;
                    //antigo
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 57){
                    matrizTabuleiro[7][0] = guardaUltimoJogador;
                }
                else if(j == 49){
                    matrizTabuleiro[6][0] = guardaUltimoJogador;
                }
                else if(j == 41){
                    matrizTabuleiro[5][0] = guardaUltimoJogador;
                }
                else if(j == 33){
                    matrizTabuleiro[4][0] = guardaUltimoJogador;
                }
                else if(j == 25){
                    matrizTabuleiro[3][0] = guardaUltimoJogador;
                }
                else if(j == 17){
                    matrizTabuleiro[2][0] = guardaUltimoJogador;
                }
                else if(j == 9){
                    matrizTabuleiro[1][0] = guardaUltimoJogador;
                }
                else if(j == 1){
                    matrizTabuleiro[0][0] = guardaUltimoJogador;
                }
                break;
            }
        }
    }else if(id == 2 || id == 10 || id == 18 || id == 26 || id == 34 || id == 42 || id == 50 || id == 58){
        for (let i = 58; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 58){
                    matrizTabuleiro[7][1] = guardaUltimoJogador;
                }
                else if(j == 50){
                    matrizTabuleiro[6][1] = guardaUltimoJogador;
                }
                else if(j == 42){
                    matrizTabuleiro[5][1] = guardaUltimoJogador;
                }
                else if(j == 34){
                    matrizTabuleiro[4][1] = guardaUltimoJogador;
                }
                else if(j == 26){
                    matrizTabuleiro[3][1] = guardaUltimoJogador;
                }
                else if(j == 18){
                    matrizTabuleiro[2][1] = guardaUltimoJogador;
                }
                else if(j == 10){
                    matrizTabuleiro[1][1] = guardaUltimoJogador;
                }
                else if(j == 2){
                    matrizTabuleiro[0][1] = guardaUltimoJogador;
                }
                break;
            }
        }
    }else if(id == 3 || id == 11 || id == 19 || id == 27 || id == 35 || id == 43 || id == 51 || id == 59){
        for (let i = 59; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 59){
                    matrizTabuleiro[7][2] = guardaUltimoJogador;
                }
                else if(j == 51){
                    matrizTabuleiro[6][2] = guardaUltimoJogador;
                }
                else if(j == 43){
                    matrizTabuleiro[5][2] = guardaUltimoJogador;
                }
                else if(j == 35){
                    matrizTabuleiro[4][2] = guardaUltimoJogador;
                }
                else if(j == 27){
                    matrizTabuleiro[3][2] = guardaUltimoJogador;
                }
                else if(j == 19){
                    matrizTabuleiro[2][2] = guardaUltimoJogador;
                }
                else if(j == 11){
                    matrizTabuleiro[1][2] = guardaUltimoJogador;
                }
                else if(j == 3){
                    matrizTabuleiro[0][2] = guardaUltimoJogador;
                }
                break;
            }
        }
    }else if(id == 4 || id == 12 || id == 20 || id == 28 || id == 36 || id == 44 || id == 52 || id == 60){
        for (let i = 60; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 60){
                    matrizTabuleiro[7][3] = guardaUltimoJogador;
                }
                else if(j == 52){
                    matrizTabuleiro[6][3] = guardaUltimoJogador;
                }
                else if(j == 44){
                    matrizTabuleiro[5][3] = guardaUltimoJogador;
                }
                else if(j == 36){
                    matrizTabuleiro[4][3] = guardaUltimoJogador;
                }
                else if(j == 28){
                    matrizTabuleiro[3][3] = guardaUltimoJogador;
                }
                else if(j == 20){
                    matrizTabuleiro[2][3] = guardaUltimoJogador;
                }
                else if(j == 12){
                    matrizTabuleiro[1][3] = guardaUltimoJogador;
                }
                else if(j == 4){
                    matrizTabuleiro[0][3] = guardaUltimoJogador;
                }
                break;
            }
        }
    }else if(id == 5 || id == 13 || id == 21 || id == 29 || id == 37 || id == 45 || id == 53 || id == 61){
        for (let i = 61; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 61){
                    matrizTabuleiro[7][4] = guardaUltimoJogador;
                }
                else if(j == 53){
                    matrizTabuleiro[6][4] = guardaUltimoJogador;
                }
                else if(j == 45){
                    matrizTabuleiro[5][4] = guardaUltimoJogador;
                }
                else if(j == 37){
                    matrizTabuleiro[4][4] = guardaUltimoJogador;
                }
                else if(j == 29){
                    matrizTabuleiro[3][4] = guardaUltimoJogador;
                }
                else if(j == 21){
                    matrizTabuleiro[2][4] = guardaUltimoJogador;
                }
                else if(j == 13){
                    matrizTabuleiro[1][4] = guardaUltimoJogador;
                }
                else if(j == 5){
                    matrizTabuleiro[0][4] = guardaUltimoJogador;
                }
                break;
            }
        }
    }else if(id == 6 || id == 14 || id == 22 || id == 30 || id == 38 || id == 46 || id == 54 || id == 62){
        for (let i = 62; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 62){
                    matrizTabuleiro[7][5] = guardaUltimoJogador;
                }
                else if(j == 54){
                    matrizTabuleiro[6][5] = guardaUltimoJogador;
                }
                else if(j == 46){
                    matrizTabuleiro[5][5] = guardaUltimoJogador;
                }
                else if(j == 38){
                    matrizTabuleiro[4][5] = guardaUltimoJogador;
                }
                else if(j == 30){
                    matrizTabuleiro[3][5] = guardaUltimoJogador;
                }
                else if(j == 22){
                    matrizTabuleiro[2][5] = guardaUltimoJogador;
                }
                else if(j == 14){
                    matrizTabuleiro[1][5] = guardaUltimoJogador;
                }
                else if(j == 6){
                    matrizTabuleiro[0][5] = guardaUltimoJogador;
                }
                break;
            }
        }
    }else if(id == 7 || id == 15 || id == 23 || id == 31 || id == 39 || id == 47 || id == 55 || id == 63){
        for (let i = 63; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 63){
                    matrizTabuleiro[7][6] = guardaUltimoJogador;
                }
                else if(j == 55){
                    matrizTabuleiro[6][6] = guardaUltimoJogador;
                }
                else if(j == 47){
                    matrizTabuleiro[5][6] = guardaUltimoJogador;
                }
                else if(j == 39){
                    matrizTabuleiro[4][6] = guardaUltimoJogador;
                }
                else if(j == 31){
                    matrizTabuleiro[3][6] = guardaUltimoJogador;
                }
                else if(j == 23){
                    matrizTabuleiro[2][6] = guardaUltimoJogador;
                }
                else if(j == 15){
                    matrizTabuleiro[1][6] = guardaUltimoJogador;
                }
                else if(j == 7){
                    matrizTabuleiro[0][6] = guardaUltimoJogador;
                }
                break;
            }
        }
    }
    else if(id == 8 || id == 16 || id == 24 || id == 32 || id == 40 || id == 48 || id == 56 || id == 64){
        for (let i = 64; i > 0; i = i - 8) {
            var j = i.toString();
            if(document.getElementById(j).textContent == ""){
                setPosicaoJogador(i,jogador);
                if(jogador == 1){
                    guardaUltimoJogador = 1;
                    jogador = 2;
                }else{
                    guardaUltimoJogador = 2;
                    jogador = 1;
                }

                if(j == 64){
                    matrizTabuleiro[7][7] = guardaUltimoJogador;
                }
                else if(j == 56){
                    matrizTabuleiro[6][7] = guardaUltimoJogador;
                }
                else if(j == 48){
                    matrizTabuleiro[5][7] = guardaUltimoJogador;
                }
                else if(j == 40){
                    matrizTabuleiro[4][7] = guardaUltimoJogador;
                }
                else if(j == 32){
                    matrizTabuleiro[3][7] = guardaUltimoJogador;
                }
                else if(j == 24){
                    matrizTabuleiro[2][7] = guardaUltimoJogador;
                }
                else if(j == 16){
                    matrizTabuleiro[1][7] = guardaUltimoJogador;
                }
                else if(j == 8){
                    matrizTabuleiro[0][7] = guardaUltimoJogador;
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

function determinarVencedor() {
    var jogador = -1; 
    var contador = 3; // variavel utilizada para contar peças iguais
    var testadiagonal = 0;


    for(let i = 0; i < matrizTabuleiro.length; ++i) 
    {
        for(let j = 0; j < matrizTabuleiro.length; ++j) 
        {
            //verifica se na posicao do tabuleiro existe alguma peca
            if(matrizTabuleiro[i][j] != 0)
            {
                jogador = matrizTabuleiro[i][j];

                if(j < 3)
                {
                    if(i < 3)
                    {
                        //verifica ganhador na vertical abaixo
                        contador = 3;
                        for(let z = (i + 1); z < matrizTabuleiro.length; z++)
                        {
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }
                        }
                        

                        //verifica ganhador na horizontal direita
                        contador = 3;
                        for(let z = (j + 1); z < 4; z++)
                        {
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }
                        } 
                        
                        
                        //verifica ganhador na diagonal principal abaixo
                        contador = 3;
                        testadiagonal = (j+1);
                        for(let z = (i+1); z < matrizTabuleiro.length; z++)
                        {
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if (contador == 0) 
                            {
                                return jogador;
                            }

                        }
                    }
                    else if(i == 3 || i == 4)
                    {
                        //verifica ganhador na vertical abaixo
                        contador = 3;
                        for(let z = (i + 1); z < matrizTabuleiro.length; z++)
                        {
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }    
                            
                            if(contador == 0)
                            {
                                return jogador;
                            }
                        }
                        
                        
                        //verifica ganhador na vertical a cima
                        contador = 3;
                        for(let z = (i - 1); z >= 0; z--)
                        {
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }    
                            
                            if(contador == 0)
                            {
                                return jogador;
                            }
                        }
                        
                        //verifica ganhador na horizontal direita

                        contador = 3;
                        for(let z = (j + 1); z < matrizTabuleiro.length; z++)
                        {
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }    
                            
                            if(contador == 0)
                            {
                                return jogador;
                            }
                        } 

                        //verifica ganhador na diagonal principal abaixo

                        contador = 3;
                        testadiagonal = (j+1);
                        for(let z = (i+1); z < matrizTabuleiro.length; z++)
                        {
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }    
                            
                            if(contador == 0)
                            {
                                return jogador;
                            }

                        }

                        //verifica ganhador na diagonal principal para cima
                        contador = 3;
                        testadiagonal = (j+1);
                        for(let z = (i-1); z >= 0; z--)
                        {
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }

                        }
                    }
                    else
                    {
                        console.log('entrou');
                        //console.log(jogador);
                        //verifica ganhador na vertical a cima
                        contador = 3;
                        for(let z = (i - 1); z >= 0; z--)
                        {
                            console.log('verifica veritical cima');
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }
                            else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }
                        }
                        
                        //verifica ganhador na horizontal direita
                        contador = 3;
                        for(let z = (j + 1); z < matrizTabuleiro.length; z++)
                        {
                            
                            console.log('verifica horizintal direita');
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                                console.log(contador);
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }
                        } 
                        
                        
                        //verifica ganhador na diagonal principal para cima
                        contador = 3;
                        testadiagonal = (j+1);
                        
                        for(let z = (i-1); z >= 0; z--)
                        {
                            console.log('verifica diagonal cima');
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }
                        }
                    }
                }
                else if(j == 4 || j == 3){
                    
                    if(i<3){
                        //verifica horizontal esquerda
                        contador = 3;
                        for (let z = (j - 1); z >= 0; z--){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica horizontal direita
                        contador = 3;
                        for (let z = (j + 1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal abaixo esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal abaixo direita
                        contador = 3;
                        testadiagonal = (j+1);
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica vertical abaixo
                        contador = 3;
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }
                    }else if(i == 3 || i == 4){
                        //verifica horizontal esquerda
                        contador = 3;
                        for (let z = (j - 1); z >= 0; z--){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica horizontal direita
                        contador = 3;
                        for (let z = (j + 1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal abaixo esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal abaixo direita
                        contador = 3;
                        testadiagonal = (j+1);
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica vertical abaixo
                        contador = 3;
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica vertical acima
                        contador = 3;
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal acima esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal acima direita
                        contador = 3;
                        testadiagonal = (j+1);
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }
                    }else{
                        //verifica ganhador na vertical a cima
                        contador = 3;
                        for(let z = (i - 1); z >= 0; z--)
                        {
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }    
                            
                            if(contador == 0)
                            {
                                return jogador;
                            }
                        }
                        
                        //verifica ganhador na horizontal direita

                        contador = 3;
                        for(let z = (j + 1); z < matrizTabuleiro.length; z++)
                        {
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }    
                            
                            if(contador == 0)
                            {
                                return jogador;
                            }
                        } 

                        //verifica horizontal esquerda
                        contador = 3;
                        for (let z = (j - 1); z >= 0; z--){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal acima esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal acima direita
                        contador = 3;
                        testadiagonal = (j+1);
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][testadiagonal++] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }
                    }
                }else{
                    if(i<3){
                        //verifica horizontal esquerda
                        contador = 3;
                        for (let z = (j - 1); z >= 0; z--){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal abaixo esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica vertical abaixo
                        contador = 3;
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }
                    }else if(i == 3 || i == 4){
                        //verifica vertical abaixo
                        contador = 3;
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                         //verifica vertical acima
                         contador = 3;
                         for (let z = (i-1); z >= 0; z--){
                             if(matrizTabuleiro[z][j] == jogador)
                             {
                                 contador--;
                             }else{
                                 break;
                             }
 
                             if(contador == 0)
                             {
                                 return jogador;
                             }                    
                         }

                         //verifica horizontal esquerda
                        contador = 3;
                        for (let z = (j - 1); z >= 0; z--){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal abaixo esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i+1); z < matrizTabuleiro.length; z++){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica diagonal acima esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }
                    }else{
                        //verifica diagonal acima esquerda
                        contador = 3;
                        testadiagonal = (j-1);
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][testadiagonal--] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica horizontal esquerda
                        contador = 3;
                        for (let z = (j - 1); z >= 0; z--){
                            if(matrizTabuleiro[i][z] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }

                        //verifica vertical acima
                        contador = 3;
                        for (let z = (i-1); z >= 0; z--){
                            if(matrizTabuleiro[z][j] == jogador)
                            {
                                contador--;
                            }else{
                                break;
                            }

                            if(contador == 0)
                            {
                                return jogador;
                            }                    
                        }
                    }
                } 
            }
        }
    }
    return -2;
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
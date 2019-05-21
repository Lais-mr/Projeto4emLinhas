class EstadoTabuleiro{
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

    minimax = 0;
    acao = [];
    melhorAcao = [-1,-1];

    constructor(){
        
    }

    realizarJogada(jogador, i, j) 
    {
        // console.log(jogador);
        // console.log(i);
        // console.log("entrei realizaJogada");
        
        if(i != 7)
        {
            
            if(this.matrizTabuleiro[i][j] != 0 || this.matrizTabuleiro[i + 1][j] == 0)
            {
                return false;
            }
        }
        else if(i == 7)
        {
            if(this.matrizTabuleiro[i][j] != 0)
            {
                return false;
            }
        }

        this.acao = [i,j];
        this.matrizTabuleiro[i][j] = jogador;
        return true; 

            
    }

    set melhorAcao(melhorAcao) {
        this.melhorAcao = [melhorAcao[0],melhorAcao[1]];
    }

    get melhorAcao() {
        return this.melhorAcao;
    }

    set acao(acao) {
        this.acao = [acao[0],acao[1]];
    }
    
    set miniMax(valor) {
        this.minimax = valor;
    }
    get miniMax() {
        return this.minimax;
    }
    
    get acao(){
        return this.acao;
    }

    filhos(jogador) 
    {
        let filhos = [];
        let acoes = [];
        for(let i = 0; i < this.matrizTabuleiro.length; i++) 
        {
            for(let j =0; j < this.matrizTabuleiro.length; j++) 
            {
                let e = this.clonar();
                // console.log("Clone");
                // console.log(e.matrizTabuleiro);
                if(e.realizarJogada(jogador, i, j)) 
                {
                    // console.log("Realiza jogada");
                    // console.log(e.matrizTabuleiro);
                    filhos.push(e);
                }
            }
        }
        return filhos;
    }

    clonar() 
    {
       let clone = new EstadoTabuleiro();
        for(let i = 0; i < this.matrizTabuleiro.length; ++i) 
        {
            for(let j = 0; j < this.matrizTabuleiro.length; ++j) 
            {
                clone.matrizTabuleiro[i][j] = this.matrizTabuleiro[i][j];
            }
        }
        return clone;
    }

    determinarVencedor() {
        var jogador = -1; 
        var contador = 3; // variavel utilizada para contar peças iguais
        var testadiagonal = 0;
        let verificaLinha0 = 0;
        for (let i = 0; i < this.matrizTabuleiro.length; i++) { 
            if(this.matrizTabuleiro[0][i] != 0){
                verificaLinha0++;
            }
        }

        if(verificaLinha0 == 8){
            return -3;
        }
    
        for(let i = 0; i < this.matrizTabuleiro.length; ++i) 
        {
            for(let j = 0; j < this.matrizTabuleiro.length; ++j) 
            {
                //verifica se na posicao do tabuleiro existe alguma peca
                if(this.matrizTabuleiro[i][j] != 0)
                {
                    jogador = this.matrizTabuleiro[i][j];
    
                    if(j < 3)
                    {
                        if(i < 3)
                        {
                            //verifica ganhador na vertical abaixo
                            contador = 3;
                            for(let z = (i + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for(let z = (i+1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                            for(let z = (i + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                            for(let z = (j + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for(let z = (i+1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                        else
                        {
                            //console.log('entrou');
                            //console.log(jogador);
                            //verifica ganhador na vertical a cima
                            contador = 3;
                            for(let z = (i - 1); z >= 0; z--)
                            {
                                //console.log('verifica veritical cima');
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                            for(let z = (j + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                
                                //console.log('verifica horizintal direita');
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    contador--;
                                    //console.log(contador);
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
                                //console.log('verifica diagonal cima');
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for (let z = (j + 1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for (let z = (j + 1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                            for(let z = (j + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
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
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
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
                                 if(this.matrizTabuleiro[z][j] == jogador)
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
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
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
                                if(this.matrizTabuleiro[i][z] == jogador)
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
                                if(this.matrizTabuleiro[z][j] == jogador)
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

    contaPeca() {
        var jogador = -1;
        var contIA = []; //array que guarda a quantidade de peça iguais da ia
        var contUsuario = []; //array que guarda a quantidade de peça iguais do usuario
        var cont = 0; //conta as pecas
        var testadiagonal = 0;
        let verificaLinha0 = 0;

        //verifica se o tabuleiro esta cheio
        for (let i = 0; i < this.matrizTabuleiro.length; i++) { 
            if(this.matrizTabuleiro[0][i] != 0){
                verificaLinha0++;
            }
        }

        if(verificaLinha0 == 8){
            return -3;
        }
    
        //verifica quantidade de pecas em todos os lados
        for(let i = 0; i < this.matrizTabuleiro.length; ++i) 
        {
            for(let j = 0; j < this.matrizTabuleiro.length; ++j) 
            {
                //verifica se na posicao do tabuleiro existe alguma peca
                if(this.matrizTabuleiro[i][j] != 0)
                {
                    jogador = this.matrizTabuleiro[i][j];
    
                    if(j < 3)
                    {
                        if(i < 3)
                        {
                            //verifica ganhador na vertical abaixo
                            for(let z = (i + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }

                            
                            
    
                            //verifica ganhador na horizontal direita
                            for(let z = (j + 1); z < 4; z++)
                            {
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            } 
                            
                            
                            //verifica ganhador na diagonal principal abaixo
                            testadiagonal = (j+1);
                            for(let z = (i+1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                        }
                        else if(i == 3 || i == 4)
                        {
                            //verifica ganhador na vertical abaixo
                            for(let z = (i + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                            
                            
                            //verifica ganhador na vertical a cima
                            
                            for(let z = (i - 1); z >= 0; z--)
                            {
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                            
                            //verifica ganhador na horizontal direita

                            for(let z = (j + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            } 
    
                            //verifica ganhador na diagonal principal abaixo

                            testadiagonal = (j+1);
                            for(let z = (i+1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
    
                            }
    
                            //verifica ganhador na diagonal principal para cima
                            testadiagonal = (j+1);
                            for(let z = (i-1); z >= 0; z--)
                            {
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                        }
                        else
                        {
                            //console.log('entrou');
                            //console.log(jogador);
                            //verifica ganhador na vertical a cima
                            for(let z = (i - 1); z >= 0; z--)
                            {
                                //console.log('verifica veritical cima');
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }
                                else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                            
                            //verifica ganhador na horizontal direita
                            for(let z = (j + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                
                                //console.log('verifica horizintal direita');
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                    //console.log(contador);
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            } 
                            
                            
                            //verifica ganhador na diagonal principal para cima
                            testadiagonal = (j+1);
                            
                            for(let z = (i-1); z >= 0; z--)
                            {
                                //console.log('verifica diagonal cima');
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    else if(j == 4 || j == 3){
                        
                        if(i<3){
                            //verifica horizontal esquerda
                            for (let z = (j - 1); z >= 0; z--){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica horizontal direita
                            for (let z = (j + 1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
    
                            //verifica diagonal abaixo esquerda
                            testadiagonal = (j-1);
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
    
                            //verifica diagonal abaixo direita
                            testadiagonal = (j+1);
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
    
                            //verifica vertical abaixo
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }else if(i == 3 || i == 4){
                            //verifica horizontal esquerda
                            for (let z = (j - 1); z >= 0; z--){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica horizontal direita
                            for (let z = (j + 1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica diagonal abaixo esquerda
                            testadiagonal = (j-1);
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
    
                            //verifica diagonal abaixo direita
                            testadiagonal = (j+1);
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica vertical abaixo
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica vertical acima
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica diagonal acima esquerda
                            testadiagonal = (j-1);
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica diagonal acima direita
                            testadiagonal = (j+1);
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }else{
                            //verifica ganhador na vertical a cima
                            for(let z = (i - 1); z >= 0; z--)
                            {
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                } 
                            }
                            
                            //verifica ganhador na horizontal direita
                            for(let z = (j + 1); z < this.matrizTabuleiro.length; z++)
                            {
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            } 
    
                            //verifica horizontal esquerda
                            for (let z = (j - 1); z >= 0; z--){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica diagonal acima esquerda
                            testadiagonal = (j-1);
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica diagonal acima direita
                            testadiagonal = (j+1);
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][testadiagonal++] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
                        }
                    }else{
                        if(i<3){
                            //verifica horizontal esquerda
                            for (let z = (j - 1); z >= 0; z--){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica diagonal abaixo esquerda
                            testadiagonal = (j-1);
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica vertical abaixo
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }else if(i == 3 || i == 4){
                            //verifica vertical abaixo
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                             //verifica vertical acima
                             for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                             }
    
                             //verifica horizontal esquerda
                            for (let z = (j - 1); z >= 0; z--){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
    
                            //verifica diagonal abaixo esquerda
                            testadiagonal = (j-1);
                            for (let z = (i+1); z < this.matrizTabuleiro.length; z++){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
    
                            //verifica diagonal acima esquerda
                            testadiagonal = (j-1);
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }else{
                            //verifica diagonal acima esquerda
                            testadiagonal = (j-1);
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][testadiagonal--] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
    
                            //verifica horizontal esquerda
                            for (let z = (j - 1); z >= 0; z--){
                                if(this.matrizTabuleiro[i][z] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
    
                            //verifica vertical acima
                            for (let z = (i-1); z >= 0; z--){
                                if(this.matrizTabuleiro[z][j] == jogador)
                                {
                                    cont++;
                                }else{
                                    if(jogador == 1)
                                    {
                                        contIA.push(cont);
                                        cont = 0;
                                    }
                                    else{
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }
                    } 
                }
            }
        }
        //verificar maior em cada array
        contIA.sort(function(a, b){

            return (b - a);
        
        });
        contUsuario.sort(function(a, b){

            return (b - a);
        
        });

        if(contIA[0] >= contUsuario[0])
        {
            return 1;
        }
        else
        {
            return -1;
        }
    }
}
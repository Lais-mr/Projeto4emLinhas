class EstadoTabuleiro{
    //matriz que representa o estado do tabuleiro
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

    minimax = 0; // valor de minimax de cada estado criado
    acao = []; // acao que foi realizada para chegar nesse estado (valor de i, j para posicionar uma peça)
    melhorAcao = [-1,-1]; // valores de i, j -> posicicao onde o estado realizara 
                          // a melhor jogada de acordo com o valor de minimax

    constructor(){
        
    }

    //Realizar jogada no tabuleiro
    realizarJogada(jogador, i, j) 
    {     
        //Verifica se a linha que sera realizada a jogada é nao e a ultima 
        if(i != 7)
        {
            //Verifica se a posicao onde se deseja realizar a jogada é invalida 
            //ou se abaixo dessa posicao nao existe uma peca
            if(this.matrizTabuleiro[i][j] != 0 || this.matrizTabuleiro[i + 1][j] == 0)
            {
                return false; //não foi possivel realizar a jogada
            }
        }
        //Verifica se a linha que sera realizada a jogada é a ultima
        else if(i == 7)
        {
            //Verifica se a posicao onde se deseja realizar a jogada é invalida
            if(this.matrizTabuleiro[i][j] != 0)
            {
                return false;//não foi possivel realizar a jogada
            }
        }

        //Caso seja possivel realizar a jogada
        this.acao = [i,j]; //seta a acao
        this.matrizTabuleiro[i][j] = jogador; //coloca o jogador no tabuleiro
        return true; //retorna que foi possivel realizar a jogada

            
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

    //Gerador de filhor a partir de um estado pai
    filhos(jogador) 
    {
        let filhos = []; // array de filhos
        let acoes = [];
        
        //Percorre todo o tabuleiro
        for(let i = 0; i < this.matrizTabuleiro.length; i++) 
        {
            for(let j =0; j < this.matrizTabuleiro.length; j++) 
            {
                let e = this.clonar(); // clona o estado pai

                //tenta realizar a jogada
                //se for possivel guarda esse estado no array de filhos 
                //senao nao faz nada
                if(e.realizarJogada(jogador, i, j)) 
                {
                    filhos.push(e);
                }
            }
        }
        return filhos; //retorna o vetor de filhos
    }

    //Clonar um estados
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

    //Verificar se existe um vencedor
    determinarVencedor() {
        var jogador = -1; //inicialmente jogador == jogador invalido 
        var contador = 3; // variavel utilizada para determinar se alguem venceu
        var testadiagonal = 0; // variavel usada para determinar a diagonal
        let verificaLinha0 = 0; //variavel utilizada verificar se o tabuleiro esta cheio

        //Verificar se a primeira linha do tabuleiro (linha 0) esta cheia
        for (let i = 0; i < this.matrizTabuleiro.length; i++) { 
            if(this.matrizTabuleiro[0][i] != 0){
                verificaLinha0++;
            }
        }
        if(verificaLinha0 == 8){
            return -3; //Se o tabuleiro estiver cheio retorna -3
        }

        //Percorrer o tabuleiro e determinar se existe algum vencedor    
        for(let i = 0; i < this.matrizTabuleiro.length; ++i) 
        {
            for(let j = 0; j < this.matrizTabuleiro.length; ++j) 
            {
                //verifica se na posicao do tabuleiro existe alguma peca
                if(this.matrizTabuleiro[i][j] != 0)
                {
                    jogador = this.matrizTabuleiro[i][j]; //jogador == jogador em uma determinada posicao
    
                    //Se jogador esta posicionado em uma coluna menor que 3
                    if(j < 3)
                    {
                        //Se jogador esta posicionado em uma linha menor que 3
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

                        //Se jogador esta posicionado na linha 3 ou 4
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

                        //Se jogador esta posicionado em uma linha maior que 4
                        else
                        {
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

                    //Se jogador esta posicionado na coluna 3 ou 4
                    else if(j == 4 || j == 3)
                    {
                        //Se jogador esta posicionado em uma linha menor que 3
                        if(i < 3)
                        {
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
                        }

                        //Se jogador esta posicionado na linha 3 ou 4
                        else if(i == 3 || i == 4)
                        {
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
                        }
                        
                        //Se jogador esta posicionado em uma linha maior que 4
                        else
                        {
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
                    }
                    
                    //Se jogador esta posicionado em uma coluna maior que 4
                    else
                    {
                        //Se jogador esta posicionado em uma linha menor que 3
                        if(i < 3)
                        {
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
                        }
                        
                        //Se jogador esta posicionado na linha 3 ou 4
                        else if(i == 3 || i == 4)
                        {
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
                        }
                        
                        //Se jogador esta posicionado em uma linha maior que 4
                        else
                        {
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
        return -2; //Se nao tiver nenhum ganhador retorna -2
    }

    //Conta o numero de pecas em sequencia
    contaPeca() {
        var jogador = -1; //inicialmente jogador == jogador invalido 
        var contIA = []; //array que guarda a quantidade de peça iguais da ia
        var contUsuario = []; //array que guarda a quantidade de peça iguais do usuario
        var cont = 0; //conta as pecas
        var testadiagonal = 0; //variavel usada para determinar a diagonal
        let verificaLinha0 = 0; //variavel utilizada verificar se o tabuleiro esta cheio

        //verifica se o tabuleiro esta cheio
        for (let i = 0; i < this.matrizTabuleiro.length; i++) { 
            if(this.matrizTabuleiro[0][i] != 0){
                verificaLinha0++;
            }
        }
        if(verificaLinha0 == 8){
            return -3; //Se o tabuleiro estiver cheio retorna -3
        }
    
        //Percorre o tabuleiro e conta as pecas iguais em sequencia
        for(let i = 0; i < this.matrizTabuleiro.length; ++i) 
        {
            for(let j = 0; j < this.matrizTabuleiro.length; ++j) 
            {
                //verifica se na posicao do tabuleiro existe alguma peca
                if(this.matrizTabuleiro[i][j] != 0)
                {
                    jogador = this.matrizTabuleiro[i][j]; //jogador == jogador em uma determinada posicao
    
                    //Se jogador esta posicionado em uma coluna menor que 3
                    if(j < 3)
                    {
                        //Se jogador esta posicionado em uma linha menor que 3
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                        }

                        //Se jogador esta posicionado na linha 3 ou 4
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
                                    else if(jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                        }

                        //Se jogador esta posicionado em uma linha maior que 4
                        else
                        {
                            //verifica ganhador na vertical a cima
                            for(let z = (i - 1); z >= 0; z--)
                            {
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    //Se jogador esta posicionado na coluna 3 ou 4
                    else if(j == 4 || j == 3)
                    {
                        //Se jogador esta posicionado em uma linha menor que 3
                        if(i < 3)
                        {
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }
                        
                        //Se jogador esta posicionado na linha 3 ou 4
                        else if(i == 3 || i == 4)
                        {
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }
                        
                        //Se jogador esta posicionado em uma linha maior que 4
                        else
                        {
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                   
                            }
                        }
                    }
                    
                    //Se jogador esta posicionado em uma coluna maior que 4
                    else
                    {
                        //Se jogador esta posicionado em uma linha menor que 3
                        if(i<3)
                        {
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }

                        //Se jogador esta posicionado na linha 3 ou 4
                        else if(i == 3 || i == 4)
                        {
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){ 
                                        contUsuario.push(cont);
                                        cont = 0;
                                    }
                                    break;
                                }                    
                            }
                        }
                        
                        //Se jogador esta posicionado em uma linha maior que 4
                        else
                        {
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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
                                    else if (jogador == -1){
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

        //Ordenar array contIA de forma decrescente (a primeira posicao do array tera o maior valor de numero de pecas em sequencia da IA)
        contIA.sort(function(a, b){

            return (b - a);
        
        });

        //Ordenar array contIA de forma decrescente (a primeira posicao do array tera o maior valor de numero de pecas em sequencia do usuario)
        contUsuario.sort(function(a, b){

            return (b - a);
        
        });

        //console.log("IA " + contIA);
        //console.log("Usuario " + contUsuario);

        //Se o valor de numero de pecas em sequencia da IA for maior que o do usuario
        if(contIA[0] >= contUsuario[0])
        {
            return 1;
        }

        //Se o valor de numero de pecas em sequencia do usuario for maior que o da IA
        else
        {
            return -1;
        }
    }
}
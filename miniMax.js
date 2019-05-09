class MiniMax{
    estado = new EstadoTabuleiro();

    constructor(estado){
        this.estado = estado;
    }

    melhorJogada(){
        return MiniMax(this.estado);
    }

    minimax(estado){
        melhorJogada = max(estado);
        return melhorJogada.getMelhorAcao();
    }

    max(estado){
        possivelVencedor = estado.determinarVencedor();
        if(possivelVencedor != -2){
            estado.minimax(possivelVencedor);
            return estado;
        }

        novosEstados = [];
        novosEstados = estado.filhos(2);
        max = Number.MIN_VALUE;
        melhor = null;
        for (let i = 0; i < novosEstados.length; i++) {
            filho = novosEstados[i];
            possivelMelhor = min(filho);
            if(possivelMelhor.miniMax() > max){
                melhor = possivelMelhor;
                max = possivelMelhor.miniMax();
            }          
        }

        estado.melhorAcao(melhor.acao[0],melhor.acao[1]);
        estado.miniMax(max);
        return estado;
    }

    min(estado){
        possivelVencedor  = estado.determinarVencedor();  
        if(possivelVencedor != -2){
            estado.miniMax(possivelVencedor);
            return estado;
        }      

        novosEstados = [];
        novosEstados = estado.filhos(1);
        min = Number.MAX_VALUE;
        melhor = null;

        for (let i = 0; i < novosEstados.length; i++) {
            filho = novosEstados[i];

            possivelMelhor = max(filho);
            if(possivelMelhor.miniMax() < min){
                melhor = possivelMelhor;
                min = possivelMelhor.miniMax();
            }
            
        }

        estado.melhorAcao(melhor.acao[0],melhor.acao[1]);
        estado.miniMax(min);
        return estado;
    }

}
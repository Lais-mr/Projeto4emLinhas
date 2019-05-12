class MiniMax{
    estado = new EstadoTabuleiro();

    constructor(estado){
        this.estado = estado;
    }

    minimax(estado){

        let melhorJogada = this.max(estado);
        return melhorJogada.melhorAcao;

    }

    melhorJogada(){
        return this.minimax(this.estado);
    }

    max(estado){
        let possivelVencedor = estado.determinarVencedor();
        //console.log(possivelVencedor);
        if(possivelVencedor != -2){
            estado.miniMax  = possivelVencedor;
            return estado;
        }

        let novosEstados = [];
        novosEstados = estado.filhos(2);
        console.log(novosEstados);
        let max = Number.MIN_VALUE;
        let melhor = null;
        for (let i = 0; i < novosEstados.length; i++) {
            console.log("teste");
            let filho = novosEstados[i];
            possivelMelhor = this.min(filho);
            if(possivelMelhor.miniMax() > max){
                melhor = possivelMelhor;
                max = possivelMelhor.miniMax();
            }          
        }
        console.log("cheguei aq");
        estado.melhorAcao = melhor;
        estado.miniMax = max;
        return estado;
    }

    min(estado){
        let possivelVencedor  = estado.determinarVencedor();  
        if(possivelVencedor != -2){
            estado.miniMax(possivelVencedor);
            return estado;
        }      

        let novosEstados = [];
        novosEstados = estado.filhos(1);
        let min = Number.MAX_VALUE;
        let melhor = null;

        for (let i = 0; i < novosEstados.length; i++) {
            let filho = novosEstados[i];

            possivelMelhor = this.max(filho);
            if(possivelMelhor.miniMax() < min){
                melhor = possivelMelhor;
                min = possivelMelhor.miniMax();
            }
            
        }

        estado.melhorAcao = melhor;
        estado.miniMax = min;
        return estado;
    }

}
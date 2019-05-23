class MiniMax{
    estado = new EstadoTabuleiro();
    alfa = Number.MIN_VALUE; //MAX
    beta = Number.MAX_VALUE; //MIN  

    constructor(estado){
        this.estado = estado;
    }

    minimax(estado){
        let melhorJogada = this.max(estado, 1);
        return melhorJogada.melhorAcao;
    }

    melhorJogada(){
        return this.minimax(this.estado);
    }

    max(estado, nivel)
    {
        let possivelVencedor = estado.determinarVencedor();
        if(possivelVencedor != -2)
        {
            if(possivelVencedor == -3){
                estado.miniMax = 0;
                return estado;
            }

            estado.miniMax  = possivelVencedor;
            return estado;
        }

        if(nivel == 7){
            estado.miniMax = estado.contaPeca();
            return estado;
        }

        let novosEstados = estado.filhos(1);
        let max = -10;
        let melhor = null;
        for (let i = 0; i < novosEstados.length; i++) 
        {
            let filho = novosEstados[i];
            let possivelMelhor = this.min(filho, nivel+1);

            if(possivelMelhor.miniMax > max)
            {
                melhor = possivelMelhor;
                max = possivelMelhor.miniMax;
            }

            //poda
            if(possivelMelhor.miniMax > this.alfa){
                this.alfa = possivelMelhor.miniMax;
                if(this.alfa < this.beta)
                {
                    break;
                }
            }
          
        }
        if(estado.melhorAcao[0] == -1 && estado.melhorAcao[1] == -1){
            estado.melhorAcao = melhor.acao;
        }else{
            estado.melhorAcao = melhor.melhorAcao;
        }

        estado.miniMax = max;
        return estado;
    }

    min(estado, nivel)
    {
        let possivelVencedor  = estado.determinarVencedor();  
        if(possivelVencedor != -2)
        {
            if(possivelVencedor == -3){
                estado.miniMax = 0;
                return estado;
            }

            estado.miniMax = possivelVencedor;
            return estado;
        }

        if(nivel == 7){
            estado.miniMax = estado.contaPeca();
            
            //console.log("Estado: " +estado.matrizTabuleiro);
            return estado;
        }

        let novosEstados = [];
        novosEstados = estado.filhos(-1);
        let min = 10;
        let melhor = null;

        for (let i = 0; i < novosEstados.length; i++)
        {
            let filho = novosEstados[i];

            let possivelMelhor = this.max(filho, nivel+1);

            if(possivelMelhor.miniMax < min)
            {
                melhor = possivelMelhor;
                min = possivelMelhor.miniMax;
            }
            //poda
            if(possivelMelhor.miniMax < this.beta){
                this.beta = possivelMelhor.miniMax;
                if(this.alfa > this.beta)
                {
                    break;
                }
            }
    
        }

        if(estado.melhorAcao[0] == -1 && estado.melhorAcao[1] == -1){
            estado.melhorAcao = melhor.acao;
        }else{
            estado.melhorAcao = melhor.melhorAcao;
        }
        
        estado.miniMax = min;
        return estado;

    }

}
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

    max(estado)
    {
        let possivelVencedor = estado.determinarVencedor();
        //console.log(possivelVencedor);
        if(possivelVencedor != -2)
        {
            console.log("Entrei no if");
            console.log(estado);
            estado.miniMax  = possivelVencedor;
            return estado;
        }

        let novosEstados = [];
        novosEstados = estado.filhos(2);
        console.log("Max");
        //console.log(novosEstados);
        let max = Number.MIN_VALUE;
        let melhor = null;
        for (let i = 0; i < novosEstados.length; i++) 
        {
            let filho = novosEstados[i];
            let possivelMelhor = this.min(filho);
            console.log(possivelMelhor.miniMax);
            if(possivelMelhor.miniMax> max)
            {
                melhor = possivelMelhor;
                max = possivelMelhor.miniMax;
            }          
        }
        estado.melhorAcao = melhor;
        estado.miniMax = max;
        console.log("Não entrei no if");
        console.log(estado);
        return estado;
    }

    min(estado)
    {
        
        let possivelVencedor  = estado.determinarVencedor();  
        if(possivelVencedor != -2)
        {
            console.log("Entrei no if");
            console.log(estado);
            estado.miniMax = possivelVencedor;
            return estado;
        }      

        let novosEstados = [];
        novosEstados = estado.filhos(1);
        console.log("Min");
        // console.log(novosEstados);
        let min = Number.MAX_VALUE;
        let melhor = null;

        for (let i = 0; i < novosEstados.length; i++)
        {
            let filho = novosEstados[i];

            let possivelMelhor = this.max(filho);
            console.log(possivelMelhor.miniMax);
            if(possivelMelhor.miniMax < min)
            {
                melhor = possivelMelhor;
                min = possivelMelhor.miniMax;
            }
            
        }

        estado.melhorAcao = melhor;
        estado.miniMax = min;
        console.log("Não entrei no if");
        console.log(estado);
        return estado;

    }

}
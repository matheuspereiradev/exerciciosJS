class ContaBancaria{
    constructor(titular,saldoContaCorrente,saldoContaPoupanca,jurosPoupanca,senha){
        this.saldoContaCorrente=saldoContaCorrente
        this.saldoContaPoupanca=saldoContaPoupanca
        this.titular=titular
        this.jurosPoupanca=jurosPoupanca
        this.senha=senha
    }

    sacar(valor,conta,senha){
        if(senha===this.senha){
            if(conta=='ContaCorrente'){
                if(this.saldoContaCorrente<=0){
                    console.log('saldo insuficiente')
                }else if((this.saldoContaCorrente-valor)<0){
                    console.log('saldo insuficiente')
                }else{
                    this.saldoContaCorrente-=valor
                }
            }else if(conta=='ContaPoupanca'){
                if(this.saldoContaPoupanca<=0){
                    console.log('saldo insuficiente')
                }else if((this.saldoContaPoupanca-valor)<0){
                    console.log('saldo insuficiente')
                }else{
                    this.saldoContaPoupanca-=valor
                }
            }
        }else{
            console.log('senha errada')
        }
    }

    depositar(valor,conta){
        if(conta=='ContaCorrente'){
            this.saldoContaCorrente+=valor;
            return this.saldo();
        }else if(conta=='ContaPoupanca'){
            this.saldoContaPoupanca+=valor;
            return this.saldo();
        }
    }

    saldo(){
        console.log('Titular:'+this.titular)
        console.log('Saldo conta corrente:'+this.saldoContaCorrente)
        console.log('Saldo conta poupança:'+this.saldoContaPoupanca)
        console.log('Taxa de juros Poupaça:'+(this.jurosPoupanca*100)+'%')
    }

    transerirParaPoupanca(valor){
        this.saldoContaCorrente-=valor;
        this.saldoContaPoupanca+=(valor-(valor*this.jurosPoupanca));
    }
}

conta=new ContaBancaria('Matheus',100,30,0.25,123)
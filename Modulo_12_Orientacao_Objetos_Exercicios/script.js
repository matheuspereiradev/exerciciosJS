class ContaBancaria{
    constructor(){
    };

    depositar(valor){
        this.saldo+=valor
    };

    sacar(valor){
        if(this.saldo<=0){
            console.log('saldo insuficeinte')
        }else if((this.saldo-valor)<0){
            console.log('Limite indiponivel')
        } else{
            this.saldo-=valor
        }
    };

    verSaldo(){
        return this.saldo
    }
};

ContaBancaria.prototype.saldo=0;

let conta=new ContaBancaria();

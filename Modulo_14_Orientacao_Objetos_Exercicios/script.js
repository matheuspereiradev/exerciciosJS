class Carro{

    constructor(marca,cor,gasolinaRestante,kmporl){
        this.marca=marca,
        this.cor=cor,
        this.gasolinaRestante=gasolinaRestante,
        this.ligado=false
        this.kmporl=kmporl
    }

    ligar(){
        this.ligado=true;
    }

    desligar(){
        this.ligado=false;
    }

    dirigir(km){
        if(this.ligado){
            let consumido=km/this.kmporl;
            this.gasolinaRestante=-consumido;
        }else{
            console.log('desligado')
        }
    }

    abastecer(qntd){
        if(!this.ligado){
             this.gasolinaRestante+=qntd;
        }else{
            console.log('ligado')
        }
    }

}

let carro=new Carro('Prisma', 'branco', 100,9)
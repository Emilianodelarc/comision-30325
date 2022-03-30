class Banco {
    constructor(credito, banco, cuota){
        this.credito = credito;
        this.banco = banco;
        this.cuota= cuota;
    }
    

    calcularCuotas(){
        console.log(this.banco, this.credito, this.cuota)
        let cuotas = this.calcularPrestamo(this.banco, this.credito)/ this.cuota
        return cuotas
    }

    calcularPrestamo(banco,credito){
        let interes;

        switch (banco) {
            case 'santander':
                interes = 1.20
                break;
        
            case 'macro':
                interes = 1.30
                break;
        
            case 'provincia':
                interes = 1.70
                break;
        
            default:
                console.log('banco no esta')
                break;
        }

        return credito * interes
    }
}


function capturar() {
    
    let creditoCapturar = Number(prompt('ingrese monto de credito'))
    let bancoCapturar = prompt('ingrese un banco').toLowerCase()
    let cuotaCapturar =  Number(prompt('ingrese cantidad de cuota'))

    

    const nuevoCredito = new Banco(creditoCapturar, bancoCapturar, cuotaCapturar)

    const cliente2 = new Banco(35000,'macro',12)
    
    console.log(nuevoCredito)

    mostrar(nuevoCredito, cliente2)
}


function mostrar(cliente, cliente2) {

    console.log('sus cuotas sera de: $' + cliente.calcularCuotas())

    console.log('sus cuotas sera de: $' + cliente2.calcularCuotas().toFixed(2) +" "+cliente2.banco)//toFixed(2) me muestra solo 2 decimales y no todos
}


capturar()
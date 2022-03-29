let credito = parseInt(prompt("ingrese el monto de credito"))
let meses = parseInt(prompt("ingrese la cantidad de cuotas"))

cuotas()
cantidadCuotas()

function intereses(){
	let interes = 27;

	let inteMen = (interes / 12) / 100;

	 console.log("el interes es " + interes + "%");

	 return inteMen 
	 
}

function cuotas(){ 
	
	
	let cuotaInt = (credito * (1 + (intereses()*meses)))/meses

	console.log("su cuota es " + cuotaInt.toFixed(2));

}

function cantidadCuotas(){

	 for (let i = 0; i <= meses ; i++){
	 console.log("cuotas nro: " + i )
	
	cuotas();
	}

}

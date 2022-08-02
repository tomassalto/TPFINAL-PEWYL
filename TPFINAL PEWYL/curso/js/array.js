let placasStock = [
    {id:1, name: "Nvidia Geforce 2060", img: './imagenes/geforce-rtx-2060-super-ga.jpg', ram:"6gb", precio: 150000, marca: 'Zotac',stock: 5, cantidad: 1, clave: "p" },
    {id:2, name: "Nvidia Geforce 3060", img: './imagenes/3060.jpg', ram:"8gb",precio: 145000, marca: "Zotac",stock: 8, cantidad: 1, clave: "p" },
    {id:3, name: "Nvidia Geforce 3060TI", img: './imagenes/3060TI.jpg', ram:"8gb", precio: 167000, marca: 'PNY',stock: 10, cantidad: 1, clave: "p" },
    {id:4, name: "Nvidia Geforce 3070", img: './imagenes/3070.jpg', ram:"8gb", precio: 210000, marca: 'Zotac',stock: 7, cantidad: 1, clave: "p" },
    {id:5, name: "Nvidia Geforce 3070TI", img: './imagenes/3070TI.jpg', ram:"8gb", precio: 260000, marca: 'Zotac',stock: 5, cantidad: 1, clave: "p" },
	{id:6, name: "Nvidia Geforce 3080", img: './imagenes/3080.jpg', ram:"8gb", precio: 347000, marca: 'MSI',stock: 20, cantidad: 1, clave: "p" },
    {id:7, name: "Nvidia Geforce 3080TI", img: './imagenes/3080TI.jpg', ram:"8gb", precio: 410000, marca: 'PNY',stock: 11, cantidad: 1, clave: "p" },
    {id:8, name: "Nvidia Geforce 3090", img: './imagenes/3090.jpg', ram:"8gb", precio: 582000, marca: 'Zotac',stock: 2, cantidad: 1, clave: "p" },
	{id:9, name: "Monitor 144hz", img: './imagenes/monitorjpg.jpg', precio: 53000, marca:'BenQ', cantidad: 1,stock: 1, pulgada: 26, clave: "m",  },
	{id:10, name: "Monitor 20MNK400H", img: './imagenes/lg20.jpg', pulgada: "20", precio: 24000, marca:'LG',stock: 6, cantidad: 1, clave: "m"  },
	{id:11, name: "Monitor T350H FHD", img: './imagenes/monitor2275.jpg', pulgada: 22, precio: 26000, marca:'Samsung',stock: 12, cantidad: 1, clave: "m"  },
	{id:12, name: "Monitor 22MN430H-B", img: './imagenes/samsung24curvo.jpg', pulgada: 24, precio: 27160, marca:'Samsung',stock: 15, cantidad: 1, clave: "m"  },
	{id:13, name: "Monitor FULL HD 144hz", img: './imagenes/lg27144.jpg', pulgada: 27, precio: 62590, marca:'LG',stock: 16, cantidad: 1, clave: "m"  },
	{id:14, name: "Monitor XG2405", img: './imagenes/viewsonic27.jpg', pulgada: 27, precio: 67200, marca:'ViewSonic',stock: 18, cantidad: 1, clave: "m"  },
	{id:15, name: "Monitor 32GN500", img: './imagenes/ultragear.jpg', pulgada: 32, precio: 75830, marca:'UltraGear',stock: 2, cantidad: 1, clave: "m"  },
	{id:16, name: "Monitor 4K XG3220", img: './imagenes/4kviewsonic.jpg', pulgada: 32, precio: 122000, marca:'ViewSonic',stock: 1, cantidad: 1, clave: "m"},
	{id:17, name:"Auriculares", img: './imagenes/hyperex.jpg', auriculares:"inalambrico", precio: 15000, marca: 'Hyperx',stock: 30, cantidad: 1, clave: 'pe'},
	{id:18, name:"Mouse", img:'./imagenes/2_14.png', auriculares:"RGB", precio: 8000, marca:'Hyperex', stock:10, cantidad:1, clave:'pe'},
	{id:19, name:"Joystick", img: './imagenes/joystick-saturn.jpg',marca:'Red Dragon' ,auriculares:"Cableado", precio: 3000, stock:5, cantidad:1, clave:'pe'}];



datosPersonales = [];

const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  numero = document.querySelector('#numerito'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
      btnSubmit = document.querySelector('#btnExito'),
	  nombre = document.querySelector('#nombres'),
	  nombrecito = document.querySelector('#inputNombre'),
	  codigoseguridad = document.querySelector('#inputCVV'),
	expiracion = document.querySelector('#expiracion'),
	  formularioNumero = document.querySelector('#inputNumero'),
	  yearExpiracion = document.querySelector('#tarjeta .year'),
	  ccv = document.querySelector('#tarjeta .ccv');



// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;
		

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';
		
		logoMarca.innerHTML = '';
		
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'imagenes/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'imagenes/mastercard.png';
		logoMarca.appendChild(imagen);
	}
	if(formularioNumero.value.length === 19){

		formularioNumero.style.border = '5px solid green';
				
	}else{
		formularioNumero.style.border = '5px solid red';
		
	}
	// else{

	// 	formularioNumero.style.border = '5px solid red';
	// }

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;
		

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
		
	}if(nombrecito.value == ''){
		nombrecito.style.border = '5px solid red';
		datosPersonales = nombrecito.value; 
	}
	else{
		nombrecito.style.border = '5px solid green';
		
	}
	
	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;	
	if(selectMes.value <= 12 && selectMes.value >=1){
		selectMes.style.border = '5px solid green';
	}else if(selectMes.value == "Mes"){
		selectMes.style.border = '5px solid red'; 
	}
	
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	if(selectYear.value >= 2022 && selectYear.value <= 2030){
		selectYear.style.border = '5px solid green';
	}else{
		selectYear.style.border =  '5px solid red'; 
	}
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}


	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');
	if(formulario.inputCCV.value.length == 3 ){

	    formulario.inputCCV.style.border  = '5px solid green';
	}else{
		formulario.inputCCV.style.border = '5px solid red';
	}
	
	ccv.textContent = formulario.inputCCV.value;

	

	

});


btnSubmit.addEventListener('click', ()=>{

	if(nombrecito.style.border == '5px solid red' || formulario.inputCCV.style.border == '5px solid red' || selectYear.style.border ==  '5px solid red' || formularioNumero.style.border == '5px solid red' || selectMes.style.border == '5px solid red'  ){
		let stringError = "";
		if(nombrecito.style.border == '5px solid red'){
			stringError = "El nombre esta mal de la tarjeta es incorrecto"
		}
		if(formulario.inputCCV.style.border == '5px solid red'){
			stringError = "El numero de seguridad es incorrecto"
		}if(selectYear.style.border ==  '5px solid red'){
			stringError = "El año es incorrecto"
		}
		if(formularioNumero.style.border == '5px solid red'){
			stringError = "El numero de la tarjeta es incorrecto"
		}
		if(selectMes.style.border == '5px solid red'){
			stringError = "El mes es incorrecto"
		}
		
		nombrecito.style.border = '2px solid #CED6E0';
		formularioNumero.style.border = '2px solid #CED6E0';
		selectMes.style.border = '2px solid #CED6E0';
		formulario.inputCCV.style.border = '2px solid #CED6E0';
		selectYear.style.border = '2px solid #CED6E0';

		numeroTarjeta.textContent = '#### #### #### ####'
		  nombreTarjeta.textContent = 'Jhon Doe'
		  logoMarca.innerHTML = '';
		  mesExpiracion.textContent = 'MM'
		  yearExpiracion.textContent = 'AA'
		  ccv.textContent = ''
		  firma.textContent = ''
		alert("Usted tiene un error en alguno de los siguientes campos: "+stringError);
		// document.getElementById('btnExito').setAttribute('disabled',true);

	}if(nombrecito.style.border == '5px solid green' && formularioNumero.style.border == '5px solid green' && selectMes.style.border == '5px solid green' && formulario.inputCCV.style.border == '5px solid green' && selectYear.style.border == '5px solid green'){

		// document.getElementById('btnExito').removeAttribute('disabled');

		Swal.fire({
			icon: 'success',
			title: 'Felicidades',
			text: 'Tu compra se completado correctamente!'			
		  })

		  nombrecito.style.border = '2px solid #CED6E0';
		  formularioNumero.style.border = '2px solid #CED6E0';
		  selectMes.style.border = '2px solid #CED6E0';
		  formulario.inputCCV.style.border = '2px solid #CED6E0';
		  selectYear.style.border = '2px solid #CED6E0';

		  numeroTarjeta.textContent = '#### #### #### ####'
		  nombreTarjeta.textContent = 'Jhon Doe'
		  logoMarca.innerHTML = '';
		  mesExpiracion.textContent = 'MM'
		  yearExpiracion.textContent = 'AA'
		  ccv.textContent = ''
		  firma.textContent = ''
	}	
		

		 
	


})


function limpiarDatos(){

	formulario.reset()
	
	return false;
}








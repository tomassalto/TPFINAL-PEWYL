let carritoCompras = [];
let arrayStock = [];
const contenedorPlacas = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorStock = document.getElementById('contador-stock');

const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo')

selecTipo.addEventListener('change', () =>{
  selecTipo.value == 'all' ?
    mostrarProductos(placasStock)

    :
  
    mostrarProductos(placasStock.filter(element => element.clave == selecTipo.value));
  

    
  
    
})


mostrarProductos(placasStock);

function mostrarProductos(array){
    contenedorPlacas.innerHTML = "";
    //mostrar productos en el html
    for (const producto of array) {
        let div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML +=  `<div class = "card">
                                <div class = "card-image">
                                    <img src=${producto.img}>
                                    <span class="card-title">${producto.name}</span>
                                    <a id="botonAgregar${producto.id}" class = "btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                                </div>
                                <div class = "card-content">
                                     ${agregarEspecificaciones()}                                
                                     <p>Marca: ${producto.marca}</p>
                                    <p>$ ${producto.precio}</p>
                                    <p id=stock-producto${producto.id}> Stock: ${producto.stock}<span id="contador-stock"></span></p>
                                </div>
                            </div>`


         function agregarEspecificaciones(){
          if(producto.ram){
           hola = `<p id="problemas">Ram: ${producto.ram}</p>`
          }
          if(producto.pulgada){
           hola = `<p id="problemas">Pulgada: ${producto.pulgada}</p>`
          }if(producto.auriculares){
           hola = `<p id="problemas">Tipo: ${producto.auriculares}</p>`
          }
          return hola;
         }                   
        //${producto.ram ? `<p id="problemas">Ram: ${producto.ram}</p>` : `<p id="problemas">Pulgada: ${producto.pulgada}</p>`
        contenedorPlacas.appendChild(div);

            let btnAgregar = document.getElementById(`botonAgregar${producto.id}`);

            btnAgregar.addEventListener('click', () => {
                   
                Toastify({
                    text: "Agregaste exitosamente un articulo a tu carrito!",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
                
                    agregarAlCarrito(producto.id);
            
            });
     }
}

function agregarAlCarrito(id){
    
    let repetido = carritoCompras.find(buscar => buscar.id == id)
    if(repetido){
      //agregar cantidad si esta repetido
        repetido.cantidad = repetido.cantidad + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">Cantidad: ${repetido.cantidad}</p>`;
        
        actualizarCarrito();

    }if(repetido){
      repetido.stock = repetido.stock -1 ;
      document.getElementById(`stock-producto${repetido.id}`).innerHTML =  `<p id="stock-producto${repetido.id}"> Stock: ${repetido.stock}</p>`;
      if(repetido.stock == 0){        
        document.getElementById(`botonAgregar${repetido.id}`).setAttribute('disabled',true)
        
      }
    }
    else{
        document.getElementById('botoncito').removeAttribute('disabled');        
        let productoAgregar = placasStock.find(elemento => elemento.id == id);
        if(productoAgregar){
          productoAgregar.stock = productoAgregar.stock -1 ;
          document.getElementById(`stock-producto${productoAgregar.id}`).innerHTML =  `<p id="stock-producto${productoAgregar.id}"> Stock: ${productoAgregar.stock}</p>`;
        //   if(productoAgregar.stock == 0){        
        //     document.getElementById(`botonAgregar${productoAgregar.id}`).setAttribute('disabled',true)
            
           }
          // else{
          //   productoAgregar.stock = productoAgregar.stock +1 ;
          // document.getElementById(`stock-producto${productoAgregar.id}`).innerHTML =  `<p id="stock-producto${productoAgregar.id}"> Stock: ${productoAgregar.stock}</p>`;
          // }
        
        carritoCompras.push(productoAgregar);
        
        actualizarCarrito();
          
        mostrarCarrito(productoAgregar)
        actualizarStock();
    }
        //local storage
        localStorage.setItem('carrito', JSON.stringify(carritoCompras))
   
}


function mostrarCarrito(productoAgregar){
  let div = document.createElement('div');
  div.className = 'productoEnCarrito';
  div.innerHTML =     `<p>${productoAgregar.name}</p>
                      <p>Precio: $${productoAgregar.precio}</p>
                      <p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>                      
                      <button id="btnEliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                      </div>`

  contenedorCarrito.appendChild(div);

  //boton eliminar producto
  let btnEliminar = document.getElementById(`btnEliminar${productoAgregar.id}`)

  btnEliminar.addEventListener('click', ()=>{
    
    

      if(productoAgregar.cantidad == 1){
          
          btnEliminar.parentElement.remove();    
          carritoCompras = carritoCompras.filter(item => item.id != productoAgregar.id);
         if(productoAgregar){
          productoAgregar.stock = productoAgregar.stock +1 ;
          document.getElementById(`stock-producto${productoAgregar.id}`).innerHTML =  `<p id="stock-producto${productoAgregar.id}"> Stock: ${productoAgregar.stock}</p>`;
         }
          actualizarCarrito();
          localStorage.setItem('carrito', JSON.stringify(carritoCompras));
         
          carritoCompras.length == 0 && document.getElementById('botoncito').setAttribute('disabled',true);              
          actualizarCarrito();
         
              
              
            
      }else{
          productoAgregar.cantidad = productoAgregar.cantidad - 1;
          document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>`
          productoAgregar.stock = productoAgregar.stock + 1 ;         
          document.getElementById(`stock-producto${productoAgregar.id}`).innerHTML =  `<p id="stock-producto${productoAgregar.id}"> Stock: ${productoAgregar.stock}</p>`;
          if(productoAgregar.stock >= 1){
            document.getElementById(`botonAgregar${productoAgregar.id}`).removeAttribute('disabled');
            
          }
          actualizarCarrito();
          localStorage.setItem('carrito', JSON.stringify(carritoCompras))
          
          carritoCompras == 0 && document.getElementById('botoncito').setAttribute('disabled',true);

            actualizarCarrito();
            
            
            
          
      }
      
  })
}


//actualizar carrito
function actualizarCarrito(){
    contadorCarrito.innerText = carritoCompras.reduce((acc,el)=> acc + el.cantidad, 0);
    precioTotal.innerText = carritoCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0);
}
//recuperar datos del local storage
function recuperar(){
  //operador avanzado
    let recuperarLS = JSON.parse(localStorage.getItem('carrito')) || [];
    if(recuperarLS.length === 0){
      carritoCompras == 0 && document.getElementById('botoncito').setAttribute('disabled',true);
    }
    console.log(recuperarLS);

    
        recuperarLS.forEach(element =>{
           mostrarCarrito(element);
           carritoCompras.push(element)           
           actualizarCarrito()
        });
       
    
}

recuperar();

	
fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6")
	.then(respuesta => respuesta.json())
	.then(productos =>{
		console.log(productos);
	});
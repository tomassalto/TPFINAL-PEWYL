
let carritoCompras = [];
let arrayStock = [];
const contenedorPlacas = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorStock = document.getElementById('contador-stock');

const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo');
  // selecTipo.addEventListener('change', () =>{ 
  // if(selecTipo.value == 'all'){
  //   mostrarProductos(placasStock)
  // }else{
  


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
// let btnEliminar = document.getElementById(`btnEliminar${productoAgregar.id}`)

// btnEliminar.addEventListener('click', ()=>{
  
//   // let productoAgregar = carritoCompras.find(buscar => buscar.id == id)
//   // if(repetido){
//   //   repetido.stock = repetido.stock + 1 ;
//   //   document.getElementById(`stock-producto`).innerHTML =  `<p id="stock-producto"${repetido.id}> Stock: ${repetido.stock}</p>`;
    
//   // }

//     if(productoAgregar.cantidad == 1){
        
//         btnEliminar.parentElement.remove();    
//         carritoCompras = carritoCompras.filter(item => item.id != productoAgregar.id);
//        if(productoAgregar){
//         productoAgregar.stock = productoAgregar.stock +1 ;
//         document.getElementById(`stock-producto${productoAgregar.id}`).innerHTML =  `<p id="stock-producto${productoAgregar.id}"> Stock: ${productoAgregar.stock}</p>`;
//        }
//         actualizarCarrito();
//         localStorage.setItem('carrito', JSON.stringify(carritoCompras));
       
//         carritoCompras.length == 0 && document.getElementById('botoncito').setAttribute('disabled',true);              
//         actualizarCarrito();
       
            
            
          
//     }else{
//         productoAgregar.cantidad = productoAgregar.cantidad - 1;
//         document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>`
//         productoAgregar.stock = productoAgregar.stock + 1 ;         
//         document.getElementById(`stock-producto${productoAgregar.id}`).innerHTML =  `<p id="stock-producto${productoAgregar.id}"> Stock: ${productoAgregar.stock}</p>`;
//         if(productoAgregar.stock >= 1){
//           document.getElementById(`botonAgregar${productoAgregar.id}`).removeAttribute('disabled');
          
//         }
//         actualizarCarrito();
//         localStorage.setItem('carrito', JSON.stringify(carritoCompras))
        
//         carritoCompras == 0 && document.getElementById('botoncito').setAttribute('disabled',true);

//           actualizarCarrito();
          
          
          
        
//     }
    
// })
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


    
  





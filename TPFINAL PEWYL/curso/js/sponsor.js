const contenedorSponsor = document.getElementById('sp-contenedor');



function mostrarSp(sponsor){
  contenedorSponsor.innerHTML = "";
  //mostrar productos en el html
  for (const producto of sponsor) {
      let div = document.createElement('div');
      div.className = 'producto';
      div.innerHTML +=  `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${producto.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`
  }
  contenedorSponsor.appendChild(div);
}

// mostrarSp();
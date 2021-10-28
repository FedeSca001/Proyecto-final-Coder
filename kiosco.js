const nombreUsuario = document.querySelector("#name");
const telefUsuario = document.querySelector("#telef");
const edadUsuario = document.querySelector("#edad");
const direccionUsuario = document.querySelector("#direcc");
const registrarse = document.querySelector("#registrar");
const header = document.querySelector("#headerInput");
const usuarios = [];
let usuarioOk = false;
let usuarioMenor = true;
const divSecciones = document.querySelector('#secciones');
const catalogo = document.querySelector('.catalogo');
const buttComp = document.querySelector('.butCom');
let elementid;
let listaCarrito = JSON.parse(localStorage.getItem(0)) || [];
const visorCompra = document.querySelector('.listaCompra');
const totalApagar = document.querySelector('.totalPagar');
const borrarIndividual = document.querySelector('.delete');
let precio = 0;
let numeroLista = 0;

//Al iniciar la página imprime si hay algo en el localStorage
window.addEventListener("load", (event)=> {
    event.preventDefault()
    listaCarrito.forEach ( prod => {
        const imprimir = `
        <div class="compra">
           <img src="${prod.img}" class="imgCompra">
           <div class="datosCompra">
               <h2>${prod.nombre}</h2>
               <h5>${prod.descp}</h5>
               <h3>${prod.precio}</h3>
           </div>
           <button class="delete" id="delete" data-numero="${numeroLista}">Borrar</button>
       </div>
       `
       visorCompra.innerHTML += imprimir;
       });
       listaCarrito.forEach( prod => {
           precio = precio + Number(prod.precio);
       })
       totalApagar.innerHTML = `Total a pagar : $${precio}`;
})

function Usuario (nombreApellido, telefono, edad, direccion){
    this.nombre= nombreApellido;
    this.telefono= telefono;
    this.edad= Number(edad);
    this.direccion= direccion;
}

//Cargar datos NUEVO CLIENTE
function nuevoUsuario(){
    usuarios.push(
    new Usuario(
        nombreUsuario.value,
        telefUsuario.value,
        edadUsuario.value,
        direccionUsuario.value));
}
//CORROBORAR DATOS
function logOk(){
    if ((usuarios[usuarios.length-1].edad) &&
        (usuarios[usuarios.length-1].nombre) &&
        (usuarios[usuarios.length-1].telefono) &&
        (usuarios[usuarios.length-1].direccion)){            
            if(usuarios[usuarios.length-1].edad >= 18){
                return usuarioMenor = false;
            }} else {
                const p = document.createElement('p');
                p.textContent = '¡¡Se deben completar todos los campos!!'
                header.appendChild(p);
                return usuarioMenor = true;
            }
            return usuarioOk = true;
}

function imprimirCategoria(categoria){
    // chequea edad de usuario
    // corta funcion si es menor Y si cat. es cerv. o tab.
    if ((categoria==="cerveza" || categoria ==="tabaco") && usuarioMenor) {
       return catalogo.innerHTML = `<p class="advertmenores">Sos menor de edad y no podés ingresar a esta sección... SOLO MAYORES.</p>`
    }

    productos[categoria].forEach ( producto => {
        const imprimir = 
    `<div class="bloque">
       <img src="${producto.img}" class="imgProduct">
       <div class="datos">
           <h4>${producto.nombre}</h4>
           <h5>${producto.descp}</h5>
           <p>$${producto.precio}</p>
       </div>
       <a href="#" class="butCom" data-cat="${categoria}" data-id="${producto.id}">Agregar al carrito</a>
   </div>`
   catalogo.innerHTML += imprimir;
   });
}

// recibe carrito y lo guarda
function guardarEnStorage(){
    localStorage.setItem(0, JSON.stringify(listaCarrito))
}

function precioTotal (prod){
    precio = precio + Number(prod);
    totalApagar.innerHTML = `Total a pagar : $${precio}`;
}

function añadirAlCarrito(categoria, id) {
    visorCompra.innerHTML = '';
    let producto = categoria.find(prod=> prod.id == id);
    listaCarrito.push(producto);
    precioTotal(listaCarrito[listaCarrito.length-1].precio);
    guardarEnStorage();
    listaCarrito.forEach ( prod => {
        const imprimir = `
        <div class="compra">
            <div class="datosCompra">
            <img src="${prod.img}" class="imgCompra">
            <h2>${prod.nombre}</h2>
            <h5>${prod.descp}</h5>
            <h3 class="precio">$${Number(prod.precio)}</h3>
        </div>
        <button class="delete" id="delete" data-numero="${numeroLista}">Borrar</button>
        </div>`
        visorCompra.innerHTML += imprimir;
})
    numeroLista++;
}
            //EVENTOS 
//LOG usuario
registrarse.addEventListener("click", () => { 
    nuevoUsuario();
    logOk();
});

//CLICK EN BOTONES DE SECCIONES
divSecciones.addEventListener('click', (e)=>{
    // Primero se elimina el contenido existente
   catalogo.innerHTML = '';
   // Defino la categoria con el dataset
   const categoria = e.target.dataset.cat
   // imprimo categoria
   imprimirCategoria(categoria)
});

catalogo.addEventListener('click', (e) => {
    // solo ejecuta si hago click en boton añadir
    if(e.target.classList.contains("butCom")){
        const categoria = e.target.dataset.cat
        const id = e.target.dataset.id
        añadirAlCarrito(productos[categoria], id)
    }
});

//BORRA EL LOCALSTORAGE
$('.borrarStorage').on('click', ()=>{
    listaCarrito = [];
    precio = 0;
    visorCompra.innerHTML='';
    totalApagar.innerHTML = '';
    localStorage.clear();
    numeroLista = 0;
});

$('.seccion').click(function(){
    $('.catalogo').ready( function () {
    $('.bloque').hide().each(function(i){
	$(this).delay(i * 100).fadeIn(100)})})}
);

$('.delete').click(function(e){
    e.preventDefault();
    
})

document.addEventListener('click', e => console.log(e.target))
let nombreUsuario = document.querySelector("#name");
let telefUsuario = document.querySelector("#telef");
let edadUsuario = document.querySelector("#edad");
let direccionUsuario = document.querySelector("#direcc");
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
let precio = 0;
const usuarioRegistrado = document.querySelector('.datosRegistrado');
let cantidad = 1;
const comprarLista = document.querySelector('.comprarLista');

window.addEventListener("load", (event)=> {
    event.preventDefault()
    $.ajax({
        url: 'user.json',
        success: function(user){
            let indexUser = Math.floor(Math.random() * (100 - 0));
            nombreUsuario.value = user[indexUser].Nombre;
            telefUsuario.value = Number(user[indexUser].Telefono);
            edadUsuario.value = user[indexUser].Edad;
            direccionUsuario.value = user[indexUser].Direccion;
        },
        error: function(user, texStatus, xhr){
            console.log('error');
        }
    });
    imprimirCarrito(listaCarrito);
    listaCarrito.forEach( prod => {
        precio = precio + Number(prod.precio);
    });
    totalApagar.innerHTML = `Total a pagar : $${precio}`;
})

function guardarEnStorage(){
    localStorage.setItem(0, JSON.stringify(listaCarrito))
}

function precioTotal (prod){
    precio = precio + Number(prod);
    totalApagar.innerHTML = `Total a pagar : $${precio}`;
}

function Usuario (nombreApellido, telefono, edad, direccion){
    this.nombre= nombreApellido;
    this.telefono= telefono;
    this.edad= Number(edad);
    this.direccion= direccion;
}

function nuevoUsuario(){
    usuarios.push(
    new Usuario(
        nombreUsuario.value,
        telefUsuario.value,
        edadUsuario.value,
        direccionUsuario.value));
}

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
        usuarioOk = true;
        usuarioRegistrado.textContent = `Nombre y apellido: ${nombreUsuario.value}, Número de teléfono: ${telefUsuario.value}, Edad: ${edadUsuario.value}, Dirección: ${direccionUsuario.value}.`;
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

function añadirAlCarrito(categoria, id) {
    visorCompra.innerHTML = '';
    let producto = categoria.find(prod=> prod.id == id);
    listaCarrito.push(producto);
    precioTotal(listaCarrito[listaCarrito.length-1].precio);
    guardarEnStorage();
    const existe = listaCarrito.some(element => {element.id === producto.id});
        if(existe){
            console.log('existe', existe);
        } else {
            imprimirCarrito(listaCarrito);
    }}

function imprimirCarrito(listaCarrito){
    listaCarrito.forEach ( prod => {
        const imprimir = `
        <div class="compra">
           <img src="${prod.img}" class="imgCompra">
           <div class="datosCompra">
               <h2>${prod.nombre}</h2>
               <h5>${prod.descp}</h5>
               <h3 class="precio">$${Number(prod.precio)}</h3>
               <h5>Cantidad: ${cantidad}</h5>
               </div>
               <button class="delete" id="delete" data-numero="${prod.id}">Borrar</button>
               </div>`
       visorCompra.innerHTML += imprimir;});
}

function borrarTodo (){
    listaCarrito = [];
    precio = 0;
    visorCompra.innerHTML='';
    totalApagar.innerHTML = `Total a pagar : $${precio}`;
    localStorage.clear();
}


            //EVENTOS 

registrarse.addEventListener("click", () => {
    usuarioRegistrado.textContent = '';
    nuevoUsuario();
    logOk();

});

divSecciones.addEventListener('click', (e)=>{
   catalogo.innerHTML = '';
   const categoria = e.target.dataset.cat
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

$('.borrarStorage').on('click', ()=>{
    borrarTodo ();
});

$('.seccion').click(function(){
    $('.catalogo').ready( function () {
    $('.bloque').hide().each(function(i){
	$(this).delay(i * 100).fadeIn(100)})})}
);

visorCompra.addEventListener('click', (e)=>{
    if(e.target.classList.contains("delete")){
        const click = e.target.dataset.numero;
        const idDelete = (element) => element.id == click;
        precio = precio - Number(listaCarrito[listaCarrito.findIndex(idDelete)].precio);
        totalApagar.innerHTML = `Total a pagar : $${precio}`;
        listaCarrito.splice(listaCarrito.findIndex(idDelete),1);
        visorCompra.innerHTML = ``
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
            <button class="delete" id="delete" data-numero="${prod.id}">Borrar</button>
            </div>`
            visorCompra.innerHTML += imprimir;
    });
}});

$('.comprarLista').click(function(){
    
    
    
    borrarTodo ();
})
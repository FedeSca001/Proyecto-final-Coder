let nombreUsuario = document.querySelector("#name");
let telefUsuario = document.querySelector("#telef");
let edadUsuario = document.querySelector("#edad");
let direccionUsuario = document.querySelector("#direcc");
const registrarse = document.querySelector("#registrar");
const header = document.querySelector("#headerInput");
const usuarios = [];
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
const comprarLista = document.querySelector('.comprarLista');
const reload = document.querySelector('#reload');

/* Deployed: url = https://kiosco-fantacia.netlify.app/ */

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
            swal({
                title: "Registado",
                text: `Nombre y apellido: ${nombreUsuario.value}, N??mero de tel??fono: ${telefUsuario.value}, Edad: ${edadUsuario.value}, Direcci??n: ${direccionUsuario.value}.`,
                icon: "success",
                button: "Seguir en la compra",                
              });
              return usuarioMenor = false;
            } else {
                swal({
                    title: "Advertencia",
                    text: `Tu edad es de ${edadUsuario.value} a??os por lo que no puedes acceder a todos los productos de la tienda.`,
                    icon: "warning",
                    button: "Seguir en la compra",
                  });
                  return usuarioMenor = true;
            }} else {
                swal({
                    title: "ERROR",
                    text: '????Se deben completar todos los campos!!',
                    icon: "error",
                    button: "Cargar datos",
                  });
                return usuarioMenor = true;
            }
}

function imprimirCategoria(categoria){
    if ((categoria==="cerveza" || categoria ==="tabaco") && usuarioMenor) {
       return catalogo.innerHTML = `<p class="advertmenores">Sos menor de edad y no pod??s ingresar a esta secci??n... SOLO MAYORES.</p>`
    }
    productos[categoria].forEach ( producto => {
    const imprimir = 
    `<div class="bloque col-lg-4 col-md-6">
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

function a??adirAlCarrito(categoria, id) {
    visorCompra.innerHTML = '';
    let producto = categoria.find(prod=> prod.id == id);
    const existe = listaCarrito.some((e) => e.id == producto.id);
    if (existe){
        const index = listaCarrito.findIndex((carrito) => carrito.id == producto.id);
        listaCarrito[index].cantidad = Number(listaCarrito[index].cantidad) +1;
        imprimirCarrito(listaCarrito);
        precioTotal(listaCarrito[listaCarrito.length-1].precio);
        guardarEnStorage();
    } else {
    listaCarrito.push(producto);
    imprimirCarrito(listaCarrito);
    precioTotal(listaCarrito[listaCarrito.length-1].precio);
    guardarEnStorage();
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
               <h5>Cantidad: ${prod.cantidad}</h5>
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
    usuarioRegistrado.innerHTML = `<p>Nombre y apellido: ${nombreUsuario.value}, N??mero de tel??fono: ${telefUsuario.value}, Edad: ${edadUsuario.value}, Direcci??n: ${direccionUsuario.value}</p>`;
    nuevoUsuario();
    logOk();
});

divSecciones.addEventListener('click', (e)=>{
   catalogo.innerHTML = '';
   const categoria = e.target.dataset.cat
   imprimirCategoria(categoria)
});

catalogo.addEventListener('click', (e) => {
    if(e.target.classList.contains("butCom")){
        const categoria = e.target.dataset.cat
        const id = e.target.dataset.id
        a??adirAlCarrito(productos[categoria], id);
    } else if (e.target.classList.contains("reload")){
        location.reload();
    }
});

$('.borrarStorage').on('click', ()=>{
    borrarTodo();
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
        imprimirCarrito(listaCarrito);
}});

$('.comprarLista').click(function(){
    if (listaCarrito[0]){
        swal({
            title: "Compra exitosa",
            text: `El pedido ser?? enviado a ${direccionUsuario.value} a nombre de ${nombreUsuario.value}, cuyo numero telef??nico es ${telefUsuario.value}.`,
            icon: "success",
            button: "Mostrar detalle",
          });
          catalogo.innerHTML = '<h2>Tu lista de compra es</h2>'
          listaCarrito.forEach ( prod => {
            const imprimir = `
            <div class="compra">
                <div class="datosCompra">
                <img src="${prod.img}" class="imgCompra">
                <h2>${prod.nombre}</h2>
                <h5>${prod.descp}</h5>
                <h3 class="precio">$${Number(prod.precio)}</h3>
                <h5>Cantidad: ${prod.cantidad}</h5>
            </div></div>`
            catalogo.innerHTML += imprimir;
    });
            catalogo.innerHTML += `<h3 class="totaldelpago">Total a pagar : $${precio}</h3>`
            catalogo.innerHTML += `<button class="reload">Recargar p??gina</button>`
            borrarTodo ();
    } else {
        swal({
            title: "El carrito est?? vacio",
            text: ``,
            icon: "error",
            button: "Cargar productos",
          });
    }
})

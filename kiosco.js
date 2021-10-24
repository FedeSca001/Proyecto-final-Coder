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
//LOG usuario
registrarse.addEventListener("click", () => { 
    nuevoUsuario();
    logOk();
});

function imprimirCategoria(categoria){
    // chequea edad de usuario
    // corta funcion si es menor Y si cat. es cerv. o tab.
    if ((categoria==="cerveza" || categoria ==="tabaco") && usuarioMenor) {
       return catalogo.innerHTML = `<p class="advertmenores">Sos menor de edad y no podés ingresar a esta sección... SOLO MAYORES.</p>`
    }

    productos[categoria].forEach ( producto => {
        const imprimir = `
    <div class="bloque">
       <img src="${producto.img}" class="imgBeb">
       <div class="datos">
           <h4>${producto.nombre}</h4>
           <h5>${producto.descp}</h5>
           <p>${producto.precio}</p>
       </div>
       <a href="#" class="butCom" data-cat="galletitas" data-id="${producto.id}">Agregar al carrito</a>
   </div>
   `
   catalogo.innerHTML += imprimir;
});
}

//CLICK EN BOTONES DE SECCIONES
divSecciones.addEventListener('click', (e)=>{
     // Primero se elimina el contenido existente
    catalogo.innerHTML = '';
    // Defino la categoria con el dataset
    const categoria = e.target.dataset.cat
    // imprimo categoria
    imprimirCategoria(categoria)
});


// busco carrito en storage. si existe, lo asigno a la variable. sino, asigno arary vacio
let listaCarrito = JSON.parse(localStorage.getItem(0)) || [];
// recibe carrito y lo guarda
function guardarEnStorage(){
    localStorage.setItem(0, JSON.stringify(listaCarrito))
}

function añadirAlCarrito(categoria, id) {
// recibe categoria (array) y ID de producto
// con find devuelve objeto que contenga mismo id
// guarda producto en carrito si no existe. sino, aumenta cantidad
// guarda carrito en storage

    let producto = categoria.find(prod=> prod.id == id)
    let existe = false // POR AHORA.
    
    if(existe){
        
    } else {
        listaCarrito.push(producto)
    }

    guardarEnStorage()
}

catalogo.addEventListener('click', (e) => {
    // solo ejecuta si hago click en boton añadir
    if(e.target.classList.contains("butCom")){
        const categoria = e.target.dataset.cat
        const id = e.target.dataset.id
        añadirAlCarrito(productos[categoria], id)
    }
});

//BORRA EL LOCALSTORAGE
$('.borrarStorage').on('click', ()=>{localStorage.clear()});


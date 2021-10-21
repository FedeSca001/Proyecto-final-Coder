const nombreUsuario = document.querySelector("#name");
const telefUsuario = document.querySelector("#telef");
const edadUsuario = document.querySelector("#edad");
const direccionUsuario = document.querySelector("#direcc");
const registrarse = document.querySelector("#registrar");
const usuarios = [];
let listaCarrito = [];
let usuarioOk = false;
let usuarioMenor = true;
const divSecciones = document.querySelector('#secciones');
const catalogo = document.querySelector('.catalogo');
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
            } else {alert('Al ser menor no vas a poder acceder a todos los productos.');}

        return usuarioOk = true;
    } else {
        alert('Todos los campos son obligatorios.');
    }}

function printBebidas(){
    beb.forEach ( beb => {
                const imprimir = `
        <div class="bloque">
                <img src="${beb.img}" class="imgBeb">
                <div class="datos">
                    <h4>${beb.nombre}</h4>
                    <h5>${beb.descp}</h5>
                    <p>${beb.precio}</p>
                </div>
                <a href="#" class="butCom" data-id="${beb.id}">Agregar al carrito</a>
            </div>
        `
        catalogo.innerHTML += imprimir;
        //catalogo.appendChild()
    });
}
function printCaramels(){
    caram.forEach ( caram => {
        const imprimir = `
        <div class="bloque">
            <img src="${caram.img}" class="imgBeb">
            <div class="datos">
                <h4>${caram.nombre}</h4>
                <h5>${caram.descp}</h5>
                <p>${caram.precio}</p>
            </div>
            <a href="#" class="butCom" data-id="${caram.id}">Agregar al carrito</a>
        </div>
        `
        catalogo.innerHTML += imprimir;
});}
function printAlmac(){
    almac.forEach ( almac => {
        const imprimir = `
        <div class="bloque">
            <img src="${almac.img}" class="imgBeb">
            <div class="datos">
                <h4>${almac.nombre}</h4>
                <h5>${almac.descp}</h5>
                <p>${almac.precio}</p>
            </div>
            <a href="#" class="butCom" data-id="${almac.id}">Agregar al carrito</a>
        </div>
        `
        catalogo.innerHTML += imprimir;
});}
function printChoc(){
    chocolts.forEach ( chocolts => {
        const imprimir = `
        <div class="bloque">
            <img src="${chocolts.img}" class="imgBeb">
            <div class="datos">
                <h4>${chocolts.nombre}</h4>
                <h5>${chocolts.descp}</h5>
                <p>${chocolts.precio}</p>
            </div>
            <a href="#" class="butCom" data-id="${chocolts.id}">Agregar al carrito</a>
        </div>
        `
        catalogo.innerHTML += imprimir;
});}
function printFarm(){
    farm.forEach ( farm => {
        const imprimir = `
        <div class="bloque">
            <img src="${farm.img}" class="imgBeb">
            <div class="datos">
                <h4>${farm.nombre}</h4>
                <h5>${farm.descp}</h5>
                <p>${farm.precio}</p>
            </div>
            <a href="#" class="butCom" data-id="${farm.id}">Agregar al carrito</a>
        </div>
        `
        catalogo.innerHTML += imprimir;
});}
function printCerv(){
    cerv.forEach ( cerv => {
        const imprimir = `
        <div class="bloque">
            <img src="${cerv.img}" class="imgBeb">
            <div class="datos">
                <h4>${cerv.nombre}</h4>
                <h5>${cerv.descp}</h5>
                <p>${cerv.precio}</p>
            </div>
            <a href="#" class="butCom" data-id="${cerv.id}">Agregar al carrito</a>
        </div>
        `
        catalogo.innerHTML += imprimir;
});}
function printTaba(){
    tabac.forEach ( tabac => {
        const imprimir = `
        <div class="bloque">
            <img src="${tabac.img}" class="imgBeb">
            <div class="datos">
                <h4>${tabac.nombre}</h4>
                <h5>${tabac.descp}</h5>
                <p>${tabac.precio}</p>
            </div>
            <a href="#" class="butCom" data-id="${tabac.id}">Agregar al carrito</a>
        </div>
        `
        catalogo.innerHTML += imprimir;
});}
function printGallet(){
    gallets.forEach ( gallets => {
        const imprimir = `
        <div class="bloque">
            <img src="${gallets.img}" class="imgBeb">
            <div class="datos">
                <h4>${gallets.nombre}</h4>
                <h5>${gallets.descp}</h5>
                <p>${gallets.precio}</p>
            </div>
            <a href="#" class="butCom" data-id="${gallets.id}">Agregar al carrito</a>
        </div>
        `
        catalogo.innerHTML += imprimir;
});}



//CLICK EN BOTONES DE SECCIONES
divSecciones.addEventListener('click', (e)=>{
    //Primero se elimina el contenido existente
    //Desp se llaman a las funciones Impr
    if (e.target.classList.contains('bebidas')){
        catalogo.innerHTML = '';
        printBebidas();
    } else if (e.target.classList.contains('caramelos')){
        catalogo.innerHTML = '';
        printCaramels();
    } else if (e.target.classList.contains('almacen')){
        catalogo.innerHTML = '';
        printAlmac();
    } else if (e.target.classList.contains('chocolates')){
        catalogo.innerHTML = '';
        printChoc();
    } else if ((e.target.classList.contains('farmacia'))){
        catalogo.innerHTML = '';
        printFarm();
    } else if ((e.target.classList.contains('cerveza'))){
        catalogo.innerHTML = '';
        printCerv();
    } else if ((e.target.classList.contains('tabaco'))){
        catalogo.innerHTML = '';
        printTaba();
    } else if ((e.target.classList.contains('galletitas'))){
        catalogo.innerHTML = '';
        printGallet();
    }
});

//El find va a devolver un valor "id" del producto donde hago click
//Listenner boton compra
catalogo.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.dataset.id)
    const iterBeb = beb.find( element => {
        element = e.target.dataset.id;
        return elementid = element
        });
});

registrarse.addEventListener("click", () => { 
    nuevoUsuario();
    logOk();
});


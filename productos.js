const bebidas = [
    {
        "img": "images/cocagrande.jpg",
        "nombre": "Coca Cola",
        "descp": "Grande",
        "precio": 200,
        "cantidad": 1,
        "id": 01
    },
    {
        "img": "images/cocazero.jpg",
        "nombre": "Coca zero",
        "descp": "s/azucar",
        "precio": 199,
        "cantidad": 1,
        "id": 02
    },
    {
        "img": "images/cocamedio.jpg",
        "nombre": "Coca cola chica",
        "descp": "500ml",
        "precio": 90,
        "cantidad": 1,
        "id": 03
    },
    {
        "img": "images/cocalata.jpg",
        "nombre": "Lata de coca cola",
        "descp": "lata fria",
        "precio": 85,
        "cantidad": 1,
        "id": 04
    },
    {
        "img": "images/pepsi2L.jpg",
        "nombre": "Pepsi",
        "descp": "Botella 2L",
        "precio": 200,
        "cantidad": 1,
        "id": 05
    },
    {
        "img": "images/pepsimedioL.jpg",
        "nombre": "Pepsi",
        "descp": "Botella 1/2L",
        "precio": 120,
        "cantidad": 1,
        "id": 06
    },
    {
        "img": "images/pepsilata.jpg",
        "nombre": "Pepsi",
        "descp": "Lata",
        "precio": 80,
        "cantidad": 1,
        "id": 07
    },
    {
        "img": "images/spritegrande.jpg",
        "nombre": "Sprite 2L",
        "descp": "Botella 2L",
        "precio": 200,
        "cantidad": 1,
        "id": 08
    },
    {
        "img": "images/spritemedio.png",
        "nombre": "Sprite 1/2L",
        "descp": "Botella 1/2L",
        "precio": 120,
        "cantidad": 1,
        "id": 09
    },
    {
        "img": "images/baggiochico.jpg",
        "nombre": "Baggio chico",
        "descp": "Cajita",
        "precio": 200,
        "cantidad": 1,
        "id": 012
    },
    {
        "img": "images/cepita.jpg",
        "nombre": "Cepita",
        "descp": "Botella 1,5L",
        "precio": 210,
        "cantidad": 1,
        "id": 013
    },
    {
        "img": "images/cepitacaja.jpg",
        "nombre": "Cepita",
        "descp": "Cajita",
        "precio": 70,
        "cantidad": 1,
        "id": 014
    },
    {
        "img": "images/cepitachica.jpg",
        "nombre": "Cepita",
        "descp": "Botella 1/2L",
        "precio": 90,
        "cantidad": 1,
        "id": 015
    },
];
const caramelos = [
    {
        "img": "images/caramasticable.jpg",
        "nombre": "Masticables",
        "descp": "Caramelos masticables",
        "precio": 20,
        "cantidad": 1,
        "id": 11
    },
    {
        "img": "images/caramgomi.jpg",
        "nombre": "Gomitas",
        "descp": "Caramelos Gomita",
        "precio": 24,
        "cantidad": 1,
        "id": 12
    },
    {
        "img": "images/caramiel.png",
        "nombre": "Caramelos de Miel",
        "descp": "Bolsa de 200u",
        "precio": 160,
        "cantidad": 1,
        "id": 13
    },
    {
        "img": "images/fizztiras.jpg",
        "nombre": "Caramelos Fizz",
        "descp": "Tiras de sabores",
        "precio": 60,
        "cantidad": 1,
        "id": 14
    },
    {
        "img": "images/paleta.jpg",
        "nombre": "Paleta",
        "descp": "Paleta de caramelo",
        "precio": 80,
        "cantidad": 1,
        "id": 15
    },
    {
        "img": "images/picodulcebolsa.jpg",
        "nombre": "Caramelos Pico Dulce",
        "descp": "Bolsa de caramelos",
        "precio": 160,
        "cantidad": 1,
        "id": 16
    },
    {
        "img": "images/suguscaja.jpg",
        "nombre": "Sugus",
        "descp": "Caja de caramelos",
        "precio": 50,
        "cantidad": 1,
        "id": 17
    },
    {
        "img": "images/moritas.jpg",
        "nombre": "Moritas",
        "descp": "Venta al peso",
        "precio": 30,
        "cantidad": 1,
        "id": 18
    },
];
const almacen = [
    {
        "img": "images/fideo.jpg",
        "nombre": "Fideos",
        "descp": "Knor",
        "precio": 70,
        "cantidad": 1,
        "id": 21
    },
    {
        "img": "images/lechepolvo.jpeg",
        "nombre": "Leche en polvo",
        "descp": "Caja descremada",
        "precio": 250,
        "cantidad": 1,
        "id": 22
    },
    {
        "img": "images/mermeladaarcor.jpg",
        "nombre": "Mermelada",
        "descp": "Sabor durazno",
        "precio": 130,
        "cantidad": 1,
        "id": 23
    },
    {
        "img": "images/mocovi.jpg",
        "nombre": "Arroz en caja",
        "descp": "Mocovi",
        "precio": 80,
        "cantidad": 1,
        "id": 24
    },
    {
        "img": "images/arvejas.jpg",
        "nombre": "Arvejas",
        "descp": "Lata",
        "precio": 85,
        "cantidad": 1,
        "id": 25
    },
    {
        "img": "images/natura.jpg",
        "nombre": "Aceite Natura",
        "descp": "2L",
        "precio": 290,
        "cantidad": 1,
        "id": 26
    },
];
const chocolates = [
    {
        "img": "images/tofinegro.jpg",
        "nombre": "Tofi",
        "descp": "Negro",
        "precio": 40,
        "cantidad": 1,
        "id": 41
    },
    {
        "img": "images/tofiblanco.png",
        "nombre": "Tofi",
        "descp": "Blanco",
        "precio": 40,
        "cantidad": 1,
        "id": 42
    },
    {
        "img": "images/milka.jpg",
        "nombre": "Milka",
        "descp": "60g",
        "precio": 90,
        "cantidad": 1,
        "id": 43
    },
    {
        "img": "images/cacao.png",
        "nombre": "Chocolate arcor",
        "descp": "Barra 70g",
        "precio": 70,
        "cantidad": 1,
        "id": 44
    },
    {
        "img": "images/aguila.jpg",
        "nombre": "Chocolate aguila",
        "descp": "Barra 70g",
        "precio": 150,
        "cantidad": 1,
        "id": 45
    },
];
const farmacia = [
    {
        "img": "images/ibuprofeno.png",
        "nombre": "Ibuprofeno",
        "descp": "Ibu 600mg",
        "precio": 45,
        "cantidad": 1,
        "id": 31
    },
    {
        "img": "images/actron.png",
        "nombre": "Actron",
        "descp": "Caja de 12u",
        "precio": 45,
        "cantidad": 1,
        "id": 32
    },
    {
        "img": "images/curitas.jpg",
        "nombre": "Curitas",
        "descp": "Banditas",
        "precio": 20,
        "cantidad": 1,
        "id": 33
    },
];
const cerveza = [
    {
        "img": "images/budbotella.jpg",
        "nombre": "Budweiser botella",
        "descp": "botella 1.5L",
        "precio": 140,
        "cantidad": 1,
        "id": 51
    },
    {
        "img": "images/latabud.png",
        "nombre": "Budweiser lata",
        "descp": "Lata 3.75 ml",
        "precio": 100,
        "cantidad": 1,
        "id": 52
    },
    {
        "img": "images/andesbotella.jpg",
        "nombre": "Andes",
        "descp": "botella 1L",
        "precio": 130,
        "cantidad": 1,
        "id": 53
    },
    {
        "img": "images/andeslata.jfif",
        "nombre": "Andes lata",
        "descp": "Lata",
        "precio": 95,
        "cantidad": 1,
        "id": 54
    },
    {
        "img": "images/botellaquilmes.jpeg",
        "nombre": "Quilmes botella",
        "descp": "Botella 1L",
        "precio": 125,
        "cantidad": 1,
        "id": 54
    },
    {
        "img": "images/lataquilmes.jpg",
        "nombre": "Quilmes lata",
        "descp": "Lata 300ml",
        "precio": 95,
        "cantidad": 1,
        "id": 54
    },
];
const tabaco = [
    {
        "img": "images/luck.jpg",
        "nombre": "Lucky",
        "descp": "Cant. 10",
        "precio": 130,
        "cantidad": 1,
        "id": 61
    },
    {
        "img": "images/luckmen.jpg",
        "nombre": "Lucky mentolado",
        "descp": "Cant. 20",
        "precio": 220,
        "cantidad": 1,
        "id": 62
    },
    {
        "img": "images/marlb.jpg",
        "nombre": "Marlboro",
        "descp": "Cant. 20",
        "precio": 260,
        "cantidad": 1,
        "id": 63
    },
    {
        "img": "images/cam.jpeg",
        "nombre": "Camel",
        "descp": "Cant. 20",
        "precio": 260,
        "cantidad": 1,
        "id": 64
    },
    {
        "img": "images/malb10.png",
        "nombre": "Marlboro box",
        "descp": "Cant. 10",
        "precio": 130,
        "cantidad": 1,
        "id": 64
    },
    {
        "img": "images/cam10.jpg",
        "nombre": "Camel box",
        "descp": "Cant 10",
        "precio": 135,
        "cantidad": 1,
        "id": 64
    },
];
const galletitas = [
    {
        "img": "images/twist.jpg",
        "nombre": "Twistos",
        "descp": "Cont. 50g",
        "precio": 135,
        "cantidad": 1,
        "id": 71
    },
    {
        "img": "images/9doro.jpg",
        "nombre": "9 de oro",
        "descp": "clasicas",
        "precio": 75,
        "cantidad": 1,
        "id": 72
    },
    {
        "img": "images/9doroagr.jpg",
        "nombre": "9 de oro Agridulce",
        "descp": "Agridulce",
        "precio": 75,
        "cantidad": 1,
        "id": 74
    },
    {
        "img": "images/merengadas.jpg",
        "nombre": "Merengadas",
        "descp": "Paquete grande",
        "precio": 100,
        "cantidad": 1,
        "id": 75
    },
    {
        "img": "images/oreo.jpg",
        "nombre": "Oreo",
        "descp": "Grande",
        "precio": 140,
        "cantidad": 1,
        "id": 76
    },
];
const productos = {bebidas, caramelos,almacen,chocolates, farmacia, cerveza, tabaco, galletitas}

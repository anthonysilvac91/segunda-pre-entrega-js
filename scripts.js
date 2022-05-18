class Producto {
    constructor(id, nombre, precio, descripcion, categoria, stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.categoria = categoria
        this.stock = stock
    }
}

const producto1 = new Producto("1", "Washi Azul", "1000", "Set de 10 washitape decorativas azules variadas", "washitape", 5 )
const producto2 = new Producto("2", "Washi Perritos", "2000", "Set de 10 washitape decorativas perritos", "washitape", 5 )
const producto3 = new Producto("3", "Sticker ABC 123", "3000", "Set numeros y letras coloridos. 48 patrones", "sticker", 5 )
const producto4 = new Producto("4", "Sticker Gatitos", "4000", "Set lindos sticker gatitos kawai. 45 patrones diferentes", "sticker", 5 )

let productos = [producto1, producto2, producto3, producto4]

let carrito = []

if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

tarjetas = () => {
    contenedorTarjetas.innerHTML = ""
    productos.forEach((producto) =>{
        contenedorTarjetas.innerHTML += `
        <section class="box-${producto.id} producto">
            <div>
                <div class="contenedor-img">
                    <a href="#">
                        <img src="../imagenes/tienda/washitapes/washitape 1.jpg" alt="washitape">
                    </a>
                </div>
                <strong>${producto.precio}</strong>
                <h2>${producto.nombre}</h2>
                <p> ${producto.descripcion} </p>
                <a href="" id="boton${producto.id}" class="boton">Añadir al carrito</a>      
            </div>
        </section>`

    })
}

tarjetas(productos)



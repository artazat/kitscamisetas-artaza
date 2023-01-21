const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const botonComprar = document.getElementById('submit')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('#cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]



// FUNCION IMPORTANTE PARA LOS PRODUCTOS
const productosHTML = (producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio: <span class="el-precio-color">$${producto.precio}</span></p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar +</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado le hago un getElementById. Obtengo el elemento y a dicho elemento le agrego el evento

    boton.addEventListener('click', () => {
        //Esta funcion se ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)

        Toastify({
            text: "¡Producto agregado al carrito con exito!",
            duration: 1500,
            newWindow: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,25,90,1) 10%, rgba(65,105,225,1) 68%, rgba(47,96,243,1) 86%)",
            },
            className: "toast-compra",
            onClick: function () { } // Callback after click
        }).showToast();

    })
}
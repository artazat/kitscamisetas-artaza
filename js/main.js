document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:<span class="el-precio-color">$${producto.precio}</span></p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar +</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado le hago un getElementById. Obtengo el elemento y a dicho elemento le agrego el evento

    boton.addEventListener('click', () => {
        //Esta funcion se ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
    })
})

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    localStorage.clear()
    //Va a borrar los datos del carrito en localStorage

    //Por cada producto se crea un div con la misma estructura y la agrego al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class='bx bxs-trash'></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto que recorre, el acumulador le suma la propiedad precio, con el acumulador empezando en 0.
}

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId) //compruba si el elemento existe en el carro

    if (existe) { //Si ya esta en el carro, actualiza la cantidad
        const prod = carrito.map(prod => { //map encuentra los que son iguales y actualiza la cantidad
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        //Si no está, se agrega 
        carrito.push(item)
    }

    //Se actualiza el carrito
    actualizarCarrito()
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito()

    console.log(carrito)
}


botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})
botonComprar.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
})








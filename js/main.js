document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//INYECTAR EL HTML
stockProductos.forEach((producto) => {
    productosHTML(producto)
})


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    //Por cada producto se crea un div con esta estructura y la agrego al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>$${prod.precio}</p>
        <p><span id="cantidad">${prod.cantidad}</span></p>
        <select class="select-talle">
        <option>Talle</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
        </select>
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
            prod.id === prodId && prod.cantidad++
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
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

    Toastify({
        text: "Producto/s eliminado/s",
        duration: 1500,
        newWindow: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,68,1) 0%, rgba(255,46,0,1) 100%)",
        },
        className: "toast-compra",
        onClick: function () { }
    }).showToast();

    console.log(carrito)
}


botonVaciar.addEventListener('click', () => {

    if (carrito.length !== 0) { //para que no aparezca el toast sin que haya productos para vaciar el carrito
        Toastify({
            text: "Carrito vaciado",
            duration: 1500,
            newWindow: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,68,1) 0%, rgba(255,46,0,1) 100%)",
            },
            className: "toast-compra",
            onClick: function () { } // Callback despues del click
        }).showToast();
    }

    carrito.length = 0

    localStorage.clear()
    //Va a borrar los datos del carrito en localStorage

    actualizarCarrito()

    contenedorModal.classList.toggle('modal-active')
    // para que se cierre el modal después de vaciar el carrito
})

botonComprar.addEventListener("click", (e) => {
    if (carrito.length !== 0) {

        carrito.length = 0

        localStorage.clear()

        actualizarCarrito()

        contenedorModal.classList.toggle('modal-active')
    } else {
        e.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error :(...',
            text: '¡Debes añadir productos al carrito!',
            footer: '<p style="text-align: center;">Si tienes un problema o duda al respecto puedes contactarnos desde la pestaña de "Contacto" o dando click <span><a href="./pages/contacto.html"> AQUÍ</a></span></p>'
        })
    }
})








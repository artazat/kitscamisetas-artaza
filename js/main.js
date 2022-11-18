document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


// Traer del json los el array de objetos con un una funcion asincronica
const elStockCompleto = async () => {
    const response = await
        fetch('/productos.json')
    const data = await response.json()

    data.forEach((producto) => {
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
    })
}
elStockCompleto()


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

            // // IF CLASICO
            // if (prod.id === prodId) {
            //     prod.cantidad++
            // }

            // // AND
            prod.id === prodId && prod.cantidad++
        })
    } else {
        const elStockCompleto = async () => {
            const response = await
                fetch('/productos.json')
            const data = await response.json()

            const item = data.find((prod) => prod.id === prodId)
            //Si no está, se agrega 
            carrito.push(item)
            actualizarCarrito()
        }
        // llamo a la funcion
        elStockCompleto()
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
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,68,1) 0%, rgba(255,46,0,1) 100%)",
        },
        className: "toast-compra",
        onClick: function () { } // Callback after click
    }).showToast();

    console.log(carrito)
}


botonVaciar.addEventListener('click', () => {

    if (carrito.length !== 0) { //para que no aparezca el toast sin que haya productos para vaciar el carrito
        Toastify({
            text: "Carrito vaciado",
            duration: 1500,
            newWindow: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,68,1) 0%, rgba(255,46,0,1) 100%)",
            },
            className: "toast-compra",
            onClick: function () { } // Callback after click
        }).showToast();
    }

    carrito.length = 0

    localStorage.clear()
    //Va a borrar los datos del carrito en localStorage

    actualizarCarrito()

    contenedorModal.classList.toggle('modal-active')
    // para que se cierre el modal después de vaciar el carrito
})

botonComprar.addEventListener("click", () => {
    if (carrito.length !== 0) {
        Swal.fire({
            title: 'Kits!',
            text: '¡Muchas gracias por la compra, vuelva pronto!.',
            imageUrl: 'https://cdn.freebiesupply.com/logos/thumbs/1x/evgord-page-logo.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Logo de Kits!',
        })
    }

    carrito.length = 0

    localStorage.clear()

    actualizarCarrito()

    contenedorModal.classList.toggle('modal-active')
})








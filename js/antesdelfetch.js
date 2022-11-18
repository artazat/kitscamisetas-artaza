// class Remera{
//     constructor(id, nombre, cantidad, precio, img){
//         this.id = id
//         this.nombre = nombre
//         this.cantidad = cantidad
//         this.precio = precio
//         this.img = img
//     }
// }

// let stockProductos = []

// stockProductos.push(new Remera(1, "River",  1, 25000, './img/river.png'))
// stockProductos.push(new Remera(2, "Boca",  1, 24500, './img/boca.png'))
// stockProductos.push(new Remera(3, "Belgrano",  1, 12000, './img/belgrano.png'))
// stockProductos.push(new Remera(4, "Talleres",  1, 13000, './img/talleres.jpg'))
// stockProductos.push(new Remera(5, "Lanus",  1, 12000, './img/lanus.png'))
// stockProductos.push(new Remera(6, "Velez",  1, 15000, './img/velez.jpg'))
// stockProductos.push(new Remera(7, "San Lorenzo",  1, 15000, './img/san-lorenzo.jpg' ))
// stockProductos.push(new Remera(8, "Racing",  1, 15000, './img/racing.jpg'))

//INYECTAR EL HTML
// stockProductos.forEach((producto) => {
//     const div = document.createElement('div')
//     div.classList.add('producto')
//     div.innerHTML = `
//     <img src=${producto.img} alt= "">
//     <h3>${producto.nombre}</h3>
//     <p class="precioProducto">Precio: <span class="el-precio-color">$${producto.precio}</span></p>
//     <button id="agregar${producto.id}" class="boton-agregar">Agregar +</button>
//     `
//     contenedorProductos.appendChild(div)

//     const boton = document.getElementById(`agregar${producto.id}`)
//     //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado le hago un getElementById. Obtengo el elemento y a dicho elemento le agrego el evento

//     boton.addEventListener('click', () => {
//         //Esta funcion se ejecuta el agregar el carrito con la id del producto
//         agregarAlCarrito(producto.id)

//         Toastify({
//             text: "¡Producto agregado al carrito con exito!",
//             duration: 1500,
//             newWindow: true,
//             gravity: "bottom", // `top` or `bottom`
//             position: "right", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of toast on hover
//             style: {
//                 background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,25,90,1) 10%, rgba(65,105,225,1) 68%, rgba(47,96,243,1) 86%)",
//             },
//             className: "toast-compra",
//             onClick: function () { } // Callback after click
//         }).showToast();

//     })
// })
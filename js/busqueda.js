const contenedorText = document.getElementById('contenedor-busqueda')
const elText = document.createElement('div')

elText.classList.add('search')
elText.innerHTML = `
<input type="text" id="busqueda" placeholder="      🔎Buscar">
`

contenedorText.append(elText)

const inputBusqueda = document.getElementById('busqueda')

inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value

    const remerasFiltradas = stockProductos.filter((prod) => {
        const eNombre = prod.nombre
        const eNombreL = prod.nombre.toLowerCase()
        const eNombreU = prod.nombre.toUpperCase()

        return eNombre.includes(inputValue) || eNombreL.includes(inputValue) || eNombreU.includes(inputValue)
    })

    console.log(remerasFiltradas)

    // Limpiar el contenedor de productos para que asi solo aparezcan los buscados.
    contenedorProductos.innerHTML = ""

    remerasFiltradas.forEach((producto) => {
        productosHTML(producto)
    }) 
})

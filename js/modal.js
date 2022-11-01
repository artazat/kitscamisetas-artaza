botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()
})
class Remera{
    constructor(id, nombre, cantidad, precio, img){
        this.id = id
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
        this.img = img
    }
}

let stockProductos = []

stockProductos.push(new Remera(1, "River",  1, 25000, './img/river.png'))
stockProductos.push(new Remera(2, "Boca",  1, 24500, './img/boca.png'))
stockProductos.push(new Remera(3, "Belgrano",  1, 12000, './img/belgrano.png'))
stockProductos.push(new Remera(4, "Talleres",  1, 13000, './img/talleres.jpg'))
stockProductos.push(new Remera(5, "Lanus",  1, 12000, './img/lanus.png'))
stockProductos.push(new Remera(6, "Velez",  1, 15000, './img/velez.jpg'))
stockProductos.push(new Remera(7, "San Lorenzo",  1, 15000, './img/san-lorenzo.jpg' ))
stockProductos.push(new Remera(8, "Racing",  1, 15000, './img/racing.jpg'))

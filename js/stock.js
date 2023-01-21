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

stockProductos.push(new Remera(1, "Boca",  1, 24500, './img/boca.png'))
stockProductos.push(new Remera(2, "River",  1, 25000, './img/river.png'))
stockProductos.push(new Remera(3, "Talleres",  1, 13000, './img/talleres.jpg'))
stockProductos.push(new Remera(4, "Arsenal", 1, 18000, './img/arsenal.png'))
stockProductos.push(new Remera(5, "Independiente", 1, 16000, './img/independiente.png'))
stockProductos.push(new Remera(6, "Lanus",  1, 12000, './img/lanus.png'))
stockProductos.push(new Remera(7, "San Lorenzo",  1, 15000, './img/san-lorenzo.jpg' ))
stockProductos.push(new Remera(8, "Velez",  1, 15000, './img/velez.jpg'))
stockProductos.push(new Remera(9, "Racing",  1, 15000, './img/racing.jpg'))
stockProductos.push(new Remera(10, "Instituto", 1, 11500, './img/instituto.png'))
stockProductos.push(new Remera(11, "Belgrano",  1, 12000, './img/belgrano.png'))
stockProductos.push(new Remera(12, "Newells", 1, 13100, './img/newells.png'))
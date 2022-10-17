alert("Buenos días, sea bienvenido a Kits!.")
let enStock = false

class Remeras {
    constructor(equipo, precio) {
        this.equipo = equipo
        this.precio = precio
    }

    comprar(n) {
        alert(`Equipo: ${arrayRemeras[n].equipo}  -  Precio: $${arrayRemeras[n].precio}`)
    }

    alCarrito(m) {
        const carrito = []
        const agregarAlCarro = arrayRemeras.find((remera) => {
            return remera.equipo === arrayRemeras[m].equipo
        })

        carrito.push(agregarAlCarro)
        console.log(`Producto comprado (sin los impuestos):`)
        console.log(carrito)
    }
}


const arrayRemeras = []

arrayRemeras.push(new Remeras("River", 15000))
arrayRemeras.push(new Remeras("Boca", 13500))
arrayRemeras.push(new Remeras("Belgrano", 11000))
arrayRemeras.push(new Remeras("Talleres", 10500))

arrayRemeras.sort((a, b) => {
    if (a.precio > b.precio) {
        return -1
    } else if (a.precio < b.precio) {
        return 1
    } else {
        return 0
    }
})
console.log(arrayRemeras)



let promptLista = parseInt(prompt(`¿Usted quiere ver la lista de productos? Si no quiere / ya la vió, presione el valor que desee. Si no vio la lista / quiere volver a verla, presione "0"`))

if (promptLista === 0) {
    alert("¡Abra la CONSOLA (F12) para poder visualizar la lista de productos! NO olvide RECARGAR (F5) la página luego de ver la lista, así pasará a la fase de selección.")
} else {
    alert("Usted ya vio / no quiere ver la lista, por lo tanto, pasaremos a la fase de selección.")

    while (enStock === false) {
        let elPrompt = parseInt(prompt("Ingrese el número del equipo deseado: 1. River   2. Boca   3. Belgrano   4. Talleres"))

        function calcularImpuesto() {
            return (precio) => (precio + ((21 * precio) / 100) + ((8 * precio) / 100))
        }
        const impuestosTotal = calcularImpuesto()

        switch (elPrompt) {
            case 1:
                enStock = true
                arrayRemeras[0].comprar(0)
                arrayRemeras[0].alCarrito(0)

                alert("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[0].precio))

                console.log("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[0].precio))
                break;

            case 2:
                enStock = true
                arrayRemeras[1].comprar(1)
                arrayRemeras[1].alCarrito(1)

                alert("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[1].precio))

                console.log("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[1].precio))
                break;

            case 3:
                enStock = true
                arrayRemeras[2].comprar(2)
                arrayRemeras[2].alCarrito(2)

                alert("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[2].precio))

                console.log("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[2].precio))
                break;

            case 4:
                enStock = true
                arrayRemeras[3].comprar(3)
                arrayRemeras[3].alCarrito(3)

                alert("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[3].precio))

                console.log("El precio, con IVA e IIBB incluido, es de: $" + impuestosTotal(arrayRemeras[3].precio))
                break;

            default:
                alert("El valor ingresado es distinto a las opciones mostradas en pantalla, intendelo nuevamente 😊.")
        }

        let otraCompra = parseInt(prompt(`¿Desea usted comprar otra remera? Si es así, ingrese "1". Si NO es así, entonces ingrese cualquier otro valor.`))

        if (otraCompra === 1) {
            enStock = false
        } else {
            alert("Gracias por la compra, vuelva pronto. 😊")
        }
    }
}
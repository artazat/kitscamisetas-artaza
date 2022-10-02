alert("Buenos días, sea bienvenido a Eme Camisetas.")
let precio = 0

while (precio === 0) {
    let equipo = prompt("Ingrese el equipo del que desesa la camiseta")

    switch (equipo) {
        case "River":
        case "river":
            precio = 15000
            break;

        case "Boca":
        case "boca":
            precio = 13500
            break;

        case "Belgrano":
        case "belgrano":
            precio = 11000
            break;

        case "Talleres":
        case "talleres":
            precio = 10500
            break;

        default:
            alert("Lo sentimos, en este momento no tenemos camisetas del equipo ingresado :(")
    }
}
alert("El precio, SIN IVA incluido, es de: $" + precio)

let calcular = prompt("¿Quisiera saber el precio del producto con el IVA? Si quiere, escriba lo que desee para confirmar, de lo contrario escriba 'No' y el IVA no será calculado.")
const iva = (precio) => ((21 * precio) / 100) + precio
// const si = calcular == "si" || calcular == "Si" || calcular == "SI" || calcular == "sI"
const no = calcular == "no" || calcular == "No" || calcular == "NO" || calcular == "nO"

if(!no){
    alert("El precio final, con IVA incluido, es de: $" + iva(precio))
    alert("Gracias por la compra, vuelva pronto. 😊")
}else{
    alert("Usted ha introducido 'NO'. Que tenda un buen día, vuelva pronto. 😊")
}
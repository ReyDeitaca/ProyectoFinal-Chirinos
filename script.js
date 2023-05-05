let nombre = prompt("Ingresa tu nombre")


while (!isNaN(nombre) || nombre === ``) {
    alert("Los datos ingresados no son correctos.")
    nombre = prompt ("Ingresa tu nombre")
}

alert("Hola, " + nombre + " Bienvenido a Manga online") 

let menuDeMangas = "1 - Attack on titan\n2 - Boku no hero academia\n3 - Inuyasha\n4 - Sakura CardCaptor\n5 - salir"
let manga1 = 10
let manga2 = 15
let manga3 = 25
let manga4 = 5
let opcion = 0

do{
    alert(menuDeMangas)
    opcion = prompt("Ingrese la opcion: ")
    if (opcion == 1 ) {
        alert("El precio es $10")
    } else if (opcion == 2 ) {
        alert("El precio es: $15")
    } else if (opcion == 3 ) {
        alert("El precio es: $25")
    } else if (opcion == 4 ) {
        alert("El precio es: $5")
    }
} while(opcion != 5)
let calificacion = document.getElementById("calificacion")
let enviar = document.getElementById("boton")
let componente = document.getElementById("componente")
let botones = document.querySelectorAll(".botones")
let color = document.querySelector("#color")

let enviado = document.getElementById("enviado")
let mensaje = document.getElementById("mensaje")

let advertencia = document.getElementById("advertencia")

let comfirmacion = false;

const funcionSeleccionar = (e) =>{
    botones.forEach(element => {
        if (e.target == element) {
            element.addEventListener("click",() =>{
                botones.forEach(elemento => {
                    elemento.style.backgroundColor = ""
                    comfirmacion = false
                });
                element.style.backgroundColor = "hsl(25, 97%, 53%)"
                element.style.color = "#ffff"
                mensaje.textContent = `You selected ${element.textContent} out of 5`
                comfirmacion = true
                advertencia.remove()
                
            })
        }
    });

    if (e.target == enviar && comfirmacion) {
        e.preventDefault()
        calificacion.style.display = "none"
        enviado.style.display = "flex"
    }   
    e.preventDefault()
    advertencia.classList.remove("advertencianone")
}
componente.addEventListener("click",funcionSeleccionar)
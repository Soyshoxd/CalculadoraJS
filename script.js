const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",() => {
        const botonapretado = boton.textContent;

        if (botonapretado === "C"){
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
                return;
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            return;
            }
        }
        if (boton.id == "igual"){
            try{
                pantalla.textContent = "te quiero sapa";
            }catch{
                pantalla.textContent = "te quiero sapa";
            }
            return;
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonapretado;
        } else{
            pantalla.textContent += botonapretado;
        }
        
        
    })
});
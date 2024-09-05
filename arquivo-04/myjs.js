let quadrado = document.querySelectorAll(".quadrado")
let box = document.querySelector(".box")

quadrado.forEach((quadrado)=>{
    quadrado.addEventListener("dragover", (e)=>{
        e.preventDefault();
    })
    quadrado.addEventListener("drop", ()=>{
        quadrado.appendChild(box);
    })
})
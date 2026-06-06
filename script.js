window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 100){
        header.style.background = "#000";
    }else{
        header.style.background = "transparent";
    }

});

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

});
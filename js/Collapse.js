document.getElementById("Html").onclick = () =>{
    document.getElementsByClassName("ModalContainer")[0].classList.remove("None");
    document.getElementsByClassName("ModalContainer")[0].classList.add("Flex");
    document.getElementsByClassName("WebFrontCards")[0].classList.remove("Grid");
    document.body.style.overflow = "hidden"
}
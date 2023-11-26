document.getElementById("Html").onclick = () => {
    document
        .getElementsByClassName("ModalContainer")[0]
        .classList.remove("None");
    document.getElementsByClassName("ModalContainer")[0].classList.add("Flex");
    document.body.style.overflow = "hidden";
};
document.getElementById("CloseButton").onclick = () => {
    document
        .getElementsByClassName("ModalContainer")[0]
        .classList.remove("Flex");
    document.getElementsByClassName("ModalContainer")[0].classList.add("None");
    document.body.style.overflow = "visible";
};

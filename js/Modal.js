const showMOdal = (Card, Modal) => {
    document.getElementById(Card).onclick = () => {
        document.getElementsByClassName(Modal)[0].classList.remove("None");
        document.getElementsByClassName(Modal)[0].classList.add("Flex");
        document.body.style.overflow = "hidden";
    };
    document.getElementById(`${Card}CloseButton`).onclick = () => {
        document.getElementsByClassName(Modal)[0].classList.remove("Flex");
        document.getElementsByClassName(Modal)[0].classList.add("None");
        document.body.style.overflow = "visible";
    };
};

showMOdal("Html", "HTML");
showMOdal("Css", "CSS");
showMOdal("Js", "JS");
showMOdal("React", "REACT");

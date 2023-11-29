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
//FRONT
showMOdal("Html", "HTML");
showMOdal("Css", "CSS");
showMOdal("Js", "JS");
showMOdal("React", "REACT");

//BACK
showMOdal("Phyton", "PHYTON");
showMOdal("Java", "JAVA");
showMOdal("c", "C");
showMOdal("Php", "PHP");

//MATH
showMOdal("Gaal", "GAAL");
showMOdal("Discreta", "DISCRETA");
showMOdal("c1", "C1");

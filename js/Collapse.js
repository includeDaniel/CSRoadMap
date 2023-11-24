document.getElementById("Html").onclick = () => {
    document.getElementsByClassName("HtmlCollapse")[0].classList.remove("None");
    scroll(0, 0);
};

document.getElementById("CloseButton").onclick = () => {
    document.getElementsByClassName("HtmlCollapse")[0].classList.add("None");
    scroll(350, 350);
};

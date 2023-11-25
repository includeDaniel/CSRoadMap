var type = 0;
var counterTheme = 0;
var logo = document.getElementsByClassName("Logo")

document.getElementById("Light").onclick = () => {
    type = 0;
    changeTheme(type);
};

document.getElementById("Dark").onclick = () => {
    type = 1;
    changeTheme(type);
};

document.getElementById("ColorBlind").onclick = () => {
    type = 3;
    changeTheme(type);
};

function changeTheme(type) {
    // função que altera o tema da página

    let r = document.querySelector(":root");

    // modo dark
    if (type == 1) {
        r.style.setProperty("--bgcolor", "#332C33");
        r.style.setProperty("--contrast-color", "#fffaff");
        r.style.setProperty("--ligther-color", "#612F74");
        r.style.setProperty("--darker-color", "#dfa2f7");
        logo[0].src= "images/Dark/IconeDark.png"
        logo[1].src= "images/Dark/IconeDark.png"
    } else {
        // modo light
        if (type == 0) {
            r.style.setProperty("--bgcolor", "#fffaff");
            r.style.setProperty("--contrast-color", "#332C33");
            r.style.setProperty("--ligther-color", "#dfa2f7");
            r.style.setProperty("--darker-color", "#612F74");
            logo[0].src= "images/White/IconeWhite.png"
            logo[1].src= "images/White/IconeWhite.png"
        }
        // modo daltonico
        else {
            r.style.setProperty("--bgcolor", "#8B653E");
            r.style.setProperty("--contrast-color", "#e2f8ff");
            r.style.setProperty("--ligther-color", "#336474");
            r.style.setProperty("--darker-color", "#fea246");
            logo[0].src= "images/ColorBlind/IconeCB.png"
            logo[1].src= "images/ColorBlind/IconeCB.png"
        }
    }
}

document.getElementById("ChangeThemeBTM").onclick = () => {
    if (counterTheme % 2 == 0) {
        document
            .getElementsByClassName("AlignThemes")[0]
            .classList.remove("None");
    } else {
        document.getElementsByClassName("AlignThemes")[0].classList.add("None");
    }
    counterTheme++;
};

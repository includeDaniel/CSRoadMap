var type = 0
var counterTheme = 0

document.getElementById("Light").onclick = () => {
    type = 0
    changeTheme(type)
}

document.getElementById("Dark").onclick = () => {
    type = 1
    changeTheme(type)
}

document.getElementById("ColorBlind").onclick = () => {
    type = 3
    changeTheme(type)
}

function changeTheme(type) { // função que altera o tema da página

    let r = document.querySelector(":root"); 

    // modo dark
    if (type == 1) { 
        r.style.setProperty("--bgcolor", "#332C33");
        r.style.setProperty("--contrast-color", "#ffebfe");
        r.style.setProperty("--ligther-color", "#8F438C");
        r.style.setProperty("--darker-color", "#ef91ec");
    } else {
        // modo light
        if (type == 0) {
            r.style.setProperty("--bgcolor", "#ffebfe");
            r.style.setProperty("--contrast-color", "#332C33");
            r.style.setProperty("--ligther-color", "#ef91ec");
            r.style.setProperty("--darker-color", "#8F438C");
        } 
        // modo daltonico
        else {
            r.style.setProperty("--bgcolor", "#8B653E");
            r.style.setProperty("--contrast-color", "#b8edff");
            r.style.setProperty("--ligther-color", "#336474");
            r.style.setProperty("--darker-color", "#fea246");
        }
    }
}

document.getElementById("ChangeThemeBTM").onclick = () => {
    if(counterTheme % 2 == 0) {
        document.getElementsByClassName("AlignThemes")[0].classList.remove("None")
        
    } else {
        document.getElementsByClassName("AlignThemes")[0].classList.add("None")
    }
    counterTheme++
}
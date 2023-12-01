var type = 0;
var counterTheme = 0;
var logo = document.getElementsByClassName("Logo")
var footerimg = document.getElementsByClassName("FooterImage")
// Front
var htmlcard = document.getElementById("HTMLCard")
var htmltitle = document.getElementById("HTMLTitle")
var jscard = document.getElementsByClassName("JSCard")
var jstitle = document.getElementsByClassName("JSTitle")
var csscard = document.getElementById("CSSCard")
var csstitle = document.getElementById("CSSTitle")
var reactcard = document.getElementById("ReactCard")
var reacttitle = document.getElementById("ReactTitle")
// Back
var pythoncard = document.getElementById("PythonCard")
var pythontitle = document.getElementById("PythonTitle")
var javacard = document.getElementById("JavaCard")
var javatitle = document.getElementById("JavaTitle")
var phpcard = document.getElementById("PHPCard")
var phptitle = document.getElementById("PHPTitle")
var cmaismaiscard = document.getElementById("C++Card")
var cmaismaistitle = document.getElementById("C++Title")
// Math
var gaalcard = document.getElementById("GAALCard")
var gaaltitle = document.getElementById("GAALTitle")
var discretacard = document.getElementById("DiscretaCard")
var discretatitle = document.getElementById("DiscretaTitle")
var calc1card = document.getElementById("Calc1Card")
var calc1title = document.getElementById("Calc1Title")

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
        // Front
        htmlcard.src= "images/Dark/HTMLCardWhite.jpg"
        htmltitle.src= "images/Dark/HTMLTitleWhite.jpg"
        csscard.src="images/Dark/CSSCardWhite.jpg"
        csstitle.src="images/Dark/CSSTitleWhite.jpg"
        jscard[0].src="images/Dark/JSCardWhite.jpg"
        jstitle[0].src="images/Dark/JSTitleWhite.jpg"
        reactcard.src="images/Dark/ReactCardWhite.jpg"
        reacttitle.src="images/Dark/ReactTitleWhite.jpg"
        // Back
        pythoncard.src="images/Dark/PythonCardWhite.jpg"
        pythontitle.src="images/Dark/PythonTitleWhite.jpg"
        javacard.src="images/Dark/JavaCardWhite.jpg"
        javatitle.src="images/Dark/JavaTitleWhite.jpg"
        phpcard.src="images/Dark/PHPCardWhite.jpg"
        phptitle.src="images/Dark/PHPTitleWhite.jpg"
        cmaismaiscard.src="images/Dark/C++CardWhite.jpg"
        cmaismaistitle.src="images/Dark/C++TitleWhite.jpg"
        // Math
        gaalcard.src="images/Dark/GaalCardWhite.jpg"
        gaaltitle.src="images/Dark/GaalTitleWhite.jpg"
        discretacard.src="images/Dark/DiscretaCardWhite.jpg"
        discretatitle.src="images/Dark/DiscretaTitleWhite.jpg"
        calc1card.src="images/Dark/Calc1CardWhite.jpg"
        calc1title.src="images/Dark/Calc1TitleWhite.jpg"
    } else {
        // modo light
        if (type == 0) {
            r.style.setProperty("--bgcolor", "#fffaff");
            r.style.setProperty("--contrast-color", "#332C33");
            r.style.setProperty("--ligther-color", "#dfa2f7");
            r.style.setProperty("--darker-color", "#612F74");
            logo[0].src= "images/White/IconeWhite.png"
            logo[1].src= "images/White/IconeWhite.png"
            // Front
            htmlcard.src= "images/White/HTMLCardBlack.jpg"
            htmltitle.src= "images/White/HTMLTitleBlack.jpg"
            csscard.src="images/White/CSSCardBlack.jpg"
            csstitle.src="images/White/CSSTitleBlack.jpg"
            jscard[0].src="images/White/JSCardBlack.jpg"
            jstitle[0].src="images/White/JSTitleBlack.jpg"
            reactcard.src="images/White/ReactCardBlack.jpg"
            reacttitle.src="images/White/ReactTitleBlack.jpg"
            // Back
            pythoncard.src="images/White/PythonCardBlack.jpg"
            pythontitle.src="images/White/PythonTitleBlack.jpg"
            javacard.src="images/White/JavaCardBlack.jpg"
            javatitle.src="images/White/JavaTitleBlack.jpg"
            phpcard.src="images/White/PHPCardBlack.jpg"
            phptitle.src="images/White/PHPTitleBlack.jpg"
            cmaismaiscard.src="images/White/C++CardBlack.jpg"
            cmaismaistitle.src="images/White/C++TitleBlack.png"
            // Math
            gaalcard.src="images/White/GaalCardBlack.jpg"
            gaaltitle.src="images/White/GaalTitleBlack.jpg"
            discretacard.src="images/White/DiscretaCardBlack.jpg"
            discretatitle.src="images/White/DiscretaTitleBlack.jpg"
            calc1card.src="images/White/Calc1CardBlack.jpg"
            calc1title.src="images/White/Calc1TitleBlack.jpg"
        }
        // modo daltonico
        else {
            r.style.setProperty("--bgcolor", "#8B653E");
            r.style.setProperty("--contrast-color", "#e2f8ff");
            r.style.setProperty("--ligther-color", "#336474");
            r.style.setProperty("--darker-color", "#fea246");
            logo[0].src= "images/ColorBlind/IconeCB.png"
            logo[1].src= "images/ColorBlind/IconeCB.png"
            footerimg[0].src= "images/ColorBlind/paisagemRetroCB.jpg"
            footerimg[1].src= "images/ColorBlind/cod.ImgCB.jpg"
            footerimg[2].src= "images/ColorBlind/grupoCB.jpg"
            // Front
            htmlcard.src= "images/ColorBlind/HTMLCardCB.jpg"
            htmltitle.src= "images/ColorBlind/HTMLTitleCB.jpg"
            csscard.src="images/ColorBlind/CSSCardCB.jpg"
            csstitle.src="images/ColorBlind/CSSTitleCB.jpg"
            jscard[0].src="images/ColorBlind/JSCardCB.jpg"
            jstitle[0].src="images/ColorBlind/JSTitleCB.jpg"
            reactcard.src="images/ColorBlind/ReactCardCB.jpg"
            reacttitle.src="images/ColorBlind/ReactTitleCB.jpg"
            // Back
            pythoncard.src="images/ColorBlind/PythonCardCB.jpg"
            pythontitle.src="images/ColorBlind/PythonTitleCB.jpg"
            javacard.src="images/ColorBlind/JavaCardCB.jpg"
            javatitle.src="images/ColorBlind/JavaTitleCB.jpg"
            phpcard.src="images/ColorBlind/PHPCardCB.jpg"
            phptitle.src="images/ColorBlind/PHPTitleCB.jpg"
            cmaismaiscard.src="images/ColorBlind/C++CardCB.jpg"
            cmaismaistitle.src="images/ColorBlind/C++TitleCB.png"
            // Math
            gaalcard.src="images/ColorBlind/GaalCardCB.jpg"
            gaaltitle.src="images/ColorBlind/GaalTitleCB.jpg"
            discretacard.src="images/ColorBlind/DiscretaCardCB.jpg"
            discretatitle.src="images/ColorBlind/DiscretaTitleCB.jpg"
            calc1card.src="images/ColorBlind/Calc1CardCB.jpg"
            calc1title.src="images/ColorBlind/Calc1TitleCB.jpg"
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

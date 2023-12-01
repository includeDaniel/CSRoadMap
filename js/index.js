var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var TesteCounter1;
var TesteCounter2;

document.getElementById("Math").onclick = () => {
    if (counter1 % 2 == 0) {
        if (window.screen.width < 400) {
            scroll(500, 500);
        } else {
            scroll(130, 130);
        }

        document
            .getElementsByClassName("MainContent")[0]
            .classList.remove("None");
        document
            .getElementsByClassName("MathCards")[0]
            .classList.remove("None");
        document.getElementsByClassName("MathCards")[0].classList.add("Grid");

        document
            .getElementsByClassName("CodeSubLearningRoads")[0]
            .classList.add("None");
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.add("None");
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.remove("Grid");
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.add("None");
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.remove("Grid");
        document.getElementsByClassName("CardLine")[0].classList.add("None");

        document.getElementById("Math").style.backgroundColor =
            "var(--darker-color)";
        document.getElementById("Math").style.color = "var(--bgcolor)";

        if (counter2 % 2 != 0) {
            document
                .getElementsByClassName("CodeSubLearningRoads")[0]
                .classList.add("None");
            document.getElementById("Code").style.backgroundColor =
                "var(--ligther-color)";
            document.getElementById("Code").style.color =
                "var(--contrast-color)";
            counter2++;
        }
        counter1++;
    } else {
        document.getElementsByClassName("MainContent")[0].classList.add("None");
        document.getElementsByClassName("MathCards")[0].classList.add("None");
        document.getElementById("Math").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("Math").style.color = "var(--contrast-color)";
        counter1++;
        if (window.screen.width < 400) {
            scroll(130, 130);
        } else {
            scroll(0, 0);
        }
    }
};

document.getElementById("Code").onclick = () => {
    if (counter2 % 2 == 0) {
        if (window.screen.width < 400) {
            scroll(400, 400);
        } else {
            scroll(130, 130);
        }
        document
            .getElementsByClassName("MainContent")[0]
            .classList.remove("None");
        document.getElementsByClassName("MathCards")[0].classList.add("None");
        document
            .getElementsByClassName("MathCards")[0]
            .classList.remove("Grid");
        document
            .getElementsByClassName("CodeSubLearningRoads")[0]
            .classList.remove("None");
        document.getElementById("Code").style.backgroundColor =
            "var(--darker-color)";
        document.getElementById("Code").style.color = "var(--bgcolor)";

        if (counter1 % 2 != 0) {
            document
                .getElementsByClassName("MathCards")[0]
                .classList.add("None");
            document.getElementById("Math").style.backgroundColor =
                "var(--ligther-color)";
            document.getElementById("Math").style.color =
                "var(--contrast-color)";
            counter1++;
        }
        counter2++;
    } else {
        document.getElementsByClassName("MainContent")[0].classList.add("None");
        document
            .getElementsByClassName("CodeSubLearningRoads")[0]
            .classList.add("None");
        document.getElementById("Code").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("Code").style.color = "var(--contrast-color)";
        counter2++;
        if (window.screen.width < 400) {
            scroll(130, 130);
        } else {
            scroll(0, 0);
        }
    }
};

document.getElementById("SubWebFront").onclick = () => {
    if (counter3 % 2 == 0) {
        if (window.screen.width < 400) {
            scroll(600, 600);
        } else {
            scroll(350, 350);
        }
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.add("Grid");
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.add("None");
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.remove("Grid");
        document.getElementsByClassName("CardLine")[0].classList.remove("None");
        document.getElementById("SubWebFront").style.backgroundColor =
            "var(--darker-color)";
        document.getElementById("SubWebFront").style.color = "var(--bgcolor)";
        document.getElementById("SubWebBack").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("SubWebBack").style.color =
            "var(--contrast-color)";
        console.log(counter3);
        counter3++;
    } else {
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.add("None");
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.remove("Grid");
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.remove("Grid");
        document.getElementsByClassName("CardLine")[0].classList.add("None");
        document.getElementById("SubWebFront").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("SubWebFront").style.color =
            "var(--contrast-color)";
        console.log(counter3);
        counter3++;

        if (window.screen.width < 400) {
            scroll(400, 400);
        } else {
            scroll(130, 130);
        }
    }
};
document.getElementById("SubWebBack").onclick = () => {
    if (counter4 % 2 == 0) {
        if (window.screen.width < 400) {
            scroll(600, 600);
        } else {
            scroll(350, 350);
        }
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.add("Grid");
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.add("None");
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.remove("Grid");
        document.getElementsByClassName("CardLine")[0].classList.remove("None");
        document.getElementById("SubWebBack").style.backgroundColor =
            "var(--darker-color)";
        document.getElementById("SubWebBack").style.color = "var(--bgcolor)";
        document.getElementById("SubWebFront").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("SubWebFront").style.color =
            "var(--contrast-color)";
        console.log(counter4);
        counter4++;
        TesteCounter2 = counter3;
    } else {
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.add("None");
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.remove("Grid");
        document
            .getElementsByClassName("WebBackCards")[0]
            .classList.remove("Grid");
        document.getElementsByClassName("CardLine")[0].classList.add("None");
        document.getElementById("SubWebBack").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("SubWebBack").style.color =
            "var(--contrast-color)";
        console.log(counter4);

        counter4++;

        if (window.screen.width < 400) {
            scroll(400, 400);
        } else {
            scroll(130, 130);
        }
    }
};

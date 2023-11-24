var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

document.getElementById("Math").onclick = () => {
    if (counter1 % 2 == 0) {
        scroll(130, 130);
        document
            .getElementsByClassName("MainContent")[0]
            .classList.remove("None");
        document
            .getElementsByClassName("MathSubLearningRoads")[0]
            .classList.remove("None");
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
        document
            .getElementsByClassName("MathSubLearningRoads")[0]
            .classList.add("None");
        document.getElementById("Math").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("Math").style.color = "var(--contrast-color)";
        counter1++;
    }
};

document.getElementById("Code").onclick = () => {
    if (counter2 % 2 == 0) {
        scroll(130, 130);
        document
            .getElementsByClassName("MainContent")[0]
            .classList.remove("None");
        document
            .getElementsByClassName("CodeSubLearningRoads")[0]
            .classList.remove("None");
        document.getElementById("Code").style.backgroundColor =
            "var(--darker-color)";
        document.getElementById("Code").style.color = "var(--bgcolor)";

        if (counter1 % 2 != 0) {
            document
                .getElementsByClassName("MathSubLearningRoads")[0]
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
    }
};

document.getElementById("SubWebFront").onclick = () => {
    if (counter3 % 2 == 0) {
        scroll(350, 350);
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.add("Grid");
        document.getElementsByClassName("CardLine")[0].classList.remove("None");
        document.getElementById("SubWebFront").style.backgroundColor =
            "var(--darker-color)";
        document.getElementById("SubWebFront").style.color = "var(--bgcolor)";

        counter3++;
    } else {
        document
            .getElementsByClassName("WebFrontCards")[0]
            .classList.remove("Grid");
        document.getElementsByClassName("CardLine")[0].classList.add("None");
        document.getElementById("SubWebFront").style.backgroundColor =
            "var(--ligther-color)";
        document.getElementById("SubWebFront").style.color =
            "var(--contrast-color)";
        counter3++;
    }
};

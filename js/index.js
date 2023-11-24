var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

document.getElementById("Math").onclick = () => {
    if(counter1 % 2 == 0) {
        document.getElementsByClassName("MainContent")[0].classList.remove("None")
        document.getElementsByClassName("MathSubLearningRoads")[0].classList.remove("None")
        document.getElementById("Math").style.backgroundColor = "violet"
        document.getElementById("Math").style.color = "white"

        if(counter2 % 2 != 0) {
            document.getElementsByClassName("CodeSubLearningRoads")[0].classList.add("None")
            document.getElementById("Code").style.backgroundColor = "white"
            document.getElementById("Code").style.color = "black"
            counter2++
        }
        counter1++
    } else {
        document.getElementsByClassName("MainContent")[0].classList.add("None")
        document.getElementsByClassName("MathSubLearningRoads")[0].classList.add("None")
        document.getElementById("Math").style.backgroundColor = "white"
        document.getElementById("Math").style.color = "black"
        counter1++
    }
}

document.getElementById("Code").onclick = () => {
    if(counter2 % 2 == 0) {
        document.getElementsByClassName("MainContent")[0].classList.remove("None")
        document.getElementsByClassName("CodeSubLearningRoads")[0].classList.remove("None")
        document.getElementById("Code").style.backgroundColor = "violet"
        document.getElementById("Code").style.color = "white"

        if(counter1 % 2 != 0) {
            document.getElementsByClassName("MathSubLearningRoads")[0].classList.add("None")
            document.getElementById("Math").style.backgroundColor = "white"
            document.getElementById("Math").style.color = "black"
            counter1++
        }
        counter2++
    } else {
        document.getElementsByClassName("MainContent")[0].classList.add("None")
        document.getElementsByClassName("CodeSubLearningRoads")[0].classList.add("None")
        document.getElementById("Code").style.backgroundColor = "white"
        document.getElementById("Code").style.color = "black"
        counter2++
    }
}

document.getElementById("SubWebFront").onclick = () => {
    if(counter3 % 2 == 0) {
        document.getElementsByClassName("WebFrontCards")[0].classList.add("Grid")
        document.getElementsByClassName("CardLine")[0].classList.remove("None")
        document.getElementById("SubWebFront").style.backgroundColor = "violet"
        document.getElementById("SubWebFront").style.color = "white"

        counter3++
    } else {
        document.getElementsByClassName("WebFrontCards")[0].classList.remove("Grid")
        document.getElementsByClassName("CardLine")[0].classList.add("None")
        document.getElementById("SubWebFront").style.backgroundColor = "white"
        document.getElementById("SubWebFront").style.color = "black"
        counter3++
    }
}

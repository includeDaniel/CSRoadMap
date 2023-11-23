
let counter = 0;
let counter2 = 0;

document.getElementById("Math").onclick = () => {
    if(counter % 2 == 0) {
        if( document.getElementsByClassName("cards")[0].classList.contains("Grid")) {
            document.getElementById("Math").style.backgroundColor = "violet"
            document.getElementById("Math").style.color = "white"
        } else {
            document.getElementsByClassName("cards")[0].classList.remove("None")
            document.getElementsByClassName("cards")[0].classList.add("Grid")
            document.getElementById("Math").style.backgroundColor = "white"
            document.getElementById("Math").style.color = "black"
        }
        document.getElementById("Math").style.backgroundColor = "violet"
        document.getElementById("Math").style.color = "white"
        counter++
    } else {
        document.getElementsByClassName("cards")[0].classList.remove("Grid")
        document.getElementsByClassName("cards")[0].classList.add("None")
        document.getElementById("Math").style.backgroundColor = "white"
        document.getElementById("Math").style.color = "black"
        counter++
    }
    }
document.getElementById("Code").onclick = () => {
    if(document.getElementById("Math").style.backgroundColor == "violet") {
        document.getElementById("Math").style.backgroundColor = "white"
        document.getElementById("Math").style.color = "black"
        counter2++
    } else {
        document.getElementsByClassName("cards")[0].classList.remove("Grid")
        document.getElementsByClassName("cards")[0].classList.add("None")
        document.getElementById("Code").style.backgroundColor = "white"
        document.getElementById("Code").style.color = "black"
        document.getElementById("Math").style.backgroundColor = "white"
        document.getElementById("Math").style.color = "black"
        counter2++
    }
    }


let tog = 0
let p1sum = 0
let p2sum = 0
let p3sum = 0
let p4sum = 0
let p5sum = 0

function p1() {
    window.location.href = ("2players.html");
}

function p2() {
    window.location.href = ("3players.html");
}

function p3() {
    window.location.href = ("4players.html");
}

function p4() {
    window.location.href = ("5players.html");
}

function home() {
    window.location.href = "index.html";
}

function restart() {
    location.reload();
}

function snakeladder(sum, c) {
    const snakePositions = {
        82: 20,
        95: 38,
        87: 66,
        56: 8,
        36: 5,
        49: 7
    };
    const ladderPositions = {
        5: 35,
        9: 51,
        23: 42,
        62: 83,
        48: 86,
        69: 91
    };


    if (snakePositions.hasOwnProperty(sum)) {
        sum = snakePositions[sum];
        var x = document.getElementById("msg");
        x.innerHTML = ("Oh no! You landed on a snake 🐍. Move back to position " + sum + ".");
        x.style.color = c;

    } else if (ladderPositions.hasOwnProperty(sum)) {
        sum = ladderPositions[sum];
        var y = document.getElementById("msg");
        y.innerHTML = ("Congratulations! You landed on a ladder 🪜. Climb up to position " + sum + ".");
        y.style.color = c;
    } else {
        var z = document.getElementById("msg");
        z.innerHTML = (" ");
    }

    return sum;
}

/*----------------------------------------------------------------------------------------------------------------------------*/
function rollDice2() {
    //rollingSound.play()
    if(p1sum>=100 || p3sum>=100){  return; }
    var result = Math.floor(Math.random() * 6) + 1;
    var image = document.getElementById("dice-image");
    image.src = "images/d" + result + ".png";
    image.alt = "dice with " + result + " spots";

    if (tog % 2 == 0) {
        var element = document.getElementById("col");
        element.innerText = "red's ";
        element.style.color = "red";

    } else if (tog % 2 == 1) {
        var element = document.getElementById("col");
        element.innerText = "Blue's ";
        element.style.color = "rgb(1, 191, 255)";


    }

    tog = tog + 1


    if (tog % 2 == 0) {
        if (p1sum + result <= 100) {
            if (p1sum > 0) {
                document.getElementById(`g${p1sum}`).innerHTML = "";
            }
            p1sum += result;
            p1sum = snakeladder(p1sum, "red");
            document.getElementById(`g${p1sum}`).innerHTML = "<img src='images/red.png'>";
            if (p1sum == 100) {
                document.getElementById("tog").innerHTML = "!!! PLAYER RED WON THE GAME !!!";
                document.getElementById("tog").style.color = "red";
            }
        }
    } else if (tog % 2 == 1) {
        if (p3sum + result <= 100) {
            if (p3sum > 0) {
                document.getElementById(`g${p3sum}`).innerHTML = "";
            }
            p3sum += result;
            p3sum = snakeladder(p3sum, "rgb(1, 191, 255)");
            document.getElementById(`g${p3sum}`).innerHTML = "<img src='images/blue.png'>";
        }
        if (p3sum == 100) {
            
            document.getElementById("tog").innerHTML = "!!! PLAYER BLUE WON THE GAME !!!";
            document.getElementById("tog").style.color = "rgb(1, 191, 255)";
        }
    }

}


/*-------------------------------------------------------------------------------------------------------------------------*/

function rollDice3() {
    //rollingSound.play()

    if(p1sum>=100 || p2sum>=100 || p3sum>=100){ return; }
    var result = Math.floor(Math.random() * 6) + 1;
    var image = document.getElementById("dice-image");
    image.src = "images/d" + result + ".png";
    image.alt = "dice with " + result + " spots";

    if (tog % 3 == 0) {
        var element = document.getElementById("col");
        element.innerText = "Yellow's ";
        element.style.color = "yellow";


    } else if (tog % 3 == 2) {
        var element = document.getElementById("col");
        element.innerText = "Red's ";
        element.style.color = "red";



    } else if (tog % 3 == 1) {
        var element = document.getElementById("col");
        element.innerText = "Blue's ";
        element.style.color = "rgb(1, 191, 255)";


    }

    tog = tog + 1
  

    if (tog % 3 == 1) {
        if (p1sum + result <= 100) {
            if (p1sum > 0) {
                document.getElementById(`g${p1sum}`).innerHTML = "";
            }
            p1sum += result;
            p1sum = snakeladder(p1sum, "red");
            document.getElementById(`g${p1sum}`).innerHTML = "<img src='images/red.png'>";
            if (p1sum == 100) {
                document.getElementById("tog").innerHTML = "!!! PLAYER RED WON THE GAME !!!";
                document.getElementById("tog").style.color = "red";
            }
        }
    } else if (tog % 3 == 2) {
        if (p2sum + result <= 100) {
            if (p2sum > 0) {
                document.getElementById(`g${p2sum}`).innerHTML = "";
            }
            p2sum += result;
            p2sum = snakeladder(p2sum, "yellow");
            document.getElementById(`g${p2sum}`).innerHTML = "<img src='images/yellow.png'>";
        }
        if (p2sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER YELLOW WON THE GAME !!!";
            document.getElementById("tog").style.color = "yellow";
        }
    } else if (tog % 3 == 0) {
        if (p3sum + result <= 100) {
            if (p3sum > 0) {
                document.getElementById(`g${p3sum}`).innerHTML = "";
            }
            p3sum += result;
            p3sum = snakeladder(p3sum, "rgb(1, 191, 255)");
            document.getElementById(`g${p3sum}`).innerHTML = "<img src='images/blue.png'>";
        }
        if (p3sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER BLUE WON THE GAME !!!";
            document.getElementById("tog").style.color = "rgb(1, 191, 255)";
        }
    }





}

/*-------------------------------------------------------------------------------------------------------------------------*/

function rollDice4() {
    //rollingSound.play()
    if(p1sum>=100 || p2sum>=100 || p3sum>=100 || p4sum>=100){ return; }
    var result = Math.floor(Math.random() * 6) + 1;
    var image = document.getElementById("dice-image");
    image.src = "images/d" + result + ".png";
    image.alt = "dice with " + result + " spots";

    if (tog % 4 == 0) {
        var element = document.getElementById("col");
        element.innerText = "Yellow's ";
        element.style.color = "yellow";


    } else if (tog % 4 == 2) {
        var element = document.getElementById("col");
        element.innerText = "Red's ";
        element.style.color = "red";



    } else if (tog % 4 == 1) {
        var element = document.getElementById("col");
        element.innerText = "Blue's ";
        element.style.color = "rgb(1, 191, 255)";


    } else if (tog % 4 == 3) {
        var element = document.getElementById("col");
        element.innerText = "Green's ";
        element.style.color = "rgb(9, 255, 9)";


    }

    tog = tog + 1


    if (tog % 4 == 0) {
        if (p1sum + result <= 100) {
            if (p1sum > 0) {
                document.getElementById(`g${p1sum}`).innerHTML = "";
            }
            p1sum += result;
            p1sum = snakeladder(p1sum, "red");
            document.getElementById(`g${p1sum}`).innerHTML = "<img src='images/red.png'>";
            if (p1sum == 100) {
                document.getElementById("tog").innerHTML = "!!! PLAYER RED WON THE GAME !!!";
                document.getElementById("tog").style.color = "red";
            }
        }
    } else if (tog % 4 == 2) {
        if (p2sum + result <= 100) {
            if (p2sum > 0) {
                document.getElementById(`g${p2sum}`).innerHTML = "";
            }
            p2sum += result;
            p2sum = snakeladder(p2sum, "yellow");
            document.getElementById(`g${p2sum}`).innerHTML = "<img src='images/yellow.png'>";
        }
        if (p2sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER YELLOW WON THE GAME !!!";
            document.getElementById("tog").style.color = "yellow";
        }
    } else if (tog % 4 == 3) {
        if (p3sum + result <= 100) {
            if (p3sum > 0) {
                document.getElementById(`g${p3sum}`).innerHTML = "";
            }
            p3sum += result;
            p3sum = snakeladder(p3sum, "rgb(1, 191, 255)");
            document.getElementById(`g${p3sum}`).innerHTML = "<img src='images/blue.png'>";
        }
        if (p3sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER BLUE WON THE GAME !!!";
            document.getElementById("tog").style.color = "rgb(1, 191, 255)";
        }
    } else if (tog % 4 == 1) {
        if (p4sum + result <= 100) {
            if (p4sum > 0) {
                document.getElementById(`g${p4sum}`).innerHTML = "";
            }
            p4sum += result;
            p4sum = snakeladder(p4sum, "rgb(9, 255, 9)");
            document.getElementById(`g${p4sum}`).innerHTML = "<img src='images/green.png'>";
        }
        if (p4sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER GREEN WON THE GAME !!!";
            document.getElementById("tog").style.color = "rgb(9, 255, 9)";
        }
    }





}


/*-------------------------------------------------------------------------------------------------------------------------*/

function rollDice5() {
    //rollingSound.play()
    if(p1sum>=100 || p2sum>=100 || p3sum>=100 || p4sum>=100 || p5sum>=100){ return; }
    var result = Math.floor(Math.random() * 6) + 1;
    var image = document.getElementById("dice-image");
    image.src = "images/d" + result + ".png";
    image.alt = "dice with " + result + " spots";

    if (tog % 5 == 0) {
        var element = document.getElementById("col");
        element.innerText = "Yellow's ";
        element.style.color = "yellow";


    } else if (tog % 5 == 2) {
        var element = document.getElementById("col");
        element.innerText = "Red's ";
        element.style.color = "red";



    } else if (tog % 5 == 1) {
        var element = document.getElementById("col");
        element.innerText = "Blue's ";
        element.style.color = "rgb(19, 41, 244)";


    } else if (tog % 5 == 3) {
        var element = document.getElementById("col");
        element.innerText = "Green's ";
        element.style.color = "rgb(9, 255, 9)";


    } else if (tog % 5 == 4) {
        var element = document.getElementById("col");
        element.innerText = "Sky-Blue's ";
        element.style.color = "rgb(0, 255, 229)";


    }

    tog = tog + 1


    if (tog % 5 == 4) {
        if (p1sum + result <= 100) {
            if (p1sum > 0) {
                document.getElementById(`g${p1sum}`).innerHTML = "";
            }
            p1sum += result;
            p1sum = snakeladder(p1sum, "red");
            document.getElementById(`g${p1sum}`).innerHTML = "<img src='images/red.png'>";
            if (p1sum == 100) {
                document.getElementById("tog").innerHTML = "!!! PLAYER RED WON THE GAME !!!";
                document.getElementById("tog").style.color = "red";
            }
        }
    } else if (tog % 5 == 2) {
        if (p2sum + result <= 100) {
            if (p2sum > 0) {
                document.getElementById(`g${p2sum}`).innerHTML = "";
            }
            p2sum += result;
            p2sum = snakeladder(p2sum, "yellow");
            document.getElementById(`g${p2sum}`).innerHTML = "<img src='images/yellow.png'>";
        }
        if (p2sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER YELLOW WON THE GAME !!!";
            document.getElementById("tog").style.color = "yellow";
        }
    } else if (tog % 5 == 3) {
        if (p3sum + result <= 100) {
            if (p3sum > 0) {
                document.getElementById(`g${p3sum}`).innerHTML = "";
            }
            p3sum += result;
            p3sum = snakeladder(p3sum, "rgb(19, 41, 244)");
            document.getElementById(`g${p3sum}`).innerHTML = "<img src='images/blue.png'>";
        }
        if (p3sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER BLUE WON THE GAME !!!";
            document.getElementById("tog").style.color = "rgb(1, 191, 255)";
        }
    } else if (tog % 5 == 0) {
        if (p4sum + result <= 100) {
            if (p4sum > 0) {
                document.getElementById(`g${p4sum}`).innerHTML = "";
            }
            p4sum += result;
            p4sum = snakeladder(p4sum, "rgb(9, 255, 9)");
            document.getElementById(`g${p4sum}`).innerHTML = "<img src='images/green.png'>";
        }
        if (p4sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER GREEN WON THE GAME !!!";
            document.getElementById("tog").style.color = "rgb(9, 255, 9)";
        }
    } else if (tog % 5 == 1) {
        if (p5sum + result <= 100) {
            if (p5sum > 0) {
                document.getElementById(`g${p5sum}`).innerHTML = "";
            }
            p5sum += result;
            p5sum = snakeladder(p5sum, "rgb(0, 255, 229)");
            document.getElementById(`g${p5sum}`).innerHTML = "<img src='images/skyblue.png'>";
        }
        if (p5sum == 100) {
            document.getElementById("tog").innerHTML = "!!! PLAYER SKY-BLUE WON THE GAME !!!";
            document.getElementById("tog").style.color = "rgb(0, 255, 229)";
        }
    }
}
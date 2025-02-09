let score = 11;

// Start game function
function start() {
    const random = Math.floor(Math.random() * 100);
    document.getElementById("game_head").style.display="none";
    document.getElementById("start_btn").style.display="none";
    alert("Computer has guessed the number.");
    const input = document.createElement("input");
    input.type = "number";
    input.id = "stl-inp";
    input.placeholder = "Guess the number";
    const button = document.createElement("button");
    button.textContent = "Guess";
    button.id = "stl-btn";
    document.body.appendChild(input);
    document.body.appendChild(button);
    // Guess button function
    button.onclick = function () {
        score--;
        document.getElementById("gm_score").innerHTML=score;
        if (random == input.value) {
            alert("Congratulations, You won !!");
            sc();
            restart();
        } else if (random < input.value) {
            alert("Too high!!, think of a lower number");
            document.getElementById("stl-inp").value = "";
        } else if (random > input.value) {
            alert("Too low!!, think of a higher number");
            document.getElementById("stl-inp").value = "";
        } else if (score == 0) {
            alert("Game over !!");
            restart();
        }
    }
}

// Restart game function
function restart() {
    const button1 = document.createElement("button");
    button1.id = "btn1";
    button1.textContent = "Restart";
    document.body.appendChild(button1);
    document.getElementById("stl-inp").style.display = "none";
    document.getElementById("stl-btn").style.display = "none";
    // Restart game button function
    button1.onclick = function() {
        document.getElementById("container").innerHTML="";
        document.getElementById("container1").innerHTML="";
        document.getElementById("stl-inp").remove();
        document.getElementById("stl-btn").remove();
        document.getElementById("game_head").style.display="block";
        document.getElementById("start_btn").style.display="block";
        document.getElementById("gm_score").innerHTML="0";
        document.getElementById("btn1").style.display="none";
    }
}

// Score function
function sc() {
    if (score >= 8) {
        alert("You are a mind reader !!");
    } else if (score >= 5) {
        alert("You are a good guesser !!");
    } else {
        alert("You guessed it but you can try better !!");
    }
}

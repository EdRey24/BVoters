
function checkInput(){
    let y = document.getElementById("output")
    let rank;
    let err = false;
    let q1, q2, q3, q4, q5, q6, q7, q8; 

    if (document.getElementById("q1o1").checked){
        q1 = 1;
    } else if (document.getElementById("q1o2").checked){
        q1 = 0;
    } else if (document.getElementById("q1o3").checked){
        q1 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("q2o1").checked){
        q2 = 1;
    } else if (document.getElementById("q2o2").checked){
        q2 = 0;
    } else if (document.getElementById("q2o3").checked){
        q2 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("q3o1").checked){
        q3 = 1;
    } else if (document.getElementById("q3o2").checked){
        q3 = 0;
    } else if (document.getElementById("q3o3").checked){
        q3 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("q4o1").checked){
        q4 = 1;
    } else if (document.getElementById("q4o2").checked){
        q4 = 0;
    } else if (document.getElementById("q4o3").checked){
        q4 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("q5o1").checked){
        q5 = 1;
    } else if (document.getElementById("q5o2").checked){
        q5 = 0;
    } else if (document.getElementById("q5o3").checked){
        q5 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("q6o1").checked){
        q6 = 1;
    } else if (document.getElementById("q6o2").checked){
        q6 = 0;
    } else if (document.getElementById("q6o3").checked){
        q6 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("q7o1").checked){
        q7 = 1;
    } else if (document.getElementById("q7o2").checked){
        q7 = 0;
    } else if (document.getElementById("q7o3").checked){
        q7 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("q8o1").checked){
        q8 = 1;
    } else if (document.getElementById("q8o2").checked){
        q8 = 0;
    } else if (document.getElementById("q8o3").checked){
        q8 = -1;
    } else {
        err = true;
    }

    if (document.getElementById("option1").value == document.getElementById("option2").value == document.getElementById("option3").value == document.getElementById("option4").value == document.getElementById("option5").value == document.getElementById("option6").value == document.getElementById("option7").value == document.getElementById("option8").value){
        err = true;
    }

    if (err == true){
        y.innerHTML = "Please fill out all of the options and ensure all of your rankings are different";
    }
    else {
        rank = (q1 * document.getElementById("option1").value)+ (q2 * document.getElementById("option2").value) + (document.getElementById("option3").value * q3) + (document.getElementById("option4").value * q4) + (document.getElementById("option5").value * q5) + (document.getElementById("option6").value * q6) + (document.getElementById("option7").value * q7) + (document.getElementById("option8").value * q8);

        if (rank > 15){
            y.innerHTML = "Your values are closer to the Republican Party";
        } else if (rank < 15){
            y.innerHTML = "Your values are closer to the Democratic Party";
        } else {
            y.innerHTML = "Your values are More Neutral you like ideas from both parties";
        }
    }
        // y.innerHTML="Like I care";
    // }
}
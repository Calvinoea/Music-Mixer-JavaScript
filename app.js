$(document).ready(function() {
    $(".emoji").click(function() {
        alert("The paragraph was clicked.");
        audioplay1()
        textColor()
    });
});




// Audio files

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function audioplay1() {




    var audio_files = ["yoursong.mp3", "energy.mp3", "moonchild.mp3", "shapeofyou.mp3"];
    var random_file = audio_files[getRandomInt(0, audio_files.length)];

    var audio = new Audio(random_file);

    audio.play();

}

document.getElementsByClassName("reset").addEventListener("click", reset);

function reset() {

    location.reload();
    return false;
}

// Change Background

function changeBodyBg(color) {
    document.body.style.background = color;
}


function textColor() {
    document.getElementById("heading").style.color = "#32CD32";
}

textColor()
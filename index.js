var buttonLength = document.querySelectorAll(".drum").length;

for(let i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        playSound(buttonHTML);
        activeButton(buttonHTML);
    });
}

document.addEventListener("keypress", function(btn) {
    playSound(btn.key);  
    activeButton(btn.key);
});

function playSound(btn) {
    switch(btn) {
        case 'w':
            var w = new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case 'a':
            var a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case 's':
            var s = new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case 'd':
            var d = new Audio("sounds/tom-4.mp3");
            d.play();
            break;
        case 'j':
            var j = new Audio("sounds/snare.mp3")
            j.play();
            break;
        case 'k':
            var k = new Audio("sounds/crash.mp3")
            k.play();
            break
        case 'l':
            var l = new Audio("sounds/kick-bass.mp3")
            l.play();
            break
    }
}

function activeButton(btn) {
    var active = document.querySelector("." + btn);
    active.classList.add("pressed");

    setTimeout(function() {
        active.classList.remove("pressed");
    }, 300);
}
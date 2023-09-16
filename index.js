var buttonLength = document.querySelectorAll(".drum").length;

for(let i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        playSound(buttonHTML);
        activeButton(buttonHTML);
    });
}

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
    }
}

function activeButton(btn) {
    var active = document.querySelector("." + btn);
    active.classList.add("pressed");

    setTimeout(function() {
        active.classList.remove("pressed");
    }, 300);
}
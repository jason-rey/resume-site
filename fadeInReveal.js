function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        let maxHeight = window.innerHeight;
        let elementPos = reveals[i].getBoundingClientRect().top;
        var revealHeight = 100;
        
        if (elementPos < maxHeight - revealHeight) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();
const arrowS = document.querySelectorAll("#clickingArrow");
// const arrowS = $("#clickingArrow");

arrowS.forEach(function(arrow) {
        arrow.addEventListener( "click", function(titlePop) {
            setTimeout ( () => {
            //for dropdown
            let text = document.getElementById("dropdown");
            text.classList.toggle("active");
            }, 500);
            //for anchor
            const container = titlePop.currentTarget.parentElement;
            container.classList.toggle("active");
            //for clickingArrow
            this.classList.toggle("active");
    });
});


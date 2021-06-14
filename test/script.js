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

/*
arrowS.forEach(function(toggler) {
    toggler.addEventListener("click", function() {
        let arrowS=this;
        arrowS.classList.toggle("active");
        document.getElementById("anchor").style.fontWeight = "700";
        document.getElementById("dropdown").setAttribute("style","display: block; transition: ease 2s;");
    });

    arrowS.forEach( function(collapse) {
        toggler.addEventListener("click", function() {    
            if (collapse !== toggler) {
                document.getElementById("anchor").style.fontWeight = "400";
                document.getElementById("dropdown").setAttribute("style","display: none; transition: ease 2s;");
                arrowS.classList.toggle("active"); 
            }
        });
    });
});
*/

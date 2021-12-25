{
    const arrowS = document.querySelectorAll(".clickingArrow");
    
    arrowS.forEach(function(arrow) {
        arrow.addEventListener( "click", function(arrowFlip) {            
            //for anchor pop
            const container = arrowFlip.currentTarget.parentElement;
            container.classList.toggle("active");
            //for clickingArrow rotate
            this.classList.toggle("active");
            //for text expansion
            setTimeout ( () => {
                container.nextElementSibling.classList.toggle("active");
            }, 500);
    
            arrowS.forEach(function(activated) {
                if (activated!==arrow) {
                    //for anchor reset
                    activated.classList.remove("active");
                    //for clickingArrow reset
                    activated.parentElement.classList.remove("active");
                    //for text collapse                    
                    setTimeout ( () => {
                        activated.parentElement.nextElementSibling.classList.remove("active");
                    }, 500);
                }
            })
        });
    });
}
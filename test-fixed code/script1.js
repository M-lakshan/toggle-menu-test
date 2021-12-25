{
    const arrowS = document.querySelectorAll(".clickingArrow");
    var clickingArrowStatus = false;
    
    arrowS.forEach(function(arrow) {
        arrow.addEventListener( 'click', function(titlePop) {
            if (clickingArrowStatus==false) {
                //for anchor pop
                const container = titlePop.currentTarget.parentElement;
                container.classList.toggle("active");
                //for clickingArrow rotate
                this.classList.toggle("active");
                //for text expansion
                setTimeout ( () => {
                    container.nextElementSibling.classList.toggle("active");
                }, 500);
                //reset the condition
                clickingArrowStatus = true; 
            }
            else {
                //for anchor reset
                const container = titlePop.currentTarget.parentElement;
                container.classList.toggle("active");
                //for clickingArrow reset
                this.classList.toggle("active");
                //for text collapse
                setTimeout ( () => {
                    container.nextElementSibling.classList.toggle("active");
                }, 500);
                //revert the condition
                clickingArrowStatus = false; 
            }
        });
    });
}

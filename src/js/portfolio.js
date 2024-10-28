function getPortfolio () {
    if (document.querySelector(".portfolio")) {
        window.addEventListener("DOMContentLoaded" , function() {

            let slides = this.document.querySelectorAll(".portfolio__slide"),
                prev = this.document.querySelectorAll(".portfolio__prev"),
                next = this.document.querySelectorAll(".portfolio__next"),
                curentIndex = 1;

            let showSlides = function(n) {

                if (n < 1) {
                    curentIndex = slides.length;
                }
                if (n > slides.length) {
                    curentIndex = 1;
                }

                slides.forEach((item) => {
                    item.style.display = "none";
                });
                
                slides[curentIndex - 1].style.display = "flex";
            }

            showSlides(curentIndex);

                let indexPlus = function(n) {
                    showSlides(curentIndex = curentIndex + n);
                }

                next.forEach((item) => {
                    item.addEventListener("click", () => {
                        indexPlus(1);
                    });
                })

                prev.forEach((item) => {
                    item.addEventListener("click", () => {
                        indexPlus(-1);
                    });
                })
        });

        let width = document.documentElement.clientWidth,
            img = Array.from(document.getElementsByTagName("img"));


        if(width <= 576 ) {
            img.forEach((item) => {
                if (item.classList.contains("animation__type__slide")) {
                    item.classList.remove("animation__type__slide");
                    item.classList.add("animation__type__fade");
                }
            });   
        } else {
            img.forEach((item) => {
                if (item.classList.contains("animation__type__fade")) {
                    item.classList.remove("animation__type__fade");
                    item.classList.add("animation__type__slide");
                }  
            });
        }
    }
}

export { getPortfolio }
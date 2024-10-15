function getPromo() {
    window.addEventListener("DOMContentLoaded", function () {

        
        let menuItem = this.document.querySelectorAll(".header__item"),
            hamburger = this.document.querySelector(".header__hamburger"),
            menu = this.document.querySelector(".header__nav"),
            close = this.document.querySelector(".header__close"),
            promoOverlay = this.document.querySelector(".promo__overlay");


        menuItem.forEach(function(item) {
            item.addEventListener("click", function() {
                for(let i = 0; i < menuItem.length; i++) {
                    menuItem[i].classList.remove("header__item_active");
                    this.classList.add("header__item_active");
                }
            });
        });

        function setNav() {
            hamburger.addEventListener("click", () => {
                menu.classList.toggle("header__nav_active");
                promoOverlay.style.display = "block";
            });

            let closeMenu = function(closeItem) {
                closeItem.addEventListener("click", () => {
                    if(menu.classList.contains("header__nav_active")) {
                        menu.classList.remove("header__nav_active");
                    }
                    promoOverlay.style.display = "none";
                });
            }

            closeMenu(close);
            closeMenu(promoOverlay);
        }

        setNav();
        
        



        
        




    });
}

export { getPromo }
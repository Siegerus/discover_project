function getFooter() {
    let up = document.querySelectorAll(".footer__to-up");
    
    window.addEventListener("scroll", function () {
            up.forEach((item) => {
                if (scrollY > 1000) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
            });
        });

    let MenuItem = function (menuItem) {
        
        let header = document.querySelector('.header');

        let scrollToBlock = function (e, menuItem) {

            let id = menuItem.getAttribute('href'), 
                headerHeight = header.offsetHeight;
            id = id.replace(/#/, ''); 
            let elem = document.querySelector(".logo"), 
                top = elem.getBoundingClientRect().top + window.scrollY - headerHeight; 
            window.scroll({
                top: top,
                left: 0,
                
                behavior: 'smooth'
            });

        },
            addEvents = function () {

                menuItem.addEventListener('click', function (e) {
                    e.preventDefault();
                    scrollToBlock(e, menuItem);
                });

            },
            init = function () {
                addEvents();
            };

        init();

    };

    document.querySelectorAll(".footer__to-up").forEach(function (item) {
        new MenuItem(item);
    });

    

        
}

export { getFooter }
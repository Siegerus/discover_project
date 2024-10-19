function getAbout() {
    if(document.querySelector(".about")) {
        window.addEventListener("DOMContentLoaded", function() {
        
            let parent = this.document.querySelector(".about__tabs"),
                tabs = this.document.querySelectorAll(".about__tab"),
                content = this.document.querySelectorAll(".about-content");

            let hideContent = function(a) {
                for(let i = a; i < content.length; i++) {
                    content[i].classList.remove("fade");
                    content[i].classList.add("hide");
                }
            }
            hideContent(1);

            let showContent = function(b) {
                if (content[b].classList.contains("hide")) {
                    content[b].classList.remove("hide");
                    content[b].classList.add("fade");
                }
            }

            parent.addEventListener("click", function(e) {
                if(e.target || e.target.classList.contains("about__tab")) {
                    for(let i = 0; i < tabs.length; i++) {
                        if(e.target == tabs[i]) {
                            hideContent(0);
                            showContent(i);
                        }
                    }
                }
            });
        });
    }
}

export {getAbout };
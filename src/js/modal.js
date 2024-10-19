function getModal() {
    
    if(document.querySelector(".modal")) {
        window.addEventListener("DOMContentLoaded", function () {

            let modal = this.document.querySelector(".modal__overlay"),
                close = this.document.querySelectorAll(".modal__close"),
                messageBox = this.document.querySelector(".modal__success"),
                modalWindow = this.document.querySelector(".modal"),
                buttons = this.document.querySelectorAll(".j-button"),
                up = this.document.querySelector(".footer__to-up"),
                screenWidth = document.documentElement.clientWidth;
                
    
    
            function showModal() {
                buttons.forEach((item) => {
                    item.addEventListener("click", function() {
                        modal.style.display = "block";
                        modalWindow.style.display = "block";
                        document.body.classList.add("modal-open");
                        if (screenWidth < 576) {
                            up.style.display = "none"
                        } else {
                            up.style.display = "flex"
                        }
                        
                    });
                });
            }
    
            showModal();
    
            function closeModal() {
                close.forEach((item) => {
                    item.addEventListener("click", function() {
                        modal.style.display = "none";
                        messageBox.style.display = "none";
                        document.body.classList.remove("modal-open");
                    });
                })
                
                modal.addEventListener("click" , function(e) {                    
                    if(e.target == modal) {
                        modal.style.display = "none";
                        messageBox.style.display = "none";
                        document.body.classList.remove("modal-open");
                    }
                });
            }
    
            closeModal();
        });
    }
    
}

export { getModal }
 

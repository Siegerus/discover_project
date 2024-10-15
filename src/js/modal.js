function getModal() {
    window.addEventListener("DOMContentLoaded", function () {

        let modal = this.document.querySelector(".modal__overlay"),
            close = this.document.querySelectorAll(".modal__close"),
            messageBox = this.document.querySelector(".modal__success"),
            modalWindow = this.document.querySelector(".modal"),
            buttons = this.document.querySelectorAll(".j-button");


        function showModal() {
            buttons.forEach((item) => {
                item.addEventListener("click", function() {
                    modal.style.display = "block";
                    modalWindow.style.display = "block";
                    document.body.classList.add("modal-open");
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

export { getModal }

/* let modalForm = document.querySelector(".modal__form"),
                    modalInput = Array.from (document.querySelectorAll("input")),
                    modalButton = document.querySelector(".modal__button"),
                    modalPolicy = document.querySelector(".modal__confidential"),
                    modalWindow = e.target.closest(".modal"); */

/* if(e.target !== modalWindow && e.target !== modalForm && e.target !== modalInput && e.target !== modalButton && e.target !== modalPolicy)     */     

function getForm() {
    window.addEventListener("DOMContentLoaded", function () {

        let message = {
            "loading" : "Sending data...",
            "success" : "Thank's, we will get back to you!",
            "error" : "Something went wrong..."
        }
        
        let formPromo = this.document.getElementById("promo-form"),
            input = Array.from(document.getElementsByTagName("input")),
            formModal = this.document.getElementById("modal-form"),
            statusMessage = this.document.createElement("div"),
            overlay = this.document.querySelector(".modal__overlay"),
            modalWindow = this.document.querySelector(".modal"),
            messageBox = this.document.querySelector(".modal__success");

            statusMessage.classList.add("modal__message");
        
        


        let submitForm = function(form) {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                
                overlay.style.display = "block";
                messageBox.style.display = "block";
                modalWindow.style.display = "none";
                messageBox.appendChild(statusMessage);
                statusMessage.innerHTML = message.loading;

                let request = new XMLHttpRequest();

                let sendFirstRequest = function(form) {
                    let requestF = new XMLHttpRequest();
                    requestF.open("POST", "../php/telegram/telegram.php", true);
                    let formData = new FormData(form);
                    requestF.send(formData);
                }
                sendFirstRequest(form);

                

                let sendSecondRequest = function(form) {
                    let requestS = new XMLHttpRequest();
                    requestS.open("POST", "../php/smart.php", true);
                    let formData = new FormData(form);
                    requestS.send(formData);
                }
                sendSecondRequest(form);
                
                /* request.open("POST", "../php/telegram/telegram.php"); */
                /* request.open("POST", "../php/smart.php"); */
                
                /* let formData = new FormData(form);
                request.send(formData); */

                /* let submitMultiple = function(form) {
                    request.open("POST", "../php/smart.php");
                    let formData = new FormData(form);
                    request.send(formData);
        
                } */

                request.addEventListener("readystatechange", function() {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = message.success;
                        
                    } else {
                        statusMessage.innerHTML = message.error;
                    }
                });

                input.forEach((item) => {
                    item.value = "";

                }); 
            });
        }

        submitForm(formPromo);
        submitForm(formModal);

    });
}

export { getForm }
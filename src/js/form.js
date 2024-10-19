import validator from "validator";

function getForm() {
    if (document.querySelector(".feed-form")) {
        window.addEventListener("DOMContentLoaded", function () {

            let message = {
                "loading": "Sending data...",
                "success": "Thank's, we will get back to you!",
                "error": "Something went wrong...",
                "wait": "Please wait..",
                "emailError" : "Incorrect Email"
            }

            let form = this.document.querySelectorAll(".feed-form"),
                statusMessage = this.document.createElement("div"),
                overlay = this.document.querySelector(".modal__overlay"),
                modalWindow = this.document.querySelector(".modal"),
                messageBox = this.document.querySelector(".modal__success");

                statusMessage.classList.add("modal__message");
            

            let submitForm = function (form) {
                form.forEach(function (item, i) {
                    item.addEventListener("submit", function (e) {
                        e.preventDefault();

                            overlay.style.display = "block";
                            messageBox.style.display = "block";
                            modalWindow.style.display = "none";
                            messageBox.appendChild(statusMessage);
                            statusMessage.innerHTML = message.wait;

                            let formData = new FormData(form[i]);

                            let sendFirstRequest = function () {
                                let requestFirst = new XMLHttpRequest();
                                requestFirst.open("POST", "../php/telegram/telegram.php");
                                requestFirst.send(formData);

                                requestFirst.addEventListener("readystatechange", function () {
                                    if (requestFirst.readyState === 4 && requestFirst.status == 200) {
                                        let sendSecondRequest = function () {
                                            let requestSecond = new XMLHttpRequest();
                                            requestSecond.open("POST", "../php/smart.php");
                                            requestSecond.send(formData);

                                            requestSecond.addEventListener("readystatechange", function () {
                                                if (requestSecond.readyState < 4) {
                                                    statusMessage.innerHTML = message.loading;
                                                } else if (requestSecond.readyState === 4 && requestSecond.status == 200) {
                                                    statusMessage.innerHTML = message.success;

                                                } else {
                                                    statusMessage.innerHTML = message.error;
                                                }
                                            });
                                        }

                                        sendSecondRequest();

                                    } else if (requestFirst.readyState < 4) {
                                        statusMessage.innerHTML = message.loading;
                                    } else {
                                        statusMessage.innerHTML = message.error;
                                    }

                                    form[i].reset();

                                });
                            }

                            sendFirstRequest();

                    
                });
                });

            }
            submitForm(form);

        });
    }
}

export { getForm }
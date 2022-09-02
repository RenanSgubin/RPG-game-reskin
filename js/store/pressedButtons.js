function buyItem() {
    document.getElementsByClassName("buy-button")[0].src = "../img/pressed-buy-button.png";

    function backButton() {
        document.getElementsByClassName("buy-button")[0].src = "../img/buy-button.png";
    }

    setTimeout(backButton, 300);

    document.getElementsByClassName("buy-confirmation-image")[0].style.height = "380px";
    document.getElementsByClassName("confirmation-buttons-container")[0].style.height = "auto";

    function showConfirmationMessage() {
        document.getElementsByClassName("buy-message-text")[0].style.display = "flex";
        document.getElementsByClassName("yes-button-confirmation")[0].style.height = "60px"; 
        document.getElementsByClassName("no-button-confirmation")[0].style.height = "60px"; 
    }

    setTimeout(showConfirmationMessage, 400);
}

function pressYesConfirmation() {
    document.getElementsByClassName("yes-button-confirmation")[0].src = "../img/yes-confirmation-button-pressed.png";

    function backButton() {
        document.getElementsByClassName("yes-button-confirmation")[0].src = "../img/yes-confirmation-button.png";
    }

    setTimeout(backButton, 200);

    document.getElementsByClassName("yes-button-confirmation")[0].style.height = "auto"; 
    document.getElementsByClassName("no-button-confirmation")[0].style.height = "auto"; 

    reset()
}

function pressNoConfirmation() {
    document.getElementsByClassName("no-button-confirmation")[0].src = "../img/no-confirmation-button-pressed.png";

    function backButton() {
        document.getElementsByClassName("no-button-confirmation")[0].src = "../img/no-confirmation-button.png";
    }

    setTimeout(backButton, 200);

    document.getElementsByClassName("yes-button-confirmation")[0].style.height = "auto"; 
    document.getElementsByClassName("no-button-confirmation")[0].style.height = "auto"; 

    reset()
}

function reset() {
    /*Reset*/
    document.getElementsByClassName("buy-message-text")[0].style.display = "none";
    document.getElementsByClassName("buy-confirmation-image")[0].style.height = "0px";
    document.getElementsByClassName("confirmation-buttons-container")[0].style.height = "0px";
    document.getElementsByClassName("yes-button-confirmation")[0].style.height = "0px"; 
    document.getElementsByClassName("no-button-confirmation")[0].style.height = "0px"; 
}
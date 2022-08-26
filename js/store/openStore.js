function openStore() {
    document.getElementsByClassName("player-store-container")[0].style.top = "1%";
    document.getElementsByClassName("container")[0].style.filter = "brightness(0.1)";
}

function closeStore() {
    document.getElementsByClassName("player-store-container")[0].style.top = "-150%";
    document.getElementsByClassName("container")[0].style.filter = "brightness(1.0)";
}

function buyItem() {
    document.getElementsByClassName("buy-button")[0].src = "../img/pressed-buy-button.png";

    function backButton() {
        document.getElementsByClassName("buy-button")[0].src = "../img/buy-button.png";
    }

    setTimeout(backButton, 30);
}
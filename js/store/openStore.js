function openStore() {
    document.getElementsByClassName("player-store-container")[0].style.top = "1%";
    document.getElementsByClassName("container")[0].style.filter = "brightness(0.1)";
}

function closeStore() {
    document.getElementsByClassName("player-store-container")[0].style.top = "-150%";
    document.getElementsByClassName("container")[0].style.filter = "brightness(1.0)";
}

document.getElementsByClassName("merchant-text-no-sort")[0].style.display = "flex";

function merchantPhrases() {

    merchantPhrasesNumber = 5;

    let sortedPhrase = Math.floor(Math.random() * merchantPhrasesNumber);

    for(let i = 0; i < merchantPhrasesNumber; i++) {
        document.getElementsByClassName("merchant-text")[i].style.display = "none"
    }
    document.getElementsByClassName("merchant-text-no-sort")[0].style.display = "none";
    document.getElementsByClassName("merchant-text")[sortedPhrase].style.display = "flex";
    document.getElementsByClassName("merchant-text")[sortedPhrase].style.animation = "typing 1.5s steps(40, end)";
    
}

window.onload = () => {
    setInterval(merchantPhrases, 8000);
}

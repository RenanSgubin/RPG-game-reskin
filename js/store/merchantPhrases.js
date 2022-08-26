
function merchantPhrases() {

    const phrases = [
        "I don't know how to use a staff.", 
        "I don't know how i appeared here, but now i'm a merchant.",
        "My mom told me i'm very beatiful, is this true?"
    ];

    let sortedPhrase = Math.floor(Math.random() * phrases.length);

    document.getElementsByClassName("merchant-text")[0].innerHTML = phrases[sortedPhrase];
    
}

window.onload = () => {
    setInterval(merchantPhrases, 2000);
}
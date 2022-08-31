

function showWeapons() {
    document.getElementsByClassName("store-div")[0].style.display = "flex";
    document.getElementsByClassName("armors-store-div")[0].style.display = "none";
    document.getElementsByClassName("rings-store-div")[0].style.display = "none";
}

function showArmors() {
    document.getElementsByClassName("armors-store-div")[0].style.display = "flex";
    document.getElementsByClassName("store-div")[0].style.display = "none";
    document.getElementsByClassName("rings-store-div")[0].style.display = "none";
}

function showRings() {
    document.getElementsByClassName("rings-store-div")[0].style.display = "flex";
    document.getElementsByClassName("armors-store-div")[0].style.display = "none";
    document.getElementsByClassName("store-div")[0].style.display = "none";
}
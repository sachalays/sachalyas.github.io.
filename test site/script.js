document.getElementById("themeButton").addEventListener("click", function() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        this.textContent = "Passer en mode sombre";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        this.textContent = "Passer en mode clair";
    }
});

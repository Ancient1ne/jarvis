document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("container").style.display = "block";
    this.style.display = "none"; // Hide the button
    document.getElementById("top").style.display = "none"; // Hide the text
});
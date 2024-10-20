
const redBlock = document.getElementById("redBlock");
const moveButton = document.getElementById("moveButton");

let isLeft = true;

moveButton.addEventListener("click", () => {
    if (isLeft) {
        redBlock.style.left = "175px";
        isLeft = false;
    } else {
        redBlock.style.top = "350px";
        isLeft = true;
    }
});


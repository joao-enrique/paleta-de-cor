// Pega elementos
const generateBtn = document.getElementById("generateBtn");
const colorBoxes = document.querySelectorAll(".color-box");

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updatePalette() {
    colorBoxes.forEach(box => {
        const newColor = generateRandomColor();
        const colorDiv = box.querySelector(".color");
        const colorCode = box.querySelector(".color-code");

        // Muda cor e texto
        colorDiv.style.background = newColor;
        colorCode.textContent = newColor;
    });
}

// Evento do botão
generateBtn.addEventListener("click", updatePalette);


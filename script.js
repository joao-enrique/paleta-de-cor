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

function copyColor(hex, element) {
    navigator.clipboard.writeText(hex).then(() => {
        element.classList.add("copied");
        element.textContent = "✔";
        setTimeout(() => {
            element.classList.remove("copied");
            element.textContent = hex;
        }, 800);
    });
}

// Evento do botão principal
generateBtn.addEventListener("click", updatePalette);

// Eventos de copiar (ícone e código)
colorBoxes.forEach(box => {
    const hexElement = box.querySelector(".color-code");
    const copyBtn = box.querySelector(".copy-btn");

    const copyAction = () => {
        const hex = hexElement.textContent;
        copyColor(hex, hexElement);
    };

    copyBtn.addEventListener("click", copyAction);
    hexElement.addEventListener("click", copyAction);
});

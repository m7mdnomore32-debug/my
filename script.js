let currentInput = "";
const inputs = document.querySelectorAll('.passcode-display input');

function addNumber(num) {
    if (currentInput.length < 4) {
        currentInput += num; 
        updateDisplay();     
    }
}

function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    for (let i = 0; i < 4; i++) {
        inputs[i].value = currentInput[i] || "";
    }
}

function goToNextPage() {
    if (currentInput === "1012") {
        window.location.href = "page2.html"; // يروح لصفحة الهدايا
    } else {
        alert("الرقم السري غير صحيح! حاول مرة أخرى 🥺");
        currentInput = ""; 
        updateDisplay();
    }
}
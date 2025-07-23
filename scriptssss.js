function calculate() {
    const sugarLevel = document.getElementById("sugar-level").value;
    const resultDiv = document.getElementById("result");

    if (sugarLevel === "") {
        resultDiv.innerHTML = "Please enter your blood sugar level.";
        resultDiv.style.color = "red";
        return;
    }

    const sugar = parseFloat(sugarLevel);

    if (sugar < 70) {
        resultDiv.innerHTML = "Your blood sugar level is low (Hypoglycemia).";
        resultDiv.style.color = "orange";
    } else if (sugar >= 70 && sugar <= 140) {
        resultDiv.innerHTML = "Your blood sugar level is normal.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = "Your blood sugar level is high (Hyperglycemia).";
        resultDiv.style.color = "red";
    }
}

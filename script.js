function checkBloodSugar() {
    const glucoseLevel = document.getElementById('glucose-level').value;
    const result = document.getElementById('result');

    if (glucoseLevel === '') {
        result.textContent = 'Please enter your glucose level.';
        result.style.color = 'red';
        return;
    }

    const level = parseFloat(glucoseLevel);

    if (isNaN(level)) {
        result.textContent = 'Please enter a valid number.';
        result.style.color = 'red';
        return;
    }

    if (level < 70) {
        result.textContent = 'Your blood sugar is too low. Consider eating a small snack.';
        result.style.color = 'orange';
    } else if (level <= 130) {
        result.textContent = 'Your blood sugar level is within the normal range.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Your blood sugar is too high. Consider adjusting your diet or medication.';
        result.style.color = 'red';
    }
}

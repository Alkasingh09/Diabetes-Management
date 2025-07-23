// Mental Health Quiz Functionality
document.getElementById('submitQuiz').addEventListener('click', function() {
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);

    const totalScore = q1 + q2 + q3;
    let result = '';

    if (totalScore <= 2) {
        result = "Your mental well-being seems good!";
    } else if (totalScore <= 5) {
        result = "You may be experiencing mild mental health issues.";
    } else {
        result = "It's important to seek professional advice regarding your mental health.";
    }

    document.getElementById('quizResult').innerText = result;
});

// Chatbot Functionality
document.getElementById('sendMessage').addEventListener('click', function() {
    const userMessage = document.getElementById('userInput').value;
    if (userMessage.trim() !== '') {
        appendMessage('You: ' + userMessage);

        setTimeout(function() {
            const botReply = getBotReply(userMessage);
            appendMessage('Bot: ' + botReply);
        }, 1000);

        document.getElementById('userInput').value = '';
    }
});

function appendMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(userMessage) {
    const responses = [
        "I'm here to listen. How can I help?",
        "That sounds tough. I'm here to help you.",
        "It's okay to feel that way. You're not alone.",
        "Let's work through this together. What’s bothering you?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Mood Tracker
document.getElementById('moodSlider').addEventListener('input', function() {
    const moodValue = document.getElementById('moodSlider').value;
    document.getElementById('moodValue').textContent = moodValue;
});

// Meditation Timer
document.getElementById('startTimer').addEventListener('click', function() {
    const minutes = parseInt(document.getElementById('meditationMinutes').value);
    if (!isNaN(minutes)) {
        startCountdown(minutes);
    }
});

function startCountdown(minutes) {
    let time = minutes * 60;
    const display = document.getElementById('timerDisplay');

    const interval = setInterval(function() {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        display.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            display.textContent = "Time's up! Breathe deeply.";
        }
    }, 1000);
}

// Login/Signup Simulations
document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Logging in with ${email}`);
});

document.getElementById('signupButton').addEventListener('click', function() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    alert(`Signing up ${name} with ${email}`);
});

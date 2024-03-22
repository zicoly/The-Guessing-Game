let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 5;

function checkGuess() {
    let guess = parseInt(document.getElementById('guess').value);
    let messageElement = document.getElementById('message');
    let resetButton = document.getElementById('reset');

    if (guess < 1 || guess > 10 || isNaN(guess)) {
        messageElement.textContent = 'Please enter a number between 1 and 10.';
        messageElement.style.color = 'red';
    } else {
        if (guess === randomNumber) {
            messageElement.textContent = 'Congratulations! You guessed the number ' + randomNumber + ' in ' + (6 - attempts) + ' attempts.';
            messageElement.style.color = 'green';
            disableInput();
            resetButton.style.display = 'block';
        } else {
            attempts--;
            if (attempts === 0) {
                messageElement.textContent = 'Game Over! The number was ' + randomNumber + '.';
                messageElement.style.color = 'red';
                disableInput();
                resetButton.style.display = 'block';
            } else {
                let hint = guess < randomNumber ? 'higher' : 'lower';
                messageElement.textContent = 'Incorrect! Try again.\nHint: Try a ' + hint + ' number.\n' + attempts + ' attempts left.';
                messageElement.style.color = 'red';
            }
        }
    }
}

function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}

function resetGame() {
    attempts = 5;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('guess').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('reset').style.display = 'none';
    randomNumber = Math.floor(Math.random() * 10) + 1;
}
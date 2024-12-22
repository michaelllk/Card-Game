let correctCardIndex = Math.floor(Math.random() * 2) + 1;
let hasFlipped = false;

function checkCard(card) {
    if (hasFlipped) return;

    const cardId = parseInt(card.id.replace('card', ''), 10);
    const isCorrect = cardId === correctCardIndex;

    const resultText = document.getElementById('result');
    const sfx = document.getElementById('sfx');

    card.classList.add('flipped');
    sfx.play();

    setTimeout(() => {
        if (isCorrect) {
            resultText.textContent = "Correct! 🎉";
        } else {
            resultText.textContent = "Wrong! Try again.";
        }
    }, 600);

    hasFlipped = true;
}

function resetGame() {
    document.querySelectorAll('.card').forEach((card) => card.classList.remove('flipped'));
    document.getElementById('result').textContent = '';
    correctCardIndex = Math.floor(Math.random() * 2) + 1;
    hasFlipped = false;
}

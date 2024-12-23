let correctCardIndex = Math.floor(Math.random() * 2) + 1;
let hasFlipped = false;

// Start the background music when the page loads
window.onload = () => {
    const bgm = document.getElementById('bgm');
    bgm.volume = 0.5; // Adjust the volume (0.0 to 1.0)
    bgm.loop = true; // Ensure the music loops
    bgm.play().catch((err) => {
        console.log("Autoplay blocked: User needs to interact first.");
    });
};

function checkCard(card) {
    if (hasFlipped) return;

    const cardId = parseInt(card.id.replace('card', ''), 10);
    const isCorrect = cardId === correctCardIndex;

    const resultText = document.getElementById('result');
    const ohSfx = document.getElementById('oh-sfx'); // Wrong card sound
    const clappingSfx = document.getElementById('clapping-sfx'); // Correct card sound

    // Change the card image based on the result
    card.querySelector('img').src = isCorrect
        ? "assets/correct_card.png"
        : "assets/wrong_card.png";

    card.classList.add('flipped');

    // Delay playing the sound effect by 0.2 seconds
    setTimeout(() => {
        if (isCorrect) {
            clappingSfx.play(); // Play clapping sound
            resultText.textContent = "Correct! 🎉";
        } else {
            ohSfx.play(); // Play "oh" sound
            resultText.textContent = "Wrong! Try again.";
        }
    }, 200); // Play sound after 0.2 seconds

    hasFlipped = true;
}

function resetGame() {
    // Reset card images and states
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.classList.remove('flipped');
        card.querySelector('img').src = `assets/card${index + 1}.png`;
    });

    document.getElementById('result').textContent = '';
    correctCardIndex = Math.floor(Math.random() * 2) + 1;
    hasFlipped = false;
}

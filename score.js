document.getElementById('score-btn').addEventListener('click', function() {
    // Retrieve correct count and total count from sessionStorage
    const correctCount = parseInt(sessionStorage.getItem('correctCount')) || 0;
    const totalCount = parseInt(sessionStorage.getItem('totalCount')) || 0;

    // Display the score
    const scoreContainer = document.getElementById('score-container');
    const scoreText = document.getElementById('score-text');
    scoreText.textContent = `Your score is: ${correctCount} out of ${totalCount}`;
    scoreContainer.style.display = 'block';

    // Display additional info based on the score
    const additionalInfo = document.getElementById('additional-info');
    additionalInfo.textContent = getAdditionalInfo(correctCount);

    // Change the button text to "Try Again"
    this.textContent = 'Try Again';
    this.addEventListener('click', function() {
        // Redirect to the start page (index.html) when "Try Again" is clicked
        window.location.href = 'index.html';
    });
});

// Function to determine additional info message based on the score
function getAdditionalInfo(score) {
    if (score === 0) {
        return "I'm disappointed in you.";
    } else if (score <= 5) {
        return "You don't remember a single thing, do you?";
    } else if (score <= 10) {
        return "I know you can do better than this.";
    } else if (score <= 14) {
        return "At least you didn't forget.";
    } else {
        return "Aw, you remembered everything!";
    }
}
const answerButtons = document.querySelectorAll('.answer-choice');
const submitButton = document.getElementById('submit-btn');

const currentPageNumber = parseInt(window.location.pathname.split('/').pop().replace('q', ''));

sessionStorage.setItem('totalCount', currentPageNumber);

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        answerButtons.forEach(btn => btn.classList.remove('selected'));
        
        button.classList.add('selected');

        const selectedAnswer = button.textContent.trim(); 
        const correctAnswer = button.dataset.correct === "true" ? selectedAnswer : null;
        sessionStorage.setItem('selectedAnswer', selectedAnswer);
        sessionStorage.setItem('correctAnswer', correctAnswer);
    });
});

submitButton.addEventListener('click', () => {
    const correctAnswer = sessionStorage.getItem('correctAnswer');
    const selectedAnswer = sessionStorage.getItem('selectedAnswer');

    if (selectedAnswer === correctAnswer) {
        sessionStorage.setItem('correctCount', (parseInt(sessionStorage.getItem('correctCount')) || 0) + 1);
    } else {
        sessionStorage.setItem('incorrectCount', (parseInt(sessionStorage.getItem('incorrectCount')) || 0) + 1);
    }

    if (currentPageNumber === 15) {
        window.location.href = 'grade.html';
    } else {
        const nextPageNumber = currentPageNumber + 1;
        window.location.href = `q${nextPageNumber}.html`;
    }
});
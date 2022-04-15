console.log('JavaScript connected');

const cardRate = document.querySelector('.card--rate');
const cardThanks = document.querySelector('.card--thanks');
const ratingText = document.querySelector('.rating-text');
const ratingOptions = document.querySelectorAll('.rating');


const selectRating = (rating) => {
    cardRate.classList.add('hide');
    cardThanks.classList.remove('hide');

    ratingText.textContent = `${rating}`;
}

ratingOptions.forEach((option, index) => {
    option.addEventListener('click', (event) => selectRating(index + 1))
})

console.log('JavaScript connected');

// We'll need to hide & un-hide these cards when appropriate
const cardRate = document.querySelector('.card--rate');
const cardThanks = document.querySelector('.card--thanks');

// We need to dynamically change the text of this element to the selected rating
const ratingText = document.querySelector('.rating-text');

// We need to listen to clicks on all 5 of our possible rating options
const ratingOptions = document.querySelectorAll('.rating');

// We need to submit the selected rating when button is clicked
const submitBtn = document.querySelector('button');

// Helper variable -- probably more elegant ways to do this!
let selectedRatingValue;

// Function which will give a 'selected' class to the option that was clicked, and remove it from all others
const selectRating = (event) => {
  const selectedRating = event.target;

  ratingOptions.forEach((option) => {
    option.classList.remove('selected');
  });

  // We want to set the selected rating to a 'selected' state, for styling purposes
  selectedRating.classList.add('selected');

  // Let's keep track what value this selected rating represents, for when we hit Submit!
  selectedRatingValue = selectedRating.innerText;
};

const submitRating = (event) => {
  // Hide the rating card, un-hide the thanks card
  cardRate.classList.add('hide');
  cardThanks.classList.remove('hide');

  // And set the rating of the element to the selected value
  ratingText.textContent = `${selectedRatingValue}`;
};

// Listen to our click events on all our options
ratingOptions.forEach((option) => {
  option.addEventListener('click', selectRating);
});

// Listen to click event on the Submit Button
submitBtn.addEventListener('click', submitRating);

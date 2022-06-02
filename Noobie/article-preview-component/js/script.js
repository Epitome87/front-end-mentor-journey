const shareButton = document.querySelector('#share-button');
const authorElement = document.querySelector('#author');
const socialsElement = document.querySelector('#socials');

shareButton.addEventListener('click', () => {
  authorElement.classList.toggle('active');
  authorElement.classList.contains('active')
    ? socialsElement.classList.remove('active')
    : socialsElement.classList.add('active');
});

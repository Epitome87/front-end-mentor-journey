const faqQuestion = document.querySelectorAll('.faq-question');

faqQuestion.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('show')) {
      item.nextElementSibling.style.maxHeight = `0px`;
    } else {
      faqQuestion.forEach((element) => {
        element.nextElementSibling.style.maxHeight = `0px`;
        element.classList.remove('show');
      });
    }

    const height = item.nextElementSibling.scrollHeight;
    item.classList.toggle('show');

    if (item.classList.contains('show')) {
      item.nextElementSibling.style.maxHeight = `${height}px`;
    }
  });
});

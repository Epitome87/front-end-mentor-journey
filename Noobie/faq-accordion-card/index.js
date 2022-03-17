const faqElements = document.querySelectorAll('.faq-accordion');

faqElements.forEach((faq) => {
  faq.addEventListener('click', (event) => {
    //   Toggle between adding and removing the "active" class, to highlight the button that controls the panel
    faq.classList.toggle('active');

    // Toggle between hiding and showing the active panel
    let panel = faq.nextElementSibling;
    console.log(panel.style.maxHeight);
    if (panel.style.maxHeight) panel.style.maxHeight = null;
    else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

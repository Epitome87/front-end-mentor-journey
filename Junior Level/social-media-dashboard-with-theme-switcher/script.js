const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('theme--darkTheme');
    document.body.classList.remove('theme--lightTheme');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('theme--darkTheme');
    document.body.classList.add('theme--lightTheme');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](../../Preview%20Images/preview-base-apparel-coming-soon.png)

### Links

- Solution URL: [https://github.com/Epitome87/front-end-mentor-journey/tree/main/Noobie/base-apparel-coming-soon](https://github.com/Epitome87/front-end-mentor-journey/tree/main/Noobie/base-apparel-coming-soon)
- Live Site URL: [https://epitome87.github.io/front-end-mentor-journey/Noobie/base-apparel-coming-soon/](https://epitome87.github.io/front-end-mentor-journey/Noobie/base-apparel-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

### Continued development

During this challenge, I had some struggles with the layout. Not only does it shift and re-order from mobile to desktop, but the hero image is not contained (no margins, not centered). Yet my HTML markup limited the image to exist within a container that was providing margin and horizontal centering to its other children. The (bad) solution was to simply give the image some negative left and right margins

With more thoughtful HTML planning, I probably would have had more parent containers rather than a singular flex container for all elements.

### Useful resources

The following was a useful Stack Overflow thread that helped me develop the Regex logic to help with email validation:
`https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript`

## Author

- Website - [Matthew McGrath](https://epitome87.github.io/Personal-Portfolio/)
- Frontend Mentor - [@Epitome87](https://www.frontendmentor.io/profile/Epitome87)
- LinkedIn - [@Matthew-McGrath1987](https://www.linkedin.com/in/matthew-mcgrath1987/)

## Acknowledgments

Completed independently on 6/02/2022

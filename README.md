# Frontend Mentor - Planet Facts App

This application was built for the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f).

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

- Live Site URL: [Planet Facts App](https://main--planet-facts-dottibug.netlify.app/)

## My Process

### Built with

- Semantic HTML5 markup
- Mobile-first design
- [Vite](https://vitejs.dev/) - Dev tools
- [React](https://reactjs.org/) - JS library
- [ReactRouter](https://reactrouter.com/en/main) - For client-side routing
- [Sass](https://sass-lang.com/) - For styles
- [FramerMotion](https://www.framer.com/motion/) - For animations

### What I learned

The project was good to practice React Router v6 using createBrowserRouter, which allow the use of Data APIs like loaders. The goal was to understand how to use createBrowserRouter instead of the BrowserRouter component.

Another goal of this project was to use Sass and familiarize myself with mixins. The mixin 'respond-to' was especially useful for generating media queries based on four breakpoints (mobile, tablet, laptop, and desktop):

```scss
$mobileMax: 744px;
$tabletMin: 745px;
$tabletMax: 1092px;
$laptopMin: 1093px;
$laptopMax: 1419px;
$desktopMin: 1420px;

@mixin respond-to($media) {
  @if $media == tablet {
    @media (min-width: $tabletMin) {
      @content;
    }
  } @else if $media == laptop {
    @media (min-width: $laptopMin) {
      @content;
    }
  } @else if $media == desktop {
    @media (min-width: $desktopMin) {
      @content;
    }
  }
}
```

### Useful resources

- [Modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) - This is the reset I use in most projects.

## Author

- Frontend Mentor - [@dottibug](https://www.frontendmentor.io/profile/dottibug)

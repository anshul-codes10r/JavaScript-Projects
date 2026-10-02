# Interactive Login Lamp 💡

A small interactive login UI built using HTML, CSS, and JavaScript.

This is one of my first projects where I connected JavaScript with an HTML/CSS interface and used JavaScript to control the visual state of the page.

## Features

- Interactive lamp using JavaScript
- Clickable pull-wire
- Lamp ON/OFF state
- Animated lamp shade/light effect
- Animated background particles
- Welcome Back login panel
- Username, email, and password input fields
- Responsive layout attempts for different screen sizes
- Built and tested primarily on a mobile phone

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How It Works

The page starts with a black screen and only the pull-wire visible.

When the pull-wire is clicked, JavaScript toggles the `lamp-on` class on the main container.

This changes the visual state of the page:

- The background becomes visible
- The lamp parts appear
- The light/shade appears
- The login panel appears with a transition
- The particles start their animations

Clicking the pull-wire again returns the page to its initial state.

## Responsive Design

I added media queries for different viewport sizes and tested the project on mobile, tablet, and laptop-sized screens.

However, this project is **not fully responsive yet**.

The project was built and tested primarily on a mobile phone, without a laptop/desktop development environment. Some lamp and panel positioning relies on viewport units, margins, and manually adjusted values, so the layout can behave differently on some screen sizes.

This project is therefore a learning project with responsive attempts rather than a fully responsive production UI.

## What I Learned

While building this project, I practiced:

- Connecting JavaScript with HTML elements
- Using `getElementsByClassName()`
- Working with `HTMLCollection`
- Handling click events
- Using `classList.toggle()`
- Using CSS classes as UI states
- CSS transitions
- CSS animations and keyframes
- Media queries
- Responsive positioning
- Debugging interaction and layering issues

## Limitations

- Not fully responsive on every screen size
- Some positioning is manually adjusted for different viewport ranges
- The login buttons are currently UI elements only
- There is no real authentication or backend
- The project was developed primarily on a mobile phone

## Project Status

Completed as a learning project — 

Future improvements may include better responsive positioning, cleaner CSS structure, and more functionality when I have access to a laptop/desktop development environment.

## Author

Built as part of my JavaScript learning journey.

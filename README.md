# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

My challenge is to build out this Coming Soon page and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![](./Screenshot-Ping-coming-soon-page.png)

### Links

- Solution URL: https://github.com/Gunner40/Ping-coming-soon-page-with-email-validation-by-regular-expression
- Live Site URL: https://gunner40.github.io/Ping-coming-soon-page-with-email-validation-by-regular-expression/

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

I learned about the javascript after() method> I already knew about the insertBefore(). But after() was new to me.

The after() is a method of the Element type. The element.after() method allows you to insert one or more nodes after the element.

Here’s the syntax of the after() method:

Element.after(node)

eg. h1.after(p) iserts a p element after the h1

To insert multiple nodes after an element, you pass the nodes to the after() method as follows:

Element.after(node1, node2, ... nodeN)

The after() method also accepts one or more strings. In this case, the after() method treats the strings as Text nodes:

Element.after(str1, str2, ... strN)

The after() method returns undefined. If a node cannot be inserted, it’ll throw a HierarchyRequestError exception.

How to find out if a secific element exists within the DOM - If we search the DOM (using document.querySelector or getELementById whatever) for an element that does not exist within the DOM, it will return NULL.

I used a regular expression to validate the email. I will need to restudy this to understand it more. I have covered it before but i need a refresher.

One way to add an emoji in JS is to just copy and past it into a string.

Used the setTimout function. Hadnt used it in a while. Syntax example below:

const myTimeout = setTimeout(myGreeting, 5000);

...where myGreeting is a function

Listen for a 'submit' event to find out when a form has been submitted by clicking on the submit button or pressing the Enter key.

## Author

- Name - Paul Ryan
- Frontend Mentor - https://www.frontendmentor.io/profile/Gunner40

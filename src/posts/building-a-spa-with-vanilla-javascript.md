---
id: 10
title: "Building a SPA with Vanilla JavaScript"
description: Learn how to build a fast, dynamic Single Page Application without any frameworks or libraries, using plain Vanilla JavaScript.
createdAt: "2023-11-30"
updatedAt: "2023-11-30"
keywords: ["JavaScript", "SPA", "Single Page Application"]
authorId: 1
---

In the modern web development landscape, the Single Page Application (SPA) has become a staple for delivering a seamless user experience. Frameworks like React, Angular, and Vue are the usual go-to's for building SPAs. However, you might be surprised to learn that with a solid understanding of JavaScript, you can craft an efficient SPA using nothing but plain Vanilla JS.

In this blog post, we'll take a deep dive into the process of building an SPA from scratch using Vanilla JavaScript. We'll cover everything from managing the DOM to handling the application's state, and even simulating routing to give the feel of multiple "pages" within our SPA.

## What is a Single Page Application?

Before we get our hands dirty with code, let's quickly define what we're building. A Single Page Application is a web application or site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application.

## Advantages of Building an SPA with Vanilla JS

1.  **Full Control:** Without the abstraction of a framework, you have complete control over your implementation.
2.  **Performance:** Frameworks and libraries can add overhead. Vanilla JS is lightweight, leading to potentially better performance.
3.  **Learning:** This approach requires a strong understanding of JS fundamentals, making it a fantastic learning experience.
4.  **Simplicity:** Sometimes, a full-fledged framework is overkill for a small project. Vanilla JS keeps it simple and straightforward.

## Getting Started: Setting Up the Project

Create an `index.html` file, a `styles.css` file for styling, and an `app.js` file for our JavaScript code.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vanilla SPA</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="app"></div>

    <script src="app.js"></script>
  </body>
</html>
```

## The Core Concepts of an SPA

1.  **DOM Manipulation:** Dynamically updating the content of our application without refreshing the page.
2.  **Routing:** Handling URL changes and displaying content accordingly as though they were different pages.
3.  **State Management:** Keeping track of application data (state) and rendering changes when that state is updated.

## Implementing SPA Features

### DOM Manipulation

Use the `innerHTML` property to render new content based on user interactions.

```js
const app = document.getElementById("app");

function renderHomePage() {
  app.innerHTML = `<h1>Welcome to the Vanilla SPA!</h1>`;
}
```

### Routing

We'll implement basic routing by detecting URL hash changes.

```js
window.addEventListener("hashchange", router);

function router() {
  const route = window.location.hash.substring(1);
  app.innerHTML = `<h1>You are viewing the ${route} page</h1>`;
}
```

### State Management

To keep track of the application's state, we can use JavaScript objects.

```js
let state = {
  currentPage: "home",
};

function updateContent() {
  const content =
    state.currentPage === "home" ? "<h1>Home</h1>" : "<h1>Other Page</h1>";
  app.innerHTML = content;
}

function navigateTo(page) {
  state.currentPage = page;
  updateContent();
}

window.onload = () => updateContent();
```

## Expanding the SPA Functionality

Building upon these foundations, you can include more advanced SPA features such as:

- Templating functions to render more complex views.
- Event delegation for handling events on dynamically created content.
- AJAX calls to fetch data from a server without reloading the page.

## Conclusion

Creating an SPA with Vanilla JavaScript is not only possible but also a fantastic exercise to deepen your understanding of core web development principles. By forgoing frameworks, you learn how to problem-solve at a fundamental level, and you gain skills that are transferable to any JavaScript project.

For those looking to scale their Vanilla SPA or manage more complex state, it's worth investigating the next steps, such as incorporating the Observer pattern for reactive state management or exploring Web Components for reusable custom elements.

Remember that while frameworks and libraries can save time and provide structure, the fundamentals of JavaScript provide the foundation upon which these tools are built. By learning how to build with Vanilla JS, you're equipping yourself with a versatile skill set that will be beneficial in any coding scenario.

Embrace the simplicity, face the challenges, and enjoy the beauty of crafting an SPA with just the basics---Vanilla JavaScript. Happy coding!

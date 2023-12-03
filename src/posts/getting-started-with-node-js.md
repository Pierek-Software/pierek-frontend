---
id: 16
title: "Getting Started with Node.js"
description: Dive into the essentials of Node.js and Express.js! Learn how to set up a modern JavaScript environment and create a "Hello, World" app.
createdAt: "2023-12-08"
updatedAt: "2023-12-08"
keywords: ["JavaScript", "Node.js"]
authorId: 1
visible: false
---

## Getting Started with Node.js and Express: Crafting a Modern "Hello, World"

In the ever-evolving landscape of web development, staying ahead of the curve is paramount. For those looking to indulge in the back end side of things, Node.js has emerged as a game-changer, enabling JavaScript to step out of the browser and onto the server. With Node.js at your disposal, the journey takes an even more thrilling turn when you encounter Express.js---a framework that's become synonymous with Node.js itself and is lauded as one of the most indispensable JavaScript libraries ever crafted.

Let's embark on a journey to set up your very first Express.js application. But first, a little primer on Node.js.

## Node.js: JavaScript's Server-Side Revolution

Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. Built on the Chrome V8 JavaScript engine, it is designed for building scalable network applications. Its asynchronous, non-blocking architecture allows it to handle numerous connections concurrently, without incurring the penalty of thread-based networking.

## Express.js: The De Facto Standard for Node.js

When it comes to web application development in Node.js, Express.js stands out as the de facto standard. It's a fast, unopinionated, and minimalist web framework that provides a robust set of features to develop web and mobile applications efficiently.

Express simplifies the task of building a server by providing a layer of abstraction, helping you manage everything from routes to handling requests and views.

## Setting Up Your Node.js Environment

Before diving into the world of Express.js, make sure you have Node.js installed on your machine. You can download it from the official Node.js website and follow the installation instructions for your operating system.

Once Node.js is installed, you can verify your installation by running the following command in your terminal or command prompt:

```bash
node --version
```

You should see the version of Node.js that's installed on your system.

Now, you're ready to take on Express.js.

## A Modern "Hello, World" with Express.js

Here's a step-by-step instruction to set up a "Hello, World" Express.js application:

Step 1: Initialize a New Node.js Project

Create a new directory for your project and navigate into it. Then, initialize a new Node.js project by running:

```bash
mkdir hello-express && cd hello-express
npm init -y
```

This will create a `package.json` file which holds the metadata and dependencies for your project.

Step 2: Install Express.js

Install Express.js by running the following command:

```bash
npm install express
```

The `npm install` command will add Express to your list of dependencies and save it in your `package.json` file.

Step 3: Creating an Express Application

Create a new file called `app.js` in your project directory and open it in your favorite code editor. Here we'll write our Express server code using modern JavaScript (ES6 and above).

```js
// Importing the express module using ES6 import syntax
import express from "express";

// Initializing our Express application
const app = express();

// Defining a route for '/'
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Setting the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

To use the ES6 `import` syntax, you need to rename your `package.json` to include `"type": "module"` or save your file with a `.mjs` extension.

```js
// package.json
{
  // ...
  "type": "module",
  // ...
}
```

Step 4: Run Your Server

Back in the terminal, start your server with the following command:

```bash
node app.js
```

Now, if you open a web browser and navigate to `http://localhost:3000`, you should be greeted with "Hello, World!"

Congratulations! You've just set up a simple Express.js server.

## Wrapping Up

You've taken your first steps into the world of Node.js and Express.js, unleashing the potential to create robust and efficient web applications using JavaScript. Express.js, with its minimalist approach and extensive community support, makes it easy to craft powerful server-side applications swiftly.

Keep this momentum going! Explore more about Express.js---how to add middleware, manage templates, set up routing, and work with databases. The possibilities are endless, and the world of Node.js is at your fingertips. Engage with the community, enrich your skills, and above all, keep building!

Happy coding!

---
layout: post
category: articles
title: "How to create a React custom renderer"
description: "Where one will learn that it is now possible to create React custom renderers very easily so we can all use React to build things as fancy as terminal dashboards."
comments: true
---

<img src="{{ site.baseurl }}img/dashboard.gif" alt="dashboard">

*Terminal dashboard for [sandcrawler](http://medialab.github.io/sandcrawler/) built with [React](https://facebook.github.io/react/) and [Blessed](https://github.com/chjj/blessed).*

---

* [Blessed and the DOM](#blessed)
* [Installing necessary dependencies](#deps)
* [Creating a custom component](#component)
* [Creating a custom transaction](#transaction)
* [Creating an dependency injection module](#injection)
* [Creating a rendering function](#renderer)
* [Final words](#final-words)

---

<h3 id="blessed">Blessed and the DOM</h3>

If one day you start developping an application for the terminal and you decide to do so using Node.js, you will probably stumble upon the very fine [Blessed](https://github.com/chjj/blessed) library (a pun about the [curses](https://en.wikipedia.org/wiki/Curses_(programming_library)) library), created by [Christopher Jeffrey](https://github.com/chjj).

This library offers a very simple but powerful API to build applications for the terminal easily and comfortably.

So let's see how one would create a basic application using Blessed:

```js
var blessed = require('blessed');

// First we need to create a screen:
var screen = blessed.screen();

// Now let's create a box filling our whole screen
var box = blessed.box({
  label: 'Big box',
  width: '100%',
  height: '100%',
  border: {
    type: 'line'
  },
  style: {
    border: {
      color: 'blue'
    }
  }
});

// Now we append it to our screen
screen.append(box);

// And we create another smaller centered box
// displaying an important message
var innerBox = blessed.box({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  border: {
    type: 'dotted'
  },
  style: {
    border: {
      color: 'green'
    }
  },
  content: 'Hello World!'
});

// And we append it to the first box
box.append(innerBox);

// Just listening to Ctrl-c so we can quit the app
screen.key(['C-c'], function() {
  process.exit(0);
});

// Finally rendering our screen
screen.render();
```

So now, if you run the script, you should see a blue-bordered box taking the whole space of your screen and containing a smaller red-bordered one greeting you with the traditonal `Hello World!`.

But, if we take a step back and try to sum up what we did here, we could say the following:

1. we created a screen
2. we created a node
3. we appended it to a screen
4. we created other nodes
5. that we appended it to the first node
6. finally we attached event listeners to nodes so we could react to user inputs.

Basically, we handled a DOM, didn't we?

Not the same as your browser's one, of course, but a DOM nonetheless, since the core concepts are identical.

So, if React is able to render into our browser's DOM, why couldn't it render into Blessed's one?

Well, it turns out it can!

This is therefore the intention of this post to show you how you can create a custom React renderer to realize this.

---

<h3 id="deps">Installing necessary dependencies</h3>

To develop our own renderer, we first need to install some dependencies:

```bash
npm install --save object-assign
npm install --save-dev react
```

---

<h3 id="final-words">Final words</h3>

Now you should be able to create your own React custom renderer!

If you still have problems when creating one, don't hesitate to check out the source code of the following renderers and open issues to ask questions:

* [react-blessed](https://github.com/Yomguithereal/react-blessed)
* [react-titanium](https://github.com/yuchi/react-titanium)
* [react-hardware](https://github.com/iamdustan/react-hardware)

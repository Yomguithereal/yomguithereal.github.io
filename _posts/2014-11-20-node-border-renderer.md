---
layout: post-no-feature
title: "A custom sigma renderer to display node borders"
displayTitle: "On the topic of sigma custom renderers<br>-<br>Node borders"
description: "The intention of this post is to inform any potential reader about the reasons why custom sigma renderers are the ultimate solution when dealing with visual shenanigans."
category: articles
tags: [sigma, graph, javascript]
---

<div id="intro-graph" class="graph"></div>

*Figure 1: An imaginary graph*

---

Every now and then I find people gruntling about the fact that [sigma](http://sigmajs.org/) does not support node borders.

While it is easy to understand why this absence may cause unrest in the library's community, one has to understand that the library was not conceived in a holistic way.

Truth is sigma has never been designed to embrace every visual option known to creation but rather to enable its user to develop easily his/her graph's desired appearance.

So, if no option currently exists in sigma to add fancy borders to nodes, what can we do about it?

The answer is pretty simple: create a **custom node renderer** so we can display the wondrous graph shown above.

---

<h3 id="sigma-and-its-renderers">Sigma and its renderers</h3>

What sigma call a *renderer* is a mere function aiming at displaying the graph on screen.

You can therefore ask sigma to display the graph using different renderers such as the built-in `canvas` and `webgl` ones.

But, within the library, renderers obey to a tacit hierarchy. Here are both kind:

* The *macro-renderers*, like the `canvas` one, whose goal is to orchestrate the whole rendering process.
* The *sub-renderers* whose mission is simpler: they only have to draw a precise graph entity, a node if you will.

The kind of renderer that need here is a subaltern one, and more precisely the one in charge of drawing the nodes.

---

<h3 id="node-rendering">Node rendering</h3>

When asked to render a node, sigma will ask to the *macro-renderer* the correct renderer to use. By default, if no custom renderer is defined, sigma will use the `def` renderer.

There are at least three ways to choose the renderer used to draw a node then – note also that one may choose a custom renderer *à la carte* for each of his/her nodes.

*Changing the default node renderer globally - aka, the foolishly dangerous way*

```js
sigma.canvas.nodes.def = sigma.canvas.nodes.mySillyType;
```

*Changing the default node renderer setting*

```js
// At instantiation
var sig = new sigma({
  settings: {
    defaultNodeType: 'mySillyType'
  }
});

// At runtime
sig.settings('defaultNodeType', 'myOtherSillyType');
```

*Changing one nodes's renderer*

```js
// When adding a node
sig.grap.addNode({
  id: 'n01',
  label: 'Hello',
  x: 1,
  y: 2,
  size: 1,
  type: 'mySillyType'
})

// Setting every node type to myOtherSillyType
sig.graph.nodes().forEach(function(node) {
  node.type = 'myOtherSillyType';
});
```

---

<h3 id="custom-renderer">Creating our custom renderer</h3>

Creating a custom node renderer is as simple as mimicking sigma's built-in renderers. Here is the default [node renderer](https://github.com/jacomyal/sigma.js/blob/master/src/renderers/canvas/sigma.canvas.nodes.def.js) and can be expressed in a simpler way as follows:

```js
// The node renderer is merely a function taking the following args:
//    1) 'node': the node object to render
//    2) 'context': the canvas context where the macro-renderer operates
//    3) 'settings': the sigma instance's settings
sigma.canvas.nodes.def = function(node, context, settings) {

  // Bit technical, determining the prefix on which the renderer must act
  var prefix = settings('prefix') || '';

  // Creating a circle and filling it with the desired color
  // This is plain canvas
  context.fillStyle = node.color || settings('defaultNodeColor');
  context.beginPath();
  context.arc(
    node[prefix + 'x'],
    node[prefix + 'y'],
    node[prefix + 'size'],
    0,
    Math.PI * 2,
    true
  );

  context.closePath();
  context.fill();
};
```

Let's say, for instance, that we want to add a border on our nodes and be able to set both this border's color and size. We could alter our renderer thusly:

```js
// We should give a better name to our renderer
sigma.canvas.nodes.border = function(node, context, settings) {
  var prefix = settings('prefix') || '';

  context.fillStyle = node.color || settings('defaultNodeColor');
  context.beginPath();
  context.arc(
    node[prefix + 'x'],
    node[prefix + 'y'],
    node[prefix + 'size'],
    0,
    Math.PI * 2,
    true
  );

  context.closePath();
  context.fill();

  // Adding a border
  context.lineWidth = node.borderWidth || 1;
  context.strokeStyle = node.borderColor || '#fff';
  context.stroke();
};
```

---

<h3 id="wrapping-things-up">Wrapping things up</h3>

Now that we have our custom renderer, let's use it to display a nice graph.

```js
var example = new sigma({
  graph: {
    nodes: [
      {
        id: 'm',
        label: 'Murat',
        x: 75,
        y: 0,
        size: 5,
        color: '#94B8B5',
        borderColor: '#fff',
      },
      {
        id: 'n',
        label: 'Ney',
        x: 75,
        y: 75,
        size: 8,
        color: '#C46446',
        borderColor: '#000',
        borderWidth: 3
      },
      {
        id: 'd',
        label: 'Davout',
        x: 0,
        y: 75,
        size: 8,
        color: '#A761B1',
        borderColor: '#000',
      }
    ],
    edges: [
      {id: 'e01', source: 'm', target: 'n'},
      {id: 'e02', source: 'm', target: 'd'},
      {id: 'e03', source: 'n', target: 'd'},
    ]
  },
  renderer: {
    type: 'canvas',
    container: 'example-graph'
  },
  settings: {
    autoRescale: false,
    defaultNodeType: 'border'
  }
});
```

---

<div id="example-graph" class="graph"></div>

*Figure 2: The graph generated above*

---


probably adjust to node size

Tada iwanthue

link to the source

fly away (silly edge)

code is here and works for canvas (possible to do webgl but way harder)

---

<div id="outro-graph" class="graph"></div>

*Figure 3: An unreadable but nonetheless beautiful graph*

<script type="text/javascript" src="{{ site.url }}/assets/js/lib/faker.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.forceatlas.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.renderers.nodeBorder.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.renderers.edgeSilly.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/articles/node_renderer/index.js"></script>

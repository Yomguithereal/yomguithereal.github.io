---
layout: post-no-feature
title: "A custom sigma renderer to display node borders"
displayTitle: "On the topic of sigma custom renderers<br>-<br>Node borders"
description: "The intention of this post is to inform any potential reader about the reasons why custom sigma renderers are the ultimate solution when dealing with visual shenanigans."
category: articles
tags: [sigma, graph, javascript]
---

<div id="intro-graph" class="graph"></div>

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

To create a custom node renderer – note that one may create other kind of custom renderers such as *edge*, *hover* and *label* – one must understand how does sigma works behind the hood.

Tada iwanthue

link to the source

fly away (silly edge)

---

<div id="outro-graph" class="graph"></div>

---

<script type="text/javascript" src="{{ site.url }}/assets/js/lib/faker.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.forceatlas.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.renderers.nodeBorder.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.renderers.edgeSilly.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/articles/node_renderer/index.js"></script>

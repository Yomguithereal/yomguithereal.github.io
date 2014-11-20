---
layout: post-no-feature
title: "A custom sigma.js renderer to display node borders"
displayTitle: "On the topic of sigma.js custom renderers<br>-<br>Node borders"
description: "The intention of this post is to inform any potential reader about the reasons why custom sigma.js renderers are the ultimate solution when dealing with visual shenanigans."
category: articles
tags: [sigma.js, graph, javascript]
---

<div class="graph"></div>

---

Every now and then I find people gruntling about the fact that [sigma.js](http://sigmajs.org/) does not support node borders.

While it is easy to understand why this absence may cause unrest in the library's community, one has to understand that the library was not conceived in a holistic way.

Truth is sigma.js has never been designed to embrace every visual option known to creation but rather to enable its user to develop easily his/her graph's desired appearance.

So, even if no option currently exists in sigma.js to add fancy borders to nodes, what can we do about it?

The answer is pretty simple: a **custom node renderer**.

---

Tada iwanthue

---

<script type="text/javascript" src="{{ site.url }}/assets/js/lib/faker.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.forceatlas.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.renderers.nodeBorder.js"></script>
<script type="text/javascript">
  (function(undefined) {

    // Generating random graph
    var i,
        s,
        o,
        N = 100,
        E = 500,
        C = 5,
        d = 0.5,
        cs = [],
        g = {
          nodes: [],
          edges: []
        };

    var palette = [
      '#94B8B5',
      '#C46446',
      '#A761B1',
      '#95BF55',
      '#544440'
    ];

    // Generate the graph:
    for (i = 0; i < C; i++)
      cs.push({
        id: i,
        nodes: [],
        color: palette[i]
      });

    for (i = 0; i < N; i++) {
      o = cs[(Math.random() * C) | 0];
      g.nodes.push({
        id: 'n' + i,
        label: faker.name.findName(),
        x: 100 * Math.cos(2 * i * Math.PI / N),
        y: 100 * Math.sin(2 * i * Math.PI / N),
        size: Math.random(),
        color: o.color,
        type: 'border'
      });
      o.nodes.push('n' + i);
    }

    for (i = 0; i < E; i++) {
      if (Math.random() < 1 - d)
        g.edges.push({
          id: 'e' + i,
          color: '#ccc',
          source: 'n' + ((Math.random() * N) | 0),
          target: 'n' + ((Math.random() * N) | 0)
        });
      else {
        o = cs[(Math.random() * C) | 0]
        g.edges.push({
          id: 'e' + i,
          color: '#ccc',
          source: o.nodes[(Math.random() * o.nodes.length) | 0],
          target: o.nodes[(Math.random() * o.nodes.length) | 0]
        });
      }
    }

    // Instantiating sigma
    var sig = new sigma({
      graph: g,
      settings: {
        labelThreshold: 7,
        minNodeSize: 1,
        maxNodeSize: 7
      }
    });

    // Adding a canvas renderer
    sig.addRenderer({
      container: document.querySelector('.graph'),
      type: 'canvas'
    });

    // Refreshing
    sig.refresh();

    sig.startForceAtlas2();
  }).call(this);
</script>

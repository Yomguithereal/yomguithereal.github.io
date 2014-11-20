---
layout: post-no-feature
title: "A custom sigma.js renderer to display node borders"
displayTitle: "On the topic of sigma.js custom renderers<br>-<br>Node borders"
description: "The intention of this post is to inform any potential reader about the reasons why custom sigma.js renderers are an universal solution when dealing with visual shenanigans."
category: articles
tags: [sigma.js, graph]
---

Every now and then I find people gruntling about the fact that [sigma.js](http://sigmajs.org/) does not support node borders.

While it is easy to understand why this absence may cause unrest in the library's community, one has to understand that the library was not conceived in a holistic way.

Truth is sigma.js has never been designed to embrace every visual option known to creation but rather to enable its user to develop easily his/her graph's desired appearance.

So, even if no option currently exists in sigma.js to add fancy borders to nodes, what can we do about it?

The answer is pretty simple: a **custom node renderer**.

---

<div class="graph"></div>

---

<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.min.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/lib/sigma.forceatlas.min.js"></script>
<script type="text/javascript">

</script>

---
layout: projects
title: Tutorials
description: Applications and projects developed by AlgoWit for the Open Source world.
last_modified_at: 2019-10-23
---

<div class="row">
  {% for tutorials in site.tutorials %}
  <div class="col-sm-3" style="padding-top:20px">
    <div class="card" style="width: 16rem; height: 18rem;">
      <div class="card-body">
        <h4 class="card-title no-anchor" style="margin-top: -30px; font-size: 20px;"><a href="{{ tutorials.url }}"><img src="/assets/images/tutorials/{{ tutorials.icon }}" alt="{{ tutorials.title }} logo" style="width:50px; margin-top:-5px"></a>&nbsp;&nbsp;{{ tutorials.title }}</h4>
        <p class="card-text">{{ tutorials.description }}</p>
        <a href="{{ tutorials.url }}" class="btn btn-outline-secondary btn-sm">Learn more</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

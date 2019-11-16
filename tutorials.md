---
layout: projects
title: Tutorials
description: Applications and projects developed by AlgoWit for the Open Source world.
last_modified_at: 2019-10-23
---

<div class="row">
  {% for tool in site.tutorials %}
  <div class="col-sm-3" style="padding-top:20px">
    <div class="card" style="width: 16rem; height: 18rem;">
      <div class="card-body">
        <h4 class="card-title no-anchor" style="margin-top: -30px; font-size: 20px;"><a href="{{ tool.url }}"><img src="/assets/images/tutorials-icons/{{ tool.icon }}" alt="{{ tool.title }} logo" style="width:50px; margin-top:-5px"></a>&nbsp;&nbsp;{{ tool.title }}</h4>
        <p class="card-text">{{ tool.description }}</p>
        <a href="{{ tool.url }}" class="btn btn-outline-secondary btn-sm">Learn more</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

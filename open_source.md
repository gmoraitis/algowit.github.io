---
layout: projects
title: Open Source
description: Machine learning tools developed by AlgoWit.
last_modified_at: 2019-10-23
---

<div class="row">
  {% for tool in site.tools %}
  <div class="col-sm-6" style="padding-top:20px">
    <div class="card" style="height: 13rem;">
      <div class="card-body">
        <h4 class="card-title no-anchor" style="margin-top: -20px; font-size: 20px;"><a href="{{ open_source.url }}"><img src="/assets/images/icons/{{ tool.icon }}" alt="{{ tool.title }} logo" style="width:50px; margin-top:-5px"></a>&nbsp;&nbsp;{{ tool.title }}</h4>
        <p class="card-text">{{ tool.description }}</p>
        <a href="{{ tool.url }}" class="btn btn-outline-secondary btn-sm">Learn more</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

---
layout: projects
title: Publications
description: Machine learning publications by AlgoWit.
last_modified_at: 2019-10-23
---

<div class="row">
  {% for publication in site.publications %}
  <div class="col-sm-6" style="padding-top:20px">
    <div class="card" style="height: 13rem;">
      <div class="card-body">
        <h4 class="card-title no-anchor" style="margin-top: -20px; font-size: 20px;"><a href="{{ publication.url }}"><img src="/assets/images/publications-icons/{{ publication.icon }}" alt="{{ publication.title }} logo" style="width:50px; margin-top:-5px"></a>&nbsp;&nbsp;{{ publication.title }}</h4>
        <p class="card-text">{{ publication.description }}</p>
        <a href="{{ publication.url }}" class="btn btn-outline-secondary btn-sm">Learn more</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

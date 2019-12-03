---
layout: projects
title: Open Source
description: Machine learning tools developed by AlgoWit.
last_modified_at: 2019-10-23
---

<div class="row">

  <!-- Looping through open source -->
  {% for tool in site.open_source %}

  <!-- Open Source -->
  <div class="col-sm-6" style="padding-top:20px">

    <!-- Card -->
    <div class="card" style="height: 13rem;">

      <!-- Body -->
      <div class="card-body">

        <!-- Title -->
        <h4 class="card-title no-anchor" style="margin-top: -20px; font-size: 20px;">
          <a href="{{ open_source.url }}">

          <!-- Image -->
            <img src="/assets/images/open-source/{{ tool.icon }}" alt="{{ tool.title }} logo" style="width:50px; margin-top:-5px">
              </a>&nbsp;&nbsp;{{ tool.title }}</h4>

            <!-- Button-->    
              <p class="card-text">{{ tool.description }}</p>
                <a href="{{ tool.doc_url }}" class="btn btn-outline-secondary btn-sm">Learn more</a>
      </div>

    </div>

  </div>

  {% endfor %}
</div>

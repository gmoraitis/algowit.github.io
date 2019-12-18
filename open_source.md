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
      <div class="card" style="height: 20rem;">

        <!-- Body -->
        <div class="card-body">

          <!-- Logo and Title -->
          <div class="row">
            <img src="/assets/images/open-source/{{ tool.icon }}" class="shadow p-1 mb-30 bg-white rounded img-fluid position-sticky" alt="{{ tool.title }} logo" style="width:50px; height:39px; margin-top:-5px">
            <div class="col">
              <h6 class="card-title" style="height:55px; margin-top:-20px">{{ tool.title }}</h6>
            </div>
          </div>

          <!-- Card-Text--> 
          <div class="row"> 
            <div class="col">  
              <p class="card-text position-absolute">{{ tool.description }}</p>
            </div>
          </div>

          <!--Button-->
          <div class="row">
            <div class="col text-center position-absolute">
              <a href="{{ tool.doc_url }}" class="btn btn-outline-secondary btn-sm" style="margin-top:200px">Learn more</a>
            </div>
          </div>

        </div>

      </div>

    </div>

  {% endfor %}

</div>




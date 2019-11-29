---
layout: projects
title: Publications
description: Machine learning publications by AlgoWit.
last_modified_at: 2019-10-23
---

<div class="row">

  <!-- Looping through publications -->
  {% for publication in site.publications %}

    <!-- Publication -->
    <div class="col-sm-6" style="padding-top:20px">
      
      <!-- Card -->
      <div class="card border" style="height: 30rem;">
        
        <!-- Body -->
        <div class="card-body">
          
          <!-- Title -->
          <div class="row">
            <h6 class="card-title text-center">{{ publication.description }}</h6>
          </div>
          
          <!-- Image -->
          <div class="row">
            <div class="col text-center">
            <a href="{{ publication.url }}">
              <img src="/assets/images/publications/{{ publication.icon }}" class="shadow p-20 mb-20 bg-white rounded img-fluid" alt="{{ publication.title }} logo" style="width:300px; height:auto; margin-top:45px; margin-bottom:45px">
            </a>
            </div>
          </div>
          
          <!-- Button-->
          <div class="row">
            <div class="col text-center">
              <a href="{{ publication.url }}" class="btn btn-outline-secondary btn-sm">Learn more</a>
            </div>
          </div>

        </div>
      
      </div>
  
    </div>

  {% endfor %}

</div>

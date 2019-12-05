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
          <div class="row justify-content-center">
            <div class="col-11 position-absolute">
              <h6 class="card-title text-left">{{ publication.description }}</h6>
            </div>
          </div>
          
          <!-- Image -->
          <div class="row">
            <div class="col text-center position-absolute">
              <img src="/assets/images/publications/{{ publication.icon }}" class="shadow p-1 mb-30 bg-white rounded img-fluid position-sticky" alt="{{ publication.title }} logo" style="width: auto; height: 200px; margin-top:140px; margin-bottom:45px">
            </div>
          </div>
          
          <!-- Button-->
          <div class="row">
            <div class="col text-center position-absolute">
              <a href="{{ publication.url }}" class="btn btn-outline-secondary btn-sm" style="margin-top:365px">Learn more</a>
            </div>
          </div>

        </div>
      
      </div>
  
    </div>

  {% endfor %}

</div>

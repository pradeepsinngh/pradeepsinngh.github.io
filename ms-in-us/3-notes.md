---
layout: page
title: Notes
permalink: /notes/
---

(a badly maintained collection of authoritative decrees on whatever i deem worthy)

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'notes' %}
      <li>
<!--         <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
 -->
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
      {% endif %}
    {% endfor %}
  </ul>


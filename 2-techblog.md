---
layout: page
title: Technomumbles
permalink: /blog/
---

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'blog' %}
      {% unless post.categories contains 'nopub' %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
      {% endunless %}
      {% endif %}
    {% endfor %}
  </ul>

---
layout: page
title: Stuff
permalink: /stuff/
---

stuff = {'matter of an unspecified kind', 'the intermediate stage between pulp and paper', 'any material partly formed'}

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'stuff' %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
      {% endif %}
    {% endfor %}
  </ul>

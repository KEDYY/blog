---
layout: default
title: "归档：Archives"
---
<ul class="collection with-header">
  {% for post in site.posts limit:100 %} 
    {% unless post.next %} 
          <li class="collection-header">
            <h4>{{ post.date | date: '%Y' }}</h2>
          </li> 
	{% else %} 
	  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %} {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %} 
	  {% if year != nyear %} 
	    <li class="collection-header">
          <h4>{{ post.date | date: '%Y' }}</h2> 
        </li>
      {% endif %} 
	{% endunless %} 
    <li class="collection-item">
      <span>{{ post.date | date_to_string }}</span>&raquo;
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li> 
  {% endfor %} 
</ul> 

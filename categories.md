---
layout: default
title: "分类：Categories"
---
<ul class="collection with-header">
{% for cat in site.categories %} 
  {% if cat[0] != 'blog' %} 
    <a name="{{ cat[0] }}"></a>
    <li class="collection-header"><h4>{{ cat[0] }}({{ cat[1].size }})</h4></li>
    {% for post in cat[1] %} 
      <li class="collection-item">
        <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
	{% endfor %} 
  {% endif %} 
{% endfor %} 
</ul>
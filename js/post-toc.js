/*
  为每篇文章在右侧展现目录
 */
$(document).ready(function(){
  $('article').find(":header").addClass("section scrollspy")
  $('#markdown-toc').prependTo("#article-toc");
  $('#markdown-toc').children().addClass("section table-of-contents");
  $('.scrollspy').scrollSpy();
});
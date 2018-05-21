/*
  为每篇文章在右侧展现目录
 */
$(document).ready(function(){
  $('article').find(":header").addClass("section scrollspy");
  #('#markdown-toc').addClass("pinned");
  $('#markdown-toc').prependTo("#article-toc");
  $('#markdown-toc').children().addClass("section table-of-contents");
  $('.scrollspy').scrollSpy();
  $(window).scroll(scrollToc);
});
var p = $('#article-toc').offset().top;
function scrollToc(){
  if($(window).scrollTop() <= p){
    scope.css('top', '');
    return;
  }
  var scope = $("#article-toc").find($(".pinned"));
  var active = scope.find(".active");
  if(active.length ==0){
    return;
  }
  var cur = active.offset().top - $(window).scrollTop();

  if ($("#markdown-toc").offset().top - $("#article-user").offset().top  < $("#article-user").height()){
    scope.css('top', '');
  }

  if (cur < $(window).height()  * 0.3){
     scope.css('top', $(window).height() *0.5 + scope.offset().top - active.offset().top);
  }

  if (cur > $(window).height()  * 0.7){
     scope.css('top', $(window).height() *0.5 + scope.offset().top - active.offset().top);
  }
}
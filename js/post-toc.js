/*
  为每篇文章在右侧展现目录
 */
$(document).ready(function(){
  $('article').find(":header").addClass("section scrollspy");
  $('#markdown-toc').addClass("pinned");
  record_offset = $('#article-toc').offset().top;
  $('#markdown-toc').prependTo("#article-toc");
  $('#article-recommend').prependTo("#mobile-recommend");
  $('#markdown-toc').children().addClass("section table-of-contents");
  $('.scrollspy').scrollSpy();
  $(window).scroll(scrollToc);
});
var record_offset;
function scrollToc(){
  var scope = $("#article-toc").find($(".pinned"));
  var active = scope.find(".active");
  if($(window).scrollTop() <= record_offset){
    scope.css('top', '');
    return;
  }
  if(active.length ==0){
    return;
  }
  var cur = active.offset().top - $(window).scrollTop();

  if ($("#markdown-toc").offset().top - $("#article-user").offset().top  < $("#article-user").height()){
    scope.css('top', '');
  }

  if (cur < $(window).height()  * 0.3){
     scope.animate({'top': $(window).height() *0.5 + scope.offset().top - active.offset().top}, "fast");
  }

  if (cur > $(window).height()  * 0.7){
     scope.animate({'top': $(window).height() *0.5 + scope.offset().top - active.offset().top}, "fast");
  }
}
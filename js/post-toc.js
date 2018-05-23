/*
  为每篇文章在右侧展现目录
 */
$(document).ready(function(){
  $('article').find(":header").addClass("section scrollspy");
  $('#markdown-toc').addClass("pinned");
  $('#markdown-toc').prependTo("#article-toc");
  $('#article-recommend').prependTo("#mobile-recommend");
  $('#markdown-toc').children().addClass("section table-of-contents");
  $('.scrollspy').scrollSpy();
  $(window).scroll(scrollToc);
});
function scrollToc(){
  var scope = $("#article-toc").find($(".pinned"));
  var active = scope.find(".active");
  if($(window).scrollTop() <= $("#article-user").offset().top + $("#article-user").height()){
    scope.css('top', '');
    return;
  }
  if(active.length ==0){
    if (($(window).scrollTop() - ($('article').height() +$('article').offset().top)) > - $(window).height()*0.3){
      console.log("yichu1");
      scope.stop().animate({'top': -scope.height() }, "slow");
      return;
    } else if (($(window).scrollTop() - ($('article').height() +$('article').offset().top)) > - $(window).height()*0.8){
      console.log("yichu2");
      scope.stop().animate({'top': -scope.height() + $(window).height()/3}, "slow");
     return;
    }else{
      return;
    }
  }
  var cur = active.offset().top - $(window).scrollTop();

  if ($("#article-user").offset().top + $("#article-user").height() >= $(window).scrollTop()){
    scope.css('top', '');
    return;
  }

  if (cur < $(window).height()  * 0.35){
     scope.stop().animate({'top': $(window).height() *0.5 + scope.offset().top - active.offset().top}, "fast");
  }

  if (cur > $(window).height()  * 0.65){
     scope.stop().animate({'top': $(window).height() *0.5 + scope.offset().top - active.offset().top}, "fast");
  }
}
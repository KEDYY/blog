/* 网站脚本 */
/**
 * 页面加载完毕后， 将引用属性赋值
 * 大屏页面导航栏 自动显示在左侧，过窄时 隐藏
 */
$(document).ready(function() {
	setContainer();
	reduce_input_box();
	event();
	fix_footer();
});

function setContainer(){
	var container = document.getElementById("container");
	var content = document.getElementById("container-content");
	if (is_wide())
	{
		container.setAttribute("class", "mui-container");
		content.setAttribute("class", "mui-col-md8");
	}else{
		container.setAttribute("class", "mui-container-fluid");
		content.classList.remove("mui-col-md8");
		
	}
}


function is_wide(){
	var find=navigator.userAgent.toLowerCase().match("((mobile)|(android)|(iphone)|(ipad)|(wp))");
	if (find != null)
	{
		/* 当设备来自移动终端，且分别率低于 480 时，采用填充 
		if (document.body.offsetWidth * window.devicePixelRatio < 1300)
		*/ 
		if (document.body.offsetWidth < 400)
		{
			return false;
		};
	}else
	{
		/* 当设备来自PC，且分别率低于 800 时，采用填充 
		if (document.body.offsetWidth * window.devicePixelRatio < 1300)
		*/
		if (document.body.offsetWidth < 800)
		{
			return false;
		};
	}
	visible_sidebar(true);
	return true;
}


function reduce_input_box(){
	/* 
		当屏幕分辨率小于400 时存在输入框过宽导致左右滚动条出现，需要避免
		当屏幕分辨率小于768 时，mui-offset失效
	*/
	var input_box = document.getElementsByName("q")[0];
	if (input_box == null)
	{
		return;
	}
	if (document.body.clientWidth< 400 && input_box.clientWidth < document.body.scrollWidth)
   {

		var width = 360 - (input_box.offsetLeft+ 24)*2;
		input_box.setAttribute("style", "width:" + width + "px");

   }else{
		input_box.removeAttribute("style", "width");
   }
}


function event(){
	$("body").on("swipeleft", function(){
		visible_sidebar(false);
	}
	);
	$("body").on("swiperight", function(){
		visible_sidebar(true);
	}
	);
	$("#navbar").on("click", function(){
		$("#navbar").addClass(".icon-menu-transform")
		visible_sidebar(true);
	}
	);
	var accept = ["#header", "#container", "#footer"];
	for (var i=0; i<accept.length; i++)
	{
		$(accept[i]).on("tapstart", function(){
		if(!is_wide()){
			visible_sidebar(false);
		}
	}
	);
	}
	
}

$(window).resize(function(){
   setContainer();
   reduce_input_box();
   fix_footer();
});

var scroll_pos = 0;
$(window).scroll(function() {
	/* 向上滚动时悬浮框出现，向下滚动为了展示更多内容则悬浮框根据情况隐藏 */
	
	if ($(window).scrollTop()<scroll_pos){
		//up
		$("#header").addClass("float-header");
	}else{
		//down
		$("#header").removeClass("float-header");
	}
	scroll_pos = $(window).scrollTop();
    if ($(window).scrollTop() <= $("#header")[0].clientHeight) {
         $("#header").removeClass("float-header");
    }
    //prevTop = currTop; //IE下有BUG，所以用以下方式
    //setTimeout(function(){prevTop = currTop},0);
});
function visible_sidebar(is_show){
	if (is_show)
	{
		$(".sidebar").addClass("sidebar-show");
	}else{
		$(".sidebar").removeClass("sidebar-show");
	}
}
function fix_footer(){
	var container = document.getElementById("container");
	var header = document.getElementById("header");
	var footer = document.getElementById("footer");
	if ((container.scrollHeight + header.scrollHeight + footer.scrollHeight)< document.body.clientWidth)
	{
		$("#footer").addClass("float-footer");
	}else{
		$("#footer").removeClass("float-footer");
	}
}
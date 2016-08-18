/* 网站脚本 */
/**
 * 页面加载完毕后， 将引用属性赋值
 */
$(document).ready(function() {
	setContainer();
});

function setContainer(){
	var container = document.getElementById("container");
	var content = document.getElementById("container-content");
	if (isMobile())
	{
		container.setAttribute("class", "mui-container-fluid");
		content.setAttribute("class", "mui-col-md8");
	}else{
		container.setAttribute("class", "mui-container");
		content.setAttribute("class", null);
	}
}


function isMobile(){
	var find=navigator.userAgent.toLowerCase().match("((mobile)|(android)|(iphone)|(wp))");
	if (find != null)
	{
		if (window.screen.availWidth> 1024)
		{
			return true;
		};
	}
	return false;
}

$(window).resize(function(){
   setContainer();
});
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
		/* content.classList.remove("mui-col-md8"); */
	}else{
		container.setAttribute("class", "mui-container");
		/* content.setAttribute("class", "mui-col-md8"); */
	}
}


function isMobile(){
	var find=navigator.userAgent.toLowerCase().match("((mobile)|(android)|(iphone)|(ipad)|(wp))");
	if (find != null)
	{
		/* 当设备来自移动终端，且分别率低于 480 时，采用填充 
		if (document.body.offsetWidth * window.devicePixelRatio < 1300)
		*/
		if (document.body.offsetWidth < 480)
		{
			return true;
		};
	}
	return false;
}

$(window).resize(function(){
   setContainer();
});
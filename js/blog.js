/* 网站脚本 */
/**
 * 页面加载完毕后， 将引用属性赋值
 */
$(document).ready(function() {
	setContainer();
	reduce_input_box();
});

function setContainer(){
	var container = document.getElementById("container");
	var content = document.getElementById("container-content");
	if (is_wide())
	{
		container.setAttribute("class", "mui-container");
		/* content.setAttribute("class", "mui-col-md8"); */
	}else{
		container.setAttribute("class", "mui-container-fluid");
		/* content.classList.remove("mui-col-md8"); */
		
	}
}


function is_wide(){
	var find=navigator.userAgent.toLowerCase().match("((mobile)|(android)|(iphone)|(ipad)|(wp))");
	if (find != null)
	{
		/* 当设备来自移动终端，且分别率低于 480 时，采用填充 
		if (document.body.offsetWidth * window.devicePixelRatio < 1300)
		*/ 
		if (document.body.offsetWidth < 480)
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
	return true;
}


function reduce_input_box(){
	/* 当屏幕分辨率小于400 时存在输入框过宽导致左右滚动条出现，需要避免 */
	var input_box = document.getElementsByName("q")[0];
	if (input_box == null)
	{
		return;
	}
	if (input_box.clientWidth < document.body.scrollWidth)
   {
		
		var width = document.body.clientWidth - 24*2;
		input_box.setAttribute("style", "width:" + width + "px");
   }else{
		var width = document.body.clientWidth - 24*2;
		input_box.removeAttribute("style", "width");
   }
}
$(document).on("swipeleft", function(){
	$(".sidebar").show();
}
);
$(document).on("swiperight", function(){
	$(".sidebar").hide();
}
);
$(document).on("tap", function(){
	if ($(".sidebar").is(":visible"))
	{
		$(".sidebar").hide();
	}
}
);
$(document).on("click", function(){
	if ($(".sidebar").is(":hidden"))
	{
		$(".sidebar").show();
	}else{
		$(".sidebar").hide();
	}
}
);

$(window).resize(function(){
   setContainer();
   reduce_input_box();
});
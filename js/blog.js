/* ��վ�ű� */
/**
 * ҳ�������Ϻ� ���������Ը�ֵ
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
		/* ���豸�����ƶ��նˣ��ҷֱ��ʵ��� 480 ʱ��������� 
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
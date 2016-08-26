/* 百度站内搜索 */

var cse;
    
//处理结果回调函数示例
function display (data) {
	console.log(data);
	var li = document.createElement("li");
	li.innerHTML = data;
	$("#result").append(li);
}

//初始化回调函数示例
function result () {
	cse = new BCse.Search("16588621701148359156");    //参数为您的API引擎ID，已自动填写，必需。
	
	cse.getResult("支付宝", display);    //此方法获取搜索结果，参数1为搜索词，参数2为您获取到结果后想要执行的回调函数。
}

function BaiduSearch () { 
	var script = document.createElement("script"); 
	script.type = "text/javascript";
	script.charset = "utf-8";
	script.src = "http://zhannei.baidu.com/api/customsearch/apiaccept?sid=16588621701148359156&v=2.0&callback=result";
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(script, s);
}

BaiduSearch();
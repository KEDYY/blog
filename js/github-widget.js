//获取用户信息
function getUserInfo(user_name, callback){
  $.ajax({
    url: 'https://api.github.com/users/' + user_name,
    async: false,
    dataType: 'jsonp',
    success: function(results){
      if(results && results.meta && results.meta.status == 200){
        var user = results.data;
        var date = new Date(user.created_at);
        user.created_at =  date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
        user.followers_url = "https://github.com/{login}?tab=followers".format(user);
        user.repos_url = "https://github.com/{login}?tab=repositories".format(user);
        user.starred_url = "https://github.com/{login}?tab=stars".format(user);
        if(user.followers<1){
          user.followers = "暂无";
        }else if(user.followers>999){
          user.followers = "999+";
        }
        callback(user);
      }
    }
  });
}
String.prototype.format = function(args) {
  var result = this;
  if (arguments.length > 0) {
    if (arguments.length == 1 && typeof (args) == "object") {
      for (var key in args) {
        if(args[key]!=undefined){
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          var reg= new RegExp("({)" + i + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
}


function widget(user){
  var template=
  '<div class="card-panel grey lighten-5 z-depth-1">'+
  '  <div class="row valign-wrapper">'+
  '    <div class="col s4">'+
  '      <img src="{avatar_url}" alt="{login} " class="circle responsive-img">'+
  '    </div>'+
  '    <div class="col s8">'+
  '      <div>'+
  '        <a target="_blank" href="{html_url}"><b>{name}</b></a>'+
  '      </div>'+
//  '      <div>'+
//  '        {created_at}加入'+
//  '      </div>'+
  '  <div>'+
  '    <span class="black-text">{bio}</span>'+
  '  </div>'+
  '    </div>'+
  '  </div>'+
  '  <div class="row">'+
  '    <div class="col s6 m6 l6">'+
  '      <a target="_blank" href="{html_url}">'+
  '        <i class="material-icons icon_align">person_add</i>添加关注'+
  '      </a>'+
  '    </div>'+
  '    <div class="col s6 m6 l6">'+
  '      <a target="_blank" href="{followers_url}">'+
  '        <i class="material-icons icon_align">people</i>人气 {followers}'+
  '      </a>'+
  '    </div>'+
  '  </div>'+
  '  <div class="row">'+
  '    <div class="col s6 m6 l6">'+
  '      <a target="_blank" href="{repos_url}">'+
  '        <i class="material-icons icon_align">collections_bookmark</i>代码仓库'+
  '      </a>'+
  '    </div>'+
  '    <div class="col s6 m6 l6">'+
  '      <a target="_blank" href="{starred_url}">'+
  '        <i class="material-icons icon_align">star</i>星标仓库'+
  '      </a>'+
  '    </div>'+
  '  </div>'+
  '</div>';
  $('#article-user').append(template.format(user));
}

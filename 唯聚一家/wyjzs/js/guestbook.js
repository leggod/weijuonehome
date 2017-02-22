function getParameter(name)
{
    var str = window.location.search;
    if (str.indexOf(name) != -1)
    {
        var pos_start = str.indexOf(name) + name.length + 1;
        var pos_end = str.indexOf("&", pos_start);
        if (pos_end == -1)
            return str.substring(pos_start);
        else
            return str.substring(pos_start, pos_end);
    } else
    {
        return "";
    }
};

function setBox(sTip)
{
    var oContent = document.getElementById('content');
    oContent.value += sTip.innerHTML;
};

var keyword = document.referrer;

var msg = {};
msg.state = 1;
msg.infocus = function ()
{
    var rightstyle = document.getElementById('lyb_79_right').style.display;
    if (rightstyle == 'none')
    {
        document.getElementById('lyb_79_right').style.display = 'block';
    } else if (rightstyle == 'block')
    {
        document.getElementById('lyb_79_right').style.display = 'none';
    }
};
msg.mouseover = function ()
{
    if (msg.state == 1)
    {
        document.getElementById('lyb_79_right').style.display = 'block';
    }
};
msg.mouseout = function ()
{
    document.getElementById('lyb_79_right').style.display = 'none';
    setCookie();
};
msg.checkSubmit = function () {
	var d = document;
	var pattMobile = /^1[3|4|5|8][0-9]\d{4,8}$/;
	var zwname     = /[\u4E00-\u9FA5]/;
	if (d.getElementById('name').value == null || d.getElementById('name').value == '') {
		alert('请填写您的姓名!');
		return false;
	} else if(!zwname.test(d.getElementById('name').value)){
		alert('必须填写中文姓名!');
		return false;
	
	}else if (d.getElementById('mobile').value == '' || d.getElementById('mobile').value == null || d.getElementById('mobile').value.length!=11 ) {
		alert('手机号必须是11位!');
		return false;
	}else if (!pattMobile.test(d.getElementById('mobile').value)){
		alert('手机号格式不正确!');
		return false;
	}

	d.getElementById('submit_btn').disabled=true;

}
var base_url = "http://123.57.68.14/ly/";
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"", base_url, "Public/home/css/LiuYanBan.css\">");
document.write("<div class=\"lyb_79_box\">");
document.write("	<div class=\"lyb_79_title\">");
document.write("	   <img src=\"", base_url, "Public/home/images/title_ly.gif\"  width=\"758px\" height=\"63px\">");
document.write("	</div>");
document.write("	<div class=\"lyb_79_leftbox\" id=\"lyb_79_leftbox\" >");
document.write("		<img src=\"", base_url, "Public/home/images/ts_bg.gif\" />");
document.write("	</div>");
document.write("	<div class=\"lyb_79_rightbox\">");
document.write("		<form method=\"POST\" action=\"", base_url, "index.php?s=/Index/create\" onsubmit=\"return msg.checkSubmit();\" target=\"_blank\" >");
document.write("	<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"lyb_79_FL lyb_79_MT10\">");
document.write("		<tr>");
document.write("			<td class=\"lyb_79_ft\">姓 名:</td>");
document.write("			<td>");
document.write("			  <input type=\"hidden\" name=\"from\" value=\"", window.location.href, "\" id=\"from\" />");
document.write("			  <input type=\"hidden\" name=\"sid\" value=\"", sid, "\" id=\"sid\" />");
document.write("			  <input type=\"hidden\" name=\"keyword\" value=\"", keyword, "\" id=\"keyword\" />");
document.write("			  <input type=\"text\"  id=\"name\" name=\"name\" class=\"lyb_79_tbinput\"/>");
document.write("			</td>");
document.write("			<td class=\"lyb_79_red\"><span>&nbsp;&nbsp;&nbsp;&nbsp;*</span> 请填写您的中文姓名</td>");
document.write("		</tr>");
document.write("		<tr>");
document.write("			<td class=\"lyb_79_ft\">手 机:</td>");
document.write("			<td><input type=\"text\" id=\"mobile\" name=\"mobile\" class=\"lyb_79_tbinput\"/></td>");
document.write("			<td class=\"lyb_79_red\"><span>&nbsp;&nbsp;&nbsp;&nbsp;*</span> 请填写您的手机号码 </td>");
document.write("		</tr>");
document.write("		<tr>");
document.write("			<td class=\"lyb_79_ft\">电 话:</td>");
document.write("			<td><input type=\"text\" id=\"tel\" name=\"tel\" class=\"lyb_79_tbinput\"/></td>");
document.write("			<td class=\"lyb_79_red\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 电话也是联系重要方式</td>");
document.write("		</tr>");
document.write("		<tr>");
document.write("			<td class=\"lyb_79_ft\">Q&nbsp;&nbsp;Q&nbsp;:</td>");
document.write("			<td><input type=\"text\"  name=\"qq\" id=\"qq\" class=\"lyb_79_tbinput\"/></td>");
document.write("			<td class=\"lyb_79_red\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 请填写QQ号码</td>");
document.write("		</tr>");
document.write("		<tr>");
document.write("			<td class=\"lyb_79_ft\">地 址:</td>");
document.write("			<td><input type=\"text\"  id=\"address\" name=\"address\" class=\"lyb_79_tbinput\"/></td>");
document.write("			<td id=\"adt\" class=\"lyb_79_red\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 请您填写您的详细地址</td>");
document.write("		</tr>");
document.write("		<tr>");
document.write("			<td class=\"lyb_79_ft\">留 言:</td>");
document.write("			<td><textarea  class=\"lyb_79_tbtextarea\" id=\"content\" name=\"content\"></textarea></td>");
document.write("			<td style=\"\">");
document.write("	<div  id=\"lyb_79_right\" >");
document.write("		<ul>");
document.write("			<li class=\"lyb_79_c\">请填写留言或选择下列快捷留言</li>");
document.write("			<li onclick=\"javascript:setBox(this);\">请问我这个地方有加盟商了吗？</li>");
document.write("			<li onclick=\"javascript:setBox(this);\">我想加盟，请来电话告诉我具体细节。 </li>");
document.write("			<li onclick=\"javascript:setBox(this);\">想了解加盟细节，请尽快寄一份资料。</li>");
document.write("			<li onclick=\"javascript:setBox(this);\">给您留过言，未收到资料，请给我来电。</li>");
document.write("			<li onclick=\"javascript:setBox(this);\">很感兴趣，想知道加盟细节。</li>");
document.write("			<li onclick=\"javascript:setBox(this);\">我对这个项目很感兴趣,请尽快寄资料。</li>");
document.write("		</ul>");
document.write("	</div>");
document.write("	</td>");
document.write("		</tr>");
document.write("		<tr>");
document.write("		  <td colspan=\"3\" id=\"weizhi\">");
document.write("			<input style=\"cursor:pointer\" type=\"submit\" value=\"提交留言\" id=\"submit_btn\" class=\"lyb_79_tijiao\" />");
document.write("		</tr>");
document.write("	</table>");
document.write("	</form>");
document.write("	</div>");
document.write("</div>");
    

/**
 * Created by Administrator on 2016/10/7.
 */
window.onload=function(){
    $('#tx')[0].onfocus=function(){
        if($('#tx')[0].value==$('#tx')[0].defaultValue)
            this.value="";
    };
    $('#tx')[0].onblur=function(){
        if($('#tx')[0].value==""){
            this.value=this.defaultValue;
        }
    }
    var str='';
    $('#btn')[0].onclick=function(){
        var sss = getCookie('winner');
        if(sss == undefined){
            var arr = [];
        }else{
            arr = JSON.parse(sss);
        }
        if($('#tx')[0].value==""||$('#tx')[0].value=="请输入英雄的名字"){
            this.value=this.defaultValue;
        }else{
            str += '<li>'+$('#tx')[0].value+'</li>';
            arr.push($('#tx')[0].value);
            setCookie('winner',JSON.stringify(arr),7,'/');
            $('#main ul').html(str);
            window.location.href = 'jiesu.html';
        }

    };
    var xxx = getCookie('winner');
    var ccc = '';
    if(xxx == undefined){}else{
        var bbb = JSON.parse(xxx);
        for(var i = 0;i<bbb.length;i++){
            ccc += '<li>'+bbb[i]+'</li>';
        }
        $('#main ul').html(ccc);
    }
    /*var o=JSON.parse(getCookie('winner'));*/

    function setCookie(name, value, expires, path) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + expires);
        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' + path;
    }
    function getCookie(name) {
        var aCookie = document.cookie.split('; ');
        for(var i =0; i < aCookie.length; i++) {
            var aTemp = aCookie[i].split('=');
            if(aTemp[0] === name) {
                return decodeURIComponent(aTemp[1]);
            }
        }
    }
    function removeCookie(name, path) {
        document.cookie = name + '=;expires=-1;path=' + path;
    }
}

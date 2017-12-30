
var url = window.location.href;
console.log(url);
var id = url.split("?")[1].split("=")[1];
console.log(id)
$.ajax({
    url: "http://127.0.0.1:8000/snippets/" + id + "/",
    success: function (res) {
        console.log(res);
        $('#view').append(
            '编号:' + res.id +'<br>'+
            '标题:' + res.title + '<br>' +
            '编程语言:' + res.language +'<br>'+
            '是否启用行号：' + ((res.linenos)?"已启用":"未启用") + "<br>" +
            '代码:' + res.code +'<br>'+
            '高亮显示:' + '<a href="' + res.highlight + '">点击打开</a>' +'<br>'+
            '创建者:' + res.owner +'<br>'+
            '风格:' + res.style
        )
    }
})
var url = window.location.href;
console.log(url);
var id = url.split("?")[1].split("=")[1];
console.log(id)
$.ajax({
    url: "http://127.0.0.1:8000/topic/topic_retrieve/" + id + "/",
    success: function (res) {
        console.log(res);
        $('#view').append(
            '<div class="gotoDetails" value="' + res.id + '">' +
            '编号:' + res.id + '<br>' +
            '话题:' + res.content + '<br>' +
            '创建时间:' + res.created + '<br>' +
            '创建人:' + res.user.username + '<br>' +
            '标签：'+  + '<br>' +
            '<br><br>' +
            '</div>'
        );

             for (var i = 0; i < res.comments_of.length; i++) {
                 $('#view').append(
                     '编号:' + res.comments_of[i].id + '<br>' +
                     '标题:' + res.comments_of[i].title + '<br>' +
                     '话题:' + res.comments_of[i].content + '<br>' +
                     '创建时间:' + res.comments_of[i].created + '<br>' +
                     '<br><br>'
                 )
             }

    }
})
var url = window.location.href;
console.log(url);
var id = url.split("?")[1].split("=")[1];
console.log(id)
$.ajax({
    url: "http://127.0.0.1:8005/blog/post_rud/" + id + "/",
    success: function (res) {
        console.log(res);
            var tem_tags = res.tags;
            var full_tags = '';
            for (var j=0 ; j < tem_tags.length;j++){
                full_tags += tem_tags[j].name;
                full_tags += ' ';
            }
        $('#view').append(
            '<div class="gotoDetails" value="'+ res.id + '">' +
            '编号:' + res.id +'<br>'+
            '标题:' + res.title + '<br>' +
            '类别:' + res.category.name + '<br>' +
            '标签:' + full_tags + '<br>' +
            '<br><br>' +
            '</div>'
        );
    }
})
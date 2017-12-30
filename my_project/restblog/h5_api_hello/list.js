var global_next = "";
var global_prev = "";

$.ajax({
    url: 'http://127.0.0.1:8005/blog/post_list/',
    success: function (res) {
        console.log(res);
        if (res.next != null){
            console.log('还有数据')
            global_next = res.next;
        }else {
            console.log('没有数据')
            global_next = '';

        }
        if (res.previous != null){
            console.log('还有数据')
            global_prev = res.previous;
        }else {
            console.log('没有数据')
            global_prev = '';

        }
        $('#view_count').html(
                '总数:' + res.count +'<br>'+
                '<br><br>'
            );
        $("#view").html("");
        for(var i = 0; i < res.results.length; i++) {
            var tem_tags = res.results[i].tags;
            var full_tags = '';
            for (var j=0 ; j < tem_tags.length;j++){
                full_tags += tem_tags[j].name;
                full_tags += ' ';
            }
            $('#view').append(
                    '<div class="gotoDetails" value="'+ res.results[i].id + '">' +
                    '编号:' + res.results[i].id +'<br>'+
                    '标题:' + res.results[i].title + '<br>' +
                    '类别:' + res.results[i].category.name +'<br>'+
                    '标签:' + full_tags +'<br>'+
                    '<br><br>' +
                    '</div>'
                );
                $(".gotoDetails").click(function () {
                    console.log($(this).attr("value"));
                    window.location.href = "detail.html?id=" + $(this).attr("value");
                });

        };
 }});

$('#prev').click(function () {
    $.ajax({
        url: global_prev,
        success: function (res) {
            console.log(res);
        if (res.next != null){
            console.log('还有数据')
            global_next = res.next;
        }else {
            console.log('没有数据')
            global_next = '';
            alert('点你妹没有了')
        }
        if (res.previous != null){
            console.log('还有数据')
            global_prev = res.previous;
        }else {
            console.log('没有数据')
            global_prev = '';

            }
            $('#view_count').html(
                    '总数:' + res.count +'<br>'+
                    '<br><br>'
                );
            $("#view").html("")
            for(var i = 0; i < res.results.length; i++) {
                var tem_tags = res.results[i].tags;
                var full_tags = '';
                for (var j=0 ; j < tem_tags.length;j++){
                    full_tags += tem_tags[j].name;
                    full_tags += ' ';
            }
                $('#view').append(
                    '<div class="gotoDetails" value="'+ res.results[i].id + '">' +
                    '编号:' + res.results[i].id +'<br>'+
                    '标题:' + res.results[i].title + '<br>' +
                    '类别:' + res.results[i].category.name +'<br>'+
                    '标签:' + full_tags +'<br>'+
                        '<br><br>' +
                        '</div>'
                    );
                    $(".gotoDetails").click(function () {
                        console.log($(this).attr("value"));
                        window.location.href = "detail.html?id=" + $(this).attr("value");
                    });

            };
     }});


})

$('#next').click(function () {
    $.ajax({
        url: global_next,
        success: function (res) {
            console.log(res);
            if (res.next != null){
                console.log('还有数据');
                global_next = res.next;
            }else {
                console.log('没有数据');
                global_next = '';

            }
            if (res.previous != null){
                console.log('还有数据');
                global_prev = res.previous;
            }else {
                console.log('没有数据');
                global_prev = '';
            }
            $('#view_count').html(
                    '总数:' + res.count +'<br>'+
                    '<br><br>'
                );
            $("#view").html("");
            for(var i = 0; i < res.results.length; i++) {
                var tem_tags = res.results[i].tags;
                var full_tags = '';
                for (var j=0 ; j < tem_tags.length;j++){
                    full_tags += tem_tags[j].name;
                    full_tags += ' ';
                }
                $('#view').append(
                    '<div class="gotoDetails" value="'+ res.results[i].id + '">' +
                    '编号:' + res.results[i].id +'<br>'+
                    '标题:' + res.results[i].title + '<br>' +
                    '类别:' + res.results[i].category.name +'<br>'+
                    '标签:' + full_tags +'<br>'+
                    '<br><br>' +
                    '</div>'
                    );
                    $(".gotoDetails").click(function () {
                        console.log($(this).attr("value"));
                        window.location.href = "detail.html?id=" + $(this).attr("value");
                    });

            };
     }});


});


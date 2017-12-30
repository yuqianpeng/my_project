var global_next = "";
var global_prev = "";

$.ajax({
    url: 'http://127.0.0.1:8000/snippets/',
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
        $("#view").html("")
        for(var i = 0; i < res.results.length; i++) {

            $('#view').append(
                    '<div class="gotoDetails" value="'+ res.results[i].id + '">' +
                    '编号:' + res.results[i].id +'<br>'+
                    '标题:' + res.results[i].title + '<br>' +
                    '编程语言:' + res.results[i].language +'<br>'+
                    '是否启用行号：' + ((res.results[i].linenos)?"已启用":"未启用") + "<br>" +
                    '代码:' + res.results[i].code +'<br>'+
                    '高亮显示:' + '<a href="' + res.results[i].highlight + '">点击打开</a>' +'<br>'+
                    '创建者:' + res.results[i].owner +'<br>'+
                    '风格:' + res.results[i].style +
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

                $('#view').append(
                        '<div class="gotoDetails" value="'+ res.results[i].id + '">' +
                        '编号:' + res.results[i].id +'<br>'+
                        '标题:' + res.results[i].title + '<br>' +
                        '编程语言:' + res.results[i].language +'<br>'+
                        '是否启用行号：' + ((res.results[i].linenos)?"已启用":"未启用") + "<br>" +
                        '代码:' + res.results[i].code +'<br>'+
                        '高亮显示:' + '<a href="' + res.results[i].highlight + '">点击打开</a>' +'<br>'+
                        '创建者:' + res.results[i].owner +'<br>'+
                        '风格:' + res.results[i].style +
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

                $('#view').append(
                        '<div class="gotoDetails" value="'+ res.results[i].id + '">' +
                        '编号:' + res.results[i].id +'<br>'+
                        '标题:' + res.results[i].title + '<br>' +
                        '编程语言:' + res.results[i].language +'<br>'+
                        '是否启用行号：' + ((res.results[i].linenos)?"已启用":"未启用") + "<br>" +
                        '代码:' + res.results[i].code +'<br>'+
                        '高亮显示:' + '<a href="' + res.results[i].highlight + '">点击打开</a>' +'<br>'+
                        '创建者:' + res.results[i].owner +'<br>'+
                        '风格:' + res.results[i].style +
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


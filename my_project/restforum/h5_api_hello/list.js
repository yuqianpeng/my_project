var global_next = "";
var global_prev = "";

$.ajax({
    url: 'http://127.0.0.1:8000/topic/topic_list/',
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
            $('#view').append(
                    '<div class="gotoDetails" value="'+ res.results[i].id + '">' +
                    '编号:' + res.results[i].id +'<br>'+
                    '话题:' + res.results[i].content + '<br>' +
                    '创建时间:' + res.results[i].created +'<br>'+
                    '创建人:' + res.results[i].user.username +'<br>'+
                    '<br><br>' +
                    '</div>'
                );
                $(".gotoDetails").click(function () {
                    console.log($(this).attr("value"));
                    window.location.href = "detail.html?id=" + $(this).attr("value");
                });

        }
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
                    '话题:' + res.results[i].content + '<br>' +
                    '创建时间:' + res.results[i].created +'<br>'+
                    '创建人:' + res.results[i].user.username +'<br>'+
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
                    '话题:' + res.results[i].content + '<br>' +
                    '创建时间:' + res.results[i].created +'<br>'+
                    '创建人:' + res.results[i].user.username +'<br>'+
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


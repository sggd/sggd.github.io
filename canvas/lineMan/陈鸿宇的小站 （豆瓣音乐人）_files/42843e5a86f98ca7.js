
Do(function () {
  $('.user-pic').append('<div id="fleece-id"></div>')
});

    Do('dialog', function () {
        var srcNoPic = 'https://img3.doubanio.com/view/site/large/public/363d3e824da5b5f.jpg',
            srcAddPic = 'https://img3.doubanio.com/f/shire/eb6513362093aef62f96564b95e4b9b096ad88da/pics/site/icon_default_large_hover.png';

        $('#no-pic').hover(
            function () { $('img', this).attr('src', srcAddPic); },
            function () { $('img', this).attr('src', srcNoPic); }
        ).click(function (e) {
            e.preventDefault();
            location.href = '/' + $('body').attr('id') + '/admin/icon';
        });

        /* like site */
        var site_is_commercial = false;
        $('.site-follow').delegate('#like', 'click', function (e) {
            e.preventDefault();
            var site_id = $("body").attr('id');
            var followed = $('#followed').val();
            $.post_withck(
                '/j/site/'+site_id+'/like',
                function (o) {
                  if (o.r == 1){
                    if (!site_is_commercial && followed == 0){
                        var dlg = dui.Dialog({
                            width: 300,
                            title: '我关注这个小站',
                            content: '已关注陈鸿宇小站的广播更新，可以随时取消关注',
                            buttons:[{
                            text: '确定',
                            method: function(o) {
                                $('.site-follow').html(
                                "<span>我关注这个小站。</span><span><a id=\"unlike\" href=\"#\" class=\"lnk-unfollow\" title=\"确实不再关注 陈鸿宇 吗?\">&gt;取消</a></span><input id=\"followed\" type=hidden value=\"1\"/>");
                                dlg.close();
                                }
                            }]
                        }).open()
                        dlg.node.find('.dui-dialog-close').click(function(){
                            location.reload(1);
                        });
                    } else {
                        location.reload(1);
                    }
                  } else {
                        var dlg = dui.Dialog({
                            width: 300,
                            title: '关注没有成功',
                            content: o.msg,
                            buttons:[{
                            text: '确定',
                            method: function(o) {
                                dlg.close();
                                }
                            }]
                        }).open();
                        dlg.node.find('.dui-dialog-close').click(function(){
                            location.reload(1);
                        });
                  }
                }, 'json'
            );
        });

        /* cancel like*/
        $('.site-follow').delegate('#unlike', 'click', function (e) {
            e.preventDefault();
            var site_id = $("body").attr('id');
            var followed = $('#followed').val();
            $.post_withck(
                '/j/site/'+site_id+'/unlike',
                function (o) {
                    if (site_is_commercial){
                        $.post_withck(
                            '/j/site/'+site_id+'/unfollow',
                            function (o) {
                                location.reload();
                        });

                    } else {
                    if (followed == 1){
                        var refresh_follow_button = function(){
                             $('#followed').val(0);
                             return $('.site-follow').html('<a id="like" href="#" class="lnk-follow">关注</a><input id="followed" type=hidden value=\"0\"/>');
                        };
                        var dlg = dui.Dialog({
                            width: 300,
			    title: '取消关注这个小站',
			    content: '已取消关注陈鸿宇小站的广播更新',
			    buttons: [{
				text: '确定',
				method: function(o) {
				    refresh_follow_button();
				    dlg.close();
				}
			    }]
                        }).open();
                       dlg.node.find('.dui-dialog-close').click(function(){
                           location.reload(1);
                       });
                     }
                    else {
                        location.reload();
                     }
                   }
           });
        });
    });

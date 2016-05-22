
    /* for room nav */
    Do(function () {
        $('.nav-items .opt > a').click(function (e) {
            // 不显示管理菜单
            if (e.target.id === 'admin-icon') {
              return;
            }
            var self = this;
            $(this).next().show().blur_hide();
            if (!$('ul', this).is(':hidden')) {
                if (roomHoverColor) {
                    $(this).css('background-color', roomHoverColor);
                }
                $(this).addClass('admin-icon-active');
            }
            $(document.body).click(function (e) {
                if (e.target.id !== 'admin-icon') {
                    $(self).removeAttr('class');
                }
                if (e.target.id !== 'more-icon' && roomHoverColor) {
                    $(self).removeAttr('style');
                }
            });
            e.preventDefault();
        });
    });

;(function(){
    if(window.__player_configs){ return; }
    Do.add('json', {path: 'https://img3.doubanio.com/f/music/4dfbab320a2646c97b9a3fab256c81d4c49d83d2/js/music/lib/json.js', type: 'js'});
    Do.add('flash-transport', {path: 'https://img3.doubanio.com/f/music/53106daa360b681b38e4d8ca4cae379e2a9a9cc4/js/music/player/pageconn/flashtransport.js', type: 'js'});
    Do.add('xdm-transport', {path: 'https://img3.doubanio.com/f/music/e0c59262a5d370deb35f338cd4872a00ed804263/js/music/player/pageconn/xdmtransport.js', type: 'js'});
    Do.add('jstorage-transport', {path: 'https://img3.doubanio.com/f/music/da39a3ee5e6b4b0d3255bfef95601890afd80709/js/music/player/pageconn/jstoragetransport.js', type: 'js'});
    var isSafari = typeof window.navigator !== 'undefined' && window.navigator.vendor === 'Apple Computer, Inc.';
    var supportTouch = ('ontouchstart' in document.documentElement);
    var transport, requires = [];
    if(isSafari && !supportTouch) {
        transport = 'flash';
        requires.push('flash-transport');
    } else {
        transport = 'easyxdm';
        requires.push('xdm-transport');
    }
    if(!window.JSON){
        requires.push('json');
    }
    window.__player_configs = {
        remote: window.location.protocol + '//music.douban.com/artists/player/xdmserver',
        conn_client: '/swf/53025/conn_client.swf',
        source: 'site',
        douban_music: window.location.protocol + '//music.douban.com'
    };
    Do.add('artistplayer', {
        path: 'https://img3.doubanio.com/f/music/f73a1d2c5cfdf3caa990814d0e02c63e892d09ae/js/music/player/pageconn/client.js',
        type: 'js',
        requires: requires
    });
})();

    Do.add('parseparams', {path: 'https://img3.doubanio.com/f/music/e3812ffda936a0062fece1d1731edd3eb1ff9227/js/music/lib/jquery.parseparams.js', type: 'js' });
    Do.add('playlist', {path: 'https://img3.doubanio.com/f/music/c7070d69611504b8bbc51ed0b618954b5b05fd8d/js/music/playlist_widget.js', requires: ['artistplayer'],type:'js'});

    Do('artistplayer', 'parseparams', function(){
        if(window.__inited){return;}
        window.__inited = true;
        artistsPlayer.ready(function(artistsPlayer, hasPlayer){
            var sid = $.parseParams(location.search.slice(1)).s;
            if(sid){
                if(hasPlayer || /ua-ie[67]/i.test(document.documentElement.className)){
                    return artistsPlayer.play(sid);
                } else {
                    return location.href = window.DOUBAN_MUSIC || (window.location.protocol + '//music.douban.com') + '/artists/player/?' + $.param({'sid': sid});
                }
            }
        });
    });

    Do('common', 'playlist', 'artistplayer', function(){
        Song.config({lyrics_src: "/chenhongyu/widget/playlist/18179623/get_song_lyrics",
                  comments_src: "/chenhongyu/widget/playlist/18179623/get_latest_song_comments",
                  add_comment_src: "/chenhongyu/widget/playlist/18179623/add_song_comment",
                  del_comment_src: "/chenhongyu/widget/playlist/18179623/delete_song_comment"
              });

        var widget = PlaylistWidget.findOrCreate(18179623),
        song_records = [{"name":"途中","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vM2YyY2JlYzhmMTgxZDc3MmNhZGNhZjlhZjg0ZmRhMmUvMC9mbS9zb25nL3AyNTE3MDUwXzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/3f2cbec8f181d772cadcaf9af84fda2e\/0\/fm\/song\/p2517050_128k.mp3","id":"613340"},{"name":"早春的树","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vODMyYzJiNjJmMGM1MDgzM2ZjMWEwNjZjYzJhOGYwYTgvMC9mbS9zb25nL3AyNTQ3MDE0XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/832c2b62f0c50833fc1a066cc2a8f0a8\/0\/fm\/song\/p2547014_128k.mp3","id":"622968"},{"name":"你只是经过","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vYjkxMDI4NmI2ZDM5MDY4OGY3ZmFmMTkwYTcyYjdjZTIvMC9mbS9zb25nL3AyNTQ3MDE1XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/b910286b6d390688f7faf190a72b7ce2\/0\/fm\/song\/p2547015_128k.mp3","id":"622969"},{"name":"来信","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vNjY0MjU2MWUzZTIxMGEzNDRhZTk3YjIxOGFmYTI1MmYvMC9mbS9zb25nL3AyNTY5MzYxXzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/6642561e3e210a344ae97b218afa252f\/0\/fm\/song\/p2569361_128k.mp3","id":"632964"},{"name":"理想三旬","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vOGI5YTllNDFlNTIzMjEyYTkxMjg4ZDAyMzU5ZTg1ODkvMC9mbS9zb25nL3AyNDQ5OTM5XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/8b9a9e41e523212a91288d02359e8589\/0\/fm\/song\/p2449939_128k.mp3","id":"574911"},{"name":"浓烟下","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vNWUzYTRkOTRhNWZlMjJkNTE5ODNkN2Q1MTc1OTcyODQvMC9mbS9zb25nL3AyNTg2NjczXzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/5e3a4d94a5fe22d51983d7d517597284\/0\/fm\/song\/p2586673_128k.mp3","id":"640803"},{"name":"霓虹深处","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vODE3ODBkZjE0MGE5ZDJiYmRlOGJmMGZiNzc5MTQzMGUvMC9mbS9zb25nL3AyNTgwMDk3XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/81780df140a9d2bbde8bf0fb7791430e\/0\/fm\/song\/p2580097_128k.mp3","id":"637908"},{"name":"行歌","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vOTBiZDQ1Y2M1ZDM5NGEzOTQ0NmJiMjVmMDA2NThjYjcvMC9mbS9zb25nL3AyMjYzMzE1XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/90bd45cc5d394a39446bb25f00658cb7\/0\/fm\/song\/p2263315_128k.mp3","id":"572854"}],
        is_login = false;

        $(song_records).each(function () {
            var song = Song.create(this.id, this.name, this.url, this.rawUrl,
              this.isDemo, this.cover);
            widget.addSong(song);
        });

        var LYRICS_TMPL = $.template(null, $("#lyrics_tmpl").html()),
            SHARE_LINKS_TMPL = $.template(null, $("#share_links_tmpl").html()),
            COMMENTS_TMPL = $.template(null, $("#comments_tmpl").html()),
            CONMENT_LI_TMPL = $.template(null, $("#comment_li_tmpl").html()),
            $root = $('div#playlist-18179623');

        $root.find('td.title').each(function(index, el){
            return $(el).attr('title', $.trim($(el).text()));
        });

        $root.delegate("tbody tr:not(.expansion)", "hover", function () {
            $(this).toggleClass('hoverSong');
        });

        $root.delegate("td.clickable", "hover", function () {
            $(".icon_btn", this).toggleClass('hover');
        });

        $root.delegate("td.star", "click", function(e){
            if(!is_login){
                return alert('只有登录用户才能收藏歌曲');
            }
            var $td = $(e.currentTarget);
            var sid = $td.parent().attr('song_id');
            var $span = $td.find('span.icon');
            if($span.hasClass('icon-star')){
                $span.removeClass('icon-star').addClass('icon-star-empty').html('&#59400;');
                action = 'delete';
            } else {
                $span.removeClass('icon-star-empty').addClass('icon-star').html('&#59399;');
                action = 'add';
            }
            return $.post_withck('/chenhongyu/widget/playlist/18179623/collect_artist_song', {
                'action': action,
                'song_id': sid
            });
        });

        artistsPlayer.ready(function(){
            // about player
            $root.delegate(".player-playable", "click", function(e){
                e.preventDefault();
                var sid = $(e.currentTarget).data('sid');
                artistsPlayer.play(sid);
            });
            $root.delegate("a.add", "click", function(e){
                e.preventDefault();
                var $el = $(this);
                var sid = $(e.currentTarget).data('sid');
                if($el.data('added')){
                    return;
                }
                artistsPlayer.add(sid);
                var origin_html = $el.html();
                $el.data('added', true).html(
                    $('<div>已添加<\/div>').css('color', '#c1c1c1'));
                window.setTimeout(function(){
                    $el.data('added', false);
                    return $el.html(origin_html);
                }, 3000)
            });
        });

        $root.delegate('.playall', 'click', function(e){
            e.preventDefault();
            var songs = $(song_records).map(function(index, song){
              return song.id;
            }).toArray();
            return artistsPlayer.play(songs);
        }).delegate('.playall', 'hover', function(e){
            if (e.type == 'mouseenter') {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

        $("td.lyrics.clickable", $root).click(
            function (e) {
                e.preventDefault();
                var el = $(this),
                    container = el.closest('tr'),
                    expansion = container.next('.expansion');
                if (!expansion.length || !expansion.find('td').hasClass('lyrics_container')) {
                    if (expansion.length) {
                        expansion.remove();
                    }
                    if (!el.data("loading")) {
                        el.data("loading", true);
                        var song_id = container.attr('song_id'),
                            song = Song.getSong(song_id);
                        song.getLyrics(
                            function (res) {
                                if (res.status === 0) {
                                    el.data("loading", false);
                                    var content = $($.tmpl(LYRICS_TMPL, {lyrics: res.lyrics}));
                                    content.hide().insertAfter(container).fadeIn('slow');
                                } else {
                                    alert(res.msg);
                                }
                            }
                        );
                    }
                } else {
                    expansion.remove();
                }
            }
        );

        $root.delegate("td.download.clickable", "click", function (e) {
            var el = $(this),
                btn = el.find('a'),
                link = btn.attr('href');
            if (link) {
                return true;
            } else {
                Douban.init_show_login();
                return false;
            }
        });

        $("td.share-song", $root).hover(function (e) {
            var el = $(this),
                shareBlock = $("#share-song", $root);

            if (!shareBlock.length) {
                shareBlock = $($.tmpl(SHARE_LINKS_TMPL));
                shareBlock.hide().appendTo($root);
                $root.delegate("#share-song .qq", "click", function(e){
                  e.preventDefault();
                  $(this).shareToQQ();
                });
                $root.delegate("#share-song .sina", "click", function (e) {
                    e.preventDefault();
                    $(this).shareToSina();
                });
            }
            var song_id = el.closest('tr').attr('song_id'),
                song = Song.getSong(song_id),
                doubanLink = shareBlock.find('.douban a'),
                sinaLink = shareBlock.find('.sina');
                qqLink = shareBlock.find('.qq')

            doubanLink.data('share-id', song.id)
                      .data('name', song.name)
                      .data('href', "https://site.douban.com/chenhongyu/?s=" + song.id)
                      .data('desc', "https://site.douban.com/chenhongyu/?s=" + song.id)
                      .data('music', song.url)
                      .data('target_type', "rec")
                      .data('target_action', 0)
                      .data('object_kind', "2005")
                      .data('object_id', song.id)
                      .data('action_props', {"site_title": "陈鸿宇",
                                             "song_url": "https://site.douban.com/chenhongyu/?s="+song.id,
                                             "song_title": song.name});

            var content = '推荐: 豆瓣音乐·音乐人'
                    + "陈鸿宇" + '的歌曲 ' + song.name;

            sinaLink.attr("sina-content", content).attr(
                "sina-url", 'https://site.douban.com/chenhongyu/?s='+song.id
            );

            qqLink.attr('data-summary', content + ' https://site.douban.com/chenhongyu/?s=' + song.id).attr(
                "data-url", 'https://site.douban.com/chenhongyu/?s='+song.id
            ).attr("data-content", content);

            var offset = el.offset(),
                width = el.width(),
                height = el.height()
                t = shareBlock.data('fadeTimeout');
            if (t) {
                clearTimeout(t);
            }
            shareBlock.css({top: (offset.top+height/2-12)+"px",
                            left: (offset.left+width-24)+"px"}).fadeIn();
        }, function(e) {
            var el = $(this),
                shareBlock = $("#share-song", $root),
                t = setTimeout(function () {
                    shareBlock.fadeOut();
                }, 300);
            shareBlock.data('fadeTimeout', t);
        });

        $root.delegate("td.comment.clickable", "click", function() {
            var el = $(this),
                container = el.closest('tr'),
                expansion = container.next('.expansion');
            if (!expansion.length || !expansion.find('td').hasClass('comment_container')) {
                if (expansion.length) {
                    // 找到的expansion不是对应评论的, 先把它删掉
                    expansion.remove();
                }
                if (!el.data("loading")) {
                    var song_id = container.attr('song_id'),
                        song = Song.getSong(song_id);
                    el.data('loading', true);
                    song.getComments(
                        function (res) {
                            if (res.status === 0) {
                                el.data('loading', false);
                                var content = $($.tmpl(COMMENTS_TMPL, {comments: res.comments}));
                                content.hide().insertAfter(container).fadeIn('slow');
                            } else {
                                alert(res.msg);
                            }
                        }
                    );
                }
            } else {
                expansion.remove();
            }
        });

        $root.delegate("#share-song", "mouseover", function (e) {
            var el = $(this),
                t = el.data('fadeTimeout');
            if (t) {
                clearTimeout(t);
            }
        }).delegate("#share-song", "mouseleave", function (e) {
            var t = setTimeout(function () {
                    $("#share-song").fadeOut();
                }, 300);
            $("#share-song").data('fadeTimeout', t);
        });

        $root.delegate(".comment_wrapper textarea.mini", "click", function (e) {
            var el = $(this),
                btn = el.next('span.bn-flat');
            el.removeClass('mini');
            btn.removeClass('hidden');
        });

        $root.delegate(".comment_wrapper .bn-flat", "click", function (e) {
            e.preventDefault();
            var el = $(this),
                textarea = el.prev('textarea'),
                comment = textarea.val(),
                song_id = el.closest('tr').prev('tr').attr('song_id'),
                song = Song.getSong(song_id);
            song.addComment(comment,
                function (res) {
                    var comment = res.comment,
                        li = $.tmpl(CONMENT_LI_TMPL, {comments: [comment]}),
                        list = el.closest('form').next('ul.comments');
                    list.find(".no-comment").remove();
                    li.prependTo(list);
                    textarea.val('');
                },
                function (res) {
                    alert(res.msg);
                });
        });


        var commentSongId = paras(location.href)['c'];
        if (commentSongId) {
            commentSongId = commentSongId.split('#')[0];
            $('tr[song_id=' + commentSongId + '] td.comment.clickable').click();
        }
    });


    Do.add('parseparams', {path: 'https://img3.doubanio.com/f/music/e3812ffda936a0062fece1d1731edd3eb1ff9227/js/music/lib/jquery.parseparams.js', type: 'js' });
    Do.add('playlist', {path: 'https://img3.doubanio.com/f/music/c7070d69611504b8bbc51ed0b618954b5b05fd8d/js/music/playlist_widget.js', requires: ['artistplayer'],type:'js'});

    Do('artistplayer', 'parseparams', function(){
        if(window.__inited){return;}
        window.__inited = true;
        artistsPlayer.ready(function(artistsPlayer, hasPlayer){
            var sid = $.parseParams(location.search.slice(1)).s;
            if(sid){
                if(hasPlayer || /ua-ie[67]/i.test(document.documentElement.className)){
                    return artistsPlayer.play(sid);
                } else {
                    return location.href = window.DOUBAN_MUSIC || (window.location.protocol + '//music.douban.com') + '/artists/player/?' + $.param({'sid': sid});
                }
            }
        });
    });

    Do('common', 'playlist', 'artistplayer', function(){
        Song.config({lyrics_src: "/chenhongyu/widget/playlist/190735746/get_song_lyrics",
                  comments_src: "/chenhongyu/widget/playlist/190735746/get_latest_song_comments",
                  add_comment_src: "/chenhongyu/widget/playlist/190735746/add_song_comment",
                  del_comment_src: "/chenhongyu/widget/playlist/190735746/delete_song_comment"
              });

        var widget = PlaylistWidget.findOrCreate(190735746),
        song_records = [{"name":"《途中》伴奏","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vOWMwMTkwODg3OTdjNjVjY2Y2NWRhN2E5Y2FmNjA0ZjIvMC9mbS9zb25nL3AyNTE3MDU2XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/9c019088797c65ccf65da7a9caf604f2\/0\/fm\/song\/p2517056_128k.mp3","id":"613346"},{"name":"《行歌》伴奏","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vNDU0ZDYxMjViMmViMGE1ZjcwYjZlMzIyNjljNWVmMDEvMC9mbS9zb25nL3AyNDc1NDI4XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/454d6125b2eb0a5f70b6e32269c5ef01\/0\/fm\/song\/p2475428_128k.mp3","id":"595673"},{"name":"《理想三旬》伴奏","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vMDMwZjA4MmM2MTBkMDFhYzhkNDFhNDllZjc5YTc4NzAvMC9mbS9zb25nL3AyNDc1NDI3XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/030f082c610d01ac8d41a49ef79a7870\/0\/fm\/song\/p2475427_128k.mp3","id":"595672"},{"name":"《早春的树》伴奏","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vM2E4ZjE4YzI0YWEwN2UyMTRlNzg5YjgzNzUzYzMwNjIvMC9mbS9zb25nL3AyNTQ5MzU2XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/3a8f18c24aa07e214e789b83753c3062\/0\/fm\/song\/p2549356_128k.mp3","id":"623821"},{"name":"《你只是经过》伴奏","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vNzA2ZWRmZWYwZGY0MDVhNjI0NTBjNWVmM2Y1NTc2ZDYvMC9mbS9zb25nL3AyNTQ5MzM3XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/706edfef0df405a62450c5ef3f5576d6\/0\/fm\/song\/p2549337_128k.mp3","id":"623806"},{"name":"《来信》伴奏","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vOTNmYWJhNjExMTBlNmU1MjQ5MzEzZjhlNjVkYTBkYzkvMC9mbS9zb25nL3AyNTc0OTMwXzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/93faba61110e6e5249313f8e65da0dc9\/0\/fm\/song\/p2574930_128k.mp3","id":"635895"},{"name":"《霓虹深处》伴奏","url":"aHR0cDovL21yNy5kb3ViYW5pby5jb20vODdmYzhmYzEyYzEwMTc5YTcyNjljNjA0YjVlNWNmMWUvMC9mbS9zb25nL3AyNTgwMTE0XzEyOGsubXAz","cover":"http:\/\/img3.doubanio.com\/view\/site\/small\/public\/c855e4cd83853cb.jpg","isDemo":false,"rawUrl":"http:\/\/mr7.doubanio.com\/87fc8fc12c10179a7269c604b5e5cf1e\/0\/fm\/song\/p2580114_128k.mp3","id":"637910"}],
        is_login = false;

        $(song_records).each(function () {
            var song = Song.create(this.id, this.name, this.url, this.rawUrl,
              this.isDemo, this.cover);
            widget.addSong(song);
        });

        var LYRICS_TMPL = $.template(null, $("#lyrics_tmpl").html()),
            SHARE_LINKS_TMPL = $.template(null, $("#share_links_tmpl").html()),
            COMMENTS_TMPL = $.template(null, $("#comments_tmpl").html()),
            CONMENT_LI_TMPL = $.template(null, $("#comment_li_tmpl").html()),
            $root = $('div#playlist-190735746');

        $root.find('td.title').each(function(index, el){
            return $(el).attr('title', $.trim($(el).text()));
        });

        $root.delegate("tbody tr:not(.expansion)", "hover", function () {
            $(this).toggleClass('hoverSong');
        });

        $root.delegate("td.clickable", "hover", function () {
            $(".icon_btn", this).toggleClass('hover');
        });

        $root.delegate("td.star", "click", function(e){
            if(!is_login){
                return alert('只有登录用户才能收藏歌曲');
            }
            var $td = $(e.currentTarget);
            var sid = $td.parent().attr('song_id');
            var $span = $td.find('span.icon');
            if($span.hasClass('icon-star')){
                $span.removeClass('icon-star').addClass('icon-star-empty').html('&#59400;');
                action = 'delete';
            } else {
                $span.removeClass('icon-star-empty').addClass('icon-star').html('&#59399;');
                action = 'add';
            }
            return $.post_withck('/chenhongyu/widget/playlist/190735746/collect_artist_song', {
                'action': action,
                'song_id': sid
            });
        });

        artistsPlayer.ready(function(){
            // about player
            $root.delegate(".player-playable", "click", function(e){
                e.preventDefault();
                var sid = $(e.currentTarget).data('sid');
                artistsPlayer.play(sid);
            });
            $root.delegate("a.add", "click", function(e){
                e.preventDefault();
                var $el = $(this);
                var sid = $(e.currentTarget).data('sid');
                if($el.data('added')){
                    return;
                }
                artistsPlayer.add(sid);
                var origin_html = $el.html();
                $el.data('added', true).html(
                    $('<div>已添加<\/div>').css('color', '#c1c1c1'));
                window.setTimeout(function(){
                    $el.data('added', false);
                    return $el.html(origin_html);
                }, 3000)
            });
        });

        $root.delegate('.playall', 'click', function(e){
            e.preventDefault();
            var songs = $(song_records).map(function(index, song){
              return song.id;
            }).toArray();
            return artistsPlayer.play(songs);
        }).delegate('.playall', 'hover', function(e){
            if (e.type == 'mouseenter') {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

        $("td.lyrics.clickable", $root).click(
            function (e) {
                e.preventDefault();
                var el = $(this),
                    container = el.closest('tr'),
                    expansion = container.next('.expansion');
                if (!expansion.length || !expansion.find('td').hasClass('lyrics_container')) {
                    if (expansion.length) {
                        expansion.remove();
                    }
                    if (!el.data("loading")) {
                        el.data("loading", true);
                        var song_id = container.attr('song_id'),
                            song = Song.getSong(song_id);
                        song.getLyrics(
                            function (res) {
                                if (res.status === 0) {
                                    el.data("loading", false);
                                    var content = $($.tmpl(LYRICS_TMPL, {lyrics: res.lyrics}));
                                    content.hide().insertAfter(container).fadeIn('slow');
                                } else {
                                    alert(res.msg);
                                }
                            }
                        );
                    }
                } else {
                    expansion.remove();
                }
            }
        );

        $root.delegate("td.download.clickable", "click", function (e) {
            var el = $(this),
                btn = el.find('a'),
                link = btn.attr('href');
            if (link) {
                return true;
            } else {
                Douban.init_show_login();
                return false;
            }
        });

        $("td.share-song", $root).hover(function (e) {
            var el = $(this),
                shareBlock = $("#share-song", $root);

            if (!shareBlock.length) {
                shareBlock = $($.tmpl(SHARE_LINKS_TMPL));
                shareBlock.hide().appendTo($root);
                $root.delegate("#share-song .qq", "click", function(e){
                  e.preventDefault();
                  $(this).shareToQQ();
                });
                $root.delegate("#share-song .sina", "click", function (e) {
                    e.preventDefault();
                    $(this).shareToSina();
                });
            }
            var song_id = el.closest('tr').attr('song_id'),
                song = Song.getSong(song_id),
                doubanLink = shareBlock.find('.douban a'),
                sinaLink = shareBlock.find('.sina');
                qqLink = shareBlock.find('.qq')

            doubanLink.data('share-id', song.id)
                      .data('name', song.name)
                      .data('href', "https://site.douban.com/chenhongyu/?s=" + song.id)
                      .data('desc', "https://site.douban.com/chenhongyu/?s=" + song.id)
                      .data('music', song.url)
                      .data('target_type', "rec")
                      .data('target_action', 0)
                      .data('object_kind', "2005")
                      .data('object_id', song.id)
                      .data('action_props', {"site_title": "陈鸿宇",
                                             "song_url": "https://site.douban.com/chenhongyu/?s="+song.id,
                                             "song_title": song.name});

            var content = '推荐: 豆瓣音乐·音乐人'
                    + "陈鸿宇" + '的歌曲 ' + song.name;

            sinaLink.attr("sina-content", content).attr(
                "sina-url", 'https://site.douban.com/chenhongyu/?s='+song.id
            );

            qqLink.attr('data-summary', content + ' https://site.douban.com/chenhongyu/?s=' + song.id).attr(
                "data-url", 'https://site.douban.com/chenhongyu/?s='+song.id
            ).attr("data-content", content);

            var offset = el.offset(),
                width = el.width(),
                height = el.height()
                t = shareBlock.data('fadeTimeout');
            if (t) {
                clearTimeout(t);
            }
            shareBlock.css({top: (offset.top+height/2-12)+"px",
                            left: (offset.left+width-24)+"px"}).fadeIn();
        }, function(e) {
            var el = $(this),
                shareBlock = $("#share-song", $root),
                t = setTimeout(function () {
                    shareBlock.fadeOut();
                }, 300);
            shareBlock.data('fadeTimeout', t);
        });

        $root.delegate("td.comment.clickable", "click", function() {
            var el = $(this),
                container = el.closest('tr'),
                expansion = container.next('.expansion');
            if (!expansion.length || !expansion.find('td').hasClass('comment_container')) {
                if (expansion.length) {
                    // 找到的expansion不是对应评论的, 先把它删掉
                    expansion.remove();
                }
                if (!el.data("loading")) {
                    var song_id = container.attr('song_id'),
                        song = Song.getSong(song_id);
                    el.data('loading', true);
                    song.getComments(
                        function (res) {
                            if (res.status === 0) {
                                el.data('loading', false);
                                var content = $($.tmpl(COMMENTS_TMPL, {comments: res.comments}));
                                content.hide().insertAfter(container).fadeIn('slow');
                            } else {
                                alert(res.msg);
                            }
                        }
                    );
                }
            } else {
                expansion.remove();
            }
        });

        $root.delegate("#share-song", "mouseover", function (e) {
            var el = $(this),
                t = el.data('fadeTimeout');
            if (t) {
                clearTimeout(t);
            }
        }).delegate("#share-song", "mouseleave", function (e) {
            var t = setTimeout(function () {
                    $("#share-song").fadeOut();
                }, 300);
            $("#share-song").data('fadeTimeout', t);
        });

        $root.delegate(".comment_wrapper textarea.mini", "click", function (e) {
            var el = $(this),
                btn = el.next('span.bn-flat');
            el.removeClass('mini');
            btn.removeClass('hidden');
        });

        $root.delegate(".comment_wrapper .bn-flat", "click", function (e) {
            e.preventDefault();
            var el = $(this),
                textarea = el.prev('textarea'),
                comment = textarea.val(),
                song_id = el.closest('tr').prev('tr').attr('song_id'),
                song = Song.getSong(song_id);
            song.addComment(comment,
                function (res) {
                    var comment = res.comment,
                        li = $.tmpl(CONMENT_LI_TMPL, {comments: [comment]}),
                        list = el.closest('form').next('ul.comments');
                    list.find(".no-comment").remove();
                    li.prependTo(list);
                    textarea.val('');
                },
                function (res) {
                    alert(res.msg);
                });
        });


        var commentSongId = paras(location.href)['c'];
        if (commentSongId) {
            commentSongId = commentSongId.split('#')[0];
            $('tr[song_id=' + commentSongId + '] td.comment.clickable').click();
        }
    });

(function(c){var a=$("html").hasClass("ua-iphone")||$("html").hasClass("ua-android");var d=[];var b={_config:{douban_music:window.location.protocol+"//music.douban.com",source:"unknow"},setup:function(e){b._is_ready=false;b._config=e;b.transport=(new PLTransport(e));b.transport.ready(function(h,g){b._is_ready=true;var f;while(f=d.pop()){f.apply(null,[b,g])}}).onMessage(b.onMessage);return b},openPlayer:function(f){if(/ua-ie[67]/i.test(document.documentElement.className)){return window.open(b._config.douban_music+"/artists/player/sorry4ie","_blank")}var h;if(typeof f==="undefined"){h=""}else{if(Object.prototype.toString.call(f)==="[object Array]"){h="?sid="+f.join(",")}else{h="?sid="+f}}h+="&source="+this._config.source;if(!(/ua-windows/i.test(document.documentElement.className))){b._windowHandler=window.open(b._config.douban_music+"/artists/player/"+h,"Player")}else{var i=980,e=746;var g=["toolbar=0,status=0,resizeable=0,width=",i,",height=",e,",left=",(screen.width-i)/2,",top=",(screen.height-e)/2].join("");b._windowHandler=window.open(b._config.douban_music+"/artists/player/"+h,"Player",g)}return b._windowHandler},onMessage:function(f,e){},ready:function(e){if(b._is_ready){return e()}else{d.push(e)}},isExists:function(){if(a){return false}if(!!b._windowHandler&&!b._windowHandler.closed){return true}else{return b.transport.serverExists()}},play:function(e,g,f){if(typeof e==="number"||typeof e==="string"){e=[e]}if(typeof g==="undefined"){g=e[0]}else{if(g===Object(g)){f=g;g=e[0]}}if(!f){f={}}if(b.isExists()){return b.transport.postMessage({sids:e,play:g,source:f.source||this._config.source})}else{return b.openPlayer(e)}},add:function(e,f){if(!f){f={}}if(!b.isExists()){return this.play(e)}if(typeof e==="string"||typeof e==="number"){e=[e]}return b.transport.postMessage({sids:e,source:f.source||this._config.source})}};if(window.__player_configs){b.setup(window.__player_configs)}c.artistsPlayer=b;return b})(window);
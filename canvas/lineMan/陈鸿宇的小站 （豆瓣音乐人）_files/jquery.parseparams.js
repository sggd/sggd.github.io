(function(a){if(typeof define==="undefined"){a(window.$)}else{define(["jquery"],a)}})(function(b){var a=/([^&=]+)=?([^&]*)/g;var d=/\+/g;var c=function(e){return decodeURIComponent(e.replace(d," "))};b.parseParams=function(h){var j={},i;while(i=a.exec(h)){var g=c(i[1]),f=c(i[2]);if(g.substring(g.length-2)==="[]"){g=g.substring(0,g.length-2);(j[g]||(j[g]=[])).push(f)}else{j[g]=f}}return j}});
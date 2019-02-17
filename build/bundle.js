!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={a:65,z:90,up:38,down:40,spaceBar:32,n:78,left:37,right:39,m:77,b:66}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=i(6),l=n(a),u=i(7),h=n(u),d=i(5),c=n(d),f=i(8),p=n(f),y=i(9),b=n(y),v=function(){function t(e,i,n,s){var a=this;r(this,t),this.element=e,this.width=i,this.height=n,this.pause=!1,this.ping4=new Audio("public/sounds/pong-04.wav"),this.gameElement=document.getElementById(this.element),this.board=new l.default(this.width,this.height),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.player1Paddle=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,o.KEYS.a,o.KEYS.z),this.player2Paddle=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,o.KEYS.up,o.KEYS.down),this.ball=new c.default(8,this.width,this.height,1,"white"),this.player1Score=new p.default(.25*this.width,40,40),this.player2Score=new p.default(.75*this.width,40,40),this.player1Wins=new b.default(this.width,this.height),this.player2Wins=new b.default(this.width,this.height),document.addEventListener("keydown",function(t){switch(t.keyCode){case o.KEYS.spaceBar:a.pause=!a.pause}})}return s(t,[{key:"render",value:function(){var t=this;if(!this.pause){this.gameElement.innerHTML="";var e=document.createElementNS(o.SVG_NS,"svg");if(e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),this.gameElement.appendChild(e),this.board.render(e),this.player1Paddle.render(e),this.player2Paddle.render(e),this.ball.render(e,this.player1Paddle,this.player2Paddle),this.player1Score.render(e,this.player1Paddle.score),this.player2Score.render(e,this.player2Paddle.score),10==this.player1Paddle.score||10==this.player2Paddle.score){if(this.player1Paddle.score===Math.max(this.player1Paddle.score,this.player2Paddle.score)){console.log("Player1 wins"),this.pause=!0,this.ping4.play();this.player1Wins.render(e,"Player 1 wins")}else if(this.player2Paddle.score===Math.max(this.player1Paddle.score,this.player2Paddle.score)){console.log("Player2 wins"),this.pause=!0,this.ping4.play();this.player1Wins.render(e,"Player 2 wins")}document.addEventListener("keydown",function(e){switch(e.keyCode){case o.KEYS.spaceBar:t.player1Paddle.score=0,t.player2Paddle.score=0}})}}}}]),t}();e.default=v},function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.i,n,""]]);i(15)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";i(3);var n=i(2),r=function(t){return t&&t.__esModule?t:{default:t}}(n),s=new r.default("game",512,256);!function t(){s.render(),requestAnimationFrame(t)}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw s}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=function(){function t(e,i,r,s,a){var l=this;n(this,t),this.radius=e,this.boardWidth=i,this.boardHeight=r,this.direction=s,this.fill=a,this.ping1=new Audio("public/sounds/pong-01.wav"),this.ping2=new Audio("public/sounds/pong-02.wav"),this.ping3=new Audio("public/sounds/pong-03.wav"),this.reset(),document.addEventListener("keydown",function(t){switch(t.keyCode){case o.KEYS.m:8===l.radius?(l.radius=4,l.fill="green"):(l.radius=8,l.fill="white")}})}return s(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5),this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(){var t=this.y<=this.radius,e=this.y>=this.boardHeight-this.radius;(t||e)&&(this.vy=-this.vy,this.ping1.play())}},{key:"paddleCollision",value:function(t,e){if(this.vx<0){var i=t.coordinates(t.x,t.y,t.width,t.height),n=r(i,4),s=(n[0],n[1]),o=n[2],a=n[3];this.x-this.radius<=s&&this.y>=o&&this.y<=a&&(this.vx=-this.vx,this.ping2.play())}else{var l=e.coordinates(e.x,e.y,e.width,e.height),u=r(l,4),h=u[0],d=(u[1],u[2]),c=u[3];this.x+this.radius>=h&&this.y>=d&&this.y<=c&&(this.vx=-this.vx,this.ping2.play())}}},{key:"countScore",value:function(t){this.ping3.play(),t.score++,this.reset()}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(e,i);var n=document.createElementNS(o.SVG_NS,"circle");n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),n.setAttributeNS(null,"r",this.radius),n.setAttributeNS(null,"fill",this.fill),n.setAttributeNS(null,"stroke-width","1"),n.setAttributeNS(null,"stroke","green"),t.appendChild(n);var r=this.x<=this.radius,s=this.x>=this.boardWidth-this.radius;r?(this.countScore(i),this.direction=1):s&&(this.countScore(e),this.direction=-1)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"x",0),e.setAttributeNS(null,"y",0),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","#353535"),t.appendChild(e);var i=document.createElementNS(s.SVG_NS,"line");i.setAttributeNS(null,"stroke-dasharray","10 5"),i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"stroke-dasharray","10 5"),t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r,o,a,l,u){var h=this;n(this,t),this.boardHeight=e,this.width=i,this.height=r,this.x=o,this.y=a,this.speed=10,this.score=0,document.addEventListener("keydown",function(t){switch(t.keyCode){case l:h.y=Math.max(0,h.y-h.speed);break;case u:h.y=Math.min(h.boardHeight-h.height,h.y+h.speed);break;case s.KEYS.m:h.changeMode()}})}return r(t,[{key:"changeMode",value:function(){56===this.height?(this.height=30,this.speed=15):(this.height=56,this.speed=10)}},{key:"coordinates",value:function(t,e,i,n){return[t,t+i,e,e+n]}},{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","green"),t.appendChild(e)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=r,this.score=0}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(s.SVG_NS,"text");i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"text-anchor","middle"),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"fill","white"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(s.SVG_NS,"rect");i.setAttributeNS(null,"x",0),i.setAttributeNS(null,"y",0),i.setAttributeNS(null,"width",this.width),i.setAttributeNS(null,"height",this.height),i.setAttributeNS(null,"fill","green"),t.appendChild(i);var n=document.createElementNS(s.SVG_NS,"text");n.setAttributeNS(null,"x",50),n.setAttributeNS(null,"y",50),n.setAttributeNS(null,"font-size",40),n.setAttributeNS(null,"fill","white"),n.textContent=e,t.appendChild(n)}}]),t}();e.default=o},function(t,e,i){e=t.exports=i(11)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(14)+') format("woff"),url('+i(13)+') format("truetype"),url('+i(12)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=c[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(l(n.parts[s],e))}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(l(n.parts[s],e));c[n.id]={id:n.id,refs:1,parts:o}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],o=r[1],a=r[2],l=r[3],u={css:o,media:a,sourceMap:l};i[s]?i[s].parts.push(u):e.push(i[s]={id:s,parts:[u]})}return e}function r(t,e){var i=y(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,r;if(e.singleton){var l=v++;i=b||(b=o(e)),n=u.bind(null,i,l,!1),r=u.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=a(e),n=d.bind(null,i),r=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=o(e),n=h.bind(null,i),r=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function u(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function h(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var c={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=f(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,g=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var s=[],o=0;o<r.length;o++){var a=r[o],l=c[a.id];l.refs--,s.push(l)}if(t){i(n(t),e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);
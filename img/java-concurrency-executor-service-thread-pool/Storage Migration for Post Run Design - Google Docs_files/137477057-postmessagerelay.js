var h=this,q=function(a,c){a=a.split(".");var b=h;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b=b[d]&&b[d]!==Object.prototype[d]?b[d]:b[d]={}:b[d]=c},r=function(a,c){function b(){}b.prototype=c.prototype;a.o=c.prototype;a.prototype=new b;a.prototype.constructor=a;a.m=function(a,b,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return c.prototype[b].apply(a,e)}};var="" t="function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var" c="Error().stack;c&&(this.stack=c)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var" u="function(a,c){a=a.split("%s");for(var" b="" ,d="a.length-1,e=0;e<d;e++)b+=a[e]+(e<c.length?c[e]:"%s");t.call(this,b+a[d])};r(u,t);u.prototype.name="AssertionError";var" v="function(a,c,b){if(!a){var" d="Assertion failed" ;if(c){d+=": " +c;var="" e="Array.prototype.slice.call(arguments,2)}throw" new="" u(""+d,e||[]);}};var="" w="Array.prototype.forEach?function(a,c){v(null!=a.length);Array.prototype.forEach.call(a,c,void" 0)}:function(a,c){for(var="" a?a.split(""):a,e="0;e<b;e++)e" in="" d&&c.call(void="" 0,d[e],e,a)};var="" x;a:{var="" y="h.navigator;if(y){var" z="y.userAgent;if(z){x=z;break" a}}x="" }var="" a="function(a){return-1!=x.indexOf(a)};var" f="function(a){var" a.close(),e(a)},e="function(a){if(!a.closed&&a.document&&a.document.body)if(a=a.document.body,v(null!=a,"goog.dom.setTextContent" expects="" non-null="" value="" for="" node"),"textcontent"in="" a)a.textcontent="Please close this window." ;else="" if(3="=a.nodeType)a.data="Please" close="" this="" window.";else="" if(a.firstchild&&3="=a.firstChild.nodeType){for(;a.lastChild!=" a.firstchild;)a.removechild(a.lastchild);a.firstchild.data="Please close this window." }else{for(var="" c;c="a.firstChild;)a.removeChild(c);v(a,"Node" cannot="" be="" null="" or="" undefined.");a.appendchild((9="=a.nodeType?a:a.ownerDocument||a.document).createTextNode("Please" window."))}};var="" g="function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var" error("invalid="" uri="" scheme="" origin:="" "+a);b="" ;var="" a+":="" "+c+b};var="" h="function(){function" a(){e[0]="1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;k=g=0}function" c(a){for(var="">b;b+=4)c[b/4]=a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3];for(b=16;80>b;b++)a=c[b-3]^c[b-8]^c[b-14]^c[b-16],c[b]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],g=e[4];for(b=0;80>b;b++){if(40>b)if(20>b){var k=l^d&(f^l);var n=1518500249}else k=d^f^l,n=1859775393;else 60>b?(k=d&f|l&(d|f),n=2400959708):(k=d^f^l,n=3395469782);k=((a<<5|a>>>27)&4294967295)+
k+g+n+c[b]&4294967295;g=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=k}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+g&4294967295}function b(a,b){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var e=[],d=0,l=a.length;d<l;++d)e.push(a.charcodeat(d));a=e}b||(b=a.length);e=0;if(0==g)for(;e+64<b;)c(a.slice(e,e+64)),e+=64,k+=64;for(;e<b;)if(f[g++]=a[e++],k++,64==g)for(g=0,c(f);e+64<b;)c(a.slice(e,e+64)),e+=64,k+=64}function d(){var="" a="[]," d="8*k;56">g?b(n,56-g):b(n,64-(g-56));for(var p=63;56<=p;p--)f[p]=d&255,d>>>=8;c(f);for(p=d=0;5>p;p++)for(var m=24;0<=m;m-=8)a[d++]=e[p]>>m&255;return a}for(var e=[],f=[],m=[],n=[128],B=1;64>B;++B)n[B]=0;var g,k;a();return{reset:a,update:b,digest:d,digestString:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789abcdef".charat(math.floor(a[c] 16))+"0123456789abcdef".charat(a[c]%16);return="" b}}};var="" aa="function(a,c,b){var" d="[];d=[c,a];w(b,function(a){d.push(a)});return" i(d.join("="" "))},i="function(a){var" c="H();c.update(a);return" c.digeststring().tolowercase()};var="" j="function(a){var" b="0,d=c.length;b<d;++b){var" e="String(c[b]||"");e&&a.push(e)}if(2">a.length)return null;c=a[0];b=gadgets.rpc.getOrigin(a[1]);if(b!==a[1])return null;a=a.slice(2);return(a=(b&&c?["session_state",aa(G(b),c,a||[])].join(" "):null)||"")&&a.substr(14)||null},K=function(a,c,b){this.i=String(a||"");this.f=String(c||"");this.a=String(b||"");this.b={};this.j=this.l=this.g=this.h="";this.c=null};
K.prototype.evaluate=function(){var a={},c="";try{c=String(document.cookie||"")}catch(m){}c=c.split("; ").join(";").split(";");for(var b=0,d=c.length;b</a.length;c++)b+="0123456789abcdef".charat(math.floor(a[c]></=m;m-=8)a[d++]=e[p]></=p;p--)f[p]=d&255,d></l;++d)e.push(a.charcodeat(d));a=e}b||(b=a.length);e=0;if(0==g)for(;e+64<b;)c(a.slice(e,e+64)),e+=64,k+=64;for(;e<b;)if(f[g++]=a[e++],k++,64==g)for(g=0,c(f);e+64<b;)c(a.slice(e,e+64)),e+=64,k+=64}function></30|d></5|a></1|a></24|a[b+1]<<16|a[b+2]<<8|a[b+3];for(b=16;80></arguments.length;d++)e[d-2]=arguments[d];return>
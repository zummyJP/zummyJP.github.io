var pxd=pxdoc=function(){"use strict";var n=-1,e=!1,t="/api/pxd/1",o="",a="",r=!1,s="http://localhost:2070",i=0,u=0,l=function(){var n=window.navigator.userAgent.toLowerCase();try{return-1!=n.indexOf("chrome")?(navigator.languages[0]||navigator.browserLanguage||navigator.language||navigator.userLanguage).substr(0,2):(navigator.browserLanguage||navigator.language||navigator.userLanguage).substr(0,2)}catch(n){return}},p=function(n,e){u!=n&&(u=n,"ja"==l()?195802==n?alert("印刷アプリがインストールされていないか印刷アプリを起動できませんでした"):619298==n?alert("このサイトでは印刷を利用できません(ライセンスがありません)"):5829182==n?alert("このサイトでは印刷を利用できません(利用期限がきれました)"):8858922==n?alert("このサイトでは印刷を利用できません(このPCでは利用できません)"):194852==n?alert("このサイトでは印刷を利用できません(新しいバージョンを利用できません)"):483839==n?alert("このサイトでは印刷を利用できません(ライセンスが正しくありません)"):467282==n?alert("印刷データがありません\n"+e):467283==n?alert("印刷データがありません(0)\n"+e):467284==n?alert("印刷データがありません(1)\n"+e):467285==n?alert("印刷データが取得できません（タイムアウト）\n"+e):987483==n?alert("送信エラー\n"+e):1==n?alert("このサイトでは印刷を利用できません(ライセンスが見つかりません)\n"+e):alert("このサイトでは印刷を利用できません(0)"):195802==n?alert("PXDoc is not installed or running."):619298==n?alert("Not found license."):5829182==n?alert("License is expired."):8858922==n?alert("This PC is not allowed."):194852==n?alert("This web page is not allowed new version."):483839==n?alert("License is not available."):467282==n?alert("No data.\n"+e):467283==n?alert("No data.(0)\n"+e):467284==n?alert("No data.(1)\n"+e):467285==n?alert("No data.(timeout)\n"+e):987483==n?alert("Sending error.\n"+e):1==n?alert("Not found license\n"+e):alert("Cannot print.(0)"))},c=function(n){u=0,T();var e=JSON.parse(n.target.responseText);1==e.code?g(e.value,e.id):2==e.code?d(e.value,e.id):3==e.code?f():4==e.code&&w()},d=function(n,e){i--,window.open(n,e)},f=function(){i--,history.back()},w=function(){i--,window.open("about:blank","_self").close()},v=function(n,e){var t=new XMLHttpRequest,a=s+"/inapi/pxd/1/downloaded?e="+e+"&s="+o;t.open("POST",a,!0),t.onload=function(){},t.send(n)},g=function(n,e){var t=new XMLHttpRequest;t.onload=function(){i--,v(t.response,e)},t.open("GET",n,!0),t.responseType="blob",t.send(null)},T=function(){if(""!=o){e=!0;var n=new XMLHttpRequest,t=s+"/inapi/pxd/1/event?s="+o+"&n="+i+"&v=20170815";i++,n.open("GET",t),n.onload=c,n.onerror=function(){0==i&&p(195802),i--,setTimeout(T,3e3)},n.onabort=function(){setTimeout(T,1e3)},n.ontimeout=function(){setTimeout(T,1e3)},n.send(null)}},m=function(n,e,r,i){u=0;var l=new FormData,c=new XMLHttpRequest,d=s+t+"/print",f=new Blob([n],{type:"application/octet-stream"});l.append("base",e),l.append("link",r),""!=i?l.append("printerName",i):l.append("printerName",a),l.append("data",f,"1"),c.onerror=function(){},c.onload=function(){var n=JSON.parse(c.responseText);h(n.session_id)},c.onreadystatechange=function(){4==c.readyState&&(403==c.status&&p(619298),0==c.status&&p(195802))},""!=o&&(d+="?s="+o),c.open("POST",d,!0),c.send(l)},g=function(n,e){var t=function(n){var t=new XMLHttpRequest,a=s+"/inapi/pxd/1/downloaded?e="+e+"&s="+o;t.open("POST",a,!0),t.onload=function(){},t.send(n)},a=new XMLHttpRequest;a.onload=function(){t(a.response)},a.open("GET",n,!0),a.responseType="blob",a.send(null)},h=function(n){o=n,e||T(),window.sessionStorage&&window.sessionStorage.setItem("sessionId",n)},b=function(n){var e=n.attributes.action,t=new XMLHttpRequest,o=n.attributes.method;e=null==e.nodeValue?"":e.nodeValue,o=null==o?"POST":o.nodeValue,t.open(o,e),t.responseType="blob",t.onload=function(){m(t.response,location.pathname,e)},t.onerror=function(){p(987483,e)},t.send(new FormData(n))},L=function(n){var e=new XMLHttpRequest;e.open("POST",s+t+"/license"),e.send(n)},S=function(){return window.location.hostname+(window.location.port?"_"+window.location.port:"")+".lic3"};return"https:"==document.location.protocol&&(s="https://app.pxdoc.com:2071"),function(n){var e=new XMLHttpRequest;e.open("GET","/"+S(),!1),e.onload=function(){L(e.responseText)},e.onreadystatechange=function(){4==e.readyState&&(e.status>=400||n&&n())},e.send(null)}(null),window.sessionStorage&&(o=window.sessionStorage.getItem("sessionId")),function(){var e=s+t+"/version",a=new XMLHttpRequest;""!=o&&(e+="?s="+o),a.open("GET",e,!1),a.onload=function(){var e=JSON.parse(a.responseText);(r=e&&"pxdoc"==e.name)&&(n=e.version,h(e.sessionId))},a.onerror=function(){},a.onreadystatechange=function(){4==a.readyState&&(403==a.status&&p(619298),0==a.status&&p(195802))};try{a.send(null)}catch(i){}}(),{check:function(){return r},setPrinter:function(n){a=n},printoutForm:function(n,e){if(2!=arguments.length)for(var t=document.querySelectorAll(n),o=0;o<t.length;o++){var a=t[o];a.onsubmit=function(){return b(a),!1}}else for(var r=document.querySelectorAll(e),o=0;o<r.length;o++)r[o].onclick=function(){for(var e=document.querySelectorAll(n),t=0;t<e.length;t++)b(e[t]);return!1}},getVersion:function(e){var o=s+t+"/version",a=new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){var t=JSON.parse(a.responseText);n=t.version,null==e?alert(n):e.call(this,n)},a.onerror=function(){null==e?alert("起動できません"):e.call(this,-2)},a.send(null)},printerList:function(){var n=new XMLHttpRequest;return n.open("GET",s+"/api/pxd/1/printers",!1),n.send(null),200===n.status?JSON.parse(n.responseText):void alert("Not allowed.")},paperList:function(n){var e=new XMLHttpRequest;return e.open("GET",s+"/api/pxd/1/papers?id="+n,!1),e.send(null),200===e.status?JSON.parse(e.responseText):void alert("Not allowed.")},printout:function(n,e){var t=new XMLHttpRequest;t.open("GET",n,!0),t.responseType="blob",t.onerror=function(){p(467284,n)},t.ontimeout=function(){p(467285,n)},t.onreadystatechange=function(){4==t.readyState&&(t.status>=200&&t.status<400?m(t.response,location.pathname,n,a):t.status>=400?p(467282,n):0==t.status&&p(467283,n))},arguments.length>=2&&e>=0&&(t.timeout=e),t.send(null)}}}();
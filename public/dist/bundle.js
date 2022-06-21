(()=>{var __webpack_modules__={900:()=>{document.querySelectorAll(".errors");var e=[],n=document.getElementById("footer"),r=document.querySelector(".placeholder");document.querySelector(".box-recent"),document.querySelector(".recent-rect").firstElementChild,allRecs=document.querySelectorAll(".recent-rect"),function(e,n,r){var t=document.createElement("div");t.setAttribute("class","input-container"),e.appendChild(t);var i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("placeholder","Enter an address here"),t.appendChild(i);var s,a,c,l=document.createElement("div");function o(e,r){if(!e||!e.length)return!1;for(var t=0;t<e.length;t++)e[t].classList.remove("autocomplete-active");e[r].classList.add("autocomplete-active"),i.value=currentItems[r].formatted,n(currentItems[r])}function d(){var e=t.querySelector(".autocomplete-items");e&&t.removeChild(e),c=-1}l.classList.add("clear-button"),function(e){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("height","24");var r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),r.setAttribute("fill","red"),n.appendChild(r),e.appendChild(n)}(l),l.addEventListener("click",(function(e){e.stopPropagation(),i.value="",n(null),l.classList.remove("visible"),d()})),t.appendChild(l),i.addEventListener("input",(function(e){var r=this.value;if(d(),s&&clearTimeout(s),a&&a({canceled:!0}),r||l.classList.remove("visible"),l.classList.add("visible"),!r||r.length<3)return!1;s=setTimeout((function(){s=null,new Promise((function(e,n){a=n;var t="/v1/autocomplete-api/?text=".concat(encodeURIComponent(r));fetch(t).then((function(r){a=null,r.ok?r.json().then((function(n){return e(n)})):r.json().then((function(e){return n(e)}))}))})).then((function(e){var r=e.results,s=document.createElement("div");s.setAttribute("class","autocomplete-items"),t.appendChild(s),e.results.forEach((function(e,t){var a=document.createElement("div");a.innerHTML=e.formatted,s.appendChild(a),a.addEventListener("click",(function(e){i.value=r[t].formatted,n(r[t]),d()}))}))}),(function(e){e.canceled||console.log(e)}))}),300)})),i.addEventListener("keydown",(function(n){var r=e.querySelector(".autocomplete-items");if(r){var t=r.getElementsByTagName("div");40===n.keyCode?(n.preventDefault(),o(t,c=c!==t.length-1?c+1:0)):38===n.keyCode?(n.preventDefault(),o(t,c=0!==c?c-1:c=t.length-1)):13===n.keyCode&&(n.preventDefault(),c>-1&&d())}else if(40===n.keyCode){var s=document.createEvent("Event");s.initEvent("input",!0,!0),i.dispatchEvent(s)}})),document.addEventListener("click",(function(n){if(n.target!==i)d();else if(!e.querySelector(".autocomplete-items")){var r=document.createEvent("Event");r.initEvent("input",!0,!0),i.dispatchEvent(r)}}))}(document.getElementById("autocomplete-container"),(function(t){if(t){var i="".concat(t.address_line1,", ").concat(t.address_line2);!function(t,i,s){if(t&&i){document.getElementById("location").scrollIntoView();var a="v1/weather-api/".concat(t,"&").concat(i);fetch(a).then((function(e){return e.json()})).then((function(t){!function(t){var i=t.weather,a=(i[0].main,i[0].description),c=i[0].icon,l=Math.round(t.visibility/1e3),o=t.main,d=Math.round(o.temp),h=Math.round(o.feels_like),m=Math.round(o.temp_min),p=Math.round(o.temp_max),u=Math.round(o.pressure/33.6388),v=Math.round(o.humidity),b=t.wind.speed,g=document.querySelector(".location"),f=g.firstElementChild,_=document.getElementById("temp"),w=document.getElementById("feels-like"),x=document.getElementById("min-temp"),y=document.getElementById("max-temp"),k=document.getElementById("humidity"),E=document.getElementById("wind-speed"),T=document.getElementById("description"),A=document.getElementById("weather-icon"),C=document.getElementById("visibility"),L=document.getElementById("pressure"),I=document.getElementById("sun-rise"),S=document.getElementById("sun-set"),M="http://openweathermap.org/img/wn/".concat(c,"@2x.png");function B(e){var n=new Date(1e3*e),r=n.getHours(),t=n.getMinutes();return r>12?"".concat(r-=12,":").concat(t):"".concat(r,":").concat(t)}document.getElementById("duplicate"),document.querySelectorAll(".bi-x-lg");var j=t.sys,q=B(j.sunrise),H=B(j.sunset),z=s.split(",");f.innerText="Weather in ".concat(z[0]+z[1]),_.innerText="".concat(d,"°"),w.innerText="".concat(h,"°"),x.innerText="".concat(m,"°"),y.innerText="".concat(p,"°"),k.innerText="".concat(v,"%"),E.innerText="".concat(b," mph"),T.innerText="".concat(a),A.src=M,C.innerText="".concat(l," mi"),L.innerText="".concat(u," Hg"),I.innerText="sun rise: ".concat(q,"am"),S.innerText="".concat(H,"pm");var W=document.getElementById("weather-results");n.style.position="relative",W.style.display="inline-block",r.style.display="none",g.style.display="block",e.push(s)}(t)})).catch((function(e){console.log(e)}))}}(t.lat,t.lon,i)}}))},587:module=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function(e,n,r,t,i){var s=n.split("\n"),a=Math.max(t-3,0),c=Math.min(s.length,t+3),l=i(r),o=s.slice(a,c).map((function(e,n){var r=n+a+1;return(r==t?" >> ":"    ")+r+"| "+e})).join("\n");throw e.path=l,e.message=(l||"ejs")+":"+t+"\n"+o+"\n\n"+e.message,e},escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __line=1,__lines='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Weather App</title>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">\r\n    <link rel="stylesheet" href="css/main.css">\r\n    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400&display=swap" rel="stylesheet">\r\n    <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png">\r\n    <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">\r\n    <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">\r\n    <link rel="manifest" href="images/icons/site.webmanifest">\r\n</head>\r\n<header>\r\n    <img class="logo" src="images/svg.svg" alt="">\r\n\r\n</header>\r\n<body>\r\n\x3c!--Nav bar--\x3e\r\n<navbar></navbar>\r\n<div class="container">\r\n    <div class="w-grid">\r\n        <div class="box-weather">\r\n            <div class="autocomplete-container" id="autocomplete-container"></div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class="container">\r\n    <div class="grid-resents">\r\n\r\n        <div class="box-recent">\r\n            <p>Weather info</p>\r\n            <h1 style="margin-top: -19px">Recent Searches:</h1>\r\n            <hr>\r\n            <div id="duplicate" class="recent-rect">\r\n                <p class="recent-items"></p>\r\n                <i id="x" class="bi bi-x-lg"></i>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="location">\r\n    <h2 id="location">Weather in syracuse</h2>\r\n    <hr>\r\n</div>\r\n<div class="placeholder">\r\n    <h1>Please type an address in the search box above to see weather results.</h1>\r\n</div>\r\n<div id="weather-results" class="container">\r\n    <div class="grid">\r\n        <div id="first-box" class="box">\r\n            <h3>Current Temp <i class="bi bi-thermometer-half"></i></h3>\r\n            <h1 class="weather-elements" id="temp"> 88°\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Feels Like <i class="bi bi-bullseye"></i></h3>\r\n            <h1 class="weather-elements" id="feels-like">88\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Min Temp <i class="bi bi-thermometer-low"></i></h3>\r\n            <h1 class="weather-elements" id="min-temp">56\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Max Temp <i class="bi bi-thermometer-high"></i></h3>\r\n            <h1 class="weather-elements" id="max-temp">90\r\n            </h1>\r\n        </div>\r\n        <div class="box" id="forecast">\r\n            <h3>Forecast</h3>\r\n            <img src="" alt="weather icon" id="weather-icon">\r\n            <p id="description">\r\n            </p>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Humidity <i class="bi bi-moisture"></i></h3>\r\n            <h1 class="weather-elements" id="humidity">87\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h2>Wind Speed <i class="bi bi-wind"></i></h2>\r\n            <h1 class="weather-elements" id="wind-speed">10\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Visibility <i class="bi bi-eye"></i></h3>\r\n            <h1 class="weather-elements" id="visibility">10 mi\r\n            </h1>\r\n        </div>\r\n\r\n        <div class="box">\r\n            <h3>Pressure <i class="bi bi-speedometer"></i></h3>\r\n            <h1 class="weather-elements" id="pressure">30.11 HG\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n\r\n            <h3>Sun Set <i class="bi bi-sunset"></i></h3>\r\n            <h2 class="weather-elements" id="sun-set"> 8:40pm\r\n            </h2>\r\n            <p class="weather-elements" id="sun-rise">sun rise: 6:50am</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</body>\r\n<footer id="footer">\r\n    <div class="container">\r\n        <div class="footer-grid">\r\n            <div class="footer-box">\r\n                <p>Page Last Updated 6/19/2022</p>\r\n                <p>Copyright <span>&copy;</span> 2022 Abdirezak Yusuf</p>\r\n            </div>\r\n            <div id="socials" class="footer-box">\r\n                <a href="https://www.linkedin.com/in/abdirezak-yusuf-a86944233/" target="_blank">\r\n                    <i class="bi bi-linkedin"></i> LinkedIn Profile\r\n                </a><br>\r\n                <a href="https://github.com/AbdiZAk" target="_blank"><i class="bi bi-github"></i>github/AbdiZAk</a><br>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<script src="dist/bundle.js"><\/script>\r\n\x3c!--<script src="js/weather.js"><\/script>--\x3e\r\n\x3c!--<script src="autocomplete-api.js"><\/script>--\x3e\r\n</html>\r\n',__filename="views\\index.ejs";try{var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Weather App</title>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">\r\n    <link rel="stylesheet" href="css/main.css">\r\n    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400&display=swap" rel="stylesheet">\r\n    <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png">\r\n    <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">\r\n    <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">\r\n    <link rel="manifest" href="images/icons/site.webmanifest">\r\n</head>\r\n<header>\r\n    <img class="logo" src="images/svg.svg" alt="">\r\n\r\n</header>\r\n<body>\r\n\x3c!--Nav bar--\x3e\r\n<navbar></navbar>\r\n<div class="container">\r\n    <div class="w-grid">\r\n        <div class="box-weather">\r\n            <div class="autocomplete-container" id="autocomplete-container"></div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class="container">\r\n    <div class="grid-resents">\r\n\r\n        <div class="box-recent">\r\n            <p>Weather info</p>\r\n            <h1 style="margin-top: -19px">Recent Searches:</h1>\r\n            <hr>\r\n            <div id="duplicate" class="recent-rect">\r\n                <p class="recent-items"></p>\r\n                <i id="x" class="bi bi-x-lg"></i>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="location">\r\n    <h2 id="location">Weather in syracuse</h2>\r\n    <hr>\r\n</div>\r\n<div class="placeholder">\r\n    <h1>Please type an address in the search box above to see weather results.</h1>\r\n</div>\r\n<div id="weather-results" class="container">\r\n    <div class="grid">\r\n        <div id="first-box" class="box">\r\n            <h3>Current Temp <i class="bi bi-thermometer-half"></i></h3>\r\n            <h1 class="weather-elements" id="temp"> 88°\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Feels Like <i class="bi bi-bullseye"></i></h3>\r\n            <h1 class="weather-elements" id="feels-like">88\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Min Temp <i class="bi bi-thermometer-low"></i></h3>\r\n            <h1 class="weather-elements" id="min-temp">56\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Max Temp <i class="bi bi-thermometer-high"></i></h3>\r\n            <h1 class="weather-elements" id="max-temp">90\r\n            </h1>\r\n        </div>\r\n        <div class="box" id="forecast">\r\n            <h3>Forecast</h3>\r\n            <img src="" alt="weather icon" id="weather-icon">\r\n            <p id="description">\r\n            </p>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Humidity <i class="bi bi-moisture"></i></h3>\r\n            <h1 class="weather-elements" id="humidity">87\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h2>Wind Speed <i class="bi bi-wind"></i></h2>\r\n            <h1 class="weather-elements" id="wind-speed">10\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Visibility <i class="bi bi-eye"></i></h3>\r\n            <h1 class="weather-elements" id="visibility">10 mi\r\n            </h1>\r\n        </div>\r\n\r\n        <div class="box">\r\n            <h3>Pressure <i class="bi bi-speedometer"></i></h3>\r\n            <h1 class="weather-elements" id="pressure">30.11 HG\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n\r\n            <h3>Sun Set <i class="bi bi-sunset"></i></h3>\r\n            <h2 class="weather-elements" id="sun-set"> 8:40pm\r\n            </h2>\r\n            <p class="weather-elements" id="sun-rise">sun rise: 6:50am</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</body>\r\n<footer id="footer">\r\n    <div class="container">\r\n        <div class="footer-grid">\r\n            <div class="footer-box">\r\n                <p>Page Last Updated 6/19/2022</p>\r\n                <p>Copyright <span>&copy;</span> 2022 Abdirezak Yusuf</p>\r\n            </div>\r\n            <div id="socials" class="footer-box">\r\n                <a href="https://www.linkedin.com/in/abdirezak-yusuf-a86944233/" target="_blank">\r\n                    <i class="bi bi-linkedin"></i> LinkedIn Profile\r\n                </a><br>\r\n                <a href="https://github.com/AbdiZAk" target="_blank"><i class="bi bi-github"></i>github/AbdiZAk</a><br>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<script src="dist/bundle.js"><\/script>\r\n\x3c!--<script src="js/weather.js"><\/script>--\x3e\r\n\x3c!--<script src="autocomplete-api.js"><\/script>--\x3e\r\n</html>\r\n'),__line=139;return __output}catch(e){rethrow(e,__lines,__filename,__line,escapeFn)}}}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__(900);var __webpack_exports__=__webpack_require__(587)})();
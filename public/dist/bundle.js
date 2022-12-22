(()=>{var __webpack_modules__={900:()=>{document.querySelectorAll(".errors");var e=[],n=document.getElementById("footer"),t=document.querySelector(".placeholder");document.querySelector(".recent-rect"),function(e,n,t){var i=document.createElement("div");i.setAttribute("class","input-container"),e.appendChild(i);var r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","Enter an address here"),i.appendChild(r);var s,a,c,l=document.createElement("div");function o(e,t){if(!e||!e.length)return!1;for(var i=0;i<e.length;i++)e[i].classList.remove("autocomplete-active");e[t].classList.add("autocomplete-active"),r.value=currentItems[t].formatted,n(currentItems[t])}function d(){var e=i.querySelector(".autocomplete-items");e&&i.removeChild(e),c=-1}l.classList.add("clear-button"),function(e){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("height","24");var t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),t.setAttribute("fill","red"),n.appendChild(t),e.appendChild(n)}(l),l.addEventListener("click",(function(e){e.stopPropagation(),r.value="",n(null),l.classList.remove("visible"),d()})),i.appendChild(l),r.addEventListener("input",(function(e){var t=this.value;if(d(),s&&clearTimeout(s),a&&a({canceled:!0}),t||l.classList.remove("visible"),l.classList.add("visible"),!t||t.length<3)return!1;s=setTimeout((function(){s=null,new Promise((function(e,n){a=n;var i="".concat("","api/autocomplete-api/?text=").concat(encodeURIComponent(t));fetch(i,{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(t){a=null,t.ok?t.json().then((function(n){return e(n)})):t.json().then((function(e){return n(e)}))}))})).then((function(e){var t=e.results,s=document.createElement("div");s.setAttribute("class","autocomplete-items"),i.appendChild(s),e.results.forEach((function(e,i){var a=document.createElement("div");a.innerHTML=e.formatted,s.appendChild(a),a.addEventListener("click",(function(e){r.value=t[i].formatted,n(t[i]),d()}))}))}),(function(e){e.canceled||console.log(e)}))}),300)})),r.addEventListener("keydown",(function(n){var t=e.querySelector(".autocomplete-items");if(t){var i=t.getElementsByTagName("div");40===n.keyCode?(n.preventDefault(),o(i,c=c!==i.length-1?c+1:0)):38===n.keyCode?(n.preventDefault(),o(i,c=0!==c?c-1:c=i.length-1)):13===n.keyCode&&(n.preventDefault(),c>-1&&d())}else if(40===n.keyCode){var s=document.createEvent("Event");s.initEvent("input",!0,!0),r.dispatchEvent(s)}})),document.addEventListener("click",(function(n){if(n.target!==r)d();else if(!e.querySelector(".autocomplete-items")){var t=document.createEvent("Event");t.initEvent("input",!0,!0),r.dispatchEvent(t)}}))}(document.getElementById("autocomplete-container"),(function(i){if(i){var r="".concat(i.address_line1,", ").concat(i.address_line2);!function(i,r,s){if(i&&r){document.getElementById("location").scrollIntoView();var a={lat:i,lon:r},c="".concat("","api/weather-api/");fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(i){!function(i){var r=i.weather,a=(r[0].main,r[0].description),c=r[0].icon,l=Math.round(i.visibility/1e3),o=i.main,d=Math.round(o.temp),h=Math.round(o.feels_like),m=Math.round(o.temp_min),p=Math.round(o.temp_max),u=Math.round(o.pressure/33.6388),v=Math.round(o.humidity),b=i.wind.speed,g=document.querySelector(".location"),f=g.firstElementChild,_=document.getElementById("temp"),w=document.getElementById("feels-like"),y=document.getElementById("min-temp"),x=document.getElementById("max-temp"),k=document.getElementById("humidity"),E=document.getElementById("wind-speed"),T=document.getElementById("description"),A=document.getElementById("weather-icon"),C=document.getElementById("visibility"),L=document.getElementById("pressure"),S=document.getElementById("sun-rise"),I=document.getElementById("sun-set"),M="https://openweathermap.org/img/wn/".concat(c,"@2x.png");function B(e){var n=new Date(1e3*e),t=n.getHours(),i=n.getMinutes();return t>12?"".concat(t-=12,":").concat(i):"".concat(t,":").concat(i)}document.getElementById("duplicate"),document.querySelectorAll(".bi-x-lg");var q=i.sys,j=B(q.sunrise),H=B(q.sunset),P=s.split(",");f.innerText="Weather in ".concat(P[0]+P[1]),_.innerText="".concat(d,"°"),w.innerText="".concat(h,"°"),y.innerText="".concat(m,"°"),x.innerText="".concat(p,"°"),k.innerText="".concat(v,"%"),E.innerText="".concat(b," mph"),T.innerText="".concat(a),A.src=M,C.innerText="".concat(l," mi"),L.innerText="".concat(u," Hg"),S.innerText="sun rise: ".concat(j,"am"),I.innerText="".concat(H,"pm");var z=document.getElementById("weather-results");n.style.position="relative",z.style.display="inline-block",t.style.display="none",g.style.display="block",e.push(s)}(i)})).catch((function(e){console.log(e)}))}}(i.lat,i.lon,r)}}))},587:module=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function(e,n,t,i,r){var s=n.split("\n"),a=Math.max(i-3,0),c=Math.min(s.length,i+3),l=r(t),o=s.slice(a,c).map((function(e,n){var t=n+a+1;return(t==i?" >> ":"    ")+t+"| "+e})).join("\n");throw e.path=l,e.message=(l||"ejs")+":"+i+"\n"+o+"\n\n"+e.message,e},escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __line=1,__lines='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Weather App</title>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">\r\n    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400&display=swap" rel="stylesheet">\r\n    <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png">\r\n    <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">\r\n    <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">\r\n    <link rel="manifest" href="images/icons/site.webmanifest">\r\n</head>\r\n<header>\r\n    <img class="logo" src="images/svg.svg" alt="">\r\n</header>\r\n<body>\r\n<div class="container">\r\n    <div class="w-grid">\r\n        <div class="box-weather">\r\n            <div class="autocomplete-container" id="autocomplete-container"></div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class="container">\r\n    <div class="grid-resents">\r\n\r\n        <div class="box-recent">\r\n            <p>Weather info</p>\r\n            <h1 style="margin-top: -19px">Recent Searches:</h1>\r\n            <hr>\r\n            <div id="duplicate" class="recent-rect">\r\n                <p class="recent-items"></p>\r\n                <i id="x" class="bi bi-x-lg"></i>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="location">\r\n    <h2 id="location">Weather in syracuse</h2>\r\n    <hr>\r\n</div>\r\n<div class="placeholder">\r\n    <h1>Please type an address in the search box above to see weather results.</h1>\r\n</div>\r\n<div id="weather-results" class="container">\r\n    <div class="grid">\r\n        <div id="first-box" class="box">\r\n            <h3>Current Temp <i class="bi bi-thermometer-half"></i></h3>\r\n            <h1 class="weather-elements" id="temp"> 88°\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Feels Like <i class="bi bi-bullseye"></i></h3>\r\n            <h1 class="weather-elements" id="feels-like">88\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Min Temp <i class="bi bi-thermometer-low"></i></h3>\r\n            <h1 class="weather-elements" id="min-temp">56\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Max Temp <i class="bi bi-thermometer-high"></i></h3>\r\n            <h1 class="weather-elements" id="max-temp">90\r\n            </h1>\r\n        </div>\r\n        <div class="box" id="forecast">\r\n            <h3>Forecast</h3>\r\n            <img src="" alt="weather icon" id="weather-icon">\r\n            <p id="description">\r\n            </p>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Humidity <i class="bi bi-moisture"></i></h3>\r\n            <h1 class="weather-elements" id="humidity">87\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h2>Wind Speed <i class="bi bi-wind"></i></h2>\r\n            <h1 class="weather-elements" id="wind-speed">10\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Visibility <i class="bi bi-eye"></i></h3>\r\n            <h1 class="weather-elements" id="visibility">10 mi\r\n            </h1>\r\n        </div>\r\n\r\n        <div class="box">\r\n            <h3>Pressure <i class="bi bi-speedometer"></i></h3>\r\n            <h1 class="weather-elements" id="pressure">30.11 HG\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n\r\n            <h3>Sun Set <i class="bi bi-sunset"></i></h3>\r\n            <h2 class="weather-elements" id="sun-set"> 8:40pm\r\n            </h2>\r\n            <p class="weather-elements" id="sun-rise">sun rise: 6:50am</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</body>\r\n<footer id="footer">\r\n    <div class="container">\r\n        <div class="footer-grid">\r\n            <div class="footer-box">\r\n                <p>Page Last Updated 7/15/2022</p>\r\n                <p>Copyright <span>&copy;</span> 2022 Abdirezak Yusuf</p>\r\n            </div>\r\n            <div id="socials" class="footer-box">\r\n                <a href="https://www.linkedin.com/in/abdirezak-yusuf-a86944233/" target="_blank">\r\n                    <i class="bi bi-linkedin"></i> LinkedIn Profile\r\n                </a><br>\r\n                <a href="https://github.com/AbdiZAk" target="_blank"><i class="bi bi-github"></i>github/AbdiZAk</a><br>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n\x3c!-- <script src="/js/weather.js"><\/script> --\x3e\r\n</html>\r\n',__filename="views\\index.ejs";try{var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Weather App</title>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">\r\n    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400&display=swap" rel="stylesheet">\r\n    <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png">\r\n    <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">\r\n    <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">\r\n    <link rel="manifest" href="images/icons/site.webmanifest">\r\n</head>\r\n<header>\r\n    <img class="logo" src="images/svg.svg" alt="">\r\n</header>\r\n<body>\r\n<div class="container">\r\n    <div class="w-grid">\r\n        <div class="box-weather">\r\n            <div class="autocomplete-container" id="autocomplete-container"></div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class="container">\r\n    <div class="grid-resents">\r\n\r\n        <div class="box-recent">\r\n            <p>Weather info</p>\r\n            <h1 style="margin-top: -19px">Recent Searches:</h1>\r\n            <hr>\r\n            <div id="duplicate" class="recent-rect">\r\n                <p class="recent-items"></p>\r\n                <i id="x" class="bi bi-x-lg"></i>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="location">\r\n    <h2 id="location">Weather in syracuse</h2>\r\n    <hr>\r\n</div>\r\n<div class="placeholder">\r\n    <h1>Please type an address in the search box above to see weather results.</h1>\r\n</div>\r\n<div id="weather-results" class="container">\r\n    <div class="grid">\r\n        <div id="first-box" class="box">\r\n            <h3>Current Temp <i class="bi bi-thermometer-half"></i></h3>\r\n            <h1 class="weather-elements" id="temp"> 88°\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Feels Like <i class="bi bi-bullseye"></i></h3>\r\n            <h1 class="weather-elements" id="feels-like">88\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Min Temp <i class="bi bi-thermometer-low"></i></h3>\r\n            <h1 class="weather-elements" id="min-temp">56\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Max Temp <i class="bi bi-thermometer-high"></i></h3>\r\n            <h1 class="weather-elements" id="max-temp">90\r\n            </h1>\r\n        </div>\r\n        <div class="box" id="forecast">\r\n            <h3>Forecast</h3>\r\n            <img src="" alt="weather icon" id="weather-icon">\r\n            <p id="description">\r\n            </p>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Humidity <i class="bi bi-moisture"></i></h3>\r\n            <h1 class="weather-elements" id="humidity">87\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h2>Wind Speed <i class="bi bi-wind"></i></h2>\r\n            <h1 class="weather-elements" id="wind-speed">10\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n            <h3>Visibility <i class="bi bi-eye"></i></h3>\r\n            <h1 class="weather-elements" id="visibility">10 mi\r\n            </h1>\r\n        </div>\r\n\r\n        <div class="box">\r\n            <h3>Pressure <i class="bi bi-speedometer"></i></h3>\r\n            <h1 class="weather-elements" id="pressure">30.11 HG\r\n            </h1>\r\n        </div>\r\n        <div class="box">\r\n\r\n            <h3>Sun Set <i class="bi bi-sunset"></i></h3>\r\n            <h2 class="weather-elements" id="sun-set"> 8:40pm\r\n            </h2>\r\n            <p class="weather-elements" id="sun-rise">sun rise: 6:50am</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</body>\r\n<footer id="footer">\r\n    <div class="container">\r\n        <div class="footer-grid">\r\n            <div class="footer-box">\r\n                <p>Page Last Updated 7/15/2022</p>\r\n                <p>Copyright <span>&copy;</span> 2022 Abdirezak Yusuf</p>\r\n            </div>\r\n            <div id="socials" class="footer-box">\r\n                <a href="https://www.linkedin.com/in/abdirezak-yusuf-a86944233/" target="_blank">\r\n                    <i class="bi bi-linkedin"></i> LinkedIn Profile\r\n                </a><br>\r\n                <a href="https://github.com/AbdiZAk" target="_blank"><i class="bi bi-github"></i>github/AbdiZAk</a><br>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n\x3c!-- <script src="/js/weather.js"><\/script> --\x3e\r\n</html>\r\n'),__line=131;return __output}catch(e){rethrow(e,__lines,__filename,__line,escapeFn)}}},778:()=>{}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__(900),__webpack_require__(587);var __webpack_exports__=__webpack_require__(778)})();
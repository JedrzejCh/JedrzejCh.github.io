!function(c){var e={};function n(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return c[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=c,n.c=e,n.d=function(c,e,t){n.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:t})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,e){if(1&e&&(c=n(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var l in c)n.d(t,l,function(e){return c[e]}.bind(null,l));return t},n.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(e,"a",e),e},n.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nconst titles = document.querySelectorAll(".project-card__h4");\nconst descriptions = document.querySelectorAll(".project-card__paragraph");\nconst demoLinks = document.querySelectorAll(".list-wrapper--demo");\nconst githubLinks = document.querySelectorAll(".list-wrapper--github");\nconst gridCards = document.querySelector(".projects__grid--js");\nconsole.log(`Welcome to my site`);\n\nfetch("https://api.github.com/users/JedrzejCh/repos")\n  .then(resp => resp.json())\n  .then(resp => {\n    const repos = resp;\n\n    for (const repo of repos) {\n      const { description, homepage, html_url, name } = repo;\n      console.log(repo)\n      gridCards.innerHTML += `\n<div class="project-card">\n          <img src="../assets/img/github.svg" alt="Github logo" class="project-card__icon">\n          <h4 class="project-card__h4">${name}</h4>\n          <p class="project-card__paragraph">${description}</p>\n          <div class="list-wrapper">\n            <ul class="list-wrapper--ul">\n          ${\n        name ? `<li class="list-wrapper--li"><a href="https://jedrzejch.github.io/${name}/" target="_blank" rel="no follow no referrer" class="list-wrapper--demo">Demo</a></li>` : \'xd\'\n        }\n        \n              <li class="list-wrapper--li"><a href="${html_url}" target="_blank" rel="no follow no referrer" class="list-wrapper--github">Github</a></li>\n            </ul>\n          </div>\n        </div>\n`;\n    }\n\n  })\n  .catch(err => {\n    console.log(err)\n  })\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsd0NBQXdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEtBQUs7QUFDOUMsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7O0FBRUEsc0RBQXNELFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtY2FyZF9faDRcIik7XG5jb25zdCBkZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtY2FyZF9fcGFyYWdyYXBoXCIpO1xuY29uc3QgZGVtb0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LXdyYXBwZXItLWRlbW9cIik7XG5jb25zdCBnaXRodWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC13cmFwcGVyLS1naXRodWJcIik7XG5jb25zdCBncmlkQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX19ncmlkLS1qc1wiKTtcbmNvbnNvbGUubG9nKGBXZWxjb21lIHRvIG15IHNpdGVgKTtcblxuZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0plZHJ6ZWpDaC9yZXBvc1wiKVxuICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAudGhlbihyZXNwID0+IHtcbiAgICBjb25zdCByZXBvcyA9IHJlc3A7XG5cbiAgICBmb3IgKGNvbnN0IHJlcG8gb2YgcmVwb3MpIHtcbiAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGhvbWVwYWdlLCBodG1sX3VybCwgbmFtZSB9ID0gcmVwbztcbiAgICAgIGNvbnNvbGUubG9nKHJlcG8pXG4gICAgICBncmlkQ2FyZHMuaW5uZXJIVE1MICs9IGBcbjxkaXYgY2xhc3M9XCJwcm9qZWN0LWNhcmRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZ2l0aHViLnN2Z1wiIGFsdD1cIkdpdGh1YiBsb2dvXCIgY2xhc3M9XCJwcm9qZWN0LWNhcmRfX2ljb25cIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJwcm9qZWN0LWNhcmRfX2g0XCI+JHtuYW1lfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LWNhcmRfX3BhcmFncmFwaFwiPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3Qtd3JhcHBlci0tdWxcIj5cbiAgICAgICAgICAke1xuICAgICAgICBuYW1lID8gYDxsaSBjbGFzcz1cImxpc3Qtd3JhcHBlci0tbGlcIj48YSBocmVmPVwiaHR0cHM6Ly9qZWRyemVqY2guZ2l0aHViLmlvLyR7bmFtZX0vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm8gZm9sbG93IG5vIHJlZmVycmVyXCIgY2xhc3M9XCJsaXN0LXdyYXBwZXItLWRlbW9cIj5EZW1vPC9hPjwvbGk+YCA6ICd4ZCdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC13cmFwcGVyLS1saVwiPjxhIGhyZWY9XCIke2h0bWxfdXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vIGZvbGxvdyBubyByZWZlcnJlclwiIGNsYXNzPVwibGlzdC13cmFwcGVyLS1naXRodWJcIj5HaXRodWI8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuYDtcbiAgICB9XG5cbiAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);
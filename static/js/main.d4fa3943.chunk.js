(this["webpackJsonpportfolio-ui"]=this["webpackJsonpportfolio-ui"]||[]).push([[0],[,function(e,t,n){e.exports={projectsSection:"GithubProjects_projectsSection__J1EAG",header:"GithubProjects_header__1vY42",GithubProjects:"GithubProjects_GithubProjects__FGG3v"}},,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(12),n(2)),u=n.n(s),i=n(5),l=n(6),p=(n(14),n(1)),h=n.n(p),m=function(e){var t=e.repos;return r.a.createElement("div",{className:h.a.projectsSection},r.a.createElement("h1",{className:h.a.header},"My Projects"),t.map((function(e){return r.a.createElement("a",{key:e.name,className:h.a.GithubProjects,href:e.html_url},r.a.createElement("h2",null,e.name),r.a.createElement("h3",null,e.description))})))};var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat("BryanDGuy","/repos"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Software Engineer"),r.a.createElement("h2",null,"Here's a nice little blurb about why I'm the best at my job")),r.a.createElement(m,{repos:n}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d4fa3943.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{233:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n(16),i=n(9),l=n(1),s=n.n(l),u=n(57),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"page-404"},o.a.createElement("div",{className:"page-404-container"},o.a.createElement("div",{className:"page-404-logo"},o.a.createElement("img",{src:u.logoLight,height:"50px",width:"50px",alt:"Logo"})),o.a.createElement("div",{className:"page-404-title"},o.a.createElement(s.a,{content:"page404.page_not_found_title"})),o.a.createElement("div",{className:"page-404-subtitle"},o.a.createElement(s.a,{content:"page404."+this.props.subtitle})),o.a.createElement("div",{className:"page-404-button-back"},o.a.createElement(r.b,{to:"/"},o.a.createElement(s.a,{component:"button",className:"btn large inverted flat",content:"page404.home"})))))}}]),t}();f.defaultProps={subtitle:"page_not_found_subtitle"},t.default=f=Object(c.connect)(f,{listenTo:function(){return[i.a]},getProps:function(){return{theme:i.a.getState().settings.get("themes")}}})}}]);
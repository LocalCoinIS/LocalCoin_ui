(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{5209:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(7),l=(r(1),r(2)),o=r.n(l),i=r(35),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var m=[{translate:"explorer.blocks.title",link:"/explorer/blocks",imgClassName:"blockchain",imgSrc:i.eBlockchain},{translate:"explorer.assets.title",link:"/explorer/assets",imgClassName:"assets",imgSrc:i.eAssets},{translate:"explorer.accounts.title",link:"/explorer/accounts",imgClassName:"accounts",imgSrc:i.eAccounts},{translate:"explorer.witnesses.title",link:"/explorer/witnesses",imgClassName:"witnesses",imgSrc:i.eWitnesses},{translate:"explorer.committee_members.title",link:"/explorer/committee-members",imgClassName:"members",imgSrc:i.eMembers},{translate:"markets.title",link:"/explorer/markets",imgClassName:"markets",imgSrc:i.eMarkets},{translate:"fees.title",link:"/explorer/fees",imgClassName:"fee",imgSrc:i.eFee}],p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return location.href="/explorer/blocks",r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),c(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"content"},n.a.createElement("h2",{className:"content__heading"},"Explore"),n.a.createElement("div",{className:"explore"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},m.map(function(e){var t=e.translate,r=e.link,a=e.imgClassName,l=e.imgSrc,i=t;return"string"==typeof i&&i.indexOf(".")>0&&(i=o.a.translate(i)),n.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-12",key:a},n.a.createElement(s.b,{className:"explore__item",to:r},n.a.createElement("img",{className:"explore__item__img "+a,src:l,alt:"icon"}),n.a.createElement("h4",{className:"explore__item__heading"},i)))})))))}}]),t}();t.default=p}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{109:function(e,t,a){"use strict";var n=a(84),r=a(6),s=a.n(r),o=a(25),i=a(74),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=s.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:i.a.getAssetList,onLookupAsset:i.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["a"]),l(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(a){for(var n=0;n<e.dynamic.length;n++)if(e.dynamic[n].id===a.dynamic_asset_data_id){a.dynamic=e.dynamic[n];break}if(a.bitasset_data_id){a.market_asset=!0;for(n=0;n<e.bitasset_data.length;n++)if(e.bitasset_data[n].id===a.bitasset_data_id){a.bitasset_data=e.bitasset_data[n];break}}else a.market_asset=!1;t.assets=t.assets.set(a.id,a),t.asset_symbol_to_id[a.symbol]=a.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=o.a.createStore(c,"AssetStore")},352:function(e,t,a){"use strict";var n=a(90),r=a(0),s=a.n(r),o=a(6),i=a.n(o),l=a(54),c=a.n(l),u=a(5),p=a(1),m=a.n(p),h=a(30),f=a(16),d=a(17),y=a(48),b=a(7),g=a(13),k=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),k(t,[{key:"render",value:function(){return this.props.account?s.a.createElement("span",null,this.props.account.get("name")):null}}]),t}();v.propTypes={account:b.a.ChainObject.isRequired},v.defaultProps={autosubscribe:!1};var _=Object(g.a)(v),E=a(12),S=a(33),w=a(10),x=a(2),M=a.n(x),O=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var C=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.statsInterval=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),O(t,[{key:"_onClick",value:function(e){"/market/"+e!==this.context.router.location.pathname&&(S.a.switchMarket(),this.context.router.push("/market/"+e))}},{key:"componentDidMount",value:function(){S.a.getMarketStats(this.props.base,this.props.quote),this.statsChecked=new Date,this.statsInterval=setInterval(S.a.getMarketStats.bind(this,this.props.base,this.props.quote),35e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.statsInterval)}},{key:"shouldComponentUpdate",value:function(e){return!u.a.are_equal_shallow(e,this.props)}},{key:"_onStar",value:function(e,t,a){a.preventDefault(),this.props.starred?w.a.removeStarMarket(e,t):w.a.addStarMarket(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.quote,n=t.base,r=(t.noSymbols,t.stats),o=t.starred;if(!a||!n)return null;var i=a.get("symbol")+"_"+n.get("symbol"),l=a.get("symbol")+"/"+n.get("symbol"),c=this.props.getDynamicObject(a.get("dynamic_asset_data_id")),p=this.props.getDynamicObject(n.get("dynamic_asset_data_id")),m=u.a.convertPrice(a,n),h={};this.props.leftAlign&&(h.textAlign="left");var f="button outline",y=null;this.props.compact&&(f+=" no-margin",y={marginBottom:0,fontSize:"0.75rem",padding:"4px 10px",borderRadius:"0px",letterSpacing:"0.05rem"});var b=this.props.columns.map(function(t){switch(t.name){case"star":var h=o?"gold-star":"grey-star";return s.a.createElement("td",{onClick:e._onStar.bind(e,a.get("symbol"),n.get("symbol")),key:t.index},"123",s.a.createElement(E.a,{className:h,name:"fi-star",title:"icons.fi_star.symbol"}));case"vol":var b=r?r.volumeBase:0;return s.a.createElement("td",{onClick:e._onClick.bind(e,i),className:"text-right",key:t.index},u.a.format_volume(b));case"change":var g=u.a.format_number(r&&r.change?r.change:0,2),k="0.00"===g?"":g>0?"change-up":"change-down";return s.a.createElement("td",{onClick:e._onClick.bind(e,i),className:"text-right "+k,key:t.index},g+"%");case"marketName":return s.a.createElement("td",{onClick:e._onClick.bind(e,i),key:t.index},s.a.createElement("div",{className:f,style:y},l));case"market":var v=e.props.name;try{void 0!==v.props&&(v=v.props.children[0].props.name+"/"+v.props.children[2].props.name)}catch(e){}return s.a.createElement("td",{onClick:e._onClick.bind(e,i),key:t.index},v);case"price":var S=r&&r.price?r.price.toReal():r&&r.close&&r.close.quote.amount&&r.close.base.amount?u.a.get_asset_price(r.close.quote.amount,a,r.close.base.amount,n,!0):u.a.get_asset_price(m.quote.amount,a,m.base.amount,n,!0),w=6;return-1!==["BTC","OPEN.BTC","TRADE.BTC","GOLD","SILVER"].indexOf(n.get("symbol"))&&(w=8),s.a.createElement("td",{onClick:e._onClick.bind(e,i),className:"text-right",key:t.index},u.a.format_number(S,S>1e3?0:S>10?2:w));case"quoteSupply":return s.a.createElement("td",{onClick:e._onClick.bind(e,i),key:t.index},c?s.a.createElement(d.a,{style:{fontWeight:"bold"},amount:parseInt(c.get("current_supply"),10),asset:a.get("id")}):null);case"baseSupply":return s.a.createElement("td",{onClick:e._onClick.bind(e,i),key:t.index},p?s.a.createElement(d.a,{style:{fontWeight:"bold"},amount:parseInt(p.get("current_supply"),10),asset:n.get("id")}):null);case"issuer":return s.a.createElement("td",{onClick:e._onClick.bind(e,i),key:t.index},s.a.createElement(_,{account:a.get("issuer")}));case"add":return s.a.createElement("td",{style:{textAlign:"right"},key:t.index,onClick:e.props.onCheckMarket.bind(e,i)},s.a.createElement("input",{type:"checkbox",checked:!!e.props.isChecked||e.props.isDefault,disabled:e.props.isDefault,"data-tip":e.props.isDefault?"This market is a default market and cannot be removed":null}));case"remove":return s.a.createElement("td",{key:t.index,className:"clickable",onClick:e.props.removeMarket},s.a.createElement("span",{style:{marginBottom:"6px",marginRight:"6px",zIndex:999},className:"text float-right remove"},"–"))}}).sort(function(e,t){return e.key>t.key}),g="clickable";return this.props.current&&(g+=" activeMarket"),s.a.createElement("tr",{className:g,style:h},b)}}]),t}();C.defaultProps={noSymbols:!1},C.contextTypes={router:M.a.object.isRequired};var T=Object(y.a)(C,{propNames:["quote","base"],defaultProps:{tempComponent:"tr"},withDynamic:!0}),A=a(9),B=a(32),j=a(109),q=a(22),N=a(74),I=a(8),P=a.n(I),L=a(108),R=a(3),W=a.n(R),U=a(41),D=a(4),F=a(21),z=a.n(F),V=a(37),G=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var Q=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={backingAsset:"",error:!1,valid:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),G(t,[{key:"_onMoveUp",value:function(e){var t=this.props.quotes.findIndex(function(t){return t===e});w.a.modifyPreferedBases({oldIndex:t,newIndex:t-1})}},{key:"_onMoveDown",value:function(e){var t=this.props.quotes.findIndex(function(t){return t===e});w.a.modifyPreferedBases({oldIndex:t,newIndex:t+1})}},{key:"_onRemove",value:function(e){var t=this.props.quotes.findIndex(function(t){return t===e});t>=0&&w.a.modifyPreferedBases({remove:t})}},{key:"_onAdd",value:function(e){-1===this.props.quotes.findIndex(function(t){return t===e.get("symbol")})&&w.a.modifyPreferedBases({add:e.get("symbol")})}},{key:"_onInputBackingAsset",value:function(e){this.setState({backingAsset:e.toUpperCase(),error:null})}},{key:"_onFoundBackingAsset",value:function(e){e&&(this.props.quotes.includes(e.get("symbol"))?this.setState({error:"Asset already being used",isValid:!1}):this.setState({isValid:!0}))}},{key:"render",value:function(){var e=this,t=this.state.error,a=this.props.quotes.size;return s.a.createElement(V.a,{id:"quote_selection",overlay:!0,modalHeader:"exchange.quote_selection",noLogo:!0},s.a.createElement("section",{className:"block-list no-border-bottom"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null),s.a.createElement("th",null,s.a.createElement(m.a,{content:"account.quote"})),s.a.createElement("th",{style:{textAlign:"center"}},s.a.createElement(m.a,{content:"exchange.move_down"})),s.a.createElement("th",{style:{textAlign:"center"}},s.a.createElement(m.a,{content:"exchange.move_up"})),s.a.createElement("th",{style:{textAlign:"center"}},s.a.createElement(m.a,{content:"exchange.remove"})))),s.a.createElement("tbody",null,this.props.quotes.map(function(t,n){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,n+1),s.a.createElement("td",null,t),s.a.createElement("td",{className:"text-center"},n!==a-1&&s.a.createElement(E.a,{onClick:e._onMoveDown.bind(e,t),name:"chevron-down",className:"clickable"})),s.a.createElement("td",{className:"text-center"},0!==n&&s.a.createElement(E.a,{onClick:e._onMoveUp.bind(e,t),name:"chevron-down",className:"clickable rotate180"})),s.a.createElement("td",{className:"text-center"},a>1&&s.a.createElement(E.a,{onClick:e._onRemove.bind(e,t),name:"cross-circle",className:"clickable"})))}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(L.a,{label:"exchange.custom_quote",onChange:this._onInputBackingAsset.bind(this),asset:this.state.backingAsset,assetInput:this.state.backingAsset,tabIndex:1,style:{width:"100%",paddingRight:"10px"},onFound:this._onFoundBackingAsset.bind(this),onAction:this._onAdd.bind(this),action_label:"exchange.add_quote",disableActionButton:!!t,noLabel:!0}),s.a.createElement("div",{className:"error-area"},t))))}}]),t}(),Y=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,s=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw s}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),J=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function X(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Z=new Date,$=function(e){function t(e){H(this,t);var a=K(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state=a._getInitialState(e),a}return X(t,s.a.Component),J(t,[{key:"_getInitialState",value:function(e){var t=!!e.findMarketTab||e.viewSettings.get("myMarketsBase_"+e.index);return{open:void 0===t||t,inverseSort:e.viewSettings.get("myMarketsInvert",!0),sortBy:e.viewSettings.get("myMarketsSort","volume"),inputValue:""}}},{key:"componentWillReceiveProps",value:function(e){e.findMarketTab!==this.props.findMarketTab&&this.setState(this._getInitialState(e))}},{key:"shouldComponentUpdate",value:function(e,t){return!e.markets||!this.props.markets||(!u.a.are_equal_shallow(t,this.state)||!u.a.are_equal_shallow(e.markets,this.props.markets)||e.starredMarkets!==this.props.starredMarkets||e.marketStats!==this.props.marketStats||e.userMarkets!==this.props.userMarkets)}},{key:"_inverseSort",value:function(){w.a.changeViewSetting({myMarketsInvert:!this.state.myMarketsInvert}),this.setState({inverseSort:!this.state.inverseSort})}},{key:"_changeSort",value:function(e){var t=this.getCookie("gt_get_sort"),a=new Date;a.setFullYear(a.getFullYear()+1),"vol-true"!=t&&"name-true"!=t&&"name-false"!=t||"volume"!=e?"vol-false"!=t&&null!=t||"volume"!=e||(this.setCookie("gt_get_sort","vol-true",{expires:a.toGMTString()}),this._inverseSort()):this.setCookie("gt_get_sort","vol-false",{expires:a.toGMTString()}),"name-true"!=t&&"vol-true"!=t&&"vol-false"!=t||"name"!=e?"name-false"!=t&&null!=t||"name"!=e||(this.setCookie("gt_get_sort","name-true",{expires:a.toGMTString()}),this._inverseSort()):this.setCookie("gt_get_sort","name-false",{expires:a.toGMTString()}),e!==this.state.sortBy?(w.a.changeViewSetting({myMarketsSort:e}),this.setState({sortBy:e})):this._inverseSort()}},{key:"_onToggle",value:function(e){if(!this.props.findMarketTab){var t=!this.state.open;this.setState({open:t});var a={};a["myMarketsBase_"+this.props.index]=t,w.a.changeViewSetting(a)}}},{key:"_onToggleUserMarket",value:function(e){var t=e.split("_"),a=Y(t,2),n=a[0],r=a[1],s=!this.props.userMarkets.get(e);w.a.setUserMarket(n,r,s)}},{key:"setCookie",value:function(e,t,a){var n=(a=a||{}).expires;if("number"==typeof n&&n){var r=new Date;r.setTime(r.getTime()+1e3*n),n=a.expires=r}n&&n.toUTCString&&(a.expires=n.toUTCString());var s=e+"="+(t=encodeURIComponent(t));for(var o in a){s+="; "+o;var i=a[o];!0!==i&&(s+="="+i)}document.cookie=s}},{key:"getCookie",value:function(e){var t=document.cookie,a=e+"=",n=t.indexOf("; "+a),r=null;if(-1==n){if(0!=(n=t.indexOf(a)))return null;r=document.cookie.indexOf(";",n)}else n+=2,-1==(r=document.cookie.indexOf(";",n))&&(r=t.length);return decodeURI(t.substring(n+a.length,r)).replace(/"/g,"")}},{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=t.markets,r=t.base,o=t.marketStats,i=t.starredMarkets,l=t.current,c=this.state,u=c.sortBy,p=c.inverseSort,h=c.open;if(!n||!n.length)return null;var f=a.map(function(t){switch(t.name){case"market":var a="",n=e.getCookie("gt_get_sort");return"name"!=e.state.sortBy||"name-false"!=n&&null!=n?"name"==e.state.sortBy&&"name-true"==n&&(a=s.a.createElement("span",null,"▼")):a=s.a.createElement("span",null,"▲"),s.a.createElement("th",{key:t.name,className:"clickable",onClick:e._changeSort.bind(e,"name")},s.a.createElement(m.a,{content:"exchange.market"}),a);case"vol":var r="",o=e.getCookie("gt_get_sort");return"volume"!=e.state.sortBy||"vol-false"!=o&&null!=o?"volume"==e.state.sortBy&&"vol-true"==o&&(r=s.a.createElement("span",null,"▲")):r=s.a.createElement("span",null,"▼"),s.a.createElement("th",{key:t.name,className:"clickable",onClick:e._changeSort.bind(e,"volume"),style:{textAlign:"right"}},s.a.createElement(m.a,{content:"exchange.vol_short"}),r);case"price":return s.a.createElement("th",{key:t.name,style:{textAlign:"right"}},s.a.createElement(m.a,{content:"exchange.price"}));case"quoteSupply":return s.a.createElement("th",{key:t.name},s.a.createElement(m.a,{content:"exchange.base_supply"}));case"baseSupply":return s.a.createElement("th",{key:t.name},s.a.createElement(m.a,{content:"exchange.quote_supply"}));case"change":var i="";return"change"==e.state.sortBy&&e.state.inverseSort?i=s.a.createElement("span",null,"▲"):"change"==e.state.sortBy&&(i=s.a.createElement("span",null,"▼")),s.a.createElement("th",{key:t.name,className:"clickable",onClick:e._changeSort.bind(e,"change"),style:{textAlign:"right"}},s.a.createElement(m.a,{content:"exchange.change"}),i);case"issuer":return s.a.createElement("th",{key:t.name},s.a.createElement(m.a,{content:"explorer.assets.issuer"}));case"add":return s.a.createElement("th",{key:t.name,style:{textAlign:"right"}},s.a.createElement(m.a,{content:"account.perm.confirm_add"}));default:return s.a.createElement("th",{key:t.name})}}),d=n.map(function(t){return e.props.onlyLiquid&&o.get(t.id)&&0==o.get(t.id).volumeBase?null:s.a.createElement(T,{key:t.id,name:"others"===r?s.a.createElement("span",null,s.a.createElement(q.a,{name:t.quote}),":",s.a.createElement(q.a,{name:t.base})):s.a.createElement(q.a,{dataPlace:"left",name:t.quote}),quote:t.quote,base:t.base,columns:a,leftAlign:!0,compact:!0,noSymbols:!0,stats:o.get(t.id),starred:i.has(t.id),current:l===t.id,isChecked:e.props.userMarkets.has(t.id),isDefault:e.props.defaultMarkets&&e.props.defaultMarkets.has(t.id),onCheckMarket:e._onToggleUserMarket.bind(e),location:e.props.location,history:e.props.history})}).filter(function(e){return null!==e}).sort(function(t,a){var n=t.key.split("_"),r=a.key.split("_"),s=o.get(n[0]+"_"+n[1]),i=o.get(r[0]+"_"+r[1]),l=e.getCookie("gt_get_sort");switch(u){case"name":return"name-false"==l?p=!1:"name-true"==l&&(p=!0),n[0]>r[0]?p?-1:1:n[0]<r[0]?p?1:-1:n[1]>r[1]?p?-1:1:n[1]<r[1]?p?1:-1:0;case"volume":return s&&i?"vol-false"==l||null==l?i.volumeBase-s.volumeBase:s.volumeBase-i.volumeBase:0;case"change":return s&&i?p?i.change-s.change:s.change-i.change:0}});return s.a.createElement("div",{style:{paddingRight:10}},h?s.a.createElement("table",{className:"table table-hover text-right"},s.a.createElement("thead",null,s.a.createElement("tr",null,f)),d&&d.length?s.a.createElement("tbody",null,d):null):null)}}]),t}();$.defaultProps={maxRows:20,onlyLiquid:!1};var ee=function(e){function t(e){H(this,t);var a=K(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.clearInput=function(e){a.setState({myMarketFilter:""})},a.handleSearchUpdate=function(e){a.setState({myMarketFilter:e.target.value&&e.target.value.toUpperCase()})},a.state={inverseSort:e.viewSettings.get("myMarketsInvert",!0),sortBy:e.viewSettings.get("myMarketsSort","volume"),activeTab:e.viewSettings.get("favMarketTab","my-market"),activeMarketTab:e.viewSettings.get("activeMarketTab",0),lookupQuote:null,lookupBase:null,inputValue:"",minWidth:"100%",findBaseInput:"USD",activeFindBase:"USD"},a._onInputName=a._onInputName.bind(a),a._setMinWidth=a._setMinWidth.bind(a),a.getAssetList=Object(n.a)(N.a.getAssetList.defer,150),a}return X(t,s.a.Component),J(t,[{key:"shouldComponentUpdate",value:function(e,t){return"find-market"===this.state.activeTab||"find-market"!==t.activeTab||e.searchAssets.size||this._lookupAssets("OPEN.",!0),!(i.a.is(e.searchAssets,this.props.searchAssets)&&i.a.is(e.markets,this.props.markets)&&i.a.is(e.starredMarkets,this.props.starredMarkets)&&i.a.is(e.defaultMarkets,this.props.defaultMarkets)&&i.a.is(e.marketStats,this.props.marketStats)&&u.a.are_equal_shallow(t,this.state)&&e.current===this.props.current&&e.minWidth===this.props.minWidth&&e.preferredBases===this.props.preferredBases&&e.onlyStars===this.props.onlyStars&&e.onlyLiquid===this.props.onlyLiquid&&e.assetsLoading===this.props.assetsLoading&&e.userMarkets===this.props.userMarkets)}},{key:"componentWillMount",value:function(){if(this.props.setMinWidth&&window.addEventListener("resize",this._setMinWidth,{capture:!1,passive:!0}),this.props.currrent){var e=this.props.current.split("_")[1],t=this.props.preferredBases.findIndex(function(t){return t===e});-1!==t&&t!==this.state.activeMarketTab&&this.setState({activeMarketTab:t})}}},{key:"componentDidMount",value:function(){var e=this.refs.favorites;c.a.initialize(e),this._setMinWidth(),"find-market"===this.state.activeTab&&this._lookupAssets("OPEN.",!0)}},{key:"componetWillUnmount",value:function(){this.props.setMinWidth&&window.removeEventListener("resize",this._setMinWidth)}},{key:"_setMinWidth",value:function(){this.props.setMinWidth&&this.refs.favorites&&"my-market"===this.props.activeTab&&this.state.minWidth!==this.refs.favorites.offsetWidth&&this.setState({minWidth:this.refs.favorites.offsetWidth})}},{key:"componentDidUpdate",value:function(){if(this.refs.favorites){var e=this.refs.favorites;c.a.update(e)}}},{key:"_inverseSort",value:function(){w.a.changeViewSetting({myMarketsInvert:!this.state.myMarketsInvert}),this.setState({inverseSort:!this.state.inverseSort})}},{key:"_changeSort",value:function(e){var t=this.getCookie("gt_get_sort"),a=new Date;a.setFullYear(a.getFullYear()+1),"vol-true"==t&&"volume"==e?this.setCookie("gt_get_sort","vol-false",{expires:a.toGMTString()}):"vol-false"!=t&&null!=t||"volume"!=e||(this.setCookie("gt_get_sort","vol-true",{expires:a.toGMTString()}),this._inverseSort()),e!==this.state.sortBy?(w.a.changeViewSetting({myMarketsSort:e}),this.setState({sortBy:e})):this._inverseSort()}},{key:"_goMarkets",value:function(){this.context.router.push("/markets")}},{key:"_changeTab",value:function(e){w.a.changeViewSetting({favMarketTab:e}),this.setState({activeTab:e}),this._setMinWidth()}},{key:"_onInputName",value:function(e){var t=e.target.value.trim().toUpperCase(),a=!D.d.is_valid_symbol_error(t,!0);if(this.setState({inputValue:t}),t&&t.length>=3&&!a)return this.setState({assetNameError:!0});this.setState({assetNameError:!1}),this._lookupAssets(t)}},{key:"_lookupAssets",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e||""===e){var a=new Date,n=e.toUpperCase().split(":"),r=n[0],s=2===n.length?n[1]:null;if(this.setState({lookupQuote:r,lookupBase:s}),w.a.changeViewSetting.defer({marketLookupInput:e.toUpperCase()}),this.state.lookupQuote!==r||t){if(r.length<1||a-Z<=250)return!1;this.getAssetList(r,50)}else if(s&&this.state.lookupBase!==s){if(s.length<1||a-Z<=250)return!1;this.getAssetList(s,50)}}}},{key:"toggleActiveMarketTab",value:function(e){w.a.changeViewSetting({activeMarketTab:e}),this.setState({activeMarketTab:e})}},{key:"_onInputBaseAsset",value:function(e){this.setState({findBaseInput:e.toUpperCase(),error:null})}},{key:"_onFoundBaseAsset",value:function(e){e&&this.setState({activeFindBase:e.get("symbol")})}},{key:"render",value:function(){var e=this,t=this.props,n=t.starredMarkets,r=t.defaultMarkets,o=t.marketStats,l=t.columns,c=t.searchAssets,u=t.assetsLoading,p=t.preferredBases,f=(t.core,t.current),d=t.viewSettings,y=t.onlyStars,b=t.userMarkets,g=this.state,k=g.activeMarketTab,v=g.activeTab,_=g.lookupQuote,E=g.lookupBase,x=s.a.createElement("tr",null),M="my-market"===v,O=p.map(function(e){return e});M||(p=(p=p.clear()).push(this.state.activeFindBase));var C={},T=[];_||(_="OPEN."),M||(k=0),c.filter(function(e){return E&&E.length?0===e.symbol.indexOf(E):-1!==e.symbol.indexOf(_)}).forEach(function(e){E&&E.length?0===e.symbol.indexOf(E)&&T.push(e.symbol):p.includes(e.symbol)&&e.symbol.length>=_.length&&e.symbol.length<_.length+3&&T.push(e.symbol)}),T=(T=T.concat(p.filter(function(e){return!E||!E.length||0===e.indexOf(E)}).toArray())).filter(function(e){return!(E&&E.length>1)||0===e.indexOf(E)});var A=[];c.size&&c.filter(function(e){try{if(e.options.description){var t=JSON.parse(e.options.description);if("visible"in t&&!t.visible)return!1}}catch(e){}return-1!==e.symbol.indexOf(_)&&e.symbol.length>=_.length}).forEach(function(e){T.forEach(function(t){var a=e.symbol+"_"+t;t!==e.symbol&&A.push([a,{quote:e.symbol,base:t}])})}),A=A.filter(function(e){return!E||e[1].quote===_}),A=i.a.Map(A);var B=M?r:A;M&&b.size&&b.forEach(function(e,t){B=B.set(t,e)}),B.size>0&&(x=B.filter(function(t){if(M){var a=t.quote+"_"+t.base;return e.state.myMarketFilter?-1!==a.indexOf(e.state.myMarketFilter):!(y&&!n.has(a))}return!(_.length<1)&&-1!==t.quote.indexOf(_)}).map(function(e){var t=e.quote+"_"+e.base;return p.includes(e.base)?(C[e.base]||(C[e.base]=[]),C[e.base].push({id:t,quote:e.quote,base:e.base}),null):{id:t,quote:e.quote,base:e.base}}).filter(function(e){return null!==e}).take(M?100:20).toArray());var j=x&&x.length,q="mymarkets-header clickable",N=P()(q,{inactive:!M}),I=P()(q,{inactive:M}),R={minWidth:this.state.minWidth,minHeight:"6rem"},D=a(3);return s.a.createElement("div",{className:this.props.className+" explorer_markets",style:this.props.style},s.a.createElement("div",{style:this.props.headerStyle,className:"grid-block shrink left-orderbook-header bottom-header"},s.a.createElement("div",{ref:"myMarkets",className:N,onClick:this._changeTab.bind(this,"my-market"),"data-intro":D.translate("walkthrough.my_markets_tab")},s.a.createElement(m.a,{content:"exchange.market_name"})),s.a.createElement("div",{className:I,onClick:this._changeTab.bind(this,"find-market"),"data-intro":D.translate("walkthrough.find_markets_tab")},s.a.createElement(m.a,{content:"exchange.more"}))),this.props.controls?s.a.createElement("div",{className:"small-12 medium-6",style:{padding:"1rem 0"}},this.props.controls?s.a.createElement("div",{style:{paddingBottom:"0.5rem"}},this.props.controls):null):null,M?s.a.createElement("div",{className:"grid-block vertical shrink",style:{width:"100%",textAlign:"left",padding:"0.5rem 0.5rem"}},s.a.createElement("div",null,s.a.createElement("label",{style:{margin:"0px 0 0"}},s.a.createElement("input",{style:{position:"relative",top:3},className:"no-margin",type:"checkbox",checked:this.props.onlyLiquid,onChange:function(){w.a.changeViewSetting({onlyLiquid:!e.props.onlyLiquid})}}),s.a.createElement("span",{style:{paddingLeft:"0.4rem"}},s.a.createElement(m.a,{content:"exchange.show_only_liquid"}))),s.a.createElement("label",{style:{margin:"0px 0 0"}},s.a.createElement("input",{style:{position:"relative",top:3},className:"no-margin",type:"checkbox",checked:this.props.onlyStars,onChange:function(){S.a.toggleStars()}}),s.a.createElement("span",{style:{paddingLeft:"0.4rem"}},s.a.createElement(h.a,{string:"exchange.show_only_star_formatter",keys:[{type:"icon",value:"fi-star",className:"gold-star",arg:"star_icon"}]})))),s.a.createElement("div",{className:"search-wrapper"},s.a.createElement("form",null,s.a.createElement("input",{autoComplete:"off",style:{fontSize:"0.9rem",height:"inherit",position:"relative",top:5,padding:2},type:"text",className:"no-margin market-filter-input",placeholder:W.a.translate("exchange.filter"),maxLength:"16",name:"focus",required:"required",value:this.state.myMarketFilter,onChange:this.handleSearchUpdate}),s.a.createElement("button",{className:"clear-text",type:"reset",onClick:this.clearInput})))):s.a.createElement("div",{style:{width:"100%",textAlign:"left",padding:"0.5rem 0.5rem"}},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",{style:{width:"100%"}},s.a.createElement("td",null,s.a.createElement(L.a,{onAssetSelect:this._onFoundBaseAsset.bind(this),assets:O,onChange:this._onInputBaseAsset.bind(this),asset:this.state.findBaseInput,assetInput:this.state.findBaseInput,tabIndex:1,style:{width:"100%",paddingBottom:"1.5rem"},onFound:this._onFoundBaseAsset.bind(this),label:"exchange.quote",noLabel:!0,inputStyle:{fontSize:"0.9rem"}}))),s.a.createElement("tr",{style:{width:"100%"}},s.a.createElement("td",null,s.a.createElement("label",null,s.a.createElement(m.a,{content:"account.user_issued_assets.name"}),":"),s.a.createElement("input",{style:{fontSize:"0.9rem",position:"relative",top:1},type:"text",value:this.state.inputValue,onChange:this._onInputName,placeholder:W.a.translate("exchange.search"),maxLength:"16",tabIndex:2,ref:"findSearchInput"}),this.state.assetNameError?s.a.createElement("div",{className:"error-area",style:{paddingTop:10}},s.a.createElement("span",{style:{wordBreak:"break-all"}},s.a.createElement(m.a,{content:"explorer.asset.invalid",name:this.state.inputValue}))):null))))),s.a.createElement("ul",{className:"mymarkets-tabs"},p.map(function(t,a){return t?s.a.createElement("li",{key:t,onClick:e.toggleActiveMarketTab.bind(e,a),className:P()("mymarkets-tab",{active:k===a})},s.a.createElement("span",null,t)):null}),M&&j?s.a.createElement("li",{key:"others",style:{textTransform:"uppercase"},onClick:this.toggleActiveMarketTab.bind(this,p.size+1),className:P()("mymarkets-tab",{active:k===p.size+1})},s.a.createElement(m.a,{content:"exchange.others"})):null,M&&s.a.createElement("li",{key:"quote_edit",style:{textTransform:"uppercase"},onClick:function(){z.a.publish("quote_selection","open")},className:"mymarkets-tab"}," + ")),s.a.createElement("div",{style:R,className:"table-container grid-block vertical mymarkets-list explorer-markets",ref:"favorites"},u?s.a.createElement("div",{style:{position:"absolute",paddingTop:"3rem",textAlign:"center",width:"100%"}},s.a.createElement(U.a,{type:"three-bounce"})):null,p.filter(function(e){return e===p.get(k)}).map(function(t,a){return s.a.createElement($,{userMarkets:e.props.userMarkets,defaultMarkets:e.props.defaultMarkets,index:a,allowChange:!1,key:t,current:f,starredMarkets:n,marketStats:o,viewSettings:d,columns:M?l:e.props.findColumns||l,markets:C[t],base:t,maxRows:M?20:10,findMarketTab:!M,location:e.props.location,history:e.props.history,onlyLiquid:e.props.onlyLiquid&&M})}),k===p.size+1&&M&&j?s.a.createElement($,{userMarkets:this.props.userMarkets,index:p.size,current:f,starredMarkets:n,marketStats:o,viewSettings:d,columns:l,markets:x,base:"others",maxRows:M?20:10,findMarketTab:!M,location:this.props.location,history:this.props.history}):null),s.a.createElement(Q,{quotes:this.props.preferredBases}))}}]),t}();ee.propTypes={core:b.a.ChainAsset.isRequired},ee.defaultProps={activeTab:"my-market",core:"1.3.0",setMinWidth:!1},ee.contextTypes={router:M.a.object.isRequired},ee=Object(g.a)(ee);var te=function(e){function t(){return H(this,t),K(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return X(t,s.a.Component),J(t,[{key:"render",value:function(){return s.a.createElement(ee,this.props)}}]),t}();t.a=Object(f.connect)(te,{listenTo:function(){return[A.a,B.a,j.a]},getProps:function(){return{starredMarkets:A.a.getState().starredMarkets,onlyLiquid:A.a.getState().viewSettings.get("onlyLiquid",!0),defaultMarkets:A.a.getState().defaultMarkets,viewSettings:A.a.getState().viewSettings,preferredBases:A.a.getState().preferredBases,marketStats:B.a.getState().allMarketStats,userMarkets:A.a.getState().userMarkets,searchAssets:j.a.getState().assets,onlyStars:B.a.getState().onlyStars,assetsLoading:j.a.getState().assetsLoading}}})},7833:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(123),o=a(32),i=a(109),l=a(9),c=a(49),u=a.n(c),p=a(352),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),m(t,[{key:"render",value:function(){return r.a.createElement("div",{ref:"wrapper",className:"grid-block page-layout no-overflow"},r.a.createElement(p.a,{style:{width:"100%",padding:20},className:"no-overflow",headerStyle:{paddingTop:0,borderTop:"none"},columns:[{name:"add",index:1},{name:"star",index:2},{name:"market",index:3},{name:"quoteSupply",index:4},{name:"vol",index:5},{name:"price",index:6},{name:"change",index:7}]}))}}]),t}(),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),f(t,[{key:"render",value:function(){return r.a.createElement(u.a,{stores:[l.a,i.a,o.a],inject:{starredMarkets:function(){return l.a.getState().starredMarkets},viewSettings:function(){return l.a.getState().viewSettings},lookupResults:function(){return i.a.getState().lookupResults},marketBase:function(){return o.a.getState().marketBase}}},r.a.createElement(h,null))}}]),t}(),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),y(t,[{key:"render",value:function(){var e=r.a.createElement(d,null);return r.a.createElement("div",{className:"content"},r.a.createElement(s.a,{defaultActiveTab:"markets.title",defaultContent:e}))}}]),t}();t.default=b}}]);
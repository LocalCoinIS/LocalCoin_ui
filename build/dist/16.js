(window.webpackJsonp=window.webpackJsonp||[]).push([[16,45],{221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a(18),l=a(9),i=a(1),c=a.n(i),u=a(41),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),m(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-404"},r.a.createElement("div",{className:"page-404-container"},r.a.createElement("div",{className:"page-404-logo"},r.a.createElement("img",{src:u.logoLight,height:"50px",width:"50px",alt:"Logo"})),r.a.createElement("div",{className:"page-404-title"},r.a.createElement(c.a,{content:"page404.page_not_found_title"})),r.a.createElement("div",{className:"page-404-subtitle"},r.a.createElement(c.a,{content:"page404."+this.props.subtitle})),r.a.createElement("div",{className:"page-404-button-back"},r.a.createElement(s.b,{to:"/"},r.a.createElement(c.a,{component:"button",className:"btn large inverted flat",content:"page404.home"})))))}}]),t}();p.defaultProps={subtitle:"page_not_found_subtitle"},t.default=p=Object(o.connect)(p,{listenTo:function(){return[l.a]},getProps:function(){return{theme:l.a.getState().settings.get("themes")}}})},324:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(3),o=a.n(s),l=a(13),i=a(8),c=a(14),u=a(63),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),m(t,[{key:"getFee",value:function(){return Object(u.c)(this.props.opType,this.props.options,this.props.globalObject)}},{key:"render",value:function(){var e=this.props,t=e.opType,a=e.options,n=e.globalObject;if(!t||!a||!n)return null;var s=Object(u.c)(t,a,n);return r.a.createElement(l.a,{amount:s,asset:"1.3.0"})}}]),t}();p.propTypes={globalObject:i.a.ChainObject.isRequired,opType:o.a.string,options:o.a.array},p.defaultProps={globalObject:"2.0.0",options:[]},t.a=Object(c.a)(p)},327:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=(a(12),a(1)),o=a.n(s),l=a(2),i=a.n(l),c=a(52),u=a(68),m=a(13),p=a(324),_=a(72),d=a(38),f=a(4);var b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(n){return e.setState(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},t,a(n)))}},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return g.call(a),a.state=a.initialState(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),t}(),g=function(){var e,t=this;this.onAccountNameChanged=b(this,"funderAccountName"),this.onAccountChanged=b(this,"newFunderAccount"),this.onPoolInput=b(this,"fundPoolAmount",(e="amount",function(t){return t[e]})),this.onFundPool=function(){return _.a.fundPool(t.state.newFunderAccount?t.state.newFunderAccount.get("id"):null,t.props.core,t.props.asset,t.state.fundPoolAmount.replace(/,/g,""))},this.reset=function(){t.setState(t.initialState())},this.initialState=function(){return{funderAccountName:t.props.funderAccountName,fundPoolAmount:0}},this.render=function(){var e=t.props,a=t.state,n=t.onPoolInput,s=t.onFundPool,l=t.reset,_=t.onAccountNameChanged,d=t.onAccountChanged,b=e.asset,h=e.core,g=e.hideBalance,E=e.getDynamicObject,y=a.funderAccountName,v=a.fundPoolAmount,k=a.newFunderAccount,w=null;g||(w=E(b.get("dynamic_asset_data_id")));var x=h.get("id")||"1.3.0",A=0;if(k){var O=k.getIn(["balances",x]);if(O){var P=f.b.getObject(O);P&&(A=P.get("balance"))}}var j=r.a.createElement("span",null,r.a.createElement(o.a,{component:"span",content:"transfer.available"}),": ",r.a.createElement(m.a,{amount:A,asset:x}));return r.a.createElement("div",null,r.a.createElement(o.a,{component:"p",content:"explorer.asset.fee_pool.fund_text",asset:b.get("symbol"),core:h.get("symbol")}),g||r.a.createElement("div",{style:{paddingBottom:"1.5rem"}},r.a.createElement(o.a,{content:"explorer.asset.fee_pool.pool_balance"}),r.a.createElement("span",null,": "),w?r.a.createElement(m.a,{amount:w.get("fee_pool"),asset:x}):null),r.a.createElement(c.a,{label:"transaction.funding_account",accountName:y,onChange:_,onAccountChanged:d,account:y,error:null,tabIndex:1}),r.a.createElement(u.a,{label:"transfer.amount",display_balance:j,amount:v,onChange:n,asset:x,assets:[x],placeholder:"0.0",tabIndex:2,style:{width:"100%",paddingTop:16}}),r.a.createElement("div",{style:{paddingTop:"1rem"}},r.a.createElement("button",{className:"btn large inverted",disabled:v<=0,onClick:s},i.a.translate("transaction.trxTypes.asset_fund_fee_pool")),r.a.createElement("button",{className:"btn large outline",onClick:l},i.a.translate("account.perm.reset")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(o.a,{content:"account.user_issued_assets.approx_fee"}),": ",r.a.createElement(p.a,{opType:"asset_fund_fee_pool"})),r.a.createElement("hr",null)))}};h=Object(d.a)(h,{propNames:["asset","core"],defaultProps:{core:"1.3.0"},withDynamic:!0}),t.a=h},5246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a(1),l=a.n(o),i=a(50),c=a(38),u=a(13),m=a(54),p=a(21),_=a(116),d=a(67),f=a(43),b=a(5),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={time:e.time},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),h(t,[{key:"getHours",value:function(e){return e/3600}},{key:"render",value:function(){return r.a.createElement("div",null,this.getHours(this.state.time),"h")}}]),t}(),E=a(4),y=a(19),v=a(73),k=a(66),w=a(20),x=a(221),A=a(327),O=a(11),P=a(18),j=a(2),S=a.n(j),N=a(97),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},T=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var F=function(e){function t(){return I(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,r.a.Component),T(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?r.a.createElement("label",{className:"btn orange"},r.a.createElement(l.a,{content:"account.user_issued_assets."+a})):r.a.createElement("span",null)}}]),t}(),L=function(e){function t(){return I(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,r.a.Component),T(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?r.a.createElement("label",{className:"btn orange"},r.a.createElement(l.a,{content:"account.user_issued_assets."+a})):r.a.createElement("span",null)}}]),t}(),J=function(e){function t(e){I(this,t);var a=D(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={callOrders:[],marginTableSort:"price",sortDirection:!0},a}return R(t,r.a.Component),T(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.asset.has("bitasset")){var t,a=(q(t={},this.props.asset.get("id"),this.props.asset.toJS()),q(t,this.props.backingAsset.get("id"),this.props.backingAsset.toJS()),t),n=this.props.asset.getIn(["bitasset","is_prediction_market"],!1),r=this.props.asset.getIn(["bitasset","current_feed","maximum_short_squeeze_ratio"]),s=this.props.asset.getIn(["bitasset","current_feed","settlement_price"]);n&&s.getIn(["base","asset_id"])===s.getIn(["quote","asset_id"])&&(a[this.props.backingAsset.get("id")]||(a[this.props.backingAsset.get("id")]={precision:this.props.asset.get("precision")}),s=(s=(s=(s=s.setIn(["base","amount"],1)).setIn(["base","asset_id"],this.props.backingAsset.get("id"))).setIn(["quote","amount"],1)).setIn(["quote","asset_id"],this.props.asset.get("id")),r=1e3);try{var o=new w.c({priceObject:s,market_base:this.props.asset.get("id"),sqr:r,assets:a});y.Apis.instance().db_api().exec("get_call_orders",[this.props.asset.get("id"),300]).then(function(t){var r=t.map(function(t){return new w.b(t,a,e.props.asset.get("id"),o,n)});e.setState({callOrders:r})})}catch(e){}}}},{key:"_toggleSortOrder",value:function(e){e!==this.state.marginTableSort?this.setState({marginTableSort:e}):this.setState({sortDirection:!this.state.sortDirection})}},{key:"_assetType",value:function(e){return"bitasset"in e?e.bitasset.is_prediction_market?"Prediction":"Smart":"Simple"}},{key:"renderFlagIndicators",value:function(e,t){return r.a.createElement("div",null,t.map(function(t){return r.a.createElement(F,{key:"flag_"+t,name:t,isSet:e[t]})}))}},{key:"renderPermissionIndicators",value:function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2"},r.a.createElement("div",{className:"table-blocks__item__table__labels"},t.map(function(t){return r.a.createElement(L,{key:"perm_"+t,name:t,isSet:e[t]})}))))}},{key:"formattedPrice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.base,s=e.quote;return r.a.createElement(m.a,{base_amount:n.amount,base_asset:n.asset_id,quote_amount:s.amount,quote_asset:s.asset_id,hide_value:a,hide_symbols:t})}},{key:"renderAuthorityList",value:function(e){return e.map(function(e){return r.a.createElement("span",null," ",r.a.createElement(i.a,{account:e}))})}},{key:"renderMarketList",value:function(e,t){var a=e.symbol;return t.map(function(e){if(e==a)return null;var t=e+"_"+a,n=e+"/"+a;return r.a.createElement("span",null,r.a.createElement(s.b,{to:"/market/"+t},n)," "," ")}.bind(this))}},{key:"renderAboutBox",value:function(e,t){var a=E.b.getObject(e.issuer,!1,!1),n=a?a.get("name"):"",o=f.a.parseDescription(e.options.description),i=o.main,c=o.short_name?o.short_name:null,u=(i=i&&i.length>0?i+" ":i).match(/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g),m=E.b.getAsset("1.3.0"),p=o.market?o.market:m?m.get("symbol"):"LLC";"bitasset"in e&&e.bitasset.is_prediction_market&&(p=(p=E.b.getAsset(e.bitasset.options.short_backing_asset))?p.get("symbol"):m.get("symbol")),e.symbol===m.get("symbol")&&(p="USD"),u&&u.length&&u.forEach(function(e){var t='<a target="_blank" rel="noopener noreferrer" href="'+e+'">'+e+"</a>";i=i.replace(e,t)});var _=b.a.replaceName(t),h=_.name,g=_.prefix;return r.a.createElement("div",{style:{overflow:"visible"}},r.a.createElement(d.a,{path:"assets/"+e.symbol,alt_path:"assets/Asset",section:"summary",symbol:(g||"")+h,description:i,issuer:n,hide_issuer:"true"}),c?r.a.createElement("p",null,c):null,r.a.createElement("button",{className:"btn large inverted marketw3c-btn"},r.a.createElement(s.b,{to:"/market/"+e.symbol+"_"+p},r.a.createElement(l.a,{content:"exchange.market"})," ",r.a.createElement("span",null,e.symbol," / ",p))))}},{key:"renderSummary",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options,n=f.a.getFlagBooleans(e.options.flags,this.props.asset.has("bitasset_data_id")),s=Object.keys(n),o=t?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.summary.current_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:t.current_supply,asset:e.id})," ")):null,c=t?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.summary.stealth_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:t.confidential_supply,asset:e.id})," ")):null,m=n.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.summary.market_fee"})," "),r.a.createElement("td",null," ",a.market_fee_percent/100," % ")):null,_=n.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.summary.max_market_fee"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:+a.max_market_fee,asset:e.id})," ")):null;return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},r.a.createElement(p.a,{name:e.symbol})),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.summary.asset_type"})," "),r.a.createElement("td",null," ",this._assetType(e)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.summary.issuer"})," "),r.a.createElement("td",null," ",r.a.createElement(i.a,{account:e.issuer})," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.assets.precision"})," "),r.a.createElement("td",null," ",e.precision," ")),o,c,m,_)),this.renderFlagIndicators(n,s))}},{key:"renderPriceFeed",value:function(e,t){var a=r.a.createElement(l.a,{content:"explorer.asset.price_feed.title"}),n=e.bitasset;if(!("current_feed"in n))return r.a.createElement("div",{header:a});var s=n.current_feed,o=n.options.force_settlement_delay_sec,i=n.options.force_settlement_offset_percent,c=this.getGlobalSettlementPrice();return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},a),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed.settlement_price"})," "),r.a.createElement("td",null," ",this.formattedPrice(s.settlement_price)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed.maintenance_collateral_ratio"})," "),r.a.createElement("td",null," ",s.maintenance_collateral_ratio/10,"%"," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed.maximum_short_squeeze_ratio"})," "),r.a.createElement("td",null," ",s.maximum_short_squeeze_ratio/10,"%"," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed.global_settlement_price"})," "),r.a.createElement("td",null," ",c||"-"," ")))),r.a.createElement("table",{className:"table-blocks__item__table",style:{marginTop:"2rem"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed.settlement_delay"})," "),r.a.createElement("td",null," ",r.a.createElement(g,{time:o})," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed.force_settlement_offset"})," "),r.a.createElement("td",null," ",i/100,"% ")))))}},{key:"renderFeePool",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options;return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},S.a.translate("explorer.asset.fee_pool.title")),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.fee_pool.core_exchange_rate"})," "),r.a.createElement("td",null," ",this.formattedPrice(a.core_exchange_rate)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.fee_pool.pool_balance"})," "),r.a.createElement("td",null," ",t?r.a.createElement(u.a,{asset:"1.3.0",amount:t.fee_pool}):null," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"})," "),r.a.createElement("td",null," ",t?r.a.createElement(u.a,{asset:e.id,amount:t.accumulated_fees}):null," ")))),r.a.createElement(A.a,{asset:e.symbol,funderAccountName:this.props.currentAccount,hideBalance:!0}))}},{key:"renderPermissions",value:function(e){var t=e.options,a=f.a.getFlagBooleans(e.options.issuer_permissions,this.props.asset.has("bitasset_data_id")),n=Object.keys(a),s=a.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.permissions.max_market_fee"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:+t.max_market_fee,asset:e.id})," ")):null,o=r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(l.a,{content:"explorer.asset.permissions.max_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(u.a,{amount:+t.max_supply,asset:e.id})," "));a.white_list&&r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement(l.a,{content:"explorer.asset.permissions.blacklist_authorities"}),":  ",this.renderAuthorityList(t.blacklist_authorities),r.a.createElement("br",null),r.a.createElement(l.a,{content:"explorer.asset.permissions.blacklist_markets"}),":  ",this.renderMarketList(e,t.blacklist_markets),r.a.createElement("br",null),r.a.createElement(l.a,{content:"explorer.asset.permissions.whitelist_authorities"}),":  ",this.renderAuthorityList(t.whitelist_authorities),r.a.createElement("br",null),r.a.createElement(l.a,{content:"explorer.asset.permissions.whitelist_markets"}),":  ",this.renderMarketList(e,t.whitelist_markets));return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},S.a.translate("explorer.asset.permissions.title")),r.a.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},r.a.createElement("tbody",null,s,o)),this.renderPermissionIndicators(a,n))}},{key:"getMarginPositions",value:function(){var e=this.state.sortDirection,t={name:function(t,a){var n=E.b.getAccount(t.borrower,!1);n&&(n=n.get("name"));var r=E.b.getAccount(a.borrower,!1);return r&&(r=r.get("name")),n>r?e?1:-1:n<r?e?-1:1:0},price:function(t,a){return(e?1:-1)*(t.call_price.toReal()-a.call_price.toReal())},collateral:function(t,a){return(e?1:-1)*(a.getCollateral().getAmount()-t.getCollateral().getAmount())},debt:function(t,a){return(e?1:-1)*(a.amountToReceive().getAmount()-t.amountToReceive().getAmount())},ratio:function(t,a){return(e?1:-1)*(t.getRatio()-a.getRatio())}};return this.state.callOrders.sort(t[this.state.marginTableSort])}},{key:"getGlobalSettlementPriceFromSorted",value:function(e){if(console.log("global settlement sorted called"),!e||e.length<=0)return console.log("length array 0 passed in"),null;console.log("sortedCallOrders exists according to sorted get globa");var t=e[0],a=t.amountToReceive().getAmount(),n=t.getCollateral().getAmount();return r.a.createElement(m.a,{base_amount:n,base_asset:t.call_price.base.asset_id,quote_amount:a,quote_asset:t.call_price.quote.asset_id})}},{key:"getGlobalSettlementPrice",value:function(){if(!this.state.callOrders)return null;this.state.callOrders;for(var e=null,t=null,a=this.state.callOrders.length,n=0;n<a;n++){var s=this.state.callOrders[n];null==e?(e=s,t=s.getRatio()):s.getRatio()<t&&(t=s.getRatio(),e=s)}if(null==e)return console.log("couldn't find the least col short"),null;var o=e.amountToReceive().getAmount(),l=e.getCollateral().getAmount();return r.a.createElement(m.a,{base_amount:l,base_asset:e.call_price.base.asset_id,quote_amount:o,quote_asset:e.call_price.quote.asset_id})}},{key:"renderPriceFeedData",value:function(e,t){var a=e.bitasset;if(!("feeds"in a)||0==a.feeds.length||a.is_prediction_market)return null;var n=(new Date).getTime(),s=new Date(n-1e3*e.bitasset.options.feed_lifetime_sec),o=a.feeds;if(!(o=o.filter(function(e){return new Date(e[1][0])>s}).sort(function(e,t){return new Date(t[1][0])-new Date(e[1][0])})).length)return null;for(var c=[],p=o[0][1][1].settlement_price,d=o[0][1][1].core_exchange_rate,f=r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}}," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed_data.publisher"})," "),r.a.createElement("th",null,r.a.createElement(l.a,{content:"explorer.asset.price_feed_data.settlement_price"}),r.a.createElement("br",null),"(",this.formattedPrice(p,!1,!0),")"),r.a.createElement("th",null,r.a.createElement(l.a,{content:"explorer.asset.price_feed_data.core_exchange_rate"}),r.a.createElement("br",null),"(",this.formattedPrice(d,!1,!0),")"),r.a.createElement("th",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed_data.maintenance_collateral_ratio"})," "),r.a.createElement("th",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed_data.maximum_short_squeeze_ratio"})," "),r.a.createElement("th",null," ",r.a.createElement(l.a,{content:"explorer.asset.price_feed_data.published"})," "))),b=0;b<o.length;b++){var h=o[b],g=h[0],E=new Date(h[1][0]+"Z"),y=h[1][1].settlement_price,w=h[1][1].core_exchange_rate,x=h[1][1].maintenance_collateral_ratio/10+"%",A=h[1][1].maximum_short_squeeze_ratio/10+"%";c.push(r.a.createElement("tr",{key:g},r.a.createElement("td",null," ",r.a.createElement(i.a,{account:g})," "),r.a.createElement("td",{style:{textAlign:"right"}},this.formattedPrice(y,!0)),r.a.createElement("td",{style:{textAlign:"right"}}," ",this.formattedPrice(w,!0)," "),r.a.createElement("td",{style:{textAlign:"right"}}," ",x),r.a.createElement("td",{style:{textAlign:"right"}}," ",A),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(_.a,{time:E}))))}var O=r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"name"),style:{textAlign:"left"}},r.a.createElement(l.a,{content:"transaction.borrower"})),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"collateral")},r.a.createElement(l.a,{content:"transaction.collateral"}),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(u.a,{amount:this.state.callOrders[0].getCollateral().getAmount(),asset:this.state.callOrders[0].getCollateral().asset_id,hide_amount:!0})," ",")"):null),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"debt")},r.a.createElement(l.a,{content:"transaction.borrow_amount"}),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(u.a,{amount:this.state.callOrders[0].amountToReceive().getAmount(),asset:this.state.callOrders[0].amountToReceive().asset_id,hide_amount:!0})," ",")"):null),r.a.createElement("th",{style:{paddingRight:10},className:"clickable"},r.a.createElement("span",{onClick:this._toggleSortOrder.bind(this,"price")},r.a.createElement(l.a,{content:"exchange.call"})),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(m.a,{base_amount:this.state.callOrders[0].call_price.base.amount,base_asset:this.state.callOrders[0].call_price.base.asset_id,quote_amount:this.state.callOrders[0].call_price.quote.amount,quote_asset:this.state.callOrders[0].call_price.quote.asset_id,hide_value:!0,noPopOver:!0}),")"):null),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"ratio")},r.a.createElement(l.a,{content:"borrow.coll_ratio"})))),P=t.map(function(e){return r.a.createElement("tr",{className:"margin-row",key:e.id},r.a.createElement("td",null,r.a.createElement(i.a,{account:e.borrower})),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(u.a,{amount:e.getCollateral().getAmount(),asset:e.getCollateral().asset_id,hide_asset:!0})),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(u.a,{amount:e.amountToReceive().getAmount(),asset:e.amountToReceive().asset_id,hide_asset:!0})),r.a.createElement("td",{style:{textAlign:"right",paddingRight:10}},r.a.createElement(m.a,{base_amount:e.call_price.base.amount,base_asset:e.call_price.base.asset_id,quote_amount:e.call_price.quote.amount,quote_asset:e.call_price.quote.asset_id,hide_symbols:!0})),r.a.createElement("td",{className:e.getStatus(),style:{textAlign:"right"}},e.getRatio().toFixed(3)))});return r.a.createElement("div",{className:"grid-block"},r.a.createElement("div",{className:"grid-content no-padding"},r.a.createElement("div",{className:""},r.a.createElement(k.a,{defaultActiveTab:0,segmented:!1,setting:"bitassetDataTabs"},r.a.createElement(v.a,{title:"explorer.asset.price_feed_data.title"},r.a.createElement("div",{className:"responsive-table"},r.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},f,r.a.createElement("tbody",null,c)))),r.a.createElement(v.a,{title:"explorer.asset.margin_positions.title"},r.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},O,r.a.createElement("tbody",null,P)))))))}},{key:"render",value:function(){var e=this.props.asset.toJS(),t=this.getMarginPositions(),a="bitasset"in e?this.renderPriceFeed(e,t):null;"bitasset"in e&&this.renderPriceFeedData(e,t);return r.a.createElement("div",{className:"content",style:{margin:20}},r.a.createElement("h2",{className:"content__heading"},r.a.createElement(N.a,{showIcon:!0,asset:e.id})),this.renderAboutBox(e,this.props.asset),r.a.createElement("div",{className:"table-blocks"},this.renderSummary(e),a||this.renderPermissions(e),this.renderFeePool(e),a?this.renderPermissions(e):null))}}]),t}();J=Object(P.connect)(J,{listenTo:function(){return[O.a]},getProps:function(){y.Apis.instance().chain_id;return{currentAccount:O.a.getState().currentAccount||O.a.getState().passwordAccount}}}),J=Object(c.a)(J,{propNames:["backingAsset"]});var B=function(e){function t(){return I(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,r.a.Component),T(t,[{key:"render",value:function(){if(null===this.props.asset)return r.a.createElement(x.default,{subtitle:"asset_not_found_subtitle"});var e=this.props.asset.has("bitasset")?this.props.asset.getIn(["bitasset","options","short_backing_asset"]):"1.3.0";return r.a.createElement(J,C({},this.props,{backingAsset:e}))}}]),t}();B=Object(c.a)(B,{withDynamic:!0});var M=function(e){function t(){return I(this,t),D(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,r.a.Component),T(t,[{key:"render",value:function(){var e=this.props.params.symbol.toUpperCase();return r.a.createElement(B,C({},this.props,{asset:e}))}}]),t}();t.default=M},72:function(e,t,a){"use strict";var n=a(24),r=a(19),s=a(5),o=a(76),l=a(100),i=a(15),c=a(4),u=a(81),m=a.n(u),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var _={},d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return p(e,[{key:"fundPool",value:function(e,t,a,n){var r=o.a.new_transaction(),l=s.a.get_asset_precision(t.get("precision"));return r.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:a.get("id"),amount:n*l}),function(e){return i.a.process_transaction(r,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"updateFeedProducers",value:function(e,t,a){var n=o.a.new_transaction();return n.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:t.get("id"),new_feed_producers:a}),function(e){return i.a.process_transaction(n,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,a){var n=o.a.new_transaction(),r=s.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:a*r}}),function(e){return i.a.process_transaction(n,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,a,n,r,l,u,p,_){console.log("create asset:",t,"flags:",a,"isBitAsset:",l,"bitasset_opts:",p);var d=o.a.new_transaction(),f=s.a.get_asset_precision(t.precision);m.a.config({DECIMAL_PLACES:t.precision});var b=new m.a(t.max_supply).times(f).toString(),h=new m.a(t.max_market_fee||0).times(f).toString(),g=s.a.get_asset_precision(c.b.getAsset(r.base.asset_id).get("precision")),E={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:b,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:h,issuer_permissions:n,flags:a,core_exchange_rate:{base:{amount:r.base.amount*g,asset_id:r.base.asset_id},quote:{amount:r.quote.amount*f,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:_,extensions:null},is_prediction_market:u,extensions:null};return l&&(E.bitasset_opts=p),d.add_type_operation("asset_create",E),function(e){return i.a.process_transaction(d,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,a,n,r,l,u,p,_,d,f,b,h,g,E){var y=o.a.new_transaction();if(E){var v=s.a.get_asset_precision(r.get("precision"));m.a.config({DECIMAL_PLACES:r.get("precision")});var k=new m.a(a.max_supply).times(v).toString(),w=new m.a(a.max_market_fee||0).times(v).toString(),x=c.b.getAsset(n.quote.asset_id),A=s.a.get_asset_precision(x.get("precision")),O=c.b.getAsset(n.base.asset_id),P=s.a.get_asset_precision(O.get("precision")),j=new m.a(n.quote.amount).times(A).toString(),S=new m.a(n.base.amount).times(P).toString();console.log("auths:",b);var N={fee:{amount:0,asset_id:0},asset_to_update:r.get("id"),extensions:r.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:k,max_market_fee:w,market_fee_percent:100*a.market_fee_percent,description:f,issuer_permissions:u,flags:l,whitelist_authorities:b.whitelist_authorities.toJS(),blacklist_authorities:b.blacklist_authorities.toJS(),whitelist_markets:b.whitelist_markets.toJS(),blacklist_markets:b.blacklist_markets.toJS(),extensions:r.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:j,asset_id:n.quote.asset_id},base:{amount:S,asset_id:n.base.asset_id}}}};e!==t&&t||delete N.new_issuer,y.add_type_operation("asset_update",N)}if(console.log("bitasset_opts:",_,"original_bitasset_opts:",d),p&&(_.feed_lifetime_sec!==d.feed_lifetime_sec||_.minimum_feeds!==d.minimum_feeds||_.force_settlement_delay_sec!==d.force_settlement_delay_sec||_.force_settlement_offset_percent!==d.force_settlement_offset_percent||_.maximum_force_settlement_volume!==d.maximum_force_settlement_volume||_.short_backing_asset!==d.short_backing_asset)){var C={fee:{amount:0,asset_id:0},asset_to_update:r.get("id"),issuer:e,new_options:_};y.add_type_operation("asset_update_bitasset",C)}return console.log("feedProducers:",h,"originalFeedProducers:",g),p&&!s.a.are_equal_shallow(h,g)&&y.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:r.get("id"),new_feed_producers:h}),i.a.process_transaction(y,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- updateAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,a,n,r){l.a.issue_asset(e,t,a,n,r)}},{key:"getAssetList",value:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=e+"_"+t;return function(o){if(!_[s]){var l;if(_[s]=!0,o({loading:!0}),l=r.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],a=[];e.forEach(function(e){c.b._updateObject(e,!1),a.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var n=r.Apis.instance().db_api().exec("get_objects",[a]),l=t.length>0?r.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([n,l]).then(function(t){return delete _[s],o({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetActions.getAssetList: ",e),o({loading:!1}),delete _[s]}),n){["BRIDGE","GDEX","RUDEX","OPEN","WIN"].forEach(function(t){a.getAssetList(t+"."+e,10)})}return l}}}},{key:"lookupAsset",value:function(e,t){var a=c.b.getAsset(e);return a?{assets:[a],searchID:t,symbol:e}:function(a){setTimeout(function(){var n=c.b.getAsset(e);n&&a({assets:[n],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,a){var n=o.a.new_transaction();return n.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:a,extensions:[]}),i.a.process_transaction(n,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=n.a.createActions(d)}}]);
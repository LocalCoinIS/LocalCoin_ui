(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{444:function(e,t,a){"use strict";a.d(t,"a",function(){return K});var n=a(0),r=a.n(n),s=a(1),o=a.n(s),i=a(122),c=a(147),l=a(7),u=a(13),h=a(5),m=a(4),d=a(108),p=a(55),v=a.n(p),_=a(3),f=a.n(_),y=a(12),w=a(8),b=a.n(w),g=a(2),E=a.n(g),k=a(51),C=a(39),x=a.n(C),I=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var S=m.c.operations,P={textAlign:"left"},F={textAlign:"right"};function j(e,t){return t.block_num===e.block_num?t.virtual_op-e.virtual_op:t.block_num-e.block_num}function R(e){return e?'"'+e.textContent.replace(/[\s\t\r\n]/gi," ")+'"':""}var K=function(e){function t(e){A(this,t);var a=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={limit:e.limit||20,csvExport:!1,headerHeight:85,openFilter:!1,filter:"all"},a._updateTooltip=a._updateTooltip.bind(a),a._downloadCSV=a._downloadCSV.bind(a),a._findActiveFilter=a._findActiveFilter.bind(a),a._renderFilters=a._renderFilters.bind(a),a}return O(t,r.a.Component),I(t,[{key:"componentDidMount",value:function(){if(this._updateTooltip(),!this.props.fullHeight){var e=this.refs.transactions;v.a.initialize(e),this._setHeaderHeight()}}},{key:"_setHeaderHeight",value:function(){var e=this.refs.header.offsetHeight;e!==this.state.headerHeight&&this.setState({headerHeight:e})}},{key:"shouldComponentUpdate",value:function(e,t){if(!h.a.are_equal_shallow(this.props.accountsList,e.accountsList))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(this.state.headerHeight!==t.headerHeight)return!0;if(this.state.openFilter!==t.openFilter)return!0;if(this.state.filter!==t.filter)return!0;if(this.props.customFilter&&(!h.a.are_equal_shallow(this.props.customFilter.fields,e.customFilter.fields)||!h.a.are_equal_shallow(this.props.customFilter.values,e.customFilter.values)))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(t.limit!==this.state.limit||t.csvExport!==this.state.csvExport)return!0;for(var a=0;a<e.accountsList.length;++a){var n=e.accountsList[a],r=this.props.accountsList[a];if(n&&r&&n.get("history")!==r.get("history"))return!0}return!1}},{key:"componentDidUpdate",value:function(){if(this._updateTooltip(),this.state.csvExport){this.state.csvExport=!1;var e=document.getElementById("csv_export_container").childNodes,t="",a=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var c=s.value.childNodes;""!==t&&(t+="\n"),t+=[R(c[0]),R(c[1]),R(c[2]),R(c[3])].join(",")}}catch(e){n=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw r}}var l=new Blob([t],{type:"text/csv;charset=utf-8"}),u=new Date;Object(i.saveAs)(l,"btshist-"+u.getFullYear()+"-"+("0"+(u.getMonth()+1)).slice(-2)+"-"+("0"+u.getDate()).slice(-2)+"-"+("0"+u.getHours()).slice(-2)+("0"+u.getMinutes()).slice(-2)+".csv")}if(!this.props.fullHeight){var h=this.refs.transactions;v.a.update(h),this._setHeaderHeight()}}},{key:"_onIncreaseLimit",value:function(){this.setState({limit:this.state.limit+30})}},{key:"_getHistory",value:function(e,t,a){var n=[],r=new Set,s=!0,o=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var u=c.value;if(u){var h=u.get("history");h&&(n=n.concat(h.toJS().filter(function(e){return!r.has(e.id)&&r.add(e.id)})))}}}catch(e){o=!0,i=e}finally{try{!s&&l.return&&l.return()}finally{if(o)throw i}}return t&&(n=n.filter(function(e){return e.op[0]===S[t]})),a&&(n=n.filter(function(e){return a.fields.reduce(function(t,n){switch(n){case"asset_id":return t&&e.op[1].amount[n]===a.values[n];default:return t&&e.op[1][n]===a.values[n]}},!0)})),n}},{key:"_downloadCSV",value:function(){this.setState({csvExport:!0})}},{key:"_onChangeFilter",value:function(e){this.setState({filter:e.target.value})}},{key:"_findActiveFilter",value:function(e){var t=this;return e.find(function(e){return e===t.state.filter})}},{key:"_updateTooltip",value:function(){x.a.rebuild()}},{key:"_renderFilters",value:function(e){var t=this,a=this._findActiveFilter(e);return a?r.a.createElement("div",{className:b()("select",{"is-open":this.state.openFilter})},r.a.createElement("span",{className:"placeholder",onClick:function(e){e.preventDefault(),t.setState({openFilter:!t.state.openFilter})}},f.a.translate("transaction.trxTypes."+a)),r.a.createElement("ul",null,e.filter(function(e){return e!==a}).map(function(e){return r.a.createElement("li",{key:""+e,onClick:function(a){a.preventDefault(),t.setState({filter:e}),t.setState({openFilter:!1})}},f.a.translate("transaction.trxTypes."+e))}))):null}},{key:"render",value:function(){var e=this,t=this.props,a=t.accountsList,n=t.compactView,s=t.filter,i=t.customFilter,l=t.style,u=(t.maxHeight,this.state),h=u.limit,m=(u.headerHeight,1===a.length&&a[0]?a[0].get("id"):null),p=this._getHistory(a,this.props.showFilters&&"all"!==this.state.filter?this.state.filter:s,i).sort(j),v=p.length;x.a.rebuild();var _=null;_=["all","transfer","limit_order_create","limit_order_cancel","fill_order","account_create","account_update","asset_create","witness_withdraw_pay","vesting_balance_withdraw"];var w=p.length?p.slice(0,h).map(function(e){return r.a.createElement(c.a,{includeOperationId:!0,operationId:e.id,style:P,key:e.id,op:e.op,result:e.result,block:e.block_num,current:m,hideFee:!0,inverted:!1,hideOpLabel:n,fullDate:!0})}):[r.a.createElement("tr",{key:"no_recent"},r.a.createElement("td",{colSpan:n?"2":"3"},r.a.createElement(o.a,{content:"operation.no_recent"})))];return(this.props.showMore&&v>this.props.limit||h<v)&&w.push(r.a.createElement("tr",{className:"total-value",key:"total_value"},r.a.createElement("td",{className:"column-hide-tiny"}),r.a.createElement("td",{style:F}),r.a.createElement("td",{style:{textAlign:"center"}}," ",r.a.createElement("a",{onClick:this._onIncreaseLimit.bind(this)},r.a.createElement(y.a,{name:"chevron-down",title:"icons.chevron_down.transactions",className:"icon-14px"}))),r.a.createElement("td",null," "))),r.a.createElement("div",{className:"recent-transactions no-overflow",style:l},r.a.createElement("div",{className:"generic-bordered-box"},this.props.dashboard?null:r.a.createElement("div",{ref:"header"},r.a.createElement("div",{className:"block-content-header"},r.a.createElement("span",null,this.props.title?this.props.title:r.a.createElement(o.a,{content:"account.recent"})))),r.a.createElement("div",{className:"dashboard__actions"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},this.props.showFilters?this._renderFilters(_):null)))),r.a.createElement("div",{className:"dashboard__adaptive"},r.a.createElement("table",{className:"dashboard__table transactions-list blue-bg with-borders"+(n?"compact":"")+(this.props.dashboard?" dashboard-table":"")},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"column-hide-tiny",style:P},r.a.createElement(o.a,{content:"account.transactions.id"})),r.a.createElement("th",{className:"column-hide-tiny",style:P},r.a.createElement(o.a,{content:"account.transactions.type",onLoad:this._updateTooltip()})),r.a.createElement("th",{style:P},r.a.createElement(o.a,{content:"account.transactions.fee"})),r.a.createElement("th",{style:P},r.a.createElement(o.a,{content:"account.transactions.info"})),r.a.createElement("th",{style:P},r.a.createElement(o.a,{content:"account.transactions.time"})))),r.a.createElement(d.a,{component:"tbody",transitionName:"newrow"},w))),v>0?r.a.createElement("div",{className:"export-row",style:{marginTop:"20px"}},r.a.createElement("a",{className:"csv-export",href:"#",onClick:function(t){t.preventDefault(),e._downloadCSV()}},r.a.createElement("img",{src:k.csvIcon,alt:""}),f.a.translate("transaction.csv_tip"))):null,v>0&&this.state.csvExport&&r.a.createElement("div",{id:"csv_export_container",style:{display:"none"}},r.a.createElement("div",null,r.a.createElement("div",null,"DATE"),r.a.createElement("div",null,"OPERATION"),r.a.createElement("div",null,"MEMO"),r.a.createElement("div",null,"AMOUNT")),p.map(function(e){return r.a.createElement(c.a,{key:e.id,op:e.op,result:e.result,block:e.block_num,inverted:!1,csvExportMode:!0})}))))}}]),t}();K.propTypes={accountsList:l.a.ChainAccountsList.isRequired,compactView:E.a.bool,limit:E.a.number,maxHeight:E.a.number,fullHeight:E.a.bool,showFilters:E.a.bool},K.defaultProps={limit:25,maxHeight:500,fullHeight:!1,showFilters:!1},K=Object(u.a)(K);var T=function(e){function t(){return A(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,r.a.Component),I(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"wrapper"},this.props.children(this.props))}}]),t}();T.propTypes={asset:l.a.ChainAsset.isRequired,to:l.a.ChainAccount.isRequired,fromAccount:l.a.ChainAccount.isRequired},T.defaultProps={asset:"1.3.0"},T=Object(u.a)(T)},8024:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),o=a.n(s),i=a(1),c=a.n(i),l=a(3),u=a.n(l),h=a(5),m=a(61),d=a(107),p=a(4),v=a(10),_=a(111),f=a(88),y=a(7),w=a(13),b=(a(12),a(288)),g=a(149),E=a(65),k=a(2),C=a.n(k),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var O=function(e){function t(){return I(this,t),A(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return N(t,r.a.Component),x(t,[{key:"shouldComponentUpdate",value:function(e){return!h.a.are_equal_shallow(e,this.props)}},{key:"_lookUpPubKeyForAddress",value:function(e){return g.a.getState().addresses.get(e)}},{key:"render",value:function(){var e=void 0,t=void 0,a=void 0,n="_accounts",s=this.props.pubkey,o=E.a.getState().keys,i=!1;return this.props.account?(e=this.props.account.get("name"),t=this.props.account.get("id"),a=r.a.createElement(v.b,{to:"/account/"+e+"/permissions"},e)):s?(e=t=s,a=r.a.createElement(b.a,{pubkey:s},s),n="_keys",i=o.has(s)):this.props.address&&(s=this._lookUpPubKeyForAddress(this.props.address),t=this.props.address,a=s?r.a.createElement(b.a,{pubkey:s},s):this.props.address,n="_addresses",i=o.has(s)),r.a.createElement("tr",{key:e},r.a.createElement("td",null,this.props.account?r.a.createElement(f.a,{size:{height:30,width:30},account:e}):s?r.a.createElement("div",{className:"account-image"},r.a.createElement(b.a,{pubkey:s},r.a.createElement("span",{className:"key-icon"}))):null),r.a.createElement("td",{className:(i?"my-key":"")+" pub-key"},a),r.a.createElement("td",null,this.props.weights[t]),r.a.createElement("td",null,r.a.createElement("button",{className:"btn large outline",onClick:this.props.onRemoveItem.bind(this,t,n)},u.a.translate("account.votes.remove_witness"))))}}]),t}();O.propTypes={account:C.a.object,pubkey:C.a.string,address:C.a.string,onRemoveItem:C.a.func.isRequired,weights:C.a.object};var S=function(e){function t(e){I(this,t);var a=A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={selected_item:null,item_name_input:"",weight_input:"",error:null},a.onItemChange=a.onItemChange.bind(a),a.onItemAccountChange=a.onItemAccountChange.bind(a),a.onAddItem=a.onAddItem.bind(a),a}return N(t,r.a.Component),x(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var a=this.props.validateAccount(e);if(null===a)return;"string"==typeof a?this.setState({error:a}):a.then(function(e){return t.setState({error:e})})}}},{key:"onWeightChanged",value:function(e){var t=e.target.value.trim();this.setState({weight_input:parseInt(t)})}},{key:"onAddItem",value:function(e){if(e){this.setState({selected_item:null,item_name_input:"",weight_input:"",error:null});var t="string"==typeof e?e:e.get("id");this.props.onAddItem(t,this.state.weight_input)}}},{key:"onWeightKeyDown",value:function(e){13===e.keyCode&&this.state.weight_input&&this.state.selected_item&&this.onAddItem(this.state.selected_item)}},{key:"render",value:function(){var e=this,t=0,a=this.props.accounts.filter(function(e){return!!e}).sort(function(e,t){return e.get("name")>t.get("name")?1:e.get("name")<t.get("name")?-1:0}).map(function(a){return r.a.createElement(O,{key:t++,account:a,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),n=this.props.keys.map(function(a){return r.a.createElement(O,{key:t++,pubkey:a,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),s=this.props.addresses.map(function(a){return r.a.createElement(O,{key:t++,address:a,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),o=this.state.error;!o&&this.state.selected_item&&-1!==this.props.accounts.indexOf(this.state.selected_item)&&(o=u.a.translate("account.perm.warning3")),!o&&this.state.item_name_input&&-1!==this.props.keys.indexOf(this.state.item_name_input)&&(o=u.a.translate("account.perm.warning4"));var i=["10%","70%","30%","10%"];return r.a.createElement("div",null,r.a.createElement(_.a,{label:this.props.label,error:o,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex,allowPubKey:!0,disableActionButton:!this.state.weight_input,allowUppercase:!0},r.a.createElement("input",{value:this.state.weight_input,onChange:this.onWeightChanged.bind(this),className:"weight-input",type:"number",autoComplete:"off",placeholder:u.a.translate("account.perm.weight"),onKeyDown:this.onWeightKeyDown.bind(this),tabIndex:this.props.tabIndex+1})),r.a.createElement("div",{className:"accounts-table-wrap accounts-table-wrap__keys",style:{paddingTop:"2rem"}},r.a.createElement("table",{className:"accounts-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:i[0]}}),r.a.createElement("th",{style:{width:i[1]}},r.a.createElement(c.a,{content:"account.perm.acct_or_key"})),r.a.createElement("th",{style:{width:i[2]}},r.a.createElement(c.a,{content:"account.perm.weight"})),r.a.createElement("th",{style:{width:i[3]}},r.a.createElement(c.a,{content:"account.perm.action"})))),r.a.createElement("tbody",null,a,n,s))))}}]),t}();S.propTypes={accounts:y.a.ChainObjectsList,onAddItem:C.a.func.isRequired,onRemoveItem:C.a.func.isRequired,validateAccount:C.a.func,label:C.a.string.isRequired,placeholder:C.a.string,tabIndex:C.a.number,weights:C.a.object};var P=Object(w.a)(S,{autosubscribe:!1}),F=a(283),j=a(15),R=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var K=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={validPassword:!1,pass:null,generatedPassword:"P"+p.o.get_random_key().toWif().toString()},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),R(t,[{key:"onSubmit",value:function(){}},{key:"onPasswordChange",value:function(e){var t=e.valid,a=this.props.account.get("name"),n=t?j.a.generateKeyFromPassword(a,"active",e.value).pubKey:null,r=t?j.a.generateKeyFromPassword(a,"owner",e.value).pubKey:null,s=t?j.a.generateKeyFromPassword(a,"active",e.value).pubKey:null;this.setState({validPassword:e.valid,pass:e.value}),this.props.onSetPasswordKeys({active:n,owner:r,memo:s})}},{key:"checkKeyUse",value:function(e,t){return!!e&&("memo"===t?e===this.props.memoKey:this.props[t+"Keys"].reduce(function(t,a){return a===e||t},!1))}},{key:"_onUseKey",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])this.props["active"===e?"onRemoveActive":"onRemoveOwner"](this.props[e],"_keys");else if(this.props[e]){var t={active:this.props.account.getIn(["active","weight_threshold"]),owner:this.props.account.getIn(["owner","weight_threshold"])};console.log("key",this.props[e],"weights",t,"weight of role:",t[e]),this.props["active"===e?"onAddActive":"owner"===e?"onAddOwner":"onSetMemo"](this.props[e],t[e])}}},{key:"render",value:function(){var e=this.checkKeyUse(this.props.active&&this.props.active,"active"),t=this.checkKeyUse(this.props.owner&&this.props.owner,"owner"),a=this.checkKeyUse(this.props.memo&&this.props.memo,"memo"),n=u.a.translate("account.perm.use_text"),s=u.a.translate("account.perm.remove_text");return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-7"},r.a.createElement("p",{style:{maxWidth:"800px"}},r.a.createElement(c.a,{content:"account.perm.password_model_1"})),r.a.createElement("p",{style:{maxWidth:"800px"}},r.a.createElement(c.a,{content:"wallet.password_model_1"})),r.a.createElement("p",{style:{maxWidth:"800px"}},r.a.createElement(c.a,{unsafe:!0,content:"wallet.password_model_2"})))),r.a.createElement("div",{className:"divider"}),r.a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},r.a.createElement("label",{className:"left-label"},r.a.createElement(c.a,{content:"wallet.generated"})),r.a.createElement("p",null,this.state.generatedPassword),r.a.createElement("p",{style:{fontWeight:"bold"}},r.a.createElement(c.a,{content:"account.perm.password_model_2"})),r.a.createElement(F.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,passwordLength:12,checkStrength:!0})),r.a.createElement("table",{className:"blue-bg borders"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:e?"in-use":""},r.a.createElement("td",null,r.a.createElement(c.a,{content:"account.perm.new_active"}),":"),r.a.createElement("td",null,this.props.active),r.a.createElement("td",{className:"text-right"},r.a.createElement("button",{className:"btn large outline",onClick:this._onUseKey.bind(this,"active",e)},e?s:n))),r.a.createElement("tr",{className:t?"in-use":""},r.a.createElement("td",null,r.a.createElement(c.a,{content:"account.perm.new_owner"}),":"),r.a.createElement("td",null,this.props.owner),r.a.createElement("td",{className:"text-right"},r.a.createElement("button",{className:"btn large outline",onClick:this._onUseKey.bind(this,"owner",t)},t?s:n))),r.a.createElement("tr",{className:a?"in-use":""},r.a.createElement("td",null,r.a.createElement(c.a,{content:"account.perm.new_memo"}),":"),r.a.createElement("td",null,this.props.memo),r.a.createElement("td",{className:"text-right"},r.a.createElement("button",{className:"btn large outline",style:{visibility:a?"hidden":""},onClick:this._onUseKey.bind(this,"memo",a)},n))))),a?r.a.createElement("p",{style:{maxWidth:"800px",paddingTop:10},className:"has-error"},r.a.createElement(c.a,{content:"account.perm.memo_warning"})):null)}}]),t}(),T=a(360),H=a(101),D=a(68),U=(a(444),a(26)),W=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var L=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a.onPublish=a.onPublish.bind(a),a.onReset=a.onReset.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),W(t,[{key:"componentWillMount",value:function(){this.updateAccountData(this.props.account),m.a.getFinalFeeAsset(this.props.account,"account_update")}},{key:"componentWillReceiveProps",value:function(e){e.account!==this.props.account&&this.updateAccountData(e.account)}},{key:"permissionsFromImmutableObj",value:function(e){var t=e.get("weight_threshold"),a=e.get("account_auths"),n=e.get("key_auths"),r=e.get("address_auths"),s=a.map(function(e){return e.get(0)}),o=n.map(function(e){return e.get(0)}),i=r.map(function(e){return e.get(0)}),c=a.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},{});return c=n.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},c),{threshold:t,accounts:s,keys:o,addresses:i,weights:c=r.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},c)}}},{key:"permissionsToJson",value:function(e,t,a,n,r){var s={weight_threshold:e};return s.account_auths=t.sort(h.a.sortID).map(function(e){return[e,r[e]]}).toJS(),s.key_auths=a.sort(h.a.sortID).map(function(e){return[e,r[e]]}).toJS(),s.address_auths=n.sort(h.a.sortID).map(function(e){return[e,r[e]]}).toJS(),s}},{key:"updateAccountData",value:function(e){var t=this.permissionsFromImmutableObj(e.get("active")),a=this.permissionsFromImmutableObj(e.get("owner")),n=e.get("options").get("memo_key"),r={active_accounts:t.accounts,active_keys:t.keys,active_addresses:t.addresses,owner_accounts:a.accounts,owner_keys:a.keys,owner_addresses:a.addresses,active_weights:t.weights,owner_weights:a.weights,active_threshold:t.threshold,owner_threshold:a.threshold,memo_key:n,prev_active_accounts:t.accounts,prev_active_keys:t.keys,prev_active_addresses:t.addresses,prev_owner_accounts:a.accounts,prev_owner_keys:a.keys,prev_owner_addresses:a.addresses,prev_active_weights:t.weights,prev_owner_weights:a.weights,prev_active_threshold:t.threshold,prev_owner_threshold:a.threshold,prev_memo_key:n};this.setState(r)}},{key:"isChanged",value:function(){var e=this.state;return e.active_accounts!==e.prev_active_accounts||e.active_keys!==e.prev_active_keys||e.active_addresses!==e.prev_active_addresses||e.owner_accounts!==e.prev_owner_accounts||e.owner_keys!==e.prev_owner_keys||e.owner_addresses!==e.prev_owner_addresses||e.active_threshold!==e.prev_active_threshold||e.owner_threshold!==e.prev_owner_threshold||e.memo_key!==e.prev_memo_key}},{key:"didChange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;if("memo"===e)return t.memo_key!==t.prev_memo_key;var a=!1;return["_keys","_active_addresses","_accounts","_threshold"].forEach(function(n){var r=e+n;t[r]!==t["prev_"+r]&&(a=!0)}),a}},{key:"onPublish",value:function(){var e=this.state,t=this.props.account.toJS();t.fee={amount:0,asset_id:m.a.getFinalFeeAsset(t.id,"account_update")};var a={account:t.id};if(this.didChange("active")&&(a.active=this.permissionsToJson(e.active_threshold,e.active_accounts,e.active_keys,e.active_addresses,e.active_weights)),this.didChange("owner")&&(a.owner=this.permissionsToJson(e.owner_threshold,e.owner_accounts,e.owner_keys,e.owner_addresses,e.owner_weights)),this.didChange("owner")&&0===e.owner_keys.size&&0===e.owner_addresses.size&&1===e.owner_accounts.size&&e.owner_accounts.first()===t.id)return U.a.addNotification({message:"Setting your owner permissions like this will render your account permanently unusable. Please make sure you know what you're doing before modifying account authorities!",level:"error",autoDismiss:10});e.memo_key&&this.didChange("memo")&&this.isValidPubKey(e.memo_key)&&(a.new_options=this.props.account.get("options").toJS(),a.new_options.memo_key=e.memo_key),d.a.updateAccount(a)}},{key:"isValidPubKey",value:function(e){return!!p.i.fromPublicKeyString(e)}},{key:"onReset",value:function(){var e=this.state;this.setState({active_accounts:e.prev_active_accounts,active_keys:e.prev_active_keys,active_addresses:e.prev_active_addresses,owner_accounts:e.prev_owner_accounts,owner_keys:e.prev_owner_keys,owner_addresses:e.prev_owner_addresses,active_weights:e.prev_active_weights,owner_weights:e.prev_owner_weights,active_threshold:e.prev_active_threshold,owner_threshold:e.prev_owner_threshold,memo_key:e.prev_memo_key})}},{key:"onAddItem",value:function(e,t,a){var n={},r=e+(h.a.is_object_id(t)?"_accounts":"_keys");n[r]=this.state[r].push(t),this.state[e+"_weights"][t]=a,this.setState(n)}},{key:"onRemoveItem",value:function(e,t,a){console.log("onRemoveItem",e,t,a);var n={},r=e+a;n[r]=this.state[r].filter(function(e){return e!==t}),this.setState(n)}},{key:"onThresholdChanged",value:function(e,t){var a=parseInt(t.target.value.trim()),n={};n[e]=a,this.setState(n)}},{key:"validateAccount",value:function(e,t){return null}},{key:"sumUpWeights",value:function(e,t,a,n){var r=e.reduce(function(e,t){return e+n[t]},0);return r=t.reduce(function(e,t){return e+n[t]},r),a.reduce(function(e,t){return e+n[t]},r)}},{key:"onMemoKeyChanged",value:function(e){this.setState({memo_key:e})}},{key:"onSetPasswordKeys",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["active","owner","memo"],a={};t.forEach(function(t){a["password_"+t]=e[t]}),this.setState(a)}},{key:"render",value:function(){var e=void 0,t=void 0,a=this.state,n=a.active_accounts,s=a.active_keys,i=a.active_addresses,l=a.active_weights,h=this.state,m=h.owner_accounts,d=h.owner_keys,p=h.owner_addresses,v=h.owner_weights,_=this.state.active_threshold>0?this.state.active_threshold:0,f=this.sumUpWeights(n,s,i,l);this.didChange("active")&&f<_&&(e=u.a.translate("account.perm.warning1",{weights_total:f,threshold:_})),_=this.state.owner_threshold>0?this.state.owner_threshold:0,f=this.sumUpWeights(m,d,p,v),this.didChange("owner")&&f<_&&(t=u.a.translate("account.perm.warning2",{weights_total:f,threshold:_}));var y="btn large inverted"+(!e&&!t&&this.isChanged()&&this.isValidPubKey(this.state.memo_key)?"":" disabled"),w="btn large outline"+(this.isChanged()?"":" disabled"),b=o.a.Set();b=b.add(this.props.account.get("id"));var g=r.a.createElement("div",{className:"account-actions",style:{marginTop:"10px"}},r.a.createElement("button",{className:y,onClick:this.onPublish,tabIndex:9,disabled:!(!e&&!t&&this.isChanged()&&this.isValidPubKey(this.state.memo_key))},r.a.createElement(c.a,{content:"account.perm.publish"})),r.a.createElement("button",{className:w,onClick:this.onReset,tabIndex:8,disabled:!this.isChanged()},r.a.createElement(c.a,{content:"account.perm.reset"}))),E=[{title:"account.perm.active",content:r.a.createElement("div",{className:"permissions-tab"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-7"},r.a.createElement(D.a,{path:"components/AccountPermActive"}))),r.a.createElement("div",{className:"threshold-block"},r.a.createElement(c.a,{content:"account.perm.threshold"}),r.a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.active_threshold,onChange:this.onThresholdChanged.bind(this,"active_threshold"),autoComplete:"off",tabIndex:1})),r.a.createElement(P,{label:"account.perm.add_permission_label",accounts:n,keys:s,weights:l,addresses:i,validateAccount:this.validateAccount.bind(this,"active"),onAddItem:this.onAddItem.bind(this,"active"),onRemoveItem:this.onRemoveItem.bind(this,"active"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:2}),e?r.a.createElement("div",{className:"content-block has-error"},e):null,g,null)},{title:"account.perm.owner",content:r.a.createElement("div",{className:"owner-tab"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-7"},r.a.createElement(D.a,{path:"components/AccountPermOwner"}))),r.a.createElement("div",{className:"threshold-block"},r.a.createElement(c.a,{content:"account.perm.threshold"}),r.a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.owner_threshold,onChange:this.onThresholdChanged.bind(this,"owner_threshold"),autoComplete:"off",tabIndex:4})),r.a.createElement(P,{label:"account.perm.add_permission_label",accounts:m,keys:d,weights:v,addresses:p,validateAccount:this.validateAccount.bind(this,"owner"),onAddItem:this.onAddItem.bind(this,"owner"),onRemoveItem:this.onRemoveItem.bind(this,"owner"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:5}),t?r.a.createElement("div",{className:"content-block has-error"},t):null,g,null)},{title:"account.perm.memo_key",content:r.a.createElement("div",{className:"memo-tab"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-7"},r.a.createElement(D.a,{style:{maxWidth:"800px"},path:"components/AccountPermMemo"}))),r.a.createElement(T.a,{ref:"memo_key",value:this.state.memo_key,label:"account.perm.memo_public_key",placeholder:"Public Key",onChange:this.onMemoKeyChanged.bind(this),tabIndex:7}),g,null)},{title:"account.perm.password_model",content:r.a.createElement("div",{className:"cloud-tab"},r.a.createElement(K,{active:this.state.password_active,owner:this.state.password_owner,memo:this.state.password_memo,onSetPasswordKeys:this.onSetPasswordKeys.bind(this),account:this.props.account,activeKeys:this.state.active_keys,ownerKeys:this.state.owner_keys,memoKey:this.state.memo_key,onAddActive:this.onAddItem.bind(this,"active"),onRemoveActive:this.onRemoveItem.bind(this,"active"),onAddOwner:this.onAddItem.bind(this,"owner"),onRemoveOwner:this.onRemoveItem.bind(this,"owner"),onSetMemo:this.onMemoKeyChanged.bind(this)}),g,null)}];return r.a.createElement(H.a,{items:E,dashboardTabsClass:"dashboard__tabs permissions small"})}}]),t}();t.default=L}}]);
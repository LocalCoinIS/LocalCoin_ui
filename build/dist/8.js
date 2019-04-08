(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{108:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(5),s=n(16),i=n(88),c=n(14),l=n(23),u=n(1),p=n.n(u),m=n(4),h=n(7),d=n(13),f=n(8),b=n.n(f),g=n(3),y=n.n(g),v=n(12),w=n(61),_=n(176),E=n(349),C=n(2),T=n.n(C),A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var k=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={inputChanged:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),O(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.account,n=e.accountName;void 0===t&&(t=m.b.getAccount(n)),this.props.onAccountChanged&&t&&this.props.onAccountChanged(t),!this.props.typeahead&&n&&this.onInputChanged(n)}},{key:"componentWillReceiveProps",value:function(e){e.account&&e.account!==this.props.account&&this.props.onAccountChanged(e.account)}},{key:"getAccount",value:function(){return this.props.account}},{key:"getError",value:function(){var e=this.props,t=e.account,n=e.error;return n||!t||this.getInputType(t.get("name"))||(n=y.a.translate("account.errors.invalid")),n}},{key:"getInputType",value:function(e){return e?"#"===e[0]&&r.a.is_object_id("1.2."+e.substring(1))?"id":m.d.is_account_name(e,!0)?"name":this.props.allowPubKey&&m.i.fromPublicKeyString(e)?"pubkey":null:null}},{key:"onSelected",value:function(e){this.setState({inputChanged:!1});var t=this.getVerifiedAccountName(e),n=m.b.getAccount(t);n&&(this.props.onChange(t),this.props.onAccountChanged(n))}},{key:"onInputChanged",value:function(e){var t=this.props,n=t.onChange,a=t.onAccountChanged,o=t.accountName,r=t.typeahead;this.setState({inputChanged:!0});var s=this.getVerifiedAccountName(e),i=m.b.getAccount(s);n&&s!==o&&n(s),r||(n&&n(s),a&&a(i))}},{key:"getVerifiedAccountName",value:function(e){var t=this.props.allowUppercase,n=null;n="string"==typeof e?e:e&&e.target?e.target.value.trim():"",t||(n=n.toLowerCase());var a=n.replace("#","").match(/(?:\/account\/)(.*)(?:\/overview)/);return a&&(n=a[1]),n}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"_onAddContact",value:function(){l.a.addAccountContact(this.props.accountName)}},{key:"_onRemoveContact",value:function(){l.a.removeAccountContact(this.props.accountName)}},{key:"onAction",value:function(e){var t=this.props,n=t.onAction,a=t.disableActionButton,o=t.account,r=t.accountName;e.preventDefault(),this.getError()||!n||a||(o?n(o):"pubkey"===this.getInputType(r)&&n(r))}},{key:"render",value:function(){var e=this.props,t=e.accountName,n=e.account,a=e.allowPubKey,r=e.typeahead,s=e.disableActionButton,c=e.contacts,l=e.myActiveAccounts,u=(e.noPlaceHolder,e.useHR),h=e.labelClass,d=e.reserveErrorSpace,f=this.getInputType(t),g=[],C=this.getError(),T=l;T=T.concat(c);var O=void 0;n&&(n.isKnownScammer=w.a.isKnownScammer(n.get("name")),n.accountType=this.getInputType(n.get("name")),n.accountStatus=m.b.getAccountMemberStatus(n),n.statusText=n.isKnownScammer?y.a.translate("account.member.suspected_scammer"):y.a.translate("account.member."+n.accountStatus),O="name"===n.accountType?"#"+n.get("id").substring(4):"id"===n.accountType?n.get("name"):null),r?a&&"pubkey"===f||C||!t||n||(C=y.a.translate("account.errors.unknown")):!n&&t&&"pubkey"!==f&&(C=y.a.translate("account.errors.unknown")),a&&"pubkey"===f&&(O="Public Key"),n&&T&&(n.isFavorite=l.has(n.get("name"))||c.has(n.get("name"))),r&&T&&T.map(function(e){var t=m.b.getAccount(e),n=m.b.getAccountMemberStatus(t),a=w.a.isKnownScammer(e)?"account.member.suspected_scammer":"account.member."+n;g.push({id:e,label:e,status:y.a.translate(a),className:w.a.isKnownScammer(e)?"negative":"positive"})});var k=!!t&&g.reduce(function(e,n){return e||n.label===t},!1);if(t&&!k&&this.state.inputChanged){var N=m.b.getAccount(t),j=N?m.b.getAccountMemberStatus(N):null,P=N?w.a.isKnownScammer(N.get("name"))?y.a.translate("account.member.suspected_scammer"):y.a.translate("account.member."+j):y.a.translate("account.errors.unknown");g.push({id:this.props.accountName,label:this.props.accountName,status:P,className:w.a.isKnownScammer(t)||!N?"negative":null,disabled:!N})}g.sort(function(e,t){return e.label>t.label?1:-1});var S=this.props.account?l.has(n.get("name"))||c.has(n.get("name"))?o.a.createElement("span",{className:"tooltip green","data-place":"top","data-tip":y.a.translate("tooltip.follow_user"),onClick:this._onRemoveContact.bind(this)},o.a.createElement(v.a,{style:{position:"absolute",top:"-0.15em",right:".2em"},name:"user",title:"icons.user.following"})):o.a.createElement("span",{className:"tooltip","data-place":"top","data-tip":y.a.translate("tooltip.follow_user_add"),onClick:this._onAddContact.bind(this)},o.a.createElement(v.a,{style:{position:"absolute",top:"-0.05em",right:".2em"},name:"plus-circle",title:"icons.plus_circle.add_contact"})):null,x=b()("button btn large outline",{disabled:!(n||"pubkey"===f)||C||s});return o.a.createElement("div",{className:"account-selector",style:this.props.style},o.a.createElement("div",{className:"content-area"},this.props.label?o.a.createElement("div",{className:"header-area"+(this.props.hideImage?" no-margin":"")},o.a.createElement("label",{className:b()("right-label",n&&n.isFavorite?"positive":null,n&&n.isKnownScammer?"negative":null)},o.a.createElement("span",{style:{paddingRight:"1.5rem"}},n&&n.statusText," ",!!O&&O),S),o.a.createElement(p.a,{className:"left-label "+(h||""),component:"label",content:this.props.label}),u&&o.a.createElement("hr",null)):null,o.a.createElement("div",{className:"input-area"},o.a.createElement("div",{className:"inline-label input-wrapper"},n&&"pubkey"===n.accountType?o.a.createElement("div",{className:"account-image"},o.a.createElement(v.a,{name:"key",title:"icons.key",size:"4x"})):this.props.hideImage?null:o.a.createElement(i.a,{size:{height:this.props.size||80,width:this.props.size||80},account:n?n.get("name"):null,custom_image:null}),void 0!==this.props.typeahead?o.a.createElement(E.a,A({items:g,style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",defaultValue:this.props.accountName||"",placeholder:this.props.placeholder||y.a.translate("account.name"),ref:"user_input",onSelect:this.onSelected.bind(this),onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex,inputProps:{placeholder:"Search for an account"}},this.props.typeaheadOptions||{})):o.a.createElement("input",{style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",type:"text",value:this.props.accountName||"",placeholder:this.props.placeholder||y.a.translate("account.name"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.dropDownContent?o.a.createElement("div",{className:"form-label select floating-dropdown"},o.a.createElement(_.a,{entries:this.props.dropDownContent,values:this.props.dropDownContent.reduce(function(e,t){return t&&(e[t]=t),e},{}),singleEntry:this.props.dropDownContent[0],value:this.props.dropDownValue||"",onChange:this.props.onDropdownSelect})):null,this.props.children,this.props.onAction?o.a.createElement("button",{className:x,style:{marginLeft:4},onClick:this.onAction.bind(this)},o.a.createElement(p.a,{content:this.props.action_label})):null)),C||d?o.a.createElement("div",{className:this.props.hideImage?"has-error":"error-area",style:{marginTop:"1rem",position:"relative"}},o.a.createElement("span",null,C)):null))}}]),t}();k.propTypes={label:T.a.string,error:T.a.element,placeholder:T.a.string,onChange:T.a.func,onAccountChanged:T.a.func,onAction:T.a.func,accountName:T.a.string,account:h.a.ChainAccount,tabIndex:T.a.number,disableActionButton:T.a.bool,allowUppercase:T.a.bool,typeahead:T.a.array},k.defaultProps={autosubscribe:!1},k=Object(d.a)(k),k=Object(s.connect)(k,{listenTo:function(){return[c.a]},getProps:function(){return{myActiveAccounts:c.a.getState().myActiveAccounts,contacts:c.a.getState().accountContacts}}}),t.a=k},358:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=(n(8),n(1)),s=n.n(r),i=n(3),c=n.n(i),l=n(108),u=n(52),p=n(17),m=n(359),h=n(74),d=n(48),f=n(4);var b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(a){return e.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n(a)))}},g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return y.call(n),n.state=n.initialState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),t}(),y=function(){var e,t=this;this.onAccountNameChanged=b(this,"funderAccountName"),this.onAccountChanged=b(this,"newFunderAccount"),this.onPoolInput=b(this,"fundPoolAmount",(e="amount",function(t){return t[e]})),this.onFundPool=function(){return h.a.fundPool(t.state.newFunderAccount?t.state.newFunderAccount.get("id"):null,t.props.core,t.props.asset,t.state.fundPoolAmount.replace(/,/g,""))},this.reset=function(){t.setState(t.initialState())},this.initialState=function(){return{funderAccountName:t.props.funderAccountName,fundPoolAmount:0}},this.render=function(){var e=t.props,n=t.state,a=t.onPoolInput,r=t.onFundPool,i=t.reset,h=t.onAccountNameChanged,d=t.onAccountChanged,b=e.asset,g=e.core,y=e.hideBalance,v=e.getDynamicObject,w=n.funderAccountName,_=n.fundPoolAmount,E=n.newFunderAccount,C=null;y||(C=v(b.get("dynamic_asset_data_id")));var T=g.get("id")||"1.3.0",A=0;if(E){var O=E.getIn(["balances",T]);if(O){var k=f.b.getObject(O);k&&(A=k.get("balance"))}}var N=o.a.createElement("span",null,o.a.createElement(s.a,{component:"span",content:"transfer.available"}),": ",o.a.createElement(p.a,{amount:A,asset:T}));return o.a.createElement("div",null,o.a.createElement(s.a,{component:"p",content:"explorer.asset.fee_pool.fund_text",asset:b.get("symbol"),core:g.get("symbol")}),y||o.a.createElement("div",{style:{paddingBottom:"1.5rem"}},o.a.createElement(s.a,{content:"explorer.asset.fee_pool.pool_balance"}),o.a.createElement("span",null,": "),C?o.a.createElement(p.a,{amount:C.get("fee_pool"),asset:T}):null),o.a.createElement(l.a,{label:"transaction.funding_account",accountName:w,onChange:h,onAccountChanged:d,account:w,error:null,tabIndex:1}),o.a.createElement(u.a,{label:"transfer.amount",display_balance:N,amount:_,onChange:a,asset:T,assets:[T],placeholder:"0.0",tabIndex:2,style:{width:"100%",paddingTop:16}}),o.a.createElement("div",{style:{paddingTop:"1rem"}},o.a.createElement("button",{className:"btn large inverted",disabled:_<=0,onClick:r},c.a.translate("transaction.trxTypes.asset_fund_fee_pool")),o.a.createElement("button",{className:"btn large outline",onClick:i},c.a.translate("account.perm.reset")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement(s.a,{content:"account.user_issued_assets.approx_fee"}),": ",o.a.createElement(m.a,{opType:"asset_fund_fee_pool"})),o.a.createElement("hr",null)))}};g=Object(d.a)(g,{propNames:["asset","core"],defaultProps:{core:"1.3.0"},withDynamic:!0}),t.a=g},359:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(2),s=n.n(r),i=n(17),c=n(7),l=n(13),u=n(41),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),p(t,[{key:"getFee",value:function(){return Object(u.c)(this.props.opType,this.props.options,this.props.globalObject)}},{key:"render",value:function(){var e=this.props,t=e.opType,n=e.options,a=e.globalObject;if(!t||!n||!a)return null;var r=Object(u.c)(t,n,a);return o.a.createElement(i.a,{amount:r,asset:"1.3.0"})}}]),t}();m.propTypes={globalObject:c.a.ChainObject.isRequired,opType:s.a.string,options:s.a.array},m.defaultProps={globalObject:"2.0.0",options:[]},t.a=Object(l.a)(m)},72:function(e,t,n){"use strict";n.d(t,"b",function(){return v}),n.d(t,"a",function(){return y});var a=n(0),o=n.n(a),r=n(2),s=n.n(r),i=(n(1),n(8)),c=n.n(i),l=n(16),u=n(11),p=n(9),m=n(3),h=n.n(m),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(){return f(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,o.a.Component),d(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,r=e.title,s=e.className,i=e.updatedTab,l=e.disabled,u=e.subText,p=c()({"is-active":t},s);return"string"==typeof r&&r.indexOf(".")>0&&(r=h.a.translate(r)),this.props.collapsed?("string"==typeof u&&(u=u.trim()),o.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},o.a.createElement("span",{className:"tab-title"},r,i?"*":"",u&&" (",u&&u,u&&")"))):o.a.createElement("li",{className:p,onClick:l?null:a.bind(this,n,this.props.isLinkTo)},o.a.createElement("a",null,o.a.createElement("span",{className:"tab-title"},r,i?"*":""),u&&o.a.createElement("div",{className:"tab-subtext"},u)))}}]),t}();y.propTypes={changeTab:s.a.func,isActive:s.a.bool.isRequired,index:s.a.number.isRequired,className:s.a.string,isLinkTo:s.a.string,subText:s.a.oneOfType([s.a.object,s.a.string])},y.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var v=function(e){function t(e){f(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return g(t,o.a.Component),d(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""===t?(this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)):this.context.router.push(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,r=t.tabsClass,s=t.style,i=t.segmented,l=this.state.width<900&&o.a.Children.count(n)>2,u=null,p=o.a.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),o.a.cloneElement(t,{collapsed:l,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return u||(u=p[0].props.children),o.a.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},o.a.createElement("div",{className:"service-selector"},o.a.createElement("ul",{style:s,className:c()("button-group no-margin",r,{segmented:i})},l?o.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},o.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p)),this.props.actionButtons?o.a.createElement("div",{className:"tabs-action-buttons"},this.props.actionButtons):null,o.a.createElement("div",{className:c()("tab-content",a)},u))}}]),t}();v.propTypes={setting:s.a.string,defaultActiveTab:s.a.number,segmented:s.a.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v.contextTypes={router:s.a.object.isRequired},v=Object(l.connect)(v,{listenTo:function(){return[p.a]},getProps:function(){return{viewSettings:p.a.getState().viewSettings}}})}}]);
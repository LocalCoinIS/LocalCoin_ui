(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{72:function(e,t,n){"use strict";n.d(t,"b",function(){return y}),n.d(t,"a",function(){return v});var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(1),n(8)),i=n.n(s),l=n(16),u=n(11),d=n(9),p=n(3),h=n.n(p),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){function t(){return g(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,r.a.Component),m(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,c=e.className,s=e.updatedTab,l=e.disabled,u=e.subText,d=i()({"is-active":t},c);return"string"==typeof o&&o.indexOf(".")>0&&(o=h.a.translate(o)),this.props.collapsed?("string"==typeof u&&(u=u.trim()),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},r.a.createElement("span",{className:"tab-title"},o,s?"*":"",u&&" (",u&&u,u&&")"))):r.a.createElement("li",{className:d,onClick:l?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},o,s?"*":""),u&&r.a.createElement("div",{className:"tab-subtext"},u)))}}]),t}();v.propTypes={changeTab:c.a.func,isActive:c.a.bool.isRequired,index:c.a.number.isRequired,className:c.a.string,isLinkTo:c.a.string,subText:c.a.oneOfType([c.a.object,c.a.string])},v.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var y=function(e){function t(e){g(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return b(t,r.a.Component),m(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""===t?(this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)):this.context.router.push(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,c=t.style,s=t.segmented,l=this.state.width<900&&r.a.Children.count(n)>2,u=null,d=r.a.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),r.a.cloneElement(t,{collapsed:l,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return u||(u=d[0].props.children),r.a.createElement("div",{className:i()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:c,className:i()("button-group no-margin",o,{segmented:s})},l?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},d)):d)),this.props.actionButtons?r.a.createElement("div",{className:"tabs-action-buttons"},this.props.actionButtons):null,r.a.createElement("div",{className:i()("tab-content",a)},u))}}]),t}();y.propTypes={setting:c.a.string,defaultActiveTab:c.a.number,segmented:c.a.bool},y.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},y.contextTypes={router:c.a.object.isRequired},y=Object(l.connect)(y,{listenTo:function(){return[d.a]},getProps:function(){return{viewSettings:d.a.getState().viewSettings}}})},8025:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=n(5),i=n(1),l=n.n(i),u=n(16),d=n(9),p=n(59),h=n(7),m=n(13),g=n(11),f=n(23),b=n(12),v=n(4),y=n(106),w=n(14),E=n(3),_=n.n(E),k=n(15),A=n(2),S=n.n(A),T=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var N=function(e){function t(e){C(this,t);var n=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),a=e.viewSettings.get("marketLookupInput"),r=a?a.split(":"):[null];r[0],2===r.length&&r[1];return n.state={inverseSort:e.viewSettings.get("dashboardSortInverse",!0),sortBy:e.viewSettings.get("dashboardSort","star"),dashboardFilter:e.viewSettings.get("dashboardFilter","")},n}return x(t,r.a.Component),T(t,[{key:"shouldComponentUpdate",value:function(e,t){return!s.a.are_equal_shallow(e.accounts,this.props.accounts)||e.isContactsList!==this.props.isContactsList||e.showMyAccounts!==this.props.showMyAccounts||e.width!==this.props.width||e.showIgnored!==this.props.showIgnored||e.locked!==this.props.locked||e.passwordAccount!==this.props.passwordAccount||!s.a.are_equal_shallow(e.starredAccounts,this.props.starredAccounts)||!s.a.are_equal_shallow(t,this.state)}},{key:"_onStar",value:function(e,t,n){n.preventDefault(),t?f.a.removeStarAccount(e):f.a.addStarAccount(e)}},{key:"_goAccount",value:function(e,t){this.context.router.push("/account/"+e),g.a.changeViewSetting({overviewTab:t})}},{key:"_createAccount",value:function(){this.context.router.push("/create-account/wallet")}},{key:"_onFilter",value:function(e){this.setState({dashboardFilter:e.target.value.toLowerCase()}),g.a.changeViewSetting({dashboardFilter:e.target.value.toLowerCase()})}},{key:"_setSort",value:function(e){var t=e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort;this.setState({sortBy:e,inverseSort:t}),g.a.changeViewSetting({dashboardSort:e,dashboardSortInverse:t})}},{key:"_onAddContact",value:function(e){f.a.addAccountContact(e)}},{key:"_onRemoveContact",value:function(e){f.a.removeAccountContact(e)}},{key:"_renderList",value:function(e,t){var n=this,a=this.props,o=a.width,i=a.starredAccounts,l=a.isContactsList,u=a.passwordAccount,d=this.state,p=d.dashboardFilter,h=d.sortBy,m=d.inverseSort,g=c.a.List();return e.filter(function(e){if(!e)return!1;var t=e.get("name"),a=w.a.isMyAccount(e)||t===u;return!!l||a===n.props.showMyAccounts}).filter(function(e){return!!e&&-1!==e.get("name").toLowerCase().indexOf(p)}).sort(function(e,t){switch(h){case"star":return function(e,t,n,a){var r=e.get("name"),o=t.get("name"),c=a.has(r),i=a.has(o);return c&&!i?n?-1:1:i&&!c?n?1:-1:r>o?n?1:-1:r<o?n?-1:1:s.a.sortText(r,o,!n)}(e,t,m,i);case"name":return s.a.sortText(e.get("name"),t.get("name"),m)}}).map(function(e){if(e){var a={},c={},s={};g=g.clear();var d=e.get("name"),p=e.get("lifetime_referrer_name")===d;e.get("orders")&&e.get("orders").forEach(function(e,t){var n=v.b.getObject(e);if(n){var a=n.getIn(["sell_price","base","asset_id"]);s[a]?s[a]+=parseInt(n.get("for_sale"),10):s[a]=parseInt(n.get("for_sale"),10)}}),e.get("call_orders")&&e.get("call_orders").forEach(function(e,t){var n=v.b.getObject(e);if(n){var r=n.getIn(["call_price","base","asset_id"]);a[r]?a[r]+=parseInt(n.get("collateral"),10):a[r]=parseInt(n.get("collateral"),10);var o=n.getIn(["call_price","quote","asset_id"]);c[o]?c[o]+=parseInt(n.get("debt"),10):c[o]=parseInt(n.get("debt"),10)}});var h=e.get("balances");e.get("balances")&&h.forEach(function(e){var t=v.b.getObject(e);if(!t||!t.get("balance"))return null;g=g.push(e)});var m=w.a.isMyAccount(e)||d===u,f=i.has(d),E=f?"gold-star":"grey-star";return r.a.createElement("tr",{key:d},r.a.createElement("td",{className:"clickable",onClick:n._onStar.bind(n,d,f)},r.a.createElement(b.a,{className:E,name:"fi-star",title:"icons.fi_star.account"})),l?t&&r.a.createElement("td",{onClick:n._onAddContact.bind(n,d)},r.a.createElement(b.a,{name:"plus-circle",title:"icons.plus_circle.add_contact"}))||r.a.createElement("td",{onClick:n._onRemoveContact.bind(n,d)},r.a.createElement(b.a,{name:"minus-circle",title:"icons.minus_circle.remove_contact"})):null,r.a.createElement("td",{style:{textAlign:"left"}},e.get("id")),r.a.createElement("td",{style:{textAlign:"left",paddingLeft:10},onClick:n._goAccount.bind(n,d,0),className:"clickable"+(m?" my-account":"")},r.a.createElement("span",{className:p?"lifetime":""},d)),r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,1),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:[],openOrders:s})),o>=750?r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,2),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:[],collateral:a})):null,o>=1200?r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,2),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:[],debt:c})):null,r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,d,0),style:{textAlign:"right"}},r.a.createElement(y.a,{noTip:!0,balances:g,collateral:a,debt:c,openOrders:s})))}})}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.showIgnored,a=e.isContactsList,o=this.state.dashboardFilter,c=this._renderList(this.props.accounts),s=this._renderList(this.props.ignoredAccounts,!0),i=a?_.a.translate("explorer.accounts.filter_contacts"):_.a.translate("explorer.accounts.filter");i+="...";var u=!!k.a.getWallet();return r.a.createElement("div",{style:this.props.style},this.props.compact?null:r.a.createElement("section",{style:{paddingTop:"1rem",paddingLeft:"2rem"}},r.a.createElement("input",{placeholder:i,style:{maxWidth:"20rem",display:"inline-block"},type:"text",value:o,onChange:this._onFilter.bind(this)}),u&&!a?r.a.createElement("div",{onClick:this._createAccount.bind(this),style:{display:"inline-block",marginLeft:5,marginBottom:"1rem"},className:"button small"},r.a.createElement(l.a,{content:"header.create_account"})):null,s&&s.length?r.a.createElement("div",{onClick:this.props.onToggleIgnored,style:{display:"inline-block",float:"right",marginRight:"20px"},className:"button small"},r.a.createElement(l.a,{content:"account."+(this.props.showIgnored?"hide_ignored":"show_ignored")})):null),r.a.createElement("table",{className:"table table-hover dashboard-table",style:{fontSize:"0.85rem"}},this.props.compact?null:r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:this._setSort.bind(this,"star"),className:"clickable"},r.a.createElement(b.a,{className:"grey-star",name:"fi-star",title:"icons.fi_star.sort_accounts"})),a?r.a.createElement("th",null,r.a.createElement(b.a,{name:"user",title:"icons.user.account"})):null,r.a.createElement("th",{style:{textAlign:"left"}},"ID"),r.a.createElement("th",{style:{textAlign:"left",paddingLeft:10},onClick:this._setSort.bind(this,"name"),className:"clickable"},r.a.createElement(l.a,{content:"header.account"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"account.open_orders"})),t>=750?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"account.as_collateral"})):null,t>=1200?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"transaction.borrow_amount"})):null,r.a.createElement("th",{style:{textAlign:"right",marginRight:20}},r.a.createElement(l.a,{content:"account.total_value"})))),r.a.createElement("tbody",null,c,n&&s.length?r.a.createElement("tr",{className:"dashboard-table--hiddenAccounts",style:{backgroundColor:"transparent"},key:"hidden"},r.a.createElement("td",{colSpan:"8"},_.a.translate("account.hidden_accounts_row"),":")):null,n&&s)))}}]),t}();N.contextTypes={router:S.a.object.isRequired},N.propTypes={accounts:h.a.ChainAccountsList.isRequired,ignoredAccounts:h.a.ChainAccountsList},N.defaultProps={width:2e3,compact:!1},N=Object(m.a)(N);var j=function(e){function t(){return C(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return x(t,r.a.Component),T(t,[{key:"render",value:function(){return r.a.createElement(N,this.props)}}]),t}(),L=Object(u.connect)(j,{listenTo:function(){return[d.a,p.a,w.a]},getProps:function(){return{locked:p.a.getState().locked,starredAccounts:w.a.getState().starredAccounts,viewSettings:d.a.getState().viewSettings}}}),I=n(183),P=n(43),R=n(10),D=n(29),M=n(280),B=n(34),W=n(120),q=n.n(W),F=n(121),V=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var z=n(454),U=function(e){var t=e.flag,n=e.width,a=void 0===n?50:n,o=e.height,c=void 0===o?50:o;return r.a.createElement("img",{height:c,width:a,src:"/language-dropdown/"+t.toUpperCase()+".png"})},H=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={step:1,locales:d.a.getState().defaults.locale,currentLocale:d.a.getState().settings.get("locale")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),V(t,[{key:"componentDidUpdate",value:function(){var e=w.a.getMyAccounts(),t=r.a.Children.count(this.props.children);this.props.router&&Array.isArray(e)&&0!==e.length&&0===t&&this.props.router.push("/account/"+this.props.currentAccount)}},{key:"componentWillMount",value:function(){var e=this;Object(M.a)(function(t){e.setState({incognito:t})})}},{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,t=n(3),a=r.a.Children.count(this.props.children),o=r.a.createElement(q.a,null,r.a.createElement(q.a.Button,{title:"",style:{width:"64px"}},r.a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button arrow-down"},r.a.createElement(U,{flag:this.state.currentLocale}))),r.a.createElement(q.a.Content,null,r.a.createElement("ul",{className:"no-first-element-top-border"},this.state.locales.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("a",{onClick:function(n){n.preventDefault(),F.a.switchLocale(t),e.setState({currentLocale:t})}},r.a.createElement("div",{className:"table-cell"},r.a.createElement(U,{width:"20",height:"20",flag:t})),r.a.createElement("div",{className:"table-cell",style:{paddingLeft:10}},r.a.createElement(l.a,{content:"languages."+t}))))}))));return r.a.createElement("div",{className:"grid-block align-center"},r.a.createElement("div",{className:"grid-block shrink vertical"},r.a.createElement("div",{className:"grid-content shrink text-center account-creation"},r.a.createElement("div",null,r.a.createElement("img",{src:z})),0==a?null:r.a.createElement("div",null,r.a.createElement(l.a,{content:"header.create_account",component:"h4"})),1==a?null:r.a.createElement("div",null,r.a.createElement(l.a,{content:"account.intro_text_title",component:"h4"}),r.a.createElement(l.a,{unsafe:!0,content:"account.intro_text_1",component:"p"}),r.a.createElement("div",{className:"shrink text-center"},r.a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},r.a.createElement("div",{className:"grp-menu-item overflow-visible",style:{margin:"0 auto"},"data-intro":t.translate("walkthrough.language_flag")},o)))),a?null:r.a.createElement("div",{className:"grid-block account-login-options"},r.a.createElement(R.b,{id:"account_login_button",to:"/create-account/wallet",className:"button primary","data-intro":t.translate("walkthrough.create_cloud_wallet")},r.a.createElement(l.a,{content:"header.create_account"})),r.a.createElement("span",{className:"button hollow primary",onClick:function(){g.a.changeSetting({setting:"passwordLogin",value:!0}),B.a.unlock.defer()}},r.a.createElement(l.a,{content:"header.unlock_short"}))),a?null:r.a.createElement("div",{className:"additional-account-options"},r.a.createElement("h5",{style:{textAlign:"center"}},r.a.createElement(D.a,{string:"account.optional.formatter",keys:[{type:"link",value:"/wallet/backup/restore",translation:"account.optional.restore_link",dataIntro:t.translate("walkthrough.restore_account"),arg:"restore_link"},{type:"link",value:"/create-account/password",translation:"account.optional.restore_form",dataIntro:t.translate("walkthrough.create_local_wallet"),arg:"restore_form"}]}))),this.props.children)))}}]),t}(),J=Object(u.connect)(H,{listenTo:function(){return[w.a]},getProps:function(){return{currentAccount:w.a.getState().currentAccount||w.a.getState().passwordAccount}}}),G=n(30),K=n(72),Q=n(48),X=n.n(Q),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function te(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ne=function(e){function t(){return $(this,t),ee(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return te(t,r.a.Component),Z(t,[{key:"render",value:function(){return r.a.createElement(X.a,{stores:[w.a,d.a,G.a],inject:{contacts:function(){return w.a.getState().accountContacts},myActiveAccounts:function(){return w.a.getState().myActiveAccounts},myHiddenAccounts:function(){return w.a.getState().myHiddenAccounts},accountsReady:function(){return w.a.getState().accountsLoaded&&w.a.getState().refsLoaded},passwordAccount:function(){return w.a.getState().passwordAccount},lowVolumeMarkets:function(){return G.a.getState().lowVolumeMarkets},currentEntry:d.a.getState().viewSettings.get("dashboardEntry","accounts")}},r.a.createElement(ae,this.props))}}]),t}(),ae=function(e){function t(e){$(this,t);var n=ee(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={width:null,showIgnored:!1,currentEntry:e.currentEntry},n._setDimensions=n._setDimensions.bind(n),n}return te(t,r.a.Component),Z(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return e.myActiveAccounts!==this.props.myActiveAccounts||e.contacts!==this.props.contacts||e.ignoredAccounts!==this.props.ignoredAccounts||e.passwordAccount!==this.props.passwordAccount||t.width!==this.state.width||e.accountsReady!==this.props.accountsReady||t.showIgnored!==this.state.showIgnored||t.currentEntry!==this.state.currentEntry}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_onToggleIgnored",value:function(){this.setState({showIgnored:!this.state.showIgnored})}},{key:"_onSwitchType",value:function(e){this.setState({currentEntry:e}),g.a.changeViewSetting({dashboardEntry:e})}},{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.accountsReady,o=e.passwordAccount,s=this.state,i=s.width,l=s.showIgnored;o&&!t.has(o)&&(t=t.add(o));var u=t.toArray().sort();o&&-1===u.indexOf(o)&&u.push(o);var d=n.toArray().sort(),p=t.size+n.size+(o?1:0);if(!a)return r.a.createElement(P.a,null);if(!p)return r.a.createElement(J,null);var h=this.props.contacts.toArray();return r.a.createElement("div",{ref:"wrapper",className:"grid-block page-layout vertical"},r.a.createElement("div",{ref:"container",className:"tabs-container generic-bordered-box"},r.a.createElement(K.b,{setting:"accountTab",className:"account-tabs",defaultActiveTab:1,segmented:!1,tabsClass:"account-overview no-padding bordered-header content-block"},r.a.createElement(K.a,{title:"account.accounts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(L,{accounts:c.a.List(u),ignoredAccounts:c.a.List(d),width:i,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:l,showMyAccounts:!0})))),r.a.createElement(K.a,{title:"account.contacts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(L,{accounts:h,passwordAccount:o,ignoredAccounts:c.a.List(d),width:i,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:l,isContactsList:!0})))),r.a.createElement(K.a,{title:"account.recent"},r.a.createElement(I.a,{accountsList:t,limit:10,compactView:!1,fullHeight:!0,showFilters:!0,dashboard:!0})))))}}]),t}();t.default=function(e){return r.a.createElement(ne,Y({},e,{onlyAccounts:!0}))}}}]);
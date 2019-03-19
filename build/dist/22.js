(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{220:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(5),c=a(15),s=a(90),i=a(12),l=a(23),u=a(1),p=a.n(u),m=a(4),h=a(11),d=a(17),f=a(8),b=a.n(f),g=a(3),y=a.n(g),v=a(14),E=a(85),_=a(162),w=a(341),C=a(2),k=a.n(C),A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var S=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={inputChanged:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),N(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.account,a=e.accountName;void 0===t&&(t=m.b.getAccount(a)),this.props.onAccountChanged&&t&&this.props.onAccountChanged(t),!this.props.typeahead&&a&&this.onInputChanged(a)}},{key:"componentWillReceiveProps",value:function(e){e.account&&e.account!==this.props.account&&this.props.onAccountChanged(e.account)}},{key:"getAccount",value:function(){return this.props.account}},{key:"getError",value:function(){var e=this.props,t=e.account,a=e.error;return a||!t||this.getInputType(t.get("name"))||(a=y.a.translate("account.errors.invalid")),a}},{key:"getInputType",value:function(e){return e?"#"===e[0]&&r.a.is_object_id("1.2."+e.substring(1))?"id":m.d.is_account_name(e,!0)?"name":this.props.allowPubKey&&m.i.fromPublicKeyString(e)?"pubkey":null:null}},{key:"onSelected",value:function(e){this.setState({inputChanged:!1});var t=this.getVerifiedAccountName(e),a=m.b.getAccount(t);a&&(this.props.onChange(t),this.props.onAccountChanged(a))}},{key:"onInputChanged",value:function(e){var t=this.props,a=t.onChange,n=t.onAccountChanged,o=t.accountName,r=t.typeahead;this.setState({inputChanged:!0});var c=this.getVerifiedAccountName(e),s=m.b.getAccount(c);a&&c!==o&&a(c),r||(a&&a(c),n&&n(s))}},{key:"getVerifiedAccountName",value:function(e){var t=this.props.allowUppercase,a=null;a="string"==typeof e?e:e&&e.target?e.target.value.trim():"",t||(a=a.toLowerCase());var n=a.replace("#","").match(/(?:\/account\/)(.*)(?:\/overview)/);return n&&(a=n[1]),a}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"_onAddContact",value:function(){l.a.addAccountContact(this.props.accountName)}},{key:"_onRemoveContact",value:function(){l.a.removeAccountContact(this.props.accountName)}},{key:"onAction",value:function(e){var t=this.props,a=t.onAction,n=t.disableActionButton,o=t.account,r=t.accountName;e.preventDefault(),this.getError()||!a||n||(o?a(o):"pubkey"===this.getInputType(r)&&a(r))}},{key:"render",value:function(){var e=this.props,t=e.accountName,a=e.account,n=e.allowPubKey,r=e.typeahead,c=e.disableActionButton,i=e.contacts,l=e.myActiveAccounts,u=(e.noPlaceHolder,e.useHR),h=e.labelClass,d=e.reserveErrorSpace,f=this.getInputType(t),g=[],C=this.getError(),k=l;k=k.concat(i);var N=void 0;a&&(a.isKnownScammer=E.a.isKnownScammer(a.get("name")),a.accountType=this.getInputType(a.get("name")),a.accountStatus=m.b.getAccountMemberStatus(a),a.statusText=a.isKnownScammer?y.a.translate("account.member.suspected_scammer"):y.a.translate("account.member."+a.accountStatus),N="name"===a.accountType?"#"+a.get("id").substring(4):"id"===a.accountType?a.get("name"):null),r?n&&"pubkey"===f||C||!t||a||(C=y.a.translate("account.errors.unknown")):!a&&t&&"pubkey"!==f&&(C=y.a.translate("account.errors.unknown")),n&&"pubkey"===f&&(N="Public Key"),a&&k&&(a.isFavorite=l.has(a.get("name"))||i.has(a.get("name"))),r&&k&&k.map(function(e){var t=m.b.getAccount(e),a=m.b.getAccountMemberStatus(t),n=E.a.isKnownScammer(e)?"account.member.suspected_scammer":"account.member."+a;g.push({id:e,label:e,status:y.a.translate(n),className:E.a.isKnownScammer(e)?"negative":"positive"})});var S=!!t&&g.reduce(function(e,a){return e||a.label===t},!1);if(t&&!S&&this.state.inputChanged){var O=m.b.getAccount(t),P=O?m.b.getAccountMemberStatus(O):null,T=O?E.a.isKnownScammer(O.get("name"))?y.a.translate("account.member.suspected_scammer"):y.a.translate("account.member."+P):y.a.translate("account.errors.unknown");g.push({id:this.props.accountName,label:this.props.accountName,status:T,className:E.a.isKnownScammer(t)||!O?"negative":null,disabled:!O})}g.sort(function(e,t){return e.label>t.label?1:-1});var j=this.props.account?l.has(a.get("name"))||i.has(a.get("name"))?o.a.createElement("span",{className:"tooltip green","data-place":"top","data-tip":y.a.translate("tooltip.follow_user"),onClick:this._onRemoveContact.bind(this)},o.a.createElement(v.a,{style:{position:"absolute",top:"-0.15em",right:".2em"},name:"user",title:"icons.user.following"})):o.a.createElement("span",{className:"tooltip","data-place":"top","data-tip":y.a.translate("tooltip.follow_user_add"),onClick:this._onAddContact.bind(this)},o.a.createElement(v.a,{style:{position:"absolute",top:"-0.05em",right:".2em"},name:"plus-circle",title:"icons.plus_circle.add_contact"})):null,x=b()("button btn large outline",{disabled:!(a||"pubkey"===f)||C||c});return o.a.createElement("div",{className:"account-selector",style:this.props.style},o.a.createElement("div",{className:"content-area"},this.props.label?o.a.createElement("div",{className:"header-area"+(this.props.hideImage?" no-margin":"")},o.a.createElement("label",{className:b()("right-label",a&&a.isFavorite?"positive":null,a&&a.isKnownScammer?"negative":null)},o.a.createElement("span",{style:{paddingRight:"1.5rem"}},a&&a.statusText," ",!!N&&N),j),o.a.createElement(p.a,{className:"left-label "+(h||""),component:"label",content:this.props.label}),u&&o.a.createElement("hr",null)):null,o.a.createElement("div",{className:"input-area"},o.a.createElement("div",{className:"inline-label input-wrapper"},a&&"pubkey"===a.accountType?o.a.createElement("div",{className:"account-image"},o.a.createElement(v.a,{name:"key",title:"icons.key",size:"4x"})):this.props.hideImage?null:o.a.createElement(s.a,{size:{height:this.props.size||80,width:this.props.size||80},account:a?a.get("name"):null,custom_image:null}),void 0!==this.props.typeahead?o.a.createElement(w.a,A({items:g,style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",defaultValue:this.props.accountName||"",placeholder:this.props.placeholder||y.a.translate("account.name"),ref:"user_input",onSelect:this.onSelected.bind(this),onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex,inputProps:{placeholder:"Search for an account"}},this.props.typeaheadOptions||{})):o.a.createElement("input",{style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",type:"text",value:this.props.accountName||"",placeholder:this.props.placeholder||y.a.translate("account.name"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.dropDownContent?o.a.createElement("div",{className:"form-label select floating-dropdown"},o.a.createElement(_.a,{entries:this.props.dropDownContent,values:this.props.dropDownContent.reduce(function(e,t){return t&&(e[t]=t),e},{}),singleEntry:this.props.dropDownContent[0],value:this.props.dropDownValue||"",onChange:this.props.onDropdownSelect})):null,this.props.children,this.props.onAction?o.a.createElement("button",{className:x,style:{marginLeft:4},onClick:this.onAction.bind(this)},o.a.createElement(p.a,{content:this.props.action_label})):null)),C||d?o.a.createElement("div",{className:this.props.hideImage?"has-error":"error-area",style:{marginTop:"1rem",position:"relative"}},o.a.createElement("span",null,C)):null))}}]),t}();S.propTypes={label:k.a.string,error:k.a.element,placeholder:k.a.string,onChange:k.a.func,onAccountChanged:k.a.func,onAction:k.a.func,accountName:k.a.string,account:h.a.ChainAccount,tabIndex:k.a.number,disableActionButton:k.a.bool,allowUppercase:k.a.bool,typeahead:k.a.array},S.defaultProps={autosubscribe:!1},S=Object(d.a)(S),S=Object(c.connect)(S,{listenTo:function(){return[i.a]},getProps:function(){return{myActiveAccounts:i.a.getState().myActiveAccounts,contacts:i.a.getState().accountContacts}}}),t.a=S},552:function(e,t,a){e.exports=a(137)},7821:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=a(18),i=a(23),l=a(220),u=a(90),p=a(11),m=a(17),h=a(1),d=a.n(h),f=a(342),b=a.n(f),g=a(2),y=a.n(g),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var E=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hover:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),v(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.account,n=t.image_size,r=a.get("lifetime_referrer_name")===a.get("name"),c=o.a.createElement("div",{className:"account-image"},o.a.createElement(b.a,{size:n.width,value:a.get("name")})),s=this.state.hover?!this.props.showQR:this.props.showQR;return o.a.createElement("div",{style:{maxWidth:n.width},className:"account-info"+(this.props.my_account?" my-account":"")},this.props.title?o.a.createElement("h4",null,this.props.title):null,o.a.createElement("div",{onMouseEnter:function(){e.setState({hover:!0})},onMouseLeave:function(){e.setState({hover:!1})},className:"clickable",onClick:function(){e.setState({hover:!1}),e.props.toggleQR(!e.props.showQR)}},s?c:o.a.createElement(u.a,{size:n,account:a.get("name"),custom_image:null})),o.a.createElement("p",null,o.a.createElement(d.a,{content:"account.deposit_address"}),"!"),o.a.createElement("p",{className:this.props.titleClass},o.a.createElement("span",{className:r?"lifetime":""},a.get("name"))))}}]),t}();E.propTypes={account:p.a.ChainAccount.isRequired,title:y.a.string,image_size:y.a.object.isRequired,my_account:y.a.bool},E.defaultProps={title:null,image_size:{height:120,width:120},showQR:!1,titleClass:"account-title"};var _=Object(m.a)(E),w=a(77),C=a(4),k=a(27),A=a(33),N=a(321),S=a(552),O=a.n(S),P=a(5),T=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={invoice:null,pay_from_name:null,pay_from_account:null,error:null},a.onBroadcastAndConfirm=a.onBroadcastAndConfirm.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),T(t,[{key:"componentDidMount",value:function(){var e=this,t=O.a.decode(this.props.params.data);try{Object(N.decompress)(t,function(t){var a=JSON.parse(t);Object(C.g)(C.b.getAsset,[a.currency]).then(function(t){e.setState({invoice:a,asset:t[0]})})})}catch(e){console.dir(e),this.setState({error:e.message})}}},{key:"parsePrice",value:function(e){var t=e.match(/([\d\,\.\s]+)/);return!t||t.length,parseFloat(t[1].replace(/[\,\s]/g,""))}},{key:"getTotal",value:function(e){var t=this;return e&&0!==e.length?e.reduce(function(e,a){var n=t.parsePrice(a.price);return n?e+a.quantity*n:e},0):0}},{key:"onBroadcastAndConfirm",value:function(e){if(e.included&&e.broadcasted_transaction&&(A.a.unlisten(this.onBroadcastAndConfirm),A.a.reset(),this.state.invoice.callback)){var t=e.broadcasted_transaction,a=this.state.invoice.callback+"?block="+t.ref_block_num+"&trx="+t.id();window.location.href=a}}},{key:"onPayClick",value:function(e){var t=this;e.preventDefault();var a=this.state.asset,n=P.a.get_asset_precision(a.get("precision")),o=this.getTotal(this.state.invoice.line_items),r=C.b.getAccount(this.state.invoice.to);r?i.a.transfer(this.state.pay_from_account.get("id"),r.get("id"),parseInt(o*n,10),a.get("id"),this.state.invoice.memo).then(function(){A.a.listen(t.onBroadcastAndConfirm)}).catch(function(e){console.log("error: ",e)}):k.a.error("Account "+this.state.invoice.to+" not found")}},{key:"fromChanged",value:function(e){this.setState({pay_from_name:e})}},{key:"onFromAccountChanged",value:function(e){this.setState({pay_from_account:e})}},{key:"render",value:function(){var e=this;if(console.log("-- Invoice.render --\x3e",this.state.invoice),this.state.error)return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("h4",{className:"has-error text-center"},this.state.error));if(!this.state.invoice)return null;if(!this.state.asset)return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("h4",{className:"has-error text-center"},"Asset ",this.state.invoice.currency," is not supported by this blockchain."));var t=this.state.invoice,a=this.getTotal(t.line_items),n=this.state.invoice.currency,r=null;if(this.state.pay_from_account){var i=this.state.pay_from_account.get("balances");console.log("-- Invoice.render balances --\x3e",i.get(this.state.asset.get("id"))),r=i.get(this.state.asset.get("id"))}var u=t.line_items.map(function(t){var a=e.parsePrice(t.price),r=t.quantity*a;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("div",{className:"item-name"},t.label),o.a.createElement("div",{className:"item-description"},t.quantity," x"," ",o.a.createElement(s.a,{amount:t.price,asset:n,exact_amount:!0}))),o.a.createElement("td",null,o.a.createElement(s.a,{amount:r,asset:n,exact_amount:!0})))}),p=c()("button",{disabled:!this.state.pay_from_account});return o.a.createElement("div",{className:"grid-block vertical"},o.a.createElement("div",{className:"grid-content"},o.a.createElement("div",{className:"content-block invoice"},o.a.createElement("br",null),o.a.createElement("h3",null,"Pay Invoice"),o.a.createElement("h4",null,t.memo),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(_,{title:t.to_label,account:t.to,image_size:{height:80,width:80}}),o.a.createElement("br",null),o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Items"),o.a.createElement("th",null,"Amount"))),o.a.createElement("tbody",null,u,o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right"},"Total:"),o.a.createElement("td",null,o.a.createElement(s.a,{amount:a,asset:n,exact_amount:!0}))))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",null,o.a.createElement("div",{className:"grid-block"},o.a.createElement("div",{className:"grid-content medium-4"},o.a.createElement(l.a,{label:"transfer.pay_from",accountName:this.state.pay_from_name,onChange:this.fromChanged.bind(this),onAccountChanged:this.onFromAccountChanged.bind(this),account:this.state.pay_from_name})),this.state.pay_from_account?o.a.createElement("div",{className:"grid-content medium-1"},o.a.createElement("label",null,"Balance"),o.a.createElement(w.a,{balance:r})):null),o.a.createElement("br",null),o.a.createElement("a",{className:p,onClick:this.onPayClick.bind(this)},"Pay"," ",o.a.createElement(s.a,{amount:a,asset:n,exact_amount:!0})," ","to ",t.to))))))}}]),t}();t.default=j}}]);
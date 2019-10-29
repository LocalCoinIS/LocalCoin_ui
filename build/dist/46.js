(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{5217:function(e,t,a){"use strict";a.r(t),function(e){var n=a(365),s=a(102),o=a(0),r=a.n(o),c=a(84),l=a(25),i=a(1),u=a.n(i),m=a(104),f=a(52),d=a(11),h=a(68),p=a(5),b=a(2),_=a.n(b),g=a(37),v=a(166),y=a(6),A=a.n(y),k=a(4),E=a(18),S=a(63),C=a(12),w=a.n(C),I=a(21),N=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var O=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e)),n=a.getInitialState(),o=t.props.location.query;o.from&&(n.from_name=o.from,k.b.getAccount(o.from)),o.to&&(n.to_name=o.to,k.b.getAccount(o.to)),o.amount&&(n.amount=o.amount),o.asset&&(n.asset_id=o.asset,n.asset=k.b.getAsset(o.asset)),o.memo&&(n.memo=o.memo);var r=d.a.getState().currentAccount;return n.from_name||(n.from_name=r),t.state=n,t.onTrxIncluded=t.onTrxIncluded.bind(t),t._updateFee=Object(s.a)(t._updateFee.bind(t),250),t._checkFeeStatus=t._checkFeeStatus.bind(t),t._checkBalance=t._checkBalance.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r.a.Component),N(a,[{key:"componentWillMount",value:function(){this.nestedRef=null,this._updateFee(),this._checkFeeStatus()}},{key:"shouldComponentUpdate",value:function(e,t){var a=this._getAvailableAssets().asset_types,n=this._getAvailableAssets(t).asset_types;if(1===n.length){var s=k.b.getAsset(n[0]);1!==a.length&&this.onAmountChanged({amount:t.amount,asset:s}),n[0]!==this.state.fee_asset_id&&s&&this.state.fee_asset_id!==n[0]&&this.setState({feeAsset:s,fee_asset_id:n[0]})}return!0}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.currentAccount!==this.state.from_name&&e.currentAccount!==this.props.currentAccount&&this.setState({from_name:e.currentAccount,from_account:k.b.getAccount(e.currentAccount),feeStatus:{},fee_asset_id:"1.3.0",feeAmount:new I.a({amount:0})},function(){t._updateFee(),t._checkFeeStatus(k.b.getAccount(e.currentAccount))})}},{key:"_checkBalance",value:function(){var e=this.state,t=e.feeAmount,a=e.amount,n=e.from_account,s=e.asset;if(s&&n){var o=n.getIn(["balances",s.get("id")]),r=n.getIn(["balances",t.asset_id]);if(s&&n){if(!o)return this.setState({balanceError:!0});var c=k.b.getObject(o),l=r?k.b.getObject(r):null;if(l&&0!==l.get("balance")||this.setState({fee_asset_id:"1.3.0"},this._updateFee),c&&t){var i=Object(S.a)(a,s,t,c);null!==i&&this.setState({balanceError:!i})}}}}},{key:"_checkFeeStatus",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.from_account;if(t){var a=Object.keys(t.get("balances").toJS()).sort(p.a.sortID),n={},s=[];a.forEach(function(a){s.push(Object(S.b)({accountID:t.get("id"),feeID:a,options:["price_per_kbyte"],data:{type:"memo",content:e.state.memo}}))}),Promise.all(s).then(function(t){a.forEach(function(e,a){n[e]=t[a]}),p.a.are_equal_shallow(e.state.feeStatus,n)||e.setState({feeStatus:n}),e._checkBalance()}).catch(function(e){console.error(e)})}}},{key:"_updateFee",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,a=t.fee_asset_id,n=t.from_account,s=t.asset_id,o=this._getAvailableAssets(t).fee_asset_types;if(1===o.length&&o[0]!==a&&(a=o[0]),!n)return null;Object(S.b)({accountID:n.get("id"),feeID:a,options:["price_per_kbyte"],data:{type:"memo",content:t.memo}}).then(function(t){var a=t.fee,o=t.hasBalance,r=t.hasPoolBalance;return Object(S.d)(n,a).then(function(t){return t?e.setState({fee_asset_id:s},e._updateFee):e.setState({feeAmount:a,fee_asset_id:a.asset_id,hasBalance:o,hasPoolBalance:r,error:!o||!r})})})}},{key:"fromChanged",value:function(e){e||this.setState({from_account:null}),this.setState({from_name:e,error:null,propose:!1,propose_account:""})}},{key:"toChanged",value:function(e){this.setState({to_name:e,error:null})}},{key:"onFromAccountChanged",value:function(e){var t=this;this.setState({from_account:e,error:null},function(){t._updateFee(),t._checkFeeStatus()})}},{key:"onToAccountChanged",value:function(e){this.setState({to_account:e,error:null})}},{key:"onAmountChanged",value:function(e){var t=e.amount,a=e.asset;a&&this.setState({amount:t,asset:a,asset_id:a.get("id"),error:null},this._checkBalance)}},{key:"onFeeChanged",value:function(e){var t=e.asset;this.setState({feeAsset:t,fee_asset_id:t.get("id"),error:null},this._updateFee)}},{key:"onMemoChanged",value:function(e){this.setState({memo:e.target.value},this._updateFee)}},{key:"onTrxIncluded",value:function(e){e.included&&e.broadcasted_transaction?(g.a.unlisten(this.onTrxIncluded),g.a.reset()):e.closed&&(g.a.unlisten(this.onTrxIncluded),g.a.reset())}},{key:"onPropose",value:function(e,t){t.preventDefault(),this.setState({propose:e,propose_account:null})}},{key:"onProposeAccount",value:function(e){this.setState({propose_account:e})}},{key:"resetForm",value:function(){this.setState({memo:"",to_name:"",amount:""})}},{key:"onSubmit",value:function(t){var a=this;t.preventDefault(),this.setState({error:null});var n=this.state,s=n.asset,o=n.amount,r=new I.a({real:o,asset_id:s.get("id"),precision:s.get("precision")});l.a.transfer(this.state.from_account.get("id"),this.state.to_account.get("id"),r.getAmount(),s.get("id"),this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo,this.state.propose?this.state.propose_account:null,this.state.feeAsset?this.state.feeAsset.get("id"):"1.3.0").then(function(){a.resetForm.call(a),g.a.unlisten(a.onTrxIncluded),g.a.listen(a.onTrxIncluded)}).catch(function(e){var t=e.message?e.message.split("\n")[1]||e.message:null;console.log("error: ",e,t),a.setState({error:t})})}},{key:"setNestedRef",value:function(e){this.nestedRef=e}},{key:"_setTotal",value:function(e,t){var a=this.state.feeAmount,n=k.b.getObject(t),s=k.b.getObject(e),o=new I.a({amount:n.get("balance"),asset_id:s.get("id"),precision:s.get("precision")});n&&(a.asset_id===o.asset_id&&o.minus(a),this.setState({amount:o.getAmount({real:!0})},this._checkBalance))}},{key:"_getAvailableAssets",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=this.state.feeStatus;var a=e.from_account,n=e.from_error,s=[],o=[];if(!a||!a.get("balances")||n)return{asset_types:s,fee_asset_types:o};var r=e.from_account.get("balances").toJS();for(var c in s=Object.keys(r).sort(p.a.sortID),o=Object.keys(r).sort(p.a.sortID),r){var l=k.b.getObject(r[c]);l&&0===l.get("balance")&&(s.splice(s.indexOf(c),1),-1!==o.indexOf(c)&&o.splice(o.indexOf(c),1))}return{asset_types:s,fee_asset_types:o=o.filter(function(e){return(void 0===t[a=e]||t[a]&&t[a].hasPoolBalance)&&function(e){return void 0===t[e]||t[e]&&t[e].hasBalance}(e);var a})}}},{key:"render",value:function(){var e=null,t=this.state,a=t.propose,s=t.from_account,o=t.to_account,l=t.asset,i=t.asset_id,p=t.propose_account,b=t.feeAmount,g=t.amount,y=t.error,E=t.to_name,S=t.from_name,C=t.memo,I=t.feeAsset,N=t.fee_asset_id,O=t.balanceError,F=d.a.isMyAccount(s)||S===this.props.passwordAccount;!s||F||a||(e=r.a.createElement("span",null,_.a.translate("account.errors.not_yours")," (",r.a.createElement("a",{onClick:this.onPropose.bind(this,!0)},_.a.translate("propose")),")"));var x=this._getAvailableAssets(),j=x.asset_types,B=x.fee_asset_types,P=null,T=this.state.feeAmount.getAmount({real:!0});if(s&&s.get("balances")&&!e){var D=s.get("balances").toJS();if(1===j.length&&(l=k.b.getAsset(j[0])),j.length>0){var R=l?l.get("id"):j[0],J=I?I.get("id"):"1.3.0";P=r.a.createElement("span",{style:{borderBottom:"#A09F9F 1px dotted",cursor:"pointer"},onClick:this._setTotal.bind(this,R,D[R],T,J)},r.a.createElement(u.a,{component:"span",content:"transfer.available"}),":"," ",r.a.createElement(c.a,{balance:D[R]}))}else P="No funds"}var M=a&&!p,z=parseFloat(String.prototype.replace.call(g,/,/g,"")),q=z&&!Object(n.a)(z),L=o&&o.get("name")===E,V=!s||!L||!q||!l||e||M||O,W=A.a.Set();W=W.add(s);var H=1;return r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"grid-block shrink vertical medium-horizontal",style:{paddingTop:"2rem"}},r.a.createElement("form",{style:{paddingBottom:20,overflow:"visible"},className:"grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",onSubmit:this.onSubmit.bind(this),noValidate:!0},r.a.createElement(u.a,{content:"transfer.header",component:"h2"}),r.a.createElement("div",{className:"content-block"},r.a.createElement(f.a,{label:"transfer.from",ref:"from",accountName:S,onChange:this.fromChanged.bind(this),onAccountChanged:this.onFromAccountChanged.bind(this),account:s,size:60,error:e,typeahead:!0,tabIndex:H++})),r.a.createElement("div",{className:"content-block"},r.a.createElement(f.a,{label:"transfer.to",ref:"to",accountName:E,onChange:this.toChanged.bind(this),onAccountChanged:this.onToAccountChanged.bind(this),account:o,size:60,tabIndex:H++,typeahead:!0})),r.a.createElement("div",{className:"content-block transfer-input"},r.a.createElement(h.a,{label:"transfer.amount",amount:g,onChange:this.onAmountChanged.bind(this),asset:j.length>0&&l?l.get("id"):i||j[0],assets:j,display_balance:P,tabIndex:H++}),this.state.balanceError?r.a.createElement("p",{className:"has-error no-margin",style:{paddingTop:10}},r.a.createElement(u.a,{content:"transfer.errors.insufficient"})):null),r.a.createElement("div",{className:"content-block transfer-input"},C&&C.length?r.a.createElement("label",{className:"right-label"},C.length):null,r.a.createElement(u.a,{className:"left-label tooltip",component:"label",content:"transfer.memo","data-place":"top","data-tip":_.a.translate("tooltip.memo_tip")}),r.a.createElement("textarea",{style:{marginBottom:0},rows:"3",value:C,tabIndex:H++,onChange:this.onMemoChanged.bind(this)}),this.state.propose?r.a.createElement("div",{className:"error-area",style:{position:"absolute"}},r.a.createElement(u.a,{content:"transfer.warn_name_unable_read_memo",name:this.state.from_name})):null),r.a.createElement("div",{className:"content-block transfer-input fee-row"+(this.state.propose?" proposal":"")},r.a.createElement(h.a,{refCallback:this.setNestedRef.bind(this),label:"transfer.fee",disabled:!0,amount:T,onChange:this.onFeeChanged.bind(this),asset:B.length&&b?b.asset_id:1===B.length?B[0]:N||B[0],assets:B,tabIndex:H++,error:!1===this.state.hasPoolBalance?"transfer.errors.insufficient":null}),a?r.a.createElement("button",{className:w()("button float-right no-margin",{disabled:V}),type:"submit",value:"Submit",tabIndex:H++},r.a.createElement(u.a,{component:"span",content:"propose"})):r.a.createElement("button",{className:w()("button float-right no-margin",{disabled:V}),type:"submit",value:"Submit",tabIndex:H++},r.a.createElement(u.a,{component:"span",content:"transfer.send"}))),a?r.a.createElement("div",{className:"full-width-content form-group transfer-input"},r.a.createElement("label",{className:"left-label"},r.a.createElement(u.a,{content:"account.propose_from"})),r.a.createElement(m.a,{account_names:d.a.getMyAccounts(),onChange:this.onProposeAccount.bind(this),tabIndex:H++})):null,y?r.a.createElement("div",{className:"content-block has-error"},y):null,r.a.createElement("div",null,a?r.a.createElement("span",null,r.a.createElement("button",{className:" button",onClick:this.onPropose.bind(this,!1),tabIndex:H++},r.a.createElement(u.a,{component:"span",content:"cancel"}))):null)),r.a.createElement("div",{className:"grid-content small-12 medium-6 large-4 large-offset-1 right-column"},r.a.createElement("div",{className:"grid-content no-padding"},r.a.createElement(v.a,{accountsList:W,limit:25,compactView:!0,filter:"transfer",fullHeight:!0}))),r.a.createElement("div",{className:"grid-content medium-6 large-4"})))}}],[{key:"getInitialState",value:function(){return{from_name:"",to_name:"",from_account:null,to_account:null,amount:"",asset_id:null,asset:null,memo:"",error:null,propose:!1,propose_account:"",feeAsset:null,fee_asset_id:"1.3.0",feeAmount:new I.a({amount:0}),feeStatus:{}}}}]),a}();t.default=Object(E.connect)(O,{listenTo:function(){return[d.a]},getProps:function(){return{currentAccount:d.a.getState().currentAccount,passwordAccount:d.a.getState().passwordAccount,contactsList:d.a.getState().accountContacts}}})}.call(this,a(65).Buffer)}}]);
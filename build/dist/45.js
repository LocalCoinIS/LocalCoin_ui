(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{557:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a(14),l=a(10),i=a(1),s=a.n(i),u=a(29),p=a(280),m=(a(11),a(34)),h=a(118),f=a.n(h),d=a(9),_=a(131),g=a(119),y=a(51),v=a(3),w=a.n(v),b=a(21),E=a.n(b),k=a(36),N=a(2),x=a.n(N),O=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var S=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=a.getInitialState(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),O(t,[{key:"getInitialState",value:function(){return{open:!1}}},{key:"show",value:function(){var e=this;this.setState({open:!0},function(){E.a.publish(e.props.id,"open")})}},{key:"onClose",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({open:!1},function(){t&&E.a.publish(e.props.id,"close")})}},{key:"render",value:function(){return this.state.open?r.a.createElement(k.a,{id:this.props.id,overlay:!0,onClose:this.onClose.bind(this,!1)},r.a.createElement("div",{className:"grid-block vertical no-overflow"},r.a.createElement("div",{className:"content-block registration-types",style:{textAlign:"center",textTransform:"none"}},r.a.createElement(l.b,{className:"registration-type",to:"/create-account/password"},r.a.createElement("div",{className:"registration-type__heading"},w.a.translate("account.create_account_type.cloud_wallet.head")),r.a.createElement("span",{className:"registration-type__icon"},r.a.createElement("svg",{fill:"#abbfd9",height:"50px","enable-background":"new 0 0 548.176 548.176",viewBox:"0 0 548.176 548.176",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m524.183 297.065c-15.985-19.893-36.265-32.691-60.815-38.399 7.81-11.993 11.704-25.126 11.704-39.399 0-20.177-7.139-37.401-21.409-51.678-14.273-14.272-31.498-21.411-51.675-21.411-18.271 0-34.071 5.901-47.39 17.703-11.225-27.028-29.075-48.917-53.529-65.667-24.46-16.746-51.728-25.125-81.802-25.125-40.349 0-74.802 14.279-103.353 42.83-28.553 28.544-42.825 62.999-42.825 103.351 0 2.856.191 6.945.571 12.275-22.078 10.279-39.876 25.838-53.389 46.686-13.512 20.836-20.271 43.824-20.271 68.949 0 35.211 12.517 65.333 37.544 90.359 25.028 25.033 55.15 37.548 90.362 37.548h310.636c30.259 0 56.096-10.715 77.512-32.121 21.413-21.412 32.121-47.249 32.121-77.515-.003-25.694-8.001-48.499-23.992-68.386z"}))),r.a.createElement("ul",{className:"registration-type__list"},r.a.createElement("li",{className:"registration-type__choose"},w.a.translate("account.create_account_type.cloud_wallet.feature_1_1"),r.a.createElement("span",{className:"red"},w.a.translate("account.create_account_type.cloud_wallet.feature_1_2"))),r.a.createElement("li",null,w.a.translate("account.create_account_type.cloud_wallet.feature_2")),r.a.createElement("li",null,w.a.translate("account.create_account_type.cloud_wallet.feature_3")),r.a.createElement("li",null,w.a.translate("account.create_account_type.cloud_wallet.feature_4")))),r.a.createElement(l.b,{className:"registration-type",to:"/create-account/wallet"},r.a.createElement("div",{className:"registration-type__heading"},w.a.translate("account.create_account_type.local_wallet.head")),r.a.createElement("span",{className:"registration-type__icon"},r.a.createElement("svg",{fill:"#abbfd9",height:"37px",viewBox:"0 0 414.8 312.8",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m360.4 0h-312.8a47.6 47.6 0 0 0 -47.6 47.6v231.2a34 34 0 0 0 34 34h312.8a34 34 0 0 0 34-34v-91.46h-64.94a41.53 41.53 0 0 1 -41.41-41.41v-18.57a41.53 41.53 0 0 1 41.41-41.36h64.94v-24.8a27.2 27.2 0 0 0 -27.2-27.2h-312.8a6.8 6.8 0 1 1 0-13.6h312.8a40.8 40.8 0 0 1 40.8 40.8v209.1a47.71 47.71 0 0 0 20.4-39.1v-176.8a54.41 54.41 0 0 0 -54.4-54.4z"}),r.a.createElement("path",{d:"m378.19 134.34a5.35 5.35 0 0 0 -4-1.69h-1.89v-11.66a26.56 26.56 0 0 0 -7.84-19.17 25.69 25.69 0 0 0 -37.3.1 26.56 26.56 0 0 0 -7.74 19.21v11.66h-1.89a5.37 5.37 0 0 0 -4 1.71 5.7 5.7 0 0 0 -1.64 4.13l.09 35a5.72 5.72 0 0 0 1.67 4.13 5.39 5.39 0 0 0 4 1.69l56.66-.15a5.43 5.43 0 0 0 4-1.71 5.69 5.69 0 0 0 1.64-4.14l-.09-35a5.69 5.69 0 0 0 -1.67-4.11zm-17.19-1.66-30.22.08v-11.66a15.17 15.17 0 0 1 4.4-11 14.79 14.79 0 0 1 21.36-.06 15.2 15.2 0 0 1 4.46 11z"}))),r.a.createElement("ul",{className:"registration-type__list"},r.a.createElement("li",{className:"registration-type__choose"},w.a.translate("account.create_account_type.local_wallet.feature_1_1"),r.a.createElement("span",{className:"green"},w.a.translate("account.create_account_type.local_wallet.feature_1_2"))),r.a.createElement("li",null,w.a.translate("account.create_account_type.local_wallet.feature_2")),r.a.createElement("li",null,w.a.translate("account.create_account_type.local_wallet.feature_3"))))))):null}}]),t}();S.contextTypes={router:x.a.object};var j=S,C=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var A=function(e){var t=e.flag,a=e.width,n=void 0===a?50:a,o=e.height,c=void 0===o?50:o;return r.a.createElement("img",{height:c,width:n,src:"/language-dropdown/"+t.toUpperCase()+".png"})},P=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.updateStep=function(e){a.setState({step:e})},a.state={step:1,locales:d.a.getState().defaults.locale,currentLocale:d.a.getState().settings.get("locale")},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),C(t,[{key:"componentDidUpdate",value:function(){var e=c.a.getMyAccounts(),t=r.a.Children.count(this.props.children);this.props.router&&Array.isArray(e)&&0!==e.length&&0===t&&this.props.router.push("/account/"+this.props.currentAccount)}},{key:"componentWillMount",value:function(){var e=this;Object(p.a)(function(t){e.setState({incognito:t})})}},{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,t=a(3),n=r.a.Children.count(this.props.children),o=this,c=r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{updateStep:o.updateStep,currentAccount:o.props.currentAccount})}),i=r.a.createElement(f.a,null,r.a.createElement(f.a.Button,{title:"",style:{width:"64px"}},r.a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button arrow-down"},r.a.createElement(A,{flag:this.state.currentLocale}))),r.a.createElement(f.a.Content,null,r.a.createElement("ul",{className:"no-first-element-top-border"},this.state.locales.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("a",{onClick:function(a){a.preventDefault(),g.a.switchLocale(t),e.setState({currentLocale:t})}},r.a.createElement("div",{className:"table-cell"},r.a.createElement(A,{width:"20",height:"20",flag:t})),r.a.createElement("div",{className:"table-cell",style:{paddingLeft:10}},r.a.createElement(s.a,{content:"languages."+t}))))}))));return r.a.createElement("div",{className:"grid-block align-center"},r.a.createElement("div",{className:"grid-block shrink vertical"},r.a.createElement("div",{className:"grid-content shrink text-center account-creation"},r.a.createElement("div",null,r.a.createElement("img",{src:y.logoLight,height:"50px",width:"50px"})),0==n?null:r.a.createElement("div",null,r.a.createElement(s.a,{content:2==this.state.step?"header.backup_your_brainKey":"header.create_account",component:"h4"})),1==n?null:r.a.createElement("div",null,r.a.createElement(s.a,{content:"account.intro_text_title",component:"h4",wallet_name:Object(_.f)()}),r.a.createElement(s.a,{unsafe:!0,content:"account.intro_text_1",component:"p"}),r.a.createElement("div",{className:"shrink text-center"},r.a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},r.a.createElement("div",{className:"grp-menu-item overflow-visible",style:{margin:"0 auto"},"data-intro":t.translate("walkthrough.language_flag")},i)))),n?null:r.a.createElement("div",{className:"grid-block account-login-options"},r.a.createElement(l.b,{id:"account_login_button",to:"/create-account/wallet",className:"button primary","data-intro":t.translate("walkthrough.create_cloud_wallet"),onClick:function(t){t.preventDefault(),e.refs.registration_modal.show()}},w.a.translate("header.create_account")),r.a.createElement("span",{id:"account_login_button2",className:"button primary outline",style:{color:"#00195b"},onClick:function(){m.a.unlock.defer()}},w.a.translate("header.unlock_short"))),n?null:r.a.createElement("div",{className:"additional-account-options"},r.a.createElement("h5",{style:{textAlign:"center"}},r.a.createElement(u.a,{string:"account.optional.formatter",keys:[{type:"link",value:"/settings/restore",translation:"account.optional.restore_link",dataIntro:t.translate("walkthrough.restore_account"),arg:"restore_link"},{type:"link",value:"/create-account/password",translation:"account.optional.restore_form",dataIntro:t.translate("walkthrough.create_local_wallet"),arg:"restore_form"}]}))),c)),r.a.createElement(j,{id:"registration-modal",ref:"registration_modal"}))}}]),t}();t.default=Object(o.connect)(P,{listenTo:function(){return[c.a]},getProps:function(){return{currentAccount:c.a.getState().currentAccount||c.a.getState().passwordAccount}}})}}]);
"use strict";(self.webpackChunkYSH_website=self.webpackChunkYSH_website||[]).push([[501],{9472:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(7363);var a=n(6417),r=function(e){var t=e.title,n=(e.className,e.children);return function(e){(0,i.useEffect)((function(){document.title=e}),[])}(t),(0,a.jsx)(a.Fragment,{children:n})}},7687:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(7363),a=n(6711);var r=n.p+"static/media/home.3a06abd8387c3b88848250ba481c63f1.svg";var c=n.p+"static/media/home-active.0a143812d23e7b5167b1dd3ee15bedeb.svg";var s=n.p+"static/media/my.24f170094b2e0a5c57ece6889b8c7fae.svg";var o=n.p+"static/media/my-active.bc62c4d006390cdb2a0e05a84c5ef1d7.svg",u=[{name:"\u9996\u9875",icon:r,active:c,route:"/home",title:"\u9996\u9875"},{name:"useStoress",icon:s,active:o,route:"/useStore",title:"useStore"},{name:"\u6211\u7684",icon:s,active:o,route:"/my",title:"\u6211\u7684"}],l="index_tabBar__PWvF5",d="index_tabBarItem__2EaU6",m="index_active__kfTOw",f=n(6417),v=function(){var e=(0,a.useNavigate)(),t=(0,a.useLocation)().pathname,n=(0,i.useMemo)((function(){return u.map((function(n){return(0,f.jsxs)("div",{className:d,onClick:function(){return e(n.route)},children:[(0,f.jsx)("img",{src:t===n.route?n.active:n.icon,alt:""}),(0,f.jsx)("div",{className:t===n.route?m:"",children:n.name})]},n.name)}))}),[t]);return(0,f.jsx)("div",{className:l,children:n})}},4501:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(7687),a=n(6338),r="index_useStore__lWZhj",c="index_title__Pv3p4",s="index_github__XdRKx",o="index_author__dOlpI",u="index_btn__mi6Y3",l=n(2644),d=n(5560),m=n(9472),f=n(6417),v=(0,d.observer)((function(){return(0,f.jsx)(m.Z,{title:"\u6211\u7684",children:(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("img",{src:a,alt:""}),(0,f.jsx)("span",{className:c,children:"React H5 \u5f00\u53d1\u6a21\u677f"}),(0,f.jsxs)("span",{className:s,children:["\u9879\u76ee\u5730\u5740\uff1a",(0,f.jsx)("a",{href:"https://github.com/talktao/talk-react-app",children:"https://github.com/talktao/talk-react-app"})]}),(0,f.jsx)("span",{className:o,children:"\u9879\u76ee\u4f5c\u8005\uff1atalktao"}),(0,f.jsx)("span",{className:u,children:""===l.Z.magicText?(0,f.jsx)("button",{onClick:function(){l.Z.triggerMagic("\u771f\u4e56\uff0c\u5982\u679c\u5bf9\u60a8\u6709\u5e2e\u52a9\u8bf7\u5728github\u4e0a\u70b9\u4e2a\u661f\u661f\u54e6~ ")},children:"\u70b9\u6211\u6709\u9b54\u6cd5"}):l.Z.magicText}),(0,f.jsx)(i.Z,{})]})})}))},2644:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(9142);function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(0,i.Z)(a.key),a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=n(7821),s=new(r((function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.magicText="",this.triggerMagic=function(e){t.magicText=e,console.log(t.magicText,"this.magicText")},(0,c.makeAutoObservable)(this)})))},6338:function(e,t,n){e.exports=n.p+"static/media/logo.6679f20bad0a3b0859bf.png"},9142:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(1002);function a(e){var t=function(e,t){if("object"!==(0,i.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==(0,i.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,i.Z)(t)?t:String(t)}}}]);
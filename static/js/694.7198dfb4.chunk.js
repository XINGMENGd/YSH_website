"use strict";(self.webpackChunkYSH_website=self.webpackChunkYSH_website||[]).push([[694],{9472:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(7363);var r=n(6417),a=function(e){var t=e.title,n=(e.className,e.children);return function(e){(0,i.useEffect)((function(){document.title=e}),[])}(t),(0,r.jsx)(r.Fragment,{children:n})}},7687:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(7363),r=n(6711);var a=n.p+"static/media/home.3a06abd8387c3b88848250ba481c63f1.svg";var c=n.p+"static/media/home-active.0a143812d23e7b5167b1dd3ee15bedeb.svg";var o=n.p+"static/media/my.24f170094b2e0a5c57ece6889b8c7fae.svg";var u=n.p+"static/media/my-active.bc62c4d006390cdb2a0e05a84c5ef1d7.svg",s=[{name:"\u9996\u9875",icon:a,active:c,route:"/home",title:"\u9996\u9875"},{name:"useStore",icon:o,active:u,route:"/useStore",title:"useStore"},{name:"\u6211\u7684",icon:o,active:u,route:"/my",title:"\u6211\u7684"}],f="index_tabBar__PWvF5",l="index_tabBarItem__2EaU6",v="index_active__kfTOw",m=n(6417),d=function(){var e=(0,r.useNavigate)(),t=(0,r.useLocation)().pathname,n=(0,i.useMemo)((function(){return s.map((function(n){return(0,m.jsxs)("div",{className:l,onClick:function(){return e(n.route)},children:[(0,m.jsx)("img",{src:t===n.route?n.active:n.icon,alt:""}),(0,m.jsx)("div",{className:t===n.route?v:"",children:n.name})]},n.name)}))}),[t]);return(0,m.jsx)("div",{className:f,children:n})}},2694:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(7687),r="index_my__fsuQX",a=(n(2644),n(5560)),c=n(9472),o=n(6417),u=(0,a.observer)((function(){return(0,o.jsx)(c.Z,{title:"\u6211\u7684",children:(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("div",{children:"\u6211\u7684"}),(0,o.jsx)(i.Z,{})]})})}))},2644:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(9142);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(0,i.Z)(r.key),r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=n(7821),o=new(a((function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.magicText="",this.triggerMagic=function(e){t.magicText=e,console.log(t.magicText,"this.magicText")},(0,c.makeAutoObservable)(this)})))},9142:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(1002);function r(e){var t=function(e,t){if("object"!==(0,i.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==(0,i.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,i.Z)(t)?t:String(t)}}}]);
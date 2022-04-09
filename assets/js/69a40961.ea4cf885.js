"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2543],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return h}});var r=n(7462),a=n(3366),l=n(7294),c=n(3905),o=n(6010),i="features_AoYx",s="feature_hdLF",m="functionTable_ERzt",u=n(9960),p=[{title:"Common Credential Provider",link:"",description:l.createElement("table",{className:m},l.createElement("th",null,"Function Group"),l.createElement("th",null,"Kind"),l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{className:"badge"},"Credential Provider")),l.createElement("td",null,l.createElement("span",{className:"badge"},"Basic"),l.createElement("br",null),l.createElement("span",{className:"badge"},"SoftKeyStore"),l.createElement("br",null),l.createElement("span",{className:"badge"},"ApiKey"))))},{title:"MS ADCS Connector",link:"ms-adcs-connector/integration-guide",description:l.createElement("table",{className:m},l.createElement("th",null,"Function Group"),l.createElement("th",null,"Kind"),l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{className:"badge"},"Authority Provider")),l.createElement("td",null,l.createElement("span",{className:"badge"},"ADCS"))))},{title:"Network Discovery Provider",link:"",description:l.createElement("table",{className:m},l.createElement("th",null,"Function Group"),l.createElement("th",null,"Kind"),l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{className:"badge"},"Discovery Provider")),l.createElement("td",null,l.createElement("span",{className:"badge"},"IP/Hostname"))))},{title:"EJBCA NG Connector",link:"",description:l.createElement("table",{className:m},l.createElement("th",null,"Function Group"),l.createElement("th",null,"Kind"),l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{className:"badge"},"Authority Provider")),l.createElement("td",null,l.createElement("span",{className:"badge"},"EJBCA"))))},{title:"Cryptosense Discovery Provider",link:"",description:l.createElement("table",{className:m},l.createElement("th",null,"Function Group"),l.createElement("th",null,"Kind"),l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{className:"badge"},"Discovery Provider")),l.createElement("td",null,l.createElement("span",{className:"badge"},"Cryptosense"))))},{title:"EJBCA Legacy Connector",link:"",description:l.createElement("table",{className:m},l.createElement("th",null,"Function Group"),l.createElement("th",null,"Kind"),l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{className:"badge"},"Authority Provider")),l.createElement("td",null,l.createElement("span",{className:"badge"},"LegacyEjbca"))))}];function d(e){var t=e.title,n=e.link,r=e.description;return l.createElement("div",{className:(0,o.Z)("col col--6")},l.createElement("div",{className:(0,o.Z)(s,"text--center")},l.createElement("h3",null,l.createElement(u.Z,{to:n},t)),r))}function f(){return l.createElement("section",{className:i},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},p.map((function(e,t){return l.createElement(d,(0,r.Z)({key:t},e))})))))}var E=["components"],v={},y="Overview",b={unversionedId:"connectors/overview",id:"connectors/overview",title:"Overview",description:"Connector plays an important role in the platform, providing the functionality for a specific technology, even when proprietary. For more information, see Connector.",source:"@site/docs/12-connectors/01-overview.mdx",sourceDirName:"12-connectors",slug:"/connectors/overview",permalink:"/docs/connectors/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Feedback and Support",permalink:"/docs/feedback-support"},next:{title:"Integration Guide",permalink:"/docs/connectors/ms-adcs-connector/integration-guide"}},g={},h=[],N={toc:h};function k(e){var t=e.components,n=(0,a.Z)(e,E);return(0,c.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"overview"},"Overview"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Connector")," plays an important role in the platform, providing the functionality for a specific technology, even when proprietary. For more information, see ",(0,c.kt)("a",{parentName:"p",href:"../concept-design/architecture/connector"},(0,c.kt)("inlineCode",{parentName:"a"},"Connector")),"."),(0,c.kt)("p",null,"The following ",(0,c.kt)("inlineCode",{parentName:"p"},"Connectors")," are available:"),(0,c.kt)(f,{mdxType:"ConnectorList"}))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1181],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1160:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},c="Overview",d={unversionedId:"quick-start/overview",id:"quick-start/overview",title:"Overview",description:"The quick start is intended to help users running the platform to get started with the basic operations and functions.",source:"@site/docs/05-quick-start/01-overview.md",sourceDirName:"05-quick-start",slug:"/quick-start/overview",permalink:"/docs/quick-start/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Super Administrator",permalink:"/docs/installation-guide/create-super-administrator"},next:{title:"Register Connector",permalink:"/docs/quick-start/certificate-discovery/register-connector"}},s=[{value:"Discovery Quick Start",id:"discovery-quick-start",children:[],level:2},{value:"Certificate Management Quick Start",id:"certificate-management-quick-start",children:[],level:2}],p={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The quick start is intended to help users running the platform to get started with the basic operations and functions.\nFor more in-depth information, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"../concept-design/overview"},"Concept and Design")," and API documentation."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the quick start to learn the basics about the platform and the process of creating your own certificate management services. The quick start allows you to use the platform in few minutes."))),(0,i.kt)("h2",{id:"discovery-quick-start"},"Discovery Quick Start"),(0,i.kt)("p",null,"Discovery is one of the basic operations you need to run in order to collect information about the certificates and start to manage them.\nTo create the discovery process and search for certificates in the network, follow the steps below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"#"),(0,i.kt)("th",{parentName:"tr",align:null},"Step"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"1.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-discovery/register-connector"},"Register Connector")),(0,i.kt)("td",{parentName:"tr",align:null},"Register ",(0,i.kt)("inlineCode",{parentName:"td"},"Connector")," that implements ",(0,i.kt)("inlineCode",{parentName:"td"},"Discovery Provider")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Functional Group"),". For the quick stat we are going to use the ",(0,i.kt)("inlineCode",{parentName:"td"},"Network Discovry Provider")," that allows us to search for certificate in the network, based on IP address or hostname.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-discovery/create-discovery"},"Create Discovery")),(0,i.kt)("td",{parentName:"tr",align:null},"Create new ",(0,i.kt)("inlineCode",{parentName:"td"},"Discovery")," to start the discovery process.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-discovery/check-discovery"},"Check Discovery Status")),(0,i.kt)("td",{parentName:"tr",align:null},"Check the status of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Discovery")," to see if it is still running, or finished.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"4.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-discovery/get-discovery-results"},"Get Discovery Results")),(0,i.kt)("td",{parentName:"tr",align:null},"Show the results of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Discovery")," process with all certificates discovered and metadata.")))),(0,i.kt)("h2",{id:"certificate-management-quick-start"},"Certificate Management Quick Start"),(0,i.kt)("p",null,"To create a certificate management service and start managing certificates, follow the steps below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"#"),(0,i.kt)("th",{parentName:"tr",align:null},"Step"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"1.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-management/register-connectors"},"Register Connectors")),(0,i.kt)("td",{parentName:"tr",align:null},"Register ",(0,i.kt)("inlineCode",{parentName:"td"},"Connectors")," that implements ",(0,i.kt)("inlineCode",{parentName:"td"},"CA Connector")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Credential Provder")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Functional Group"),". For the quick stat we are going to use the ",(0,i.kt)("inlineCode",{parentName:"td"},"MS ADCS CA Connector")," that allows us to work with the MS certification authority and ",(0,i.kt)("inlineCode",{parentName:"td"},"Common Credential Provider")," using which we can create basic credential.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-management/create-credential"},"Create Credential")),(0,i.kt)("td",{parentName:"tr",align:null},"Create new basic username/password ",(0,i.kt)("inlineCode",{parentName:"td"},"Credential"),". This is needed in order to establish authorized connection with the CA.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-management/create-authority"},"Create Authority")),(0,i.kt)("td",{parentName:"tr",align:null},"Create ",(0,i.kt)("inlineCode",{parentName:"td"},"Authority")," to establish ",(0,i.kt)("inlineCode",{parentName:"td"},"ADCS")," CA instance connection with provided authentication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"4.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-management/create-ra-profile"},"Create RA Profile")),(0,i.kt)("td",{parentName:"tr",align:null},"Create ",(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile")," to manage certificates with the specific certificate template.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"5.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-management/issue-certificate"},"Issue Certificate")),(0,i.kt)("td",{parentName:"tr",align:null},"Issue new ",(0,i.kt)("inlineCode",{parentName:"td"},"Certificate")," using the ",(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"6.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-management/renew-certificate"},"Renew Certificate")),(0,i.kt)("td",{parentName:"tr",align:null},"Renew already issued and registred ",(0,i.kt)("inlineCode",{parentName:"td"},"Certificate")," using the ",(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile")," with the same ",(0,i.kt)("inlineCode",{parentName:"td"},"Attributes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"7.")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"certificate-management/revoke-certificate"},"Revoke Certificate")),(0,i.kt)("td",{parentName:"tr",align:null},"Revoke issued",(0,i.kt)("inlineCode",{parentName:"td"},"Certificate")," using the ",(0,i.kt)("inlineCode",{parentName:"td"},"RA Profile")," and provided revocation reason.")))))}m.isMDXComponent=!0}}]);
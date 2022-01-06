"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7363],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2145:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={},c="Certificate Discovery",s={unversionedId:"concept-design/modules/certificate-discovery",id:"concept-design/modules/certificate-discovery",title:"Certificate Discovery",description:"One of the most important tasks in managing the PKI Infrastructure is to know where the certificates are deployed and what is their state. Certificate Discovery allows discovering the certificates in various sources.",source:"@site/docs/02-concept-design/06-modules/05-certificate-discovery.md",sourceDirName:"02-concept-design/06-modules",slug:"/concept-design/modules/certificate-discovery",permalink:"/docs/concept-design/modules/certificate-discovery",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Certificate Inventory",permalink:"/docs/concept-design/modules/certificate-inventory"},next:{title:"Dashboards",permalink:"/docs/concept-design/modules/dashboards"}},p=[{value:"Discovery Process",id:"discovery-process",children:[],level:2},{value:"Operations",id:"operations",children:[],level:2},{value:"Discovery Status",id:"discovery-status",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"certificate-discovery"},"Certificate Discovery"),(0,a.kt)("p",null,"One of the most important tasks in managing the PKI Infrastructure is to know where the certificates are deployed and what is their state. ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate Discovery")," allows discovering the certificates in various sources."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate Discovery")," works with the help of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," that is implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery Provider")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Groups"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Discovery Provider")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Group")," has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")," for the inputs related to the discovery process."))),(0,a.kt)("p",null,"The logic of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate Discovery")," is implemented by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Core")," and specific discovery process by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),"."),(0,a.kt)("h2",{id:"discovery-process"},"Discovery Process"),(0,a.kt)("p",null,"The following steps explain the process of ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate Discovery"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Client")," defines the ",(0,a.kt)("inlineCode",{parentName:"li"},"Connector")," to initiate the ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate Discovery")),(0,a.kt)("li",{parentName:"ol"},"Get the list of ",(0,a.kt)("inlineCode",{parentName:"li"},"Attributes")," for the selected ",(0,a.kt)("inlineCode",{parentName:"li"},"Connector")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Kind")),(0,a.kt)("li",{parentName:"ol"},"Provide the proper values for the input ",(0,a.kt)("inlineCode",{parentName:"li"},"Attributes")),(0,a.kt)("li",{parentName:"ol"},"Initiate ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate Discovery"))),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"Core")," receives the discovery request, ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")," are forwarded to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Core")," is checking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," for the status of the discovery process. when the discovery is completed, ",(0,a.kt)("inlineCode",{parentName:"p"},"Core")," collects all ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificates"),"."),(0,a.kt)("h2",{id:"operations"},"Operations"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Certificate Discovery")," allows you to perform the following operations:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Create"),(0,a.kt)("td",{parentName:"tr",align:null},"You can create a new discovery with any desired ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," that implements ",(0,a.kt)("inlineCode",{parentName:"td"},"Discovery Provider")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Function Group"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"List"),(0,a.kt)("td",{parentName:"tr",align:null},"List of all discovery processes that has been initiated through the platform. The information includes the ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," and the ",(0,a.kt)("inlineCode",{parentName:"td"},"Kind"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Details"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides details about the ",(0,a.kt)("inlineCode",{parentName:"td"},"Certificate Discovery"),".")))),(0,a.kt)("h2",{id:"discovery-status"},"Discovery Status"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"In Progress"),(0,a.kt)("td",{parentName:"tr",align:null},"The process has not finished yet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Completed"),(0,a.kt)("td",{parentName:"tr",align:null},"The process has already finished")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Failed"),(0,a.kt)("td",{parentName:"tr",align:null},"Some errors have occurred")))))}m.isMDXComponent=!0}}]);
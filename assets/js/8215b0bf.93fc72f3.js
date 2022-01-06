"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[351],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Database control",hide_table_of_contents:!1},l="Database control",c={type:"mdx",permalink:"/contributors/database",source:"@site/src/pages/contributors/database.md"},p=[{value:"Database changes rules",id:"database-changes-rules",children:[],level:2},{value:"Migration scripts naming conventions",id:"migration-scripts-naming-conventions",children:[],level:2},{value:"Database schema",id:"database-schema",children:[],level:2},{value:"Complex migrations using Java",id:"complex-migrations-using-java",children:[],level:2},{value:"Migration scripts location",id:"migration-scripts-location",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-control"},"Database control"),(0,o.kt)("p",null,"The platform is using ",(0,o.kt)("a",{parentName:"p",href:"https://flywaydb.org/"},"Flyway")," as a version control for the database and all related migration scripts."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Flyway is an open-source database migration tool. It is used to manage the database schema and data.\nIt is applied from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Core")," version ",(0,o.kt)("inlineCode",{parentName:"p"},"2.0.3")," and above."))),(0,o.kt)("p",null,"To learn more about the Flyway, its concept, and how to start, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://flywaydb.org/documentation/"},"Flyway documentation"),"."),(0,o.kt)("h2",{id:"database-changes-rules"},"Database changes rules"),(0,o.kt)("p",null,"Because each contributor works independently on different features, we need to follow process when implementing database migrations and resolving any potential conflicts. To make sure that it works smoothly, you need to follow these rules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Work on your own database copy or instance to not break any other contributor's code."),(0,o.kt)("li",{parentName:"ol"},"Use your own branch to maintain code changes and database migration scripts. In case your work depends on the work of another contributor, work together in the same branch."),(0,o.kt)("li",{parentName:"ol"},"You are responsible for all database migration scripts related to your changes, including the rollbacks in case of any errors."),(0,o.kt)("li",{parentName:"ol"},"Follow naming conventions for the migration scripts.")),(0,o.kt)("h2",{id:"migration-scripts-naming-conventions"},"Migration scripts naming conventions"),(0,o.kt)("p",null,"Flyway recognizes integer numbers as version of the migration script. Increased number in the version means migration that should be applied, if not done yet.\nSQL migrations must comply with the following naming pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," Prefix           Separator            Suffix\n   |                  |                  |\n |[VUR]|[YYYYMMDDHHMMSS]|__|[description]|.sql|\n            |                |\n         Version        Description\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prefix:")," V for versioned, U for undo and R for repeatable migrations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Version:")," Version in the format YYYYMMDDHHMMSS, where YYYY represent current year, MM current month, DD current day, HH current hour, MM current minute, SS current second (Not for repeatable migrations)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Separator"),": __ (two underscores)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": Underscores or spaces separate the words that describes the migration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Suffix"),": .sql")),(0,o.kt)("h2",{id:"database-schema"},"Database schema"),(0,o.kt)("p",null,"The schema of the database is managed by the configuration of the Flyway and JPA.\nYou should not include the database schema in the migration scripts."),(0,o.kt)("p",null,"Database schema can be configured by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DB_SCHEMA")," environment variable. Default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"core"),". See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Core/blob/develop/src/main/resources/application.properties"},"Core properties"),"."),(0,o.kt)("h2",{id:"complex-migrations-using-java"},"Complex migrations using Java"),(0,o.kt)("p",null,"In case the database migration cannot be expressed using the SQL or it is not easy to migrate the database using the SQL, Java-based migration can be implemented.\nFor more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://flywaydb.org/documentation/concepts/migrations.html#java-based-migrations"},"Flyway Java-based migrations"),"."),(0,o.kt)("h2",{id:"migration-scripts-location"},"Migration scripts location"),(0,o.kt)("p",null,"All migration scripts must be saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources/db/migration")," directory."),(0,o.kt)("p",null,"All Java-based migrations must be located in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java/db/migration"),"."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[983],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>b});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=m(r),d=o,b=c["".concat(p,".").concat(d)]||c[d]||u[d]||n;return r?a.createElement(b,l(l({ref:e},s),{},{components:r})):a.createElement(b,l({ref:e},s))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:o,l[1]=i;for(var m=2;m<n;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3890:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(7294);function o(t){let{url:e}=t;return a.createElement("video",{width:"1280",controls:!0},a.createElement("source",{src:e,type:"video/mp4"}),"Your browser does not support the video tag.")}},4455:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(7462),o=(r(7294),r(3905)),n=r(3890);const l={sidebar_position:5},i="Export",p={unversionedId:"basics/export",id:"basics/export",title:"Export",description:"DataLoom saves a table in a custom JSON format in a .loom file to your vault. Since this is a custom format, it is not easily read by other applications. You may want to export your data to a more common format such as CSV or Markdown.",source:"@site/docs/basics/export.mdx",sourceDirName:"basics",slug:"/basics/export",permalink:"/basics/export",draft:!1,editUrl:"https://github.com/decaf-dev/obsidian-dataloom/tree/master/docusaurus/docs/basics/export.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Embed looms",permalink:"/basics/embed-looms"},next:{title:"Import",permalink:"/basics/import"}},m={},s=[{value:"Remove markdown",id:"remove-markdown",level:2}],c={toc:s},u="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"export"},"Export"),(0,o.kt)("p",null,"DataLoom saves a table in a custom JSON format in a ",(0,o.kt)("inlineCode",{parentName:"p"},".loom")," file to your vault. Since this is a custom format, it is not easily read by other applications. You may want to export your data to a more common format such as CSV or Markdown."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the 3 dot menu in the top right corner of the loom"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Export")),(0,o.kt)("li",{parentName:"ol"},"Choose a data type: ",(0,o.kt)("em",{parentName:"li"},"CSV")," or ",(0,o.kt)("em",{parentName:"li"},"Markdown")),(0,o.kt)("li",{parentName:"ol"},"Export the data")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Download")," to download the file to your file system"),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Copy to clipboard")," to copy the file to your clipboard")),(0,o.kt)(n.Z,{url:"https://dataloom.b-cdn.net/export.mov",mdxType:"VideoEmbed"}),(0,o.kt)("h2",{id:"remove-markdown"},"Remove markdown"),(0,o.kt)("p",null,"The remove markdown option is enabled by default. That means any markdown values will be removed and replaced with plain text. See the table below for examples. If you would like to export markdown values, you may toggle this option."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Cell Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Markdown"),(0,o.kt)("th",{parentName:"tr",align:null},"Plain Text"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:null},"[","[This is my link","|","Alias]","]"),(0,o.kt)("td",{parentName:"tr",align:null},"This is my link")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:null},"*","*","Some bold text","*","*"),(0,o.kt)("td",{parentName:"tr",align:null},"Some bold text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,o.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,o.kt)("td",{parentName:"tr",align:null},"[x]"),(0,o.kt)("td",{parentName:"tr",align:null},"true")))))}d.isMDXComponent=!0}}]);
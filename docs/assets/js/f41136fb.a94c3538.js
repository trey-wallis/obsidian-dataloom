"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[722],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(g,o(o({ref:e},s),{},{components:n})):a.createElement(g,o({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8100:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},o="Creating a snippet",i={unversionedId:"guides/create-a-snippet",id:"guides/create-a-snippet",title:"Creating a snippet",description:"A snippet is a css file that overrides existing styles in Obsidian.",source:"@site/docs/guides/create-a-snippet.mdx",sourceDirName:"guides",slug:"/guides/create-a-snippet",permalink:"/guides/create-a-snippet",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/guides/create-a-snippet.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sorting rows",permalink:"/features/rows/row-sort"},next:{title:"Embedding looms",permalink:"/other/embedding-looms"}},p={},d=[{value:"Changing the padding of cells",id:"changing-the-padding-of-cells",level:2},{value:"Classes",id:"classes",level:2}],s={toc:d},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-snippet"},"Creating a snippet"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Extending+Obsidian/CSS+snippets"},"snippet")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," file that overrides existing styles in Obsidian."),(0,r.kt)("h2",{id:"changing-the-padding-of-cells"},"Changing the padding of cells"),(0,r.kt)("p",null,"For example, if you wanted to change the padding size of cells, you could create a snippet that targets all of the cell containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* nlt-snippet.css */\n\n.DataLoom__th-content {\n    padding: 10px;\n}\n\n.DataLoom__body-td-container {\n    padding: 20px 10px;\n}\n\n.DataLoom__footer-td-container {\n    padding: 20px 10px;\n}\n")),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"The following table is a list of various plugin classes that you may override."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Element"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__app")),(0,r.kt)("td",{parentName:"tr",align:null},"Main app conatiner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__option-bar")),(0,r.kt)("td",{parentName:"tr",align:null},"Option bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__table")),(0,r.kt)("td",{parentName:"tr",align:null},"Table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__th")),(0,r.kt)("td",{parentName:"tr",align:null},"Header cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__th-container")),(0,r.kt)("td",{parentName:"tr",align:null},"Header cell container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__th-content")),(0,r.kt)("td",{parentName:"tr",align:null},"Header cell content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__body-td")),(0,r.kt)("td",{parentName:"tr",align:null},"Body cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__body-td-container")),(0,r.kt)("td",{parentName:"tr",align:null},"Body cell container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__footer-td")),(0,r.kt)("td",{parentName:"tr",align:null},"Footer cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__footer-td-container")),(0,r.kt)("td",{parentName:"tr",align:null},"Footer cell container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__button")),(0,r.kt)("td",{parentName:"tr",align:null},"Button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".DataLoom__p")),(0,r.kt)("td",{parentName:"tr",align:null},"Text")))))}m.isMDXComponent=!0}}]);
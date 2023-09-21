"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=l,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={},i="File cell",o={unversionedId:"features/table/cells/cell-file",id:"features/table/cells/cell-file",title:"File cell",description:"Description",source:"@site/docs/features/table/cells/cell-file.mdx",sourceDirName:"features/table/cells",slug:"/features/table/cells/cell-file",permalink:"/features/table/cells/cell-file",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/features/table/cells/cell-file.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Embed cell",permalink:"/features/table/cells/cell-embed"},next:{title:"Last edited time cell",permalink:"/features/table/cells/cell-last-edited-time"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file-cell"},"File cell"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This cell renders an Obsidian link."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"When the menu opens, a list of vault notes will appear. Type any value to filter the list of notes. Notes are filtered using the fuzzy sort algorithm. You may use the ",(0,l.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"down")," arrow keys to navigate the list. Click an item or press ",(0,l.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"return")," to select the highlighted value. The value you choose will be saved."))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=l,f=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2167:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const o={},a="Embed cell",i={unversionedId:"features/cells/body/body-cell-embed",id:"features/cells/body/body-cell-embed",title:"Embed cell",description:"Description",source:"@site/docs/features/cells/body/body-cell-embed.mdx",sourceDirName:"features/cells/body",slug:"/features/cells/body/body-cell-embed",permalink:"/obsidian-dashboards/features/cells/body/body-cell-embed",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dashboards/tree/master/docusaurus/docs/features/cells/body/body-cell-embed.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Date cell",permalink:"/obsidian-dashboards/features/cells/body/body-cell-date"},next:{title:"File cell",permalink:"/obsidian-dashboards/features/cells/body/body-cell-file"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"embed-cell"},"Embed cell"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This cell renders an embedded link."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This cell accepts any text. It will render an embedded link using the ",(0,l.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Editing+and+formatting/Embedding+web+pages"},"embedded file syntax"),"."),(0,l.kt)("p",null,"The embed type will render any links that Obsidian supports. Currently Obsidian supports embedded Twitter and YouTube links."))}p.isMDXComponent=!0}}]);
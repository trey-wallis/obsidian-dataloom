"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),c=o,h=s["".concat(d,".").concat(c)]||s[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={},l="Embedding looms",i={unversionedId:"other/embedding-dashboards",id:"other/embedding-dashboards",title:"Embedding looms",description:"Basic usage",source:"@site/docs/other/embedding-dashboards.mdx",sourceDirName:"other",slug:"/other/embedding-dashboards",permalink:"/other/embedding-dashboards",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/other/embedding-dashboards.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a snippet",permalink:"/guides/create-a-snippet"},next:{title:"Export",permalink:"/other/export"}},d={},m=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Setting a width and height",id:"setting-a-width-and-height",level:2},{value:"Examples",id:"examples",level:3}],p={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embedding-looms"},"Embedding looms"),(0,o.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please make sure that you have enabled ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/quick-start#linking-loom-files"},"detection of all extensions"))),(0,o.kt)("p",null,"A loom may be embedded into a note by using the ",(0,o.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Linking+notes+and+files/Embedding+files"},"embedded file syntax"),"."),(0,o.kt)("p",null,"Example loom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"![[my-loom.loom]]\n")),(0,o.kt)("p",null,"An embedded loom will preform the same functions as a normal loom, the only limitation being a smaller window."),(0,o.kt)("p",null,"Changes that are made to an embedded loom will be saved to the loom file. Changes made to an embedded loom will also update any open tabs that contain a loom."),(0,o.kt)("h2",{id:"setting-a-width-and-height"},"Setting a width and height"),(0,o.kt)("p",null,"An embedded loom has a default width of ",(0,o.kt)("inlineCode",{parentName:"p"},"100%")," and a default height of ",(0,o.kt)("inlineCode",{parentName:"p"},"340px"),". A height of ",(0,o.kt)("inlineCode",{parentName:"p"},"340px")," will render exactly 4 body rows."),(0,o.kt)("p",null,"If you would like to modify the width or height of a loom, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Linking+notes+and+files/Embedding+files#Embed+an+image+in+a+note"},"embedded image syntax"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: setting a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," will use the default value.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"An embedded loom with a width of ",(0,o.kt)("inlineCode",{parentName:"p"},"300px")," and height of ",(0,o.kt)("inlineCode",{parentName:"p"},"300px")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"![[my-loom.loom|300x300]]\n")),(0,o.kt)("p",null,"An embedded loom with a default with and height of ",(0,o.kt)("inlineCode",{parentName:"p"},"300px")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"![[my-loom.loom|0x300]]\n")),(0,o.kt)("p",null,"An embedded loom with a width of ",(0,o.kt)("inlineCode",{parentName:"p"},"300px")," and a default height"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"![[my-loom.loom|300x0]]\n")))}u.isMDXComponent=!0}}]);
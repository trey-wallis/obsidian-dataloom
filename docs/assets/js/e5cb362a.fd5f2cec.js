"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),i=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return l.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||r;return n?l.createElement(b,o(o({ref:t},s),{},{components:n})):l.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[m]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>i});var l=n(7462),a=(n(7294),n(3905));const r={},o="Calculating column values",u={unversionedId:"features/table/calculating-column-values",id:"features/table/calculating-column-values",title:"Calculating column values",description:"Calculations can be preformed on all the cells in a column. Click the Calculate button at the bottom of a column. A menu will appear with a list of calculations that can be preformed on the column.",source:"@site/docs/features/table/calculating-column-values.mdx",sourceDirName:"features/table",slug:"/features/table/calculating-column-values",permalink:"/features/table/calculating-column-values",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/features/table/calculating-column-values.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adding rows",permalink:"/features/table/adding-rows"},next:{title:"Checkbox cell",permalink:"/features/table/cells/cell-checkbox"}},c={},i=[{value:"General Calculations",id:"general-calculations",level:2},{value:"Numeric Calculations",id:"numeric-calculations",level:2}],s={toc:i},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calculating-column-values"},"Calculating column values"),(0,a.kt)("p",null,"Calculations can be preformed on all the cells in a column. Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Calculate")," button at the bottom of a column. A menu will appear with a list of calculations that can be preformed on the column."),(0,a.kt)("h2",{id:"general-calculations"},"General Calculations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None - Do nothing"),(0,a.kt)("li",{parentName:"ul"},"Count all - The total number of cells"),(0,a.kt)("li",{parentName:"ul"},"Count values - The total number of values. This count each tag as a single value."),(0,a.kt)("li",{parentName:"ul"},"Count unique - The total number of unique values"),(0,a.kt)("li",{parentName:"ul"},"Count empty - The number of empty cells"),(0,a.kt)("li",{parentName:"ul"},"Count not empty - The number of non-empty cells"),(0,a.kt)("li",{parentName:"ul"},"Percent empty - The percentage of empty cells"),(0,a.kt)("li",{parentName:"ul"},"Percent not empty - The percentage of non-empty cells")),(0,a.kt)("h2",{id:"numeric-calculations"},"Numeric Calculations"),(0,a.kt)("p",null,"Numeric calculations can only be preformed on a column set to type ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sum"),(0,a.kt)("li",{parentName:"ul"},"Average"),(0,a.kt)("li",{parentName:"ul"},"Min"),(0,a.kt)("li",{parentName:"ul"},"Max"),(0,a.kt)("li",{parentName:"ul"},"Median"),(0,a.kt)("li",{parentName:"ul"},"Range")))}p.isMDXComponent=!0}}]);
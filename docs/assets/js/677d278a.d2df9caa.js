"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3890:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294);function r(e){let{url:n}=e;return a.createElement("video",{width:"1280",controls:!0},a.createElement("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag.")}},3842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),o=t(3890);const i={sidebar_position:1},l="Loom file",s={unversionedId:"other/loom-file",id:"other/loom-file",title:"Loom file",description:"DataLoom saves application data in JSON format. It is stored in a file with a .loom extension.",source:"@site/docs/other/loom-file.mdx",sourceDirName:"other",slug:"/other/loom-file",permalink:"/other/loom-file",draft:!1,editUrl:"https://github.com/decaf-dev/obsidian-dataloom/tree/master/docusaurus/docs/other/loom-file.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create a snippet",permalink:"/guides/create-a-snippet"},next:{title:"Loom error",permalink:"/other/loom-error"}},u={},p=[{value:"Fixing a broken file",id:"fixing-a-broken-file",level:2},{value:"Format guide",id:"format-guide",level:2},{value:"Current format",id:"current-format",level:2},{value:"Example file",id:"example-file",level:2},{value:"Typescript declarations",id:"typescript-declarations",level:2}],m={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loom-file"},"Loom file"),(0,r.kt)("p",null,"DataLoom saves application data in JSON format. It is stored in a file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".loom")," extension."),(0,r.kt)("p",null,"When updating DataLoom, your loom file will be migrated to the latest plugin version. It is possible that this might fail."),(0,r.kt)("p",null,"To fix a broken loom file, please follow the instructions below."),(0,r.kt)("h2",{id:"fixing-a-broken-file"},"Fixing a broken file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the file in a text editor"),(0,r.kt)("li",{parentName:"ol"},"Review each line of the file, making sure that it matches the ",(0,r.kt)("a",{parentName:"li",href:"#current-format"},"current")," JSON format"),(0,r.kt)("li",{parentName:"ol"},"For each line that doesn't match, make the necessary corrections. The problem is often that a key is missing or misspelled")),(0,r.kt)("p",null,"Note: If you are not sure what to do, please open an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/decaf-dev/obsidian-dataloom/issues/new?assignees=&labels=bug&projects=&template=BUG.yml"},"issue")," in the GitHub repository. Paste the error details. You can get this by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Copy error details")," button."),(0,r.kt)(o.Z,{url:"https://dataloom.b-cdn.net/fix-loom-file.mov",mdxType:"VideoEmbed"}),(0,r.kt)("h2",{id:"format-guide"},"Format guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," - a string of characters - ",(0,r.kt)("inlineCode",{parentName:"li"},'"hello world"'),". Always include double quotations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number")," - a number - ",(0,r.kt)("inlineCode",{parentName:"li"},"123")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"null")," - a null value - ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]")," - a list of values - ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]"))),(0,r.kt)("p",null,"A word with a capital letter such as ",(0,r.kt)("inlineCode",{parentName:"p"},"CellType")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," represents a reference to a JSON object or enum."),(0,r.kt)("h2",{id:"current-format"},"Current format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "model": {\n    "columns": Column[],\n    "rows": Row[],\n    "filters": Filter[],\n    "settings": {\n      "numFrozenColumns": number,\n      "showCalculationRow": boolean\n    }\n  },\n  "pluginVersion": string\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Column {\n    id: string;\n    sortDir: SortDir;\n    isVisible: boolean;\n    width: string;\n    type: CellType;\n    numberPrefix: string;\n    numberSuffix: string;\n    numberSeparator: string;\n    content: string;\n    numberFormat: NumberFormat;\n    currencyType: CurrencyType;\n    dateFormat: DateFormat;\n    shouldWrapOverflow: boolean;\n    tags: Tag[];\n    calculationType: CalculationType;\n    aspectRatio: AspectRatio;\n    horizontalPadding: PaddingSize;\n    verticalPadding: PaddingSize;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Row {\n    id: string;\n    index: number;\n    creationTime: number;\n    lastEditedTime: number;\n    cells: Cell[];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Cell {\n    id: string;\n    columnId: string;\n    isExternalLink: boolean;\n    dateTime: number | null;\n    content: string;\n    tagIds: string[];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Tag {\n    id: string;\n    content: string;\n    color: Color;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"interface Filter {\n    id: string;\n    columnId: string;\n    operator: FilterOperator;\n    isEnabled: boolean;\n  ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'enum CellType {\n    TEXT = "text",\n    EMBED = "embed",\n    FILE = "file",\n    NUMBER = "number",\n    TAG = "tag",\n    MULTI_TAG = "multi-tag",\n    DATE = "date",\n    CHECKBOX = "checkbox",\n    CREATION_TIME = "creation-time",\n    LAST_EDITED_TIME = "last-edited-time",\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'enum NumberFormat {\n    NUMBER = "number",\n    CURRENCY = "currency",\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'enum Color {\n    LIGHT_GRAY = "light gray",\n    GRAY = "gray",\n    BROWN = "brown",\n    ORANGE = "orange",\n    YELLOW = "yellow",\n    GREEN = "green",\n    BLUE = "blue",\n    PURPLE = "purple",\n    PINK = "pink",\n    RED = "red",\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'enum CurrencyType {\n    ARGENTINA = "ARS",\n    AUSTRALIA = "AUD",\n    CANADA = "CAD",\n    COLOMBIA = "COP",\n    DENMARK = "DKK",\n    UAE = "AED",\n    EUROPE = "EUR",\n    ICELAND = "ISK",\n    ISRAEL = "ILS",\n    MEXICO = "MXN",\n    NORWAY = "NOK",\n    GREAT_BRITAIN = "GBP",\n    BRAZIL = "BRL",\n    SAUDI_ARABIA = "SAR",\n    RUSSIA = "RUB",\n    INDIA = "INR",\n    SINGAPORE = "SGB",\n    SWEDEN = "SEK",\n    SWITZERLAND = "CHF",\n    UNITED_STATES = "USD",\n    SOUTH_KOREA = "KRW",\n    JAPAN = "JPY",\n    CHINA = "CNY",\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'type FilterOperator = "and" | "or";\n')),(0,r.kt)("h2",{id:"example-file"},"Example file"),(0,r.kt)("p",null,"This is an example of a loom file. It contains a table with two columns and one row. The first column is a text column. The second column is a tag column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "model": {\n    "columns": [\n      {\n        "id": "637bedf7-22df-4d9e-be39-722e28ad9147",\n        "sortDir": "default",\n        "isVisible": true,\n        "width": "140px",\n        "type": "text",\n        "numberPrefix": "",\n        "numberSuffix": "",\n        "numberSeparator": "",\n        "content": "New Column",\n        "numberFormat": "number",\n        "currencyType": "USD",\n        "dateFormat": "mm/dd/yyyy",\n        "shouldWrapOverflow": true,\n        "tags": [],\n        "calculationType": "none",\n        "aspectRatio": "unset",\n        "horizontalPadding": "unset",\n        "verticalPadding": "unset"\n      },\n      {\n        "id": "8456b494-fb1c-42b6-a55d-a0d4db5a6c98",\n        "sortDir": "default",\n        "isVisible": true,\n        "width": "140px",\n        "type": "tag",\n        "numberPrefix": "",\n        "numberSuffix": "",\n        "numberSeparator": "",\n        "content": "New Column",\n        "numberFormat": "number",\n        "currencyType": "USD",\n        "dateFormat": "mm/dd/yyyy",\n        "shouldWrapOverflow": true,\n        "tags": [\n          {\n            "id": "be98ee4e-0f55-4d07-873d-7573b65fb695",\n            "markdown": "tag1",\n            "color": "gray"\n          }\n        ],\n        "calculationType": "none",\n        "aspectRatio": "unset",\n        "horizontalPadding": "unset",\n        "verticalPadding": "unset"\n      }\n    ],\n    "rows": [\n      {\n        "id": "f4c063b9-a456-4d1c-81ef-0e1dd950103e",\n        "index": 0,\n        "creationTime": 1695580079305,\n        "lastEditedTime": 1695580097547,\n        "cells": [\n          {\n            "id": "91d434b5-76f6-44ea-b1f0-a670f1a66549",\n            "isExternalLink": false,\n            "columnId": "637bedf7-22df-4d9e-be39-722e28ad9147",\n            "dateTime": null,\n            "content": "cell 1,\n            "tagIds": []\n          },\n          {\n            "id": "4fd2a1e9-b02e-4034-b162-d47681ba0a44",\n            "isExternalLink": false,\n            "columnId": "8456b494-fb1c-42b6-a55d-a0d4db5a6c98",\n            "dateTime": null,\n            "content": "cell 2",\n            "tagIds": [\n              "be98ee4e-0f55-4d07-873d-7573b65fb695"\n            ]\n          }\n        ]\n      }\n    ],\n    "filters": [\n      {\n        "id": "118adfb5-2c6b-46be-b370-782fd06d730e",\n        "columnId": "637bedf7-22df-4d9e-be39-722e28ad9147",\n        "operator": "or",\n        "isEnabled": true,\n        "type": "text",\n        "condition": "is",\n        "text": "test"\n      }\n    ],\n    "settings": {\n      "numFrozenColumns": 1,\n      "showCalculationRow": true\n    }\n  },\n  "pluginVersion": "8.6.0"\n}\n')),(0,r.kt)("h2",{id:"typescript-declarations"},"Typescript declarations"),(0,r.kt)("p",null,"The examples above are not comprehensive. If you would like to full Typescript declarations for the loom file, please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/decaf-dev/obsidian-dataloom/blob/master/src/shared/loom-state/types/loom-state.ts"},"GitHub repository"),"."))}d.isMDXComponent=!0}}]);
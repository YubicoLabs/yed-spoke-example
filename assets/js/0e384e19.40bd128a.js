"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,b=c["".concat(l,".").concat(d)]||c[d]||y[d]||n;return r?o.createElement(b,a(a({ref:t},p),{},{components:r})):o.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=r(7462),i=(r(7294),r(3905));const n={sidebar_position:1},a="YubiEnterprise Delivery API ServiceNow Integration",s={unversionedId:"intro",id:"intro",title:"YubiEnterprise Delivery API ServiceNow Integration",description:"Overview",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/yed-spoke-example/docs/intro",draft:!1,editUrl:"https://github.com/YubicoLabs/yed-spoke-example/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Prerequisites",permalink:"/yed-spoke-example/docs/prereqs"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Yubico Developer Program",id:"yubico-developer-program",level:2}],p={toc:u},c="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"yubienterprise-delivery-api-servicenow-integration"},"YubiEnterprise Delivery API ServiceNow Integration"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"YubiEnterprise Services enables organizations to procure YubiKeys efficiently, distribute them rapidly, and remotely manage YubiKey solutions at scale. Included within YubiEnterprise Services is the YubiEnterprise Console, allowing an enterprise or organization to ship YubiKeys to their end-users as required. Some of the keys might be shipped to head office and/or branch offices for distribution in person, and many will be shipped to the home addresses of employees working remotely. To help perform these tasks, the YubiEnterprise account owner usually assigns privileges (roles) to others in their organization so that they too (or instead) can use YubiEnterprise Delivery to ship security keys to the end-users."),(0,i.kt)("p",null,"While YubiEnterprise Delivery can be driven entirely through the pre-built console, it also comes with an API that provides the ability to extend the functionality to custom applications. This API will enable your organization\u2019s developers to integrate YubiEnterprise Delivery into custom solutions that precisely meet the requirements of your business, and to allow your users to self order their keys, rather than relying on a central admin."),(0,i.kt)("p",null,"For some organizations, it is not feasible to build out, and maintain, a full custom application to support the ordering of YubiKeys. In this case, why not rely on a tool that is already familiar to your users, and your IT processes? ServiceNow is a great example of a platform that is widely used by many organizations, that can support the ability to call an API to execute functions external to the platform."),(0,i.kt)("p",null,"In this workshop, we will walk through an example ServiceNow application that will allow your users to order YubiKeys directly against your YubiEnterprise Services inventory. By the end of this guide you will have a working ServiceNow application that is able to order and ship a YubiKey directly to a user."),(0,i.kt)("p",null,"Click the button below if you're ready to begin!"),(0,i.kt)("h2",{id:"yubico-developer-program"},"Yubico Developer Program"),(0,i.kt)("p",null,"This tutorial has been brought to you by the Yubico Developer Program! For more guides and tutorials please visit ",(0,i.kt)("a",{parentName:"p",href:"https://developers.yubico.com"},"developers.yubico.com"),"."))}y.isMDXComponent=!0}}]);
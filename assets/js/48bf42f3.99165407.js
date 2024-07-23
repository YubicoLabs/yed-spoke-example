"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},a="Configure connection credentials",l={unversionedId:"connections",id:"connections",title:"Configure connection credentials",description:"In this step we will add our YubiEnterprise Delivery API token to ServiceNow to allow our application to send and receive shipment details from the YubiEnterprise API. This credential will be reusable throughout your application, and prevents us from having to manually enter the API token inline every time we want to configure a new API call.",source:"@site/docs/connections.md",sourceDirName:".",slug:"/connections",permalink:"/yed-spoke-example/docs/connections",draft:!1,editUrl:"https://github.com/YubicoLabs/yed-spoke-example/tree/main/docs/docs/connections.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Create catalog item",permalink:"/yed-spoke-example/docs/catalog"},next:{title:"Create a custom action",permalink:"/yed-spoke-example/docs/action"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Yubico Enterprise Delivery API token",id:"yubico-enterprise-delivery-api-token",level:3},{value:"Connections &amp; Credential Alias",id:"connections--credential-alias",level:2},{value:"Credential",id:"credential",level:2},{value:"Connections",id:"connections",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-connection-credentials"},"Configure connection credentials"),(0,i.kt)("p",null,"In this step we will add our YubiEnterprise Delivery API token to ServiceNow to allow our application to send and receive shipment details from the YubiEnterprise API. This credential will be reusable throughout your application, and prevents us from having to manually enter the API token inline every time we want to configure a new API call."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"yubico-enterprise-delivery-api-token"},"Yubico Enterprise Delivery API token"),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/prereqs#yubico-enterprise-delivery-account"},"earlier prerequisites section"),", you will need access to a YubiEnterprise Delivery account. Once you have access to your account, follow the steps at the link below to generate your API token. Ensure that you keep this token in a secure place that can be referenced later."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://console.yubico.com/help/API_Onboarding_Playbook.html#setting-up-api-caller-and-generating-token"},"Setting up API Caller and Generating Token"))),(0,i.kt)("h2",{id:"connections--credential-alias"},"Connections & Credential Alias"),(0,i.kt)("p",null,"On the ServiceNow home screen, search for ",(0,i.kt)("strong",{parentName:"p"},"Connections & Credentials"),"."),(0,i.kt)("p",null,"We will begin by entering the ",(0,i.kt)("strong",{parentName:"p"},"Connections & Credentials Alias")," menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration menu",src:n(4792).Z,width:"2560",height:"1738"})),(0,i.kt)("p",null,"Once in the ",(0,i.kt)("strong",{parentName:"p"},"Connections & Credentials Alias")," menu, click ",(0,i.kt)("strong",{parentName:"p"},"New")," at the top right corner."),(0,i.kt)("p",null,"In the configuration menu, set the name using the value below. The rest of the fields can be left on their defaults. See the image below for an example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": YubiEnterprise Delivery API")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration menu",src:n(6096).Z,width:"2560",height:"910"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Submit")," at the top right corner. Once configured, return to the ServiceNow home page."),(0,i.kt)("h2",{id:"credential"},"Credential"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Before you proceed with this section, ensure that you have ",(0,i.kt)("a",{parentName:"p",href:"https://console.yubico.com/help/API_Onboarding_Playbook.html#setting-up-api-caller-and-generating-token"},"generated your API token")," from the YubiEnterprise Console")),(0,i.kt)("p",null,"On the ServiceNow home screen, search for ",(0,i.kt)("strong",{parentName:"p"},"Connections & Credentials"),"."),(0,i.kt)("p",null,"This time select the ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration menu",src:n(57).Z,width:"2560",height:"910"})),(0,i.kt)("p",null,"Once in the ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," menu, click ",(0,i.kt)("strong",{parentName:"p"},"New")," at the top right corner."),(0,i.kt)("p",null,"On the next screen, select ",(0,i.kt)("strong",{parentName:"p"},"API Key Credentials")," (this is typically the first option)."),(0,i.kt)("p",null,"In the next menu, you will configure your API credential. On the configuration menu, provide the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": YubiEnterprise Delivery API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API Key"),": Bearer {insert your YubiEnterprise API token here}"),(0,i.kt)("li",{parentName:"ul"},"Use the defaults for the other properties")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},'Do not forget to append "Bearer " before pasting your API token into the ',(0,i.kt)("strong",{parentName:"p"},"API Key")," field"),(0,i.kt)("p",{parentName:"admonition"},"ex. Bearer eyj0eX........")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration menu",src:n(9265).Z,width:"2560",height:"794"})),(0,i.kt)("p",null,"Once finished, click ",(0,i.kt)("strong",{parentName:"p"},"Submit")),(0,i.kt)("h2",{id:"connections"},"Connections"),(0,i.kt)("p",null,"On the ServiceNow home screen, search for ",(0,i.kt)("strong",{parentName:"p"},"Connections & Credentials"),"."),(0,i.kt)("p",null,"This time select the ",(0,i.kt)("strong",{parentName:"p"},"Connections")," menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration menu",src:n(9158).Z,width:"2560",height:"890"})),(0,i.kt)("p",null,"Once in the ",(0,i.kt)("strong",{parentName:"p"},"Connections")," menu, click ",(0,i.kt)("strong",{parentName:"p"},"New")," at the top right corner."),(0,i.kt)("p",null,"On the next screen, select ",(0,i.kt)("strong",{parentName:"p"},"HTTP(s) Connection")," (this is typically the second option)."),(0,i.kt)("p",null,"In the next menu, you will configure your connection details. Here you will use the Connection Alias, and Credential that were configured above. In the menu, provide the following values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": YubiEnterprise Delivery API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Credential"),': Use the search icon on the right to search for the credential named "YubiEnterprise Delivery API"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connection alias"),": Use the search icon on the right to search for the connection alias that you previously created (ex. x_703594_yubienter.YubiEnterprise_Delivery_API)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connection URL"),": ",(0,i.kt)("a",{parentName:"li",href:"https://api.console.yubico.com/v1/"},"https://api.console.yubico.com/v1/")),(0,i.kt)("li",{parentName:"ul"},"Use the defaults for the other properties")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration menu",src:n(2120).Z,width:"2560",height:"1228"})),(0,i.kt)("p",null,"Once finished, click ",(0,i.kt)("strong",{parentName:"p"},"Submit")),(0,i.kt)("p",null,"Now that your API credentials are configured, we can build the action that will be used to make a YubiEnterprise shipment request."))}d.isMDXComponent=!0},4792:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connections_1-a3650097a14207e4ce1b97c178a15411.png"},6096:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connections_2-bb8cd374a59f3741c2983466fb4c38b2.png"},57:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connections_3-932b2538f6d45a63025a8250f6d2a251.png"},9265:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connections_4-a1b0f078c3d7841bad4295d5f1764e31.png"},9158:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connections_5-0616bf8942d40d00693a1f5c4cad89b5.png"},2120:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connections_6-d40981dd709f168ea19468e16864f160.png"}}]);
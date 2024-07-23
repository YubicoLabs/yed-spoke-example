"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[347],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(n),k=l,h=c["".concat(p,".").concat(k)]||c[k]||d[k]||r;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9093:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:1},i="Read Okta user",o={unversionedId:"fido-pre-reg/actions/IdentityProviders/okta/readuser",id:"fido-pre-reg/actions/IdentityProviders/okta/readuser",title:"Read Okta user",description:"In this step we will configure an action to read an Okta user. This is required in order to get the user ID that is used as an input into Okta's FIDO Pre-reg API.",source:"@site/docs/fido-pre-reg/actions/IdentityProviders/okta/readuser.md",sourceDirName:"fido-pre-reg/actions/IdentityProviders/okta",slug:"/fido-pre-reg/actions/IdentityProviders/okta/readuser",permalink:"/yed-spoke-example/docs/fido-pre-reg/actions/IdentityProviders/okta/readuser",draft:!1,editUrl:"https://github.com/YubicoLabs/yed-spoke-example/tree/main/docs/docs/fido-pre-reg/actions/IdentityProviders/okta/readuser.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/yed-spoke-example/docs/category/okta"},next:{title:"Create Okta FIDO Pre-reg enrollment request",permalink:"/yed-spoke-example/docs/fido-pre-reg/actions/IdentityProviders/okta/okta_enrollment"}},p={},s=[{value:"Action properties",id:"action-properties",level:2},{value:"Action inputs",id:"action-inputs",level:2},{value:"API REST call",id:"api-rest-call",level:2},{value:"Connection details",id:"connection-details",level:3},{value:"Request details",id:"request-details",level:3},{value:"Output script",id:"output-script",level:2},{value:"Script inputs",id:"script-inputs",level:3},{value:"Adding the script",id:"adding-the-script",level:3},{value:"Script outputs",id:"script-outputs",level:3},{value:"Action outputs",id:"action-outputs",level:2},{value:"Publish the action",id:"publish-the-action",level:2}],u={toc:s},c="wrapper";function d(t){let{components:e,...r}=t;return(0,l.kt)(c,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"read-okta-user"},"Read Okta user"),(0,l.kt)("p",null,"In this step we will configure an action to read an Okta user. This is required in order to get the user ID that is used as an input into Okta's FIDO Pre-reg API."),(0,l.kt)("p",null,"Before you proceed ensure that you have configured the connection alias and credential used for calling the Okta API with your API token."),(0,l.kt)("h2",{id:"action-properties"},"Action properties"),(0,l.kt)("p",null,"On the ServiceNow home screen, search for ",(0,l.kt)("strong",{parentName:"p"},"flow designer"),"."),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"Flow Designer"),", a new window should open."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configuration menu",src:n(9102).Z,width:"2560",height:"920"})),(0,l.kt)("p",null,"Once the ",(0,l.kt)("strong",{parentName:"p"},"Flow Designer")," page opens, click the ",(0,l.kt)("strong",{parentName:"p"},"Create new")," button, then select ",(0,l.kt)("strong",{parentName:"p"},"Action"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configuration menu",src:n(6229).Z,width:"2560",height:"618"})),(0,l.kt)("p",null,"A menu will appear to configure the action's properties. Use the following values to initialize your action."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Action name"),": Okta Read User"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Application"),": YubiEnterprise Delivery App"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Read a user object using Okta's API")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Configuration menu",src:n(3791).Z,width:"1330",height:"1014"})),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"Submit"),"."),(0,l.kt)("h2",{id:"action-inputs"},"Action inputs"),(0,l.kt)("p",null,"Next we are going to configure the inputs that go into the action. These inputs are the parameters that are going to be passed into our API call by our flow."),(0,l.kt)("p",null,"For each row in the table below, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"+Create Input")," button at the top."),(0,l.kt)("li",{parentName:"ol"},"Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User Login"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"on")))),(0,l.kt)("p",null,"Your actions input menu should look like the example below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Inputs menu",src:n(7307).Z,width:"2296",height:"336"})),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," once your inputs are complete."),(0,l.kt)("h2",{id:"api-rest-call"},"API REST call"),(0,l.kt)("p",null,"Next we will configure the action step for making the REST HTTP call to Okta's API."),(0,l.kt)("p",null,"On the left side, in the Action Outline, click the ",(0,l.kt)("strong",{parentName:"p"},"bottom")," blue ",(0,l.kt)("strong",{parentName:"p"},"+")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add second action",src:n(5611).Z,width:"658",height:"376"})),(0,l.kt)("p",null,"Search for ",(0,l.kt)("strong",{parentName:"p"},"rest")," and select the ",(0,l.kt)("strong",{parentName:"p"},"REST")," option"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If the REST option does not appear then you have not activated the IntegrationHub plugin. Follow the instructions in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/prereqs"},"prerequisites")," section.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Inputs menu",src:n(9564).Z,width:"1840",height:"578"})),(0,l.kt)("h3",{id:"connection-details"},"Connection details"),(0,l.kt)("p",null,"First we will add our API credentials to the REST call. We will utilize the connection alias that was created earlier in this guide."),(0,l.kt)("p",null,"Ensure that the Connection field is set to ",(0,l.kt)("strong",{parentName:"p"},"Use Connection Alias"),"."),(0,l.kt)("p",null,"Change the ",(0,l.kt)("strong",{parentName:"p"},"Connection Alias")," to the Okta option created earlier in the guide. The ",(0,l.kt)("strong",{parentName:"p"},"Base URL")," should be set automatically based on the connection alias."),(0,l.kt)("p",null,"Your connection details should look like the example below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Connection details final",src:n(1208).Z,width:"2190",height:"420"})),(0,l.kt)("h3",{id:"request-details"},"Request details"),(0,l.kt)("p",null,"Next we will configure the details of the API method call. We will be utilizing the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.okta.com/docs/reference/api/users/#get-user"},(0,l.kt)("inlineCode",{parentName:"a"},"GET /api/v1/users/{id}"))," API method"),(0,l.kt)("p",null,"Configure the Request Details section with the following values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Build Request"),": Manually"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Resource Path"),": Type ",(0,l.kt)("strong",{parentName:"li"},"/api/v1/users/")," then drag the User Login data pill to the end of the url (see the image below for an example)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"HTTP Method"),": GET")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Headers")," should include two header properties using the values below"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Accept"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")))),(0,l.kt)("p",null,"Your request details should look like the example below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Request details final",src:n(171).Z,width:"2884",height:"906"})),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," once your request is complete."),(0,l.kt)("h2",{id:"output-script"},"Output script"),(0,l.kt)("p",null,"We will now create a script to extract the user ID from the REST Step's request body."),(0,l.kt)("p",null,"On the left side, in the Action Outline, click the bottom blue ",(0,l.kt)("strong",{parentName:"p"},"+")," button.\n",(0,l.kt)("img",{alt:"Action outline 3",src:n(63).Z,width:"666",height:"480"})),(0,l.kt)("p",null,"Search for ",(0,l.kt)("strong",{parentName:"p"},"scripts")," and select the ",(0,l.kt)("strong",{parentName:"p"},"Script")," option"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Script action step",src:n(8535).Z,width:"1870",height:"530"})),(0,l.kt)("h3",{id:"script-inputs"},"Script inputs"),(0,l.kt)("p",null,"We'll start by creating the input for the script. We will only create one input, which will be the result of the previous REST step call"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"+Create Variable")," button"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Name"),": responseBody (case sensitive)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Value"),": Drag the Response Body data pill from the REST step section on the right side of the menu")),(0,l.kt)("p",null,"Your script inputs menu should look like the example below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Script action step",src:n(4981).Z,width:"1494",height:"584"})),(0,l.kt)("h3",{id:"adding-the-script"},"Adding the script"),(0,l.kt)("p",null,"Next we are going to add a script to Script field. Copy the script provided below into the Script field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"(function execute(inputs, outputs) {\n  const response = JSON.parse(inputs.responseBody);\n  outputs.user_id = response.id;\n})(inputs, outputs);\n")),(0,l.kt)("h3",{id:"script-outputs"},"Script outputs"),(0,l.kt)("p",null,"Lastly, we will add the output variables for the script"),(0,l.kt)("p",null,"For each row in the table below, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"+Create Variable")," button at the bottom."),(0,l.kt)("li",{parentName:"ol"},"Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"on")))),(0,l.kt)("p",null,"Your script outputs menu should look like the example below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Script outputs",src:n(7024).Z,width:"2188",height:"324"})),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," once your output script is complete"),(0,l.kt)("h2",{id:"action-outputs"},"Action outputs"),(0,l.kt)("p",null,"Lastly we will define the outputs of the action, which will only be the user ID."),(0,l.kt)("p",null,"We will start by clicking the ",(0,l.kt)("strong",{parentName:"p"},"Outputs")," tab in the ",(0,l.kt)("strong",{parentName:"p"},"Action Outline")," pane."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Action outline outputs",src:n(8842).Z,width:"656",height:"614"})),(0,l.kt)("p",null,"Next we are going to configure the outputs."),(0,l.kt)("p",null,"For each row in the table below, perform the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"+Create Output")," button at the top."),(0,l.kt)("li",{parentName:"ol"},"Fill in the input using the data provided below to the corresponding field (Note: Unlike the previous examples, the ",(0,l.kt)("strong",{parentName:"li"},"Name")," field is not auto-populated).")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User ID"),(0,l.kt)("td",{parentName:"tr",align:null},"user_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"on")))),(0,l.kt)("p",null,"Your actions outputs menu should look like the example below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Inputs menu",src:n(9481).Z,width:"2290",height:"330"})),(0,l.kt)("p",null,"Once complete, press the ",(0,l.kt)("strong",{parentName:"p"},"Exit Edit Mode")," button on the top of the menu."),(0,l.kt)("p",null,"A new menu should appear showing the outputs you just defined with empty ",(0,l.kt)("strong",{parentName:"p"},"Value")," fields. For each output, you will add a data pill from the ",(0,l.kt)("strong",{parentName:"p"},"Script step")," section on the right side of the menu"),(0,l.kt)("p",null,"Use the table below to correlate the correct data pill to a label."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Label"),(0,l.kt)("th",{parentName:"tr",align:null},"Section > Data pill"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Script step > user_id")))),(0,l.kt)("p",null,"Your actions outputs menu should look like the example below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Inputs menu",src:n(1666).Z,width:"2928",height:"1240"})),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," once your outputs are complete"),(0,l.kt)("h2",{id:"publish-the-action"},"Publish the action"),(0,l.kt)("p",null,"If everything looks good, click the ",(0,l.kt)("strong",{parentName:"p"},"Publish")," button at the top of the action menu to make the action available for all flows."))}d.isMDXComponent=!0},9102:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_1-6c8d24b2e107a86124eaf93c42a41fc6.png"},9564:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_10-35c8b3dc1042df1274941090fd71c58c.png"},4981:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_15-8a5ed3e88689a7c4de22f17485bf8a3f.png"},6229:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_2-2fc809dc87561ebac60cb95a0c473be8.png"},8535:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_6-aefdb287d08807a9c85cfad94f420ac5.png"},3791:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-25-d38b5e1a0810f2bf3dce211343fe9543.png"},7307:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-26-c7766aff2c5f947cd568e0ecfb032cec.png"},5611:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-27-a377821177335d9e2872914eaba60e27.png"},1208:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-28-8b2b8da053a882547a6d37001e35cfd6.png"},171:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-29-0ce93e6fa89c7d36b4c18dda474e46e8.png"},63:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-30-f1fcd5129eeb355e3507ec9e8a40c4a9.png"},7024:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-31-f83a023dfcbb4e2a84b490d5318df523.png"},8842:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-32-685e62a61e2eb3bed984a39fb8963d60.png"},9481:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-33-ecd0745c934609d13306745fcae004a4.png"},1666:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-34-917bc1f8fe673d7178e19516e097e633.png"}}]);
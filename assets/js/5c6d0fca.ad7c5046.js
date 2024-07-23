"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[172],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2482:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},i="Get FIDO Pre-reg shipment details",o={unversionedId:"fido-pre-reg/actions/YubiEnterprise/getshipment",id:"fido-pre-reg/actions/YubiEnterprise/getshipment",title:"Get FIDO Pre-reg shipment details",description:"In this step we will configure the custom action that will call to the YubiEnterprise Delivery API to get the details about a FIDO Pre-reg shipment. When ready, this will include the finalized PIN and credential responses.",source:"@site/docs/fido-pre-reg/actions/YubiEnterprise/getshipment.md",sourceDirName:"fido-pre-reg/actions/YubiEnterprise",slug:"/fido-pre-reg/actions/YubiEnterprise/getshipment",permalink:"/yed-spoke-example/docs/fido-pre-reg/actions/YubiEnterprise/getshipment",draft:!1,editUrl:"https://github.com/YubicoLabs/yed-spoke-example/tree/main/docs/docs/fido-pre-reg/actions/YubiEnterprise/getshipment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Yubico Transport and Signing Keys",permalink:"/yed-spoke-example/docs/fido-pre-reg/actions/YubiEnterprise/transpontkeys"},next:{title:"Identity Provider Actions",permalink:"/yed-spoke-example/docs/fido-pre-reg/actions/IdentityProviders"}},p={},s=[{value:"Action properties",id:"action-properties",level:2},{value:"Action inputs",id:"action-inputs",level:2},{value:"API REST call",id:"api-rest-call",level:2},{value:"Connection details",id:"connection-details",level:3},{value:"Request details",id:"request-details",level:3},{value:"Output script",id:"output-script",level:2},{value:"Script inputs",id:"script-inputs",level:3},{value:"Adding the script",id:"adding-the-script",level:3},{value:"Script outputs",id:"script-outputs",level:3},{value:"Action outputs",id:"action-outputs",level:2},{value:"Publish the action",id:"publish-the-action",level:2}],u={toc:s},d="wrapper";function c(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-fido-pre-reg-shipment-details"},"Get FIDO Pre-reg shipment details"),(0,r.kt)("p",null,"In this step we will configure the custom action that will call to the YubiEnterprise Delivery API to get the details about a FIDO Pre-reg shipment. When ready, this will include the finalized PIN and credential responses."),(0,r.kt)("p",null,"Before you proceed ensure that you have configured the connection alias and credential used for calling the YubiEnterprise API with your API token."),(0,r.kt)("h2",{id:"action-properties"},"Action properties"),(0,r.kt)("p",null,"On the ServiceNow home screen, search for ",(0,r.kt)("strong",{parentName:"p"},"flow designer"),"."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Flow Designer"),", a new window should open."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration menu",src:n(9102).Z,width:"2560",height:"920"})),(0,r.kt)("p",null,"Once the ",(0,r.kt)("strong",{parentName:"p"},"Flow Designer")," page opens, click the ",(0,r.kt)("strong",{parentName:"p"},"Create new")," button, then select ",(0,r.kt)("strong",{parentName:"p"},"Action"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration menu",src:n(6229).Z,width:"2560",height:"618"})),(0,r.kt)("p",null,"A menu will appear to configure the action's properties. Use the following values to initialize your action."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Action name"),": YubiEnterprise get shipment (Pre-reg)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application"),": YubiEnterprise Delivery App"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": Get information about a specific YubiEnterprise FIDO Pre-reg shipment")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration menu",src:n(6853).Z,width:"1330",height:"1034"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Submit"),"."),(0,r.kt)("h2",{id:"action-inputs"},"Action inputs"),(0,r.kt)("p",null,"Next we are going to configure the inputs that go into the action. These inputs are the parameters that are going to be passed into our API call by our flow."),(0,r.kt)("p",null,"For each row in the table below, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+Create Input")," button at the top."),(0,r.kt)("li",{parentName:"ol"},"Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shipment ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"on")))),(0,r.kt)("p",null,"Your actions input menu should look like the example below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Inputs menu",src:n(3446).Z,width:"2308",height:"324"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," once your inputs are complete."),(0,r.kt)("h2",{id:"api-rest-call"},"API REST call"),(0,r.kt)("p",null,"Next we will configure the action step for making the REST HTTP call to the YubiEnterprise Delivery API."),(0,r.kt)("p",null,"On the left side, in the Action Outline, click the ",(0,r.kt)("strong",{parentName:"p"},"bottom")," blue ",(0,r.kt)("strong",{parentName:"p"},"+")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add second action",src:n(5273).Z,width:"748",height:"374"})),(0,r.kt)("p",null,"Search for ",(0,r.kt)("strong",{parentName:"p"},"rest")," and select the ",(0,r.kt)("strong",{parentName:"p"},"REST")," option"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the REST option does not appear then you have not activated the IntegrationHub plugin. Follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/prereqs"},"prerequisites")," section.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Inputs menu",src:n(9564).Z,width:"1840",height:"578"})),(0,r.kt)("h3",{id:"connection-details"},"Connection details"),(0,r.kt)("p",null,"First we will add our API credentials to the REST call. We will utilize the connection alias that was created earlier in this guide."),(0,r.kt)("p",null,"Ensure that the Connection field is set to ",(0,r.kt)("strong",{parentName:"p"},"Use Connection Alias"),"."),(0,r.kt)("p",null,"Change the ",(0,r.kt)("strong",{parentName:"p"},"Connection Alias")," to the one created earlier in the guide. The ",(0,r.kt)("strong",{parentName:"p"},"Base URL")," should be set automatically based on the connection alias."),(0,r.kt)("p",null,"Your connection details should look like the example below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connection details final",src:n(9946).Z,width:"1538",height:"438"})),(0,r.kt)("h3",{id:"request-details"},"Request details"),(0,r.kt)("p",null,"Next we will configure the details of the API method call. We will be utilizing the ",(0,r.kt)("a",{parentName:"p",href:"https://console.yubico.com/apidocs/#tag/fido2PreRegisteredShipments/operation/GetFPRShipmentById"},(0,r.kt)("inlineCode",{parentName:"a"},"GET /fpr/shipments/{id}"))," API method"),(0,r.kt)("p",null,"Configure the Request Details section with the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Build Request"),": Manually"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resource Path"),": Type ",(0,r.kt)("strong",{parentName:"li"},"/fpr/shipments/")," then drag the ",(0,r.kt)("strong",{parentName:"li"},"Shipment ID")," data pill to the end of the url (see the image below for an example)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HTTP Method"),": GET")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Headers")," should include two header properties using the values below"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accept"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")))),(0,r.kt)("p",null,"Your request details should look like the example below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Request details final",src:n(2834).Z,width:"2234",height:"808"})),(0,r.kt)("h2",{id:"output-script"},"Output script"),(0,r.kt)("p",null,"We will now create a script to format the outputs of the action. This will ensure that we are able to not only capture data from a successful shipment, but to identify and understand potential errors with our shipment."),(0,r.kt)("p",null,"On the left side, in the Action Outline, click the bottom blue ",(0,r.kt)("strong",{parentName:"p"},"+")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action outline 3",src:n(9828).Z,width:"734",height:"490"})),(0,r.kt)("p",null,"Search for ",(0,r.kt)("strong",{parentName:"p"},"scripts")," and select the ",(0,r.kt)("strong",{parentName:"p"},"Script")," option"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Script action step",src:n(8535).Z,width:"1870",height:"530"})),(0,r.kt)("h3",{id:"script-inputs"},"Script inputs"),(0,r.kt)("p",null,"We'll start by creating the input for the script. We will only create one input, which will be the result of the previous REST step call"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+Create Variable")," button"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Name"),": responseBody (case sensitive)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Value"),": Drag the Response Body data pill from the REST step section on the right side of the menu")),(0,r.kt)("p",null,"Your script inputs menu should look like the example below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Script action step",src:n(2267).Z,width:"2928",height:"832"})),(0,r.kt)("h3",{id:"adding-the-script"},"Adding the script"),(0,r.kt)("p",null,"Next we are going to add a script to Script field. Copy the script provided below into the Script field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(function execute(inputs, outputs) {\n  const response = JSON.parse(inputs.responseBody);\n\n  const shipment_state_id = response.shipment_state.shipment_state_id;\n  outputs.shipment_state_id = shipment_state_id;\n\n  if (shipment_state_id === 103 || shipment_state_id === 104) {\n    //Assuming only one shipment for POC\n    const shipment_item = response.shipment_items[0];\n\n    //Assuming only one product data item\n    const product_data = shipment_item.product_data[0];\n\n    outputs.serial_number = product_data.serial_number;\n    outputs.firmware_version = product_data.firmware_version;\n    outputs.pin_response = product_data.fido_pin_response;\n\n    //Assuming only one credential for POC\n    outputs.cred_response = product_data.fido_credential_responses[0];\n  }\n})(inputs, outputs);\n")),(0,r.kt)("h3",{id:"script-outputs"},"Script outputs"),(0,r.kt)("p",null,"Lastly, we will add the output variables for the script"),(0,r.kt)("p",null,"For each row in the table below, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+Create Variable")," button at the bottom."),(0,r.kt)("li",{parentName:"ol"},"Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shipment_state_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serial_number"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"firmware_version"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pin_response"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cred_response"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")))),(0,r.kt)("p",null,"Your script outputs menu should look like the example below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Script outputs",src:n(9684).Z,width:"2146",height:"716"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," once your output script is complete"),(0,r.kt)("h2",{id:"action-outputs"},"Action outputs"),(0,r.kt)("p",null,"Lastly we will define the outputs of the action. These outputs will be usable by the final flow that will orchestrate the ordering experience. We want to ensure that the action outputs are able to express details about the shipment, and any issues should they have occurred."),(0,r.kt)("p",null,"We will start by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Outputs")," tab in the ",(0,r.kt)("strong",{parentName:"p"},"Action Outline")," pane."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action outline outputs",src:n(3361).Z,width:"660",height:"616"})),(0,r.kt)("p",null,"Next we are going to configure the outputs."),(0,r.kt)("p",null,"For each row in the table below, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+Create Output")," button at the top."),(0,r.kt)("li",{parentName:"ol"},"Fill in the input using the data provided below to the corresponding field (Note: Unlike the previous examples, the ",(0,r.kt)("strong",{parentName:"li"},"Name")," field is not auto-populated).")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status Code"),(0,r.kt)("td",{parentName:"tr",align:null},"status_code"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shipment State ID"),(0,r.kt)("td",{parentName:"tr",align:null},"shipment_state_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Serial Number"),(0,r.kt)("td",{parentName:"tr",align:null},"serial_number"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Firmware Version"),(0,r.kt)("td",{parentName:"tr",align:null},"firmware_version"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PIN Response"),(0,r.kt)("td",{parentName:"tr",align:null},"pin_response"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Credential Response"),(0,r.kt)("td",{parentName:"tr",align:null},"cred_response"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"off")))),(0,r.kt)("p",null,"Your actions outputs menu should look like the example below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Inputs menu",src:n(9509).Z,width:"2272",height:"834"})),(0,r.kt)("p",null,"Once complete, press the ",(0,r.kt)("strong",{parentName:"p"},"Exit Edit Mode")," button on the top of the menu."),(0,r.kt)("p",null,"A new menu should appear showing the outputs you just defined with empty ",(0,r.kt)("strong",{parentName:"p"},"Value")," fields. For each output, you will add a data pill from the ",(0,r.kt)("strong",{parentName:"p"},"REST step")," and ",(0,r.kt)("strong",{parentName:"p"},"the second")," ",(0,r.kt)("strong",{parentName:"p"},"Script step")," sections on the right side of the menu"),(0,r.kt)("p",null,"Use the table below to correlate the correct data pill to a label."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Section > Data pill"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status Code"),(0,r.kt)("td",{parentName:"tr",align:null},"REST step > Status Code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shipment State ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Script step > shipment_state_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Serial Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Script step > serial_number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Firmware Version"),(0,r.kt)("td",{parentName:"tr",align:null},"Script step > firmware_version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PIN Response"),(0,r.kt)("td",{parentName:"tr",align:null},"Script Step > pin_response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Credential Response"),(0,r.kt)("td",{parentName:"tr",align:null},"Script step > credential_response")))),(0,r.kt)("p",null,"Your actions outputs menu should look like the example below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Inputs menu",src:n(981).Z,width:"2914",height:"1312"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," once your outputs are complete"),(0,r.kt)("h2",{id:"publish-the-action"},"Publish the action"),(0,r.kt)("p",null,"If everything looks good, click the ",(0,r.kt)("strong",{parentName:"p"},"Publish")," button at the top of the action menu to make the action available for all flows."))}c.isMDXComponent=!0},9102:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_1-6c8d24b2e107a86124eaf93c42a41fc6.png"},9564:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_10-35c8b3dc1042df1274941090fd71c58c.png"},9946:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_11-c331950ddd19f34be8467ffe0796161c.png"},6229:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_2-2fc809dc87561ebac60cb95a0c473be8.png"},8535:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/actions_6-aefdb287d08807a9c85cfad94f420ac5.png"},5273:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus_get_3-e71265225909e5dcdd4dbe6e788d5dd3.png"},9828:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus_get_5-c45a3ed3150addc30191b024562858aa.png"},2267:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus_get_6-8f0b8642bde2db134ed7e005f3e60795.png"},3361:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus_get_7-a4bb5dcbb96734155ad9bb9cd017a08f.png"},6853:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-19-0a5837806acdc476a04eaa4653f40727.png"},3446:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-20-d6a20e2217cdae57c643197f558ada4a.png"},2834:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-21-682a2a2a2a335e2af7e4c14f9a9b40fa.png"},9684:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-22-ccff3e1c01df78b92e05cff1612806ec.png"},9509:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-23-651abaf89cc6b7fbeaba64960abc5e99.png"},981:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pr-24-a111b2fa88bec083bd4f8dff815d4354.png"}}]);
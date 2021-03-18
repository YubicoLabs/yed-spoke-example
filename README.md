# yed-spoke-example
Example ServiceNow IntegrationHub spoke to interact with Yubico Enterprise Delivery API

## Overview
---
[Yubico Enterprise Delivery](https://www.yubico.com/products/yubienterprise/) (YED) is a global service that helps organizations deliver YubiKeys to remote and in-office users.  Organizations can automate delivery by integrating the YED REST API into their IT and service catalog flows.

[ServiceNow IntegrationHub](https://www.servicenow.com/products/integration-hub.html) is a centralized place to build and manage integrations which is made up of a series of "Spokes". [Spokes](https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/app_store_learnv2_flowdesigner_quebec_developing_for_flow_designer/app_store_learnv2_flowdesigner_quebec_working_with_spokes) are self-contained scoped applications that contain all fo the artifacts that make up an integration, primarily "Actions".

In this example we will walk through the process of creating a YED API Spoke and focus on adding a YubiKey to the service catalog and sending a shipment request to YED when the user checks out of their cart.

## Prerequisites
---
* [Free Personal ServiceNow Developer Instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/technology_partner_program/app_store_learnv2_buildmyfirstapp_orlando_personal_developer_instances) (Requires signing up to the ServiceNow Developer Program)
  * [IntegrationHub active on the personal developer instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_activating_integrationhub)
* A Yubico Enterprise Delivery account (See your organization's Yubico Enterprise Owner or contact your [Yubico sales person](https://pages.yubico.com/contact))

## Create a Scoped Application
---
The first step when building a new Spoke is to create a Scoped Application. The following instructions describe how to setup the YED API Spoke your personal ServiceNow developer instance. 

1. Navigate to **System Applications > Studio**
2. Click the **Create Application** button
3. Click the **Let's get started** button
4. Fill out the "Create Application" form with the following values
  **Name:** Yubico Enterprise Delivery API Spoke
5. Click the **Create** button
6. In the subsequent dialog click the **Continue in Studio (Advanced)** link

## Add a YubiKey to the Service Catalog
Let's add a YubiKey 5 NFC to the service catalog.

### Create product catalog hardware model
1. Navigate to **Product Catalog > Hardware Models**
2. Click **New**
3. Fill out the hardware form with the following values
  **General tab**
  **Name:** YubiKey 5 NFC
  **Manufacturer:** Click the magnifying glass icon, create a new manufacturer named 'Yubico', and click Submit
  **Short description:** Yubico YubiKey 5 NFC
  **Model categories:** Computer Peripheral, Hardware, Consumable
  **Asset tracking strategy:** Create consumable asset
  **Model number:** 1 (Use the response from YED API GET /products to map the product_id of the "YubiKey 5 NFC" to the hardware model number)
  **Product catalog**
  **Description:** The YubiKey 5 Series is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.
4. Click **Submit**
5. In Hardware Models, search for `YubiKey`, and click **YubiKey 5 NFC**
6. Under **Related Links** click **Publish to Hardware Catalog**
7. Select the **Peripherals** catalog and click **OK**

### Create service catalog item
1. Navigate to **Service Catalog > Catalog Definitions > Maitain Items**
2. Click **New**
3. Fill out the catalog item form with the following values
  **Name:** YubiKey 5 NFC
  **Catalogs:** Service Catalog
  **Category:** Peripherals
  **Picture:** Upload an [offical Yubico image](https://brandfolder.yubico.com/yubico/press-room-images-logos)
4. Click **Submit**
5. Navigate to **Self-Service > Service Catalog > Peripherals** and confirm the **YubiKey 5 NFC** is present.

## Create the action
---
Now that you have a scoped app and a YubiKey in the catalog, it's time to create the shipment request action.  All of the actions in this example will be created in the Yubico Enterprise API Spoke.

### Launch the flow designer
To launch the flow designer, navigate to **Flow Designer > Designer**

This opens a new UI where you will manage and build Actions, Flows, and Subflows

### Create the shipment request action
1. Click the **+ New** button, and then click **Action** in the rersulting menu
2. Fill ou the Action Properties form
  **Name:** YED Shipment Request
  **Application:** Yubico Enterprise Delivery API Spoke
  **Description:** Place a request for a shipment
3. Click the **Submit** button and you will be taken to the new/empty Action

## Define action inputs
---
Action Inputs allow you (and users of the Flow Designer) to pass data into your actions. You can think of inputs as method parameters.

### Input Naming Considerations
Action inputs should always have human-friendly names.

**GOOD:** First name

**BAD:** first_name

**GOOD:** Table Name

**BAD:** tableName

### Add the shipment request inputs
1. Click the **Inputs** section at the top of the **Action Outline**
2. Click the **Create Input** button
3. Click the "variable" label and change the value to "Delivery Type". Change the type to **Integer**. Leave the **Mandatory** toggle off
4. Note that there is now a "Delivery Type" pill in the **Input Variables** section of the Data pane
5. Repeat for steps 2 and 3 for each of the elements of the create shipment request object ([POST /shipments_exact](https://console.dev.in.yubico.org/apidocs/#operation/CreateShipmentExact))

  | **Label** | **Type** | **Mandatory** |
  | --------- | -------- | ------------- |
  | Country Code | String | on |
  | Recipient | String | on |
  | Recipient Email | String | off |
  | Recipient Firstname | String | off |
  | Recipient Lastname | String | off |
  | Recipient Telephone | String | off |
  | Street Line 1 | String | on |
  | Street Line 2 | String | off |
  | Street Line 3 | String | off |
  | City | String | on |
  | Region | String | off |
  | Postal Code | String | on |
  | Product ID | Integer | on |
  | Inventory Product ID | Integer | on |
  | Shipment Product ID | Integer | on |
6. **Save** the Action

## The input script step
---
At this point, the Action is getting the shipment address, product, and quantity. Now you will use a Script Step to process the input data and create a shipment exact request payload.

### Script input variables
The script step gets its own set of input variables. This allows you to map data from the data pane into script-friendly variables.

1. In the **Input Variables** widget, click the **+ Create Variable* button 
2. Set the **Name** to `delivery_type`
3. Drag the **Delivery Type** data pill from the data pane to the **Value** field. You can now reference the Delivery Type in your script as `inputs.delivery_type`.
4. Repeat steps 1-3 for each of the action input varables
5. Set the script to:

Note: Ensure the input variable names match the script variables below otherwise the input values will not be mapped.
```javascript
(function execute(inputs, outputs) {

  // Enforce API constraints here. See https://console.yubico.com/help/API_Onboarding_Playbook.html?highlight=max#executing-a-shipping-request for full list
  // A. 2 character country codes only
  const countryCodeMap = {
    "USA": "US",
    "US": "US"
  };
  const code = countryCodeMap[inputs.country_code_2];
  
  // The rest of the constraints are left as an exercise for the reader
  // B. recipient_firstname max = 15
  // C. recipient_lastname max = 20
  // D. recipient max = 20
  // E. street_line max = 40. Overflow address to street_line2 and street_line3
  // F. city max = 20
  // G. region max = 20
  // H. postal_code max = 20
  // I. recipient_email max = 40
  // J. recipient_telephone max = 14

  outputs.shipmentexactrequest = JSON.stringify({
    "delivery_type": parseInt(inputs.delivery_type),
    "country_code_2": code,
    "recipient": inputs.Recipient,
    "recipient_email": inputs.recipient_email,
    "recipient_firstname": inputs.recipient_firstname,
    "recipient_lastname": inputs.recipient_lastname,
    "recipient_telephone": inputs.recipient_telephone,
    "street_line1": inputs.street_line1,
    "street_line2": inputs.street_line2,
    "street_line3": inputs.street_line3,
    "city": inputs.City,
    "region": inputs.Region,
    "postal_code": inputs.postal_code,
    "shipment_items": [
      {
      "product_id": parseInt(inputs.product_id),
      "inventory_product_id": parseInt(inputs.inventory_product_id),
      "shipment_product_quantity": parseInt(inputs.shipment_product_quantity)
    }
   ]
  });

})(inputs, outputs);
```

### Script output variables
Similar to Script Input Variables, Script Output Variables allow you to pasa data out of your script to other steps in the action. These variables are internal to the action, and are not surfaced in Flow Designer.

1. In the **Output Variables** widget, click the **+ Create Variable** button
2. Set the **Label** and **Name** to "Shipment Exact Request". Leave the **Type** as String
3. You will now see a new data pill in the **Script step** section of the Data Pane
4. **Save** the Script step

## The REST step
---
The REST step is exclusive to IntegrationHub, and is only available after activating the IntegrationHub Installer plugin.

### Add the shipment request REST step to the Action
1. Click the + button underneath the Script step you added earlier
2. Click the REST step in the **Integrations** section of the dialog
3. You will be presented with the REST step UI

### Define Connection Information
When configuring a REST step, there are two options for defining the endpoint you will connect to:
* Use Connection Alias
* Define Connection Inline

Whenever possible, you should use a Connection Alias when designing your step. There are two primary reasons to define connections inline:
* Quick prototyping/testing
* When connection info is dynamic and will be passed into the action as an input or otherwise dynamically determined.

In this example, we will start with an inline connection. You can convert the action to use a Connection Alias at a later time.

1. Change the **Connection** choice to "Define Connection Inline"
2. Set the **Base URL** to `https://api.console.yubico.com/v1/`
3. Set the **Resource Path** to `/shipments_exact`
4. Set the **HTTP Method** to POST
5. Click the + button under Headers and add the following

  | **Name** | **VALUE** |
  | -------- | --------- |
  | Accept | application/json |
  | Content-Type | application/json |
  | Authorization | Bearer *paste your YED API token here* |
 
6. Drag the **Shipment Exact Request** data pill from the data pane to the **Request Content Request Body [Text]** field 
7. **Save** the Rest step

## The output script step
---
Right now, the Action has sent the shipment request to the REST endpoint and recieved the response body but doesn't know if the request was successful. In this step, you will parse the output of the REST step.

1. Add a new Action Step after the REST step. When prompted, choose the **Script** step

### Script Input Variables
1. In the **Input Variables** widget, click the **+ Create Variable** button
2. Set the **Name** to `responseBody`
3. Drag the **Response Body** data pill from the data pane to the **Value** field. You can now reference the Response Body in your scripts as `inputs.responseBody`
4. Set the script to

```javascript
(function execute(inputs, outputs) {
  outputs.shipment_response = inputs.responseBody;
  const response = JSON.parse(inputs.responseBody);
  outputs.shipment_request_id = response.shipment_id;
  outputs.shipment_state_id = response.shipment_state_id;
  outputs.shipment_state_message = response.shipment_state_message;
  const messages = (response.shipment_messages === undefined) ? "" : JSON.stringify(response.shipment_messages);
  outputs.shipment_messages = messages;
})(inputs, outputs);
```

### Script Output Variables
1. In the **Output Variables** widget, click the **+ Create Variable** button
2. Set the **Label** to "Shipment Response". The **Name** should be "shipment_response" Leave the **Type** as String
3. You will now see a new data pill in the **Script step** section of the Data Pane
4. Repeat steps 1 - 2 for the following

  | **Label** | **Name** | **Type** | **Mandatory** |
  | --------- | -------- | -------- | ------------- |
  | Shipment Request ID | shipment_request_id | String | off |
  | Shipment State ID | shipment_state_id | Integer | off |
  | Shipment State Message | shipment_state_message | String | off |
  | Shipment Messages | shipment_messages | String | off |

6. **Save** the Script step

## Action outputs
---
Use Action Outpus to return data from the action to Flow Designer. The Script Output variables we just defined are intentially "private" to the action and are intended for use by scripts or other action steps (this, the camel case naming convention).

The same naming considerations we used for Action Inputs also apply to Action Outputs. Outputs should always be human readable, use natural language, and should not contain underscores or use variable naming conventions like camelCase.

**GOOD:** Score

**BAD:** score

1. Click the **Outputs** section in the **Action Outline**
2. Click the **+ Create Output** button
3. Set the following outputs

  | **Label** | **Name** | **Type** | **Mandatory** |
  | --------- | -------- | -------- | ------------- |
  | HTTP Status Code | http_status_code| String | off |
  | HTTP Error Code | http_error_code| String | off |
  | HTTP Error Message | http_error_message | String | off |
  | Shipment Request ID | shipment_request_id | String | off |
  | Shipment State ID | shipment_state_id | Integer | off |
  | Shipment State Message | shipment_state_message | String | off |
  | Shipment Messages | shipment_messages | String | off |

5. Click the **Exit Edit Mode** button
6. Using the Data Pill Picker, set the **Value** of the Script Output Variables to the associated output variables
7. **Save** the Action

### Test the Action
1. Click the **Test** button
2. Set the folling variables

  | **Name** | **VALUE** |
  | -------- | --------- |
  | Country Code | US |
  | Recipient | Example Inc. |
  | Stree Line 1 | 7788 Foxrun Street |
  | City | Dedham |
  | Region | MA |
  | Postal Code| 02026 |
  | Product ID | 1 |
  | Inventory Product Id | 15 |
  | Shipment Product Quantity | 1 |
  
3. Click **Run Test**
4. Wait for the processing to complete and click **Your test has finished running. View the action execution details.**
5. In the **Output Data** verify the **Shimpent Message** is equal to "Awaiting Validation"

### Publish the Action
If everything looks good, click the **Publish** button on the action to make it available for all flows.

## Create the shipment request flow
---


## Test the flow
---

## References
---
* [YED API Documentation](https://console.yubico.com/apidocs/)
* [YED API Onboarding Playbook](https://console.yubico.com/help/API_Onboarding_Playbook.html)
* [Spoke Development Best Practices](https://github.com/ServiceNowDevProgram/SpoketoberfestResources/blob/master/SpokeDevelopmentBestPracticesPublic.md)
* [Import a ServiceNow Application from Source Control](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_devenvironment_quebec_importing_an_application_from_source_control)

## Help & Support
---

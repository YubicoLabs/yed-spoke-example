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

1. In the **Output Variables** widget, click the **+ Create Variable** button.
2. Set the **Label** and **Name** to "Shipment Exact Request". Leave the **Type** as String.

## The REST step
---


## Configure a connection alias and connection
---


## The output Script step
---


## Action outputs
---


## Create the shipment request flow
---


## References
---
* [YED API Documentation](https://console.yubico.com/apidocs/)
* [YED API Onboarding Playbook](https://console.yubico.com/help/API_Onboarding_Playbook.html)
* [Spoke Development Best Practices](https://github.com/ServiceNowDevProgram/SpoketoberfestResources/blob/master/SpokeDevelopmentBestPracticesPublic.md)
* [Import a ServiceNow Application from Source Control](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_devenvironment_quebec_importing_an_application_from_source_control)

## Help & Support
---

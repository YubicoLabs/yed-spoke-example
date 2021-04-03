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
  ![](/images/1-studio.png)
2. Click the **Create Application** button
3. Click the **Let's get started** button
  ![](/images/2-get-started.png)
4. Fill out the "Create Application" form with the following values

  **Name:** Yubico Enterprise Delivery API Spoke 
  ![](/images/3-create-app.png)

5. Click the **Create** button
6. In the subsequent dialog click the **Continue in Studio (Advanced)** link
  ![](/images/4-continue.png)

## Add a YubiKey to the Service Catalog
Let's add a YubiKey 5 NFC to the service catalog.

### Create product catalog hardware model
1. Navigate to **Product Catalog > Hardware Models**
  ![](/images/8-hardware-models.png)
2. Click **New**
  ![](/images/9-hardware-models-new.png)
3. Fill out the hardware form with the following values

  **General tab**
  * **Name:** YubiKey 5 NFC
  * **Manufacturer:** Click the magnifying glass icon, create a new manufacturer named 'Yubico', and click Submit
  * **Short description:** Yubico YubiKey 5 NFC
  * **Model categories:** Computer Peripheral, Hardware
  * **Model number:** 1 (Use the response from YED API GET /products to map the product_id of the "YubiKey 5 NFC" to the hardware model number)

    ![](/images/10-hardware-model-general.png)

  **Product catalog**
  * **Description:** The YubiKey 5 Series is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.

    ![](/images/11-hardware-model-product-catalog.png)
  
4. Click **Submit**
5. In Hardware Models, search for `YubiKey`, and click **YubiKey 5 NFC**
  ![](/images/12-hardware-models-search.png)
6. Under **Related Links** click **Publish to Hardware Catalog**
  ![](/images/13-hardware-model-publish.png)
7. Select the **Peripherals** catalog and click **OK**
  ![](/images/14-hardware-model-publish-category.png)
8. Under the **Images** tab, upload an [official Yubico image](https://brandfolder.yubico.com/yubico/press-room-images-logos)
  ![](/images/15-hardware-model-image.png)
9. Navigate to **Self-Service > Service Catalog > Peripherals**
  ![](/images/16-service-catalog.png)
  ![](/images/17-service-catalog-peripherals.png)
10. Confirm the **YubiKey 5 NFC** is present.
  ![](/images/18-service-catalog-yubikey.png)

## Create the action
---
Now that you have a scoped app and a YubiKey in the catalog, it's time to create the shipment request action.  All of the actions in this example will be created in the Yubico Enterprise API Spoke.

### Launch the flow designer
To launch the flow designer, navigate to **Flow Designer > Designer**
  ![](/images/6-flow-designer.png)

This opens a new UI where you will manage and build Actions, Flows, and Subflows

  ![](/images/7-flow-designer-ui.png)

### Create the shipment request action
1. Click the **+ New** button, and then click **Action** in the resulting menu
  ![](/images/19-new-action.png)
2. Fill ou the Action Properties form

  * **Name:** YED Shipment Request
  * **Application:** Yubico Enterprise Delivery API Spoke
  * **Description:** Place a request for a shipment

  ![](/images/20-action-properties.png)
3. Click the **Submit** button and you will be taken to the new/empty Action
  ![](/images/21-action-ui.png)

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
2. Click the **Create Input** button and add the following based on the create shipment request object ([POST /shipments_exact](https://console.dev.in.yubico.org/apidocs/#operation/CreateShipmentExact))

  | **Label** | **Type** | **Mandatory** |
  | --------- | -------- | ------------- |
  | Delivery Type | Integer | off|
  | Country Code 2 | String | on |
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
  
  ![](/images/22-create-input.png)

3. **Save** the Action

## The input script step
---
At this point, the Action is getting the shipment address, product, and quantity. Now you will use a Script Step to process the input data and create a shipment exact request payload.

1. Add a new Action Step. When prompted, choose the **Script** step
  ![](/images/23-add-new-step.png)
2. When prompted, choose the **Script** step
  ![](/images/24-script.png)

### Script input variables
The script step gets its own set of input variables. This allows you to map data from the data pane into script-friendly variables.

1. In the **Input Variables** widget, click the **+ Create Variable* button 
2. Set the **Name** to `delivery_type`
3. Drag the **Delivery Type** data pill from the data pane to the **Value** field. You can now reference the Delivery Type in your script as `inputs.delivery_type`.
4. Repeat steps 1-3 for each of the action input variables

  ![](/images/23-script-input.png)

5. Set the script to the following. 
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

  outputs.shipment_exact_request = JSON.stringify({
    "delivery_type": parseInt(inputs.delivery_type),
    "country_code_2": code,
    "recipient": inputs.recipient,
    "recipient_email": inputs.recipient_email,
    "recipient_firstname": inputs.recipient_firstname,
    "recipient_lastname": inputs.recipient_lastname,
    "recipient_telephone": inputs.recipient_telephone,
    "street_line1": inputs.street_line1,
    "street_line2": inputs.street_line2,
    "street_line3": inputs.street_line3,
    "city": inputs.city,
    "region": inputs.region,
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
Similar to Script Input Variables, Script Output Variables allow you to pass data out of your script to other steps in the action. These variables are internal to the action, and are not surfaced in Flow Designer.

1. In the **Output Variables** widget, click the **+ Create Variable** button
2. Set the **Label** and **Name** to "Shipment Exact Request". Leave the **Type** as String
  ![](/images/24-script-output.png)
3. You will now see a new data pill in the **Script step** section of the Data Pane
4. **Save** the Script step

## The REST step
---
The REST step is exclusive to IntegrationHub, and is only available after activating the IntegrationHub Installer plugin.

### Add the shipment request REST step to the Action
1. Click the + button underneath the Script step you added earlier
  ![](/images/25-add-new-step.png)
2. Click the REST step in the **Integrations** section of the dialog
  ![](/images/26-rest.png)
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

  ![](/images/27-rest-connection-headers.png)
 
6. Drag the **Shipment Exact Request** data pill from the data pane to the **Request Content Request Body [Text]** field 
  ![](/images/28-request-content.png)
7. **Save** the Rest step

## The output script step
---
Right now, the Action has sent the shipment request to the REST endpoint and received the response body but doesn't know if the request was successful. In this step, you will parse the output of the REST step.

1. Add a new Action Step after the REST step. 
  ![](/images/29-add-output-script.png)
2. When prompted, choose the **Script** step
  ![](/images/30-script.png)

### Script Input Variables
1. In the **Input Variables** widget, click the **+ Create Variable** button
2. Set the **Name** to `responseBody`
3. Drag the **Response Body** data pill from the data pane to the **Value** field. You can now reference the Response Body in your scripts as `inputs.responseBody`
  ![](/images/31-input-variables.png)
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
1. In the **Output Variables** widget, click the **+ Create Variable** button and add the following

  | **Label** | **Name** | **Type** | **Mandatory** |
  | --------- | -------- | -------- | ------------- |
  | Shipment Response | shipment_response | String| off |
  | Shipment Request ID | shipment_request_id | String | off |
  | Shipment State ID | shipment_state_id | Integer | off |
  | Shipment State Message | shipment_state_message | String | off |
  | Shipment Messages | shipment_messages | String | off |

  ![](/images/32-output-variables.png)

6. **Save** the Script step

## Action outputs
---
Use Action Outputs to return data from the action to Flow Designer. The Script Output variables we just defined are intentionally "private" to the action and are intended for use by scripts or other action steps (this, the camel case naming convention).

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

  ![](/images/33-create-action-output.png)

5. Click the **Exit Edit Mode** button
6. Using the Data Pill Picker, set the **Value** of the Script Output Variables to the associated output variables
  ![](/images/34-action-output.png)
7. **Save** the Action

### Test the Action
1. Click the **Test** button
2. Set the following variables

  | **Name** | **VALUE** |
  | -------- | --------- |
  | Country Code 2 | US |
  | Recipient | Example Inc. |
  | Street Line 1 | 7788 Foxrun Street |
  | City | Dedham |
  | Region | MA |
  | Postal Code| 02026 |
  | Product ID | 1 |
  | Inventory Product Id | 15 |
  | Shipment Product Quantity | 1 |

  ![](/images/35-test-input.png)
  
3. Click **Run Test**
  ![](/images/35-test.png)
4. Wait for the processing to complete and click **Your test has finished running. View the action execution details.**
  ![](/images/36-test-finished.png)
5. In the **Output Data** verify the **Shipment Message** is equal to "Awaiting Validation"
  ![](/images/36-test-validate.png)

### Publish the Action
If everything looks good, click the **Publish** button on the action to make it available for all flows.

## Create the shipment request flow
---
Now that you have the Action, lets put it into a Flow and test it.

1. Click the **+ New** button, and then click **Flow** in the resulting menu
  ![](/images/37-new-flow.png)
2. Name the Flow "Yubico YED API Create a Shipment"
3. Set **Run As** to "System User"
  ![](/images/38-flow-properties.png)
4. Click the **Submit** button

### Add a Trigger
Flows run when a Trigger condition is met. For this example, we will run a flow on the Service Catalog.

1. Click the **Select to add a trigger** button
  ![](/images/39-add-trigger.png)
2. Under the **Application** section, click **Service Catalog**
  ![](/images/40-service-catalog-trigger.png)
3. Click **Done**
![](/images/41-trigger-done.png)

### Add the Action to the Flow
Now it's time to add the Action to the Flow.

1. Click the **Select to add an Action, Flow Logic, or Subflow** link
2. Click the **Action** button. Click the **Yubico Enterprise Delivery API** Spoke. Click the **YED Shipment Request** Action.
![](/images/42-add-action.png)
3. The Action is now part of the Flow.

### Map service catalog fields to action input variables

1. Set the **Delivery Type** to a value of 1 or your organization's preferred delivery type 
2. Set the **Inventory Product Id** to the value 15 or your organization's inventory product ID
3. Drag the following data pills from the data pane to the action input variables

  | **Name** | **VALUE** |
  | -------- | --------- |
  | Delivery Type | 1 |
  | Country Code 2 | Trigger > Requested Item Record > Requested for > Location > Country |
  | Recipient | Trigger > Requested Item Record > Requested for > Company > Name |
  | Recipient Email | Trigger > Requested Item Record > Requested for > Email |
  | Recipient Firstname | Trigger > Requested Item Record > Requested for > First Name  |
  | Recipient Lastname | Trigger > Requested Item Record > Requested for > Last Name |
  | Recipient Telephone | Trigger > Requested Item Record > Requested for > Location > Phone |
  | Street Line 1 | Trigger > Requested Item Record > Requested for > Location > Street |
  | City | Trigger > Requested Item Record > Requested for > Location > City |
  | Region | Trigger > Requested Item Record > Requested for > Location > State / Province |
  | Postal Code| Trigger > Requested Item Record > Requested for > Location > Zip / Postal Code |
  | Product ID | Trigger > Requested Item Record > Requested for > Model > Model Number |
  | Inventory Product Id | 15 |
  | Shipment Product Quantity | Trigger > Requested Item Record > Quantity  |
  
  ![](/images/43-map-action-inputs.png)
  
4. Click **Done**

## Add the Flow Logic to the Flow
Let's handle shipment failures by sending an email to the administrator. 

1. Click the **Select to add an Action, Flow Logic, or Subflow** link
2. Click the **Flow Logic** button. Click the **If** link
3. Set the **Condition** to "Shipment Failure"
4. Drag the **Shipment State ID** data pill from the data pane to the **Condition 1** field 
5. Set the drop down to **is not**
6. Set the value to 3
7. Click **Done**
8. Click **then +**
9. Click **Action**. Click **ServiceNow Core**. Under **Default** click **Send Email**.
10. Set **To** to "admin@example.com"
11. Set **Subject** to "YubiKey shipment failure"
12. Set **Body** to 

  ```
  Shipment ID
  
  Reason
  
  More Details
  
  Next Steps
  1. Cancel the order
  2. Notify user to fix the error and try again
  ```
13. Drag the **Shipment ID** data pill from the data pane next to the **Shipment ID** text 
14. Drag the **Shipment State Message** data pill from the data pane next to the **Reason** text 
15. Drag the **Shipment Messages** data pill from the data pane next to the **More Details** text 
16. Click **Done**

Challenge: If the shipment fails, return the Shipment State Message and Shipment Messages to the user to fix any errors.

## Test the flow
---
To test the flow first we must impersonate a user with an address and order a Yubikey

## Order a YubiKey from the Service Catalog
1. Click **System Administrator** dropdown menu then click **Impersonate User**
2. Click **Search for user** and select "Adela Cervantsz"
3. Click **Service Catalog** then click **Peripherals**
4. Click **Yubikey 5 NFC**
5. Click **Order Now**
6. Take note of the **Request Number** e.g. REQ0010001
7. Click **Adela Cervantsz** and then select **End Impersonation**

### Launch the flow designer
To launch the flow designer, navigate to **Flow Designer > Designer**

## Test the Request Shipment flow
1. Search for **Yubico YED API Create a Shipment** by name and then select the flow
2. Click **Test**
3. A dialog will open. Click **Requested Item Record** and select the **Request Number** from earlier e.g. REQ0010001
4. Click **Run Test**
5. Click **Your test has finished running. View the flow execution details.**
6. This will open the Execution Details for the test run
7. Click the **YED Shipment Request** action. The Steps section will show the list of steps executed inside of the action, and the step configuration details


## Call the flow from a workflow
---

### Create the workflow

1. Open the **Workflow Editor**
2. Search for the workflow named **Service Catalog Item Request**
2. Click **Service Catalog Item Request** to open the workflow
3. Click **Workflow Actions** > **Copy**
4. Set the **Workflow Name** to "Service Catalog YubiKey Request"
5. Delete the following nodes:

  * **Approval - User** activity named "CIO Approval"
  * **Catalog Task** activity named "Asset Mgmt. Fullfils Order"
  * **Notification** named "Inform of Backordered Status"
  * **Catalog Task** activity named "Receive Backordered Item"
  * **Notification** activity named "Inform Backordered Received"
  * **Catalog Task** activity named "Deploy Item to User"
  * **Log Message** named "Item Deployed"

6. Click the **Core** tab and 
7. Drag the **Run Script** to the Workflow canvas
8. Set the fields of the Run Script activities properties to the following:

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Request YubiKey |
  | Stage | Order Fulfillment |

9. Set the **Script** to:

```Javascript
activity.result = shipYubiKey();

function shipYubiKey() {
	
	try {
		var inputs = {};
		inputs['request_item'] = current;
    inputs['table_name'] = current.getTableName();

		var result = sn_fd.FlowAPI.getRunner().flow('x_490107_yed_api_s.yubikey_shipment_request_flow').inForeground().withInputs(inputs).run();
		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
		return -1;
	}
	
}
```

10. Click **Submit**
11. Delete the arrow from the **Approval Action**
12. Drag the **Approval Action Always Condition box** to **Run Script**
13. Double click the **Run Script**
14. Click **Conditions**
15. Delete the **Always** condition
16. Click **New**
17. Set the fields to the following:

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Success |
  | Short Description | Shipment Awaiting Validation |
  | Condition | activity.result==3 | 

18. Click **Submit*
16. Click **New**
17. Set the fields to the following:

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Failure |
  | Short Description | Shipment Failure |
  | Condition | activity.result==3 | 

18. Click **Submit*
19. Close the Workflow Conditions view and return to the workflow canvas
20. Drag the **Run Script Success Condition box** to **Notification - Inform Completion**
21. Double-click the **Notification - Inform Completion** and set the **Stage** to "Completed"
22. Click **uUpdate**
23. Right-click **Notification - Inform Completion** and select **Copy Activity**
24. Double-click the new **Notification** activity and set the fields to the following

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Inform of shipment request failure |
  | Stage| Request Cancelled |
  | Subject | Your requested item ${number} for ${cat_item} failed due to an error | 

25. Click **Submit**
26. Drag the **Run Script Failure Condition Box** to **Notification - Inform of shipment request failure**
27. Drag the **Notification - Inform of shipment request failure Always Condition Box** to **End**

### Set the YubiKey process engine to the workflow

1. Go to **Service Catalog** > **Catalog Definitions** > **Maintain Items**
2. Select the **Yubikey 5 NFC**
3. Set the **Workflow** to "Service Catalog YubiKey Request"
4. Click **Update**


## Test the workflow
---
To test the workflow first we must impersonate a user with an address and order a Yubikey

## Order a YubiKey from the Service Catalog
1. Click **System Administrator** dropdown menu then click **Impersonate User**
2. Click **Search for user** and select "Adela Cervantsz"
3. Click **Service Catalog** then click **Peripherals**
4. Click **Yubikey 5 NFC**
5. Click **Order Now**
6. Take note of the **Request Number** e.g. REQ0010002
7. Click **Adela Cervantsz** and then select **End Impersonation**
8. Open the **Service Catalog** > **Open Records** > **Items**
9. Select the **Request Item** e.g. REQ0010002
10. Under the **Approvers** tab, check the box and **Approve** the request.
11. Click **Workflow Context**
12. Go to **Workflow Transition History** and view the workflow execution

## References
---
* [YED API Documentation](https://console.yubico.com/apidocs/)
* [YED API Onboarding Playbook](https://console.yubico.com/help/API_Onboarding_Playbook.html)
* [Spoke Development Best Practices](https://github.com/ServiceNowDevProgram/SpoketoberfestResources/blob/master/SpokeDevelopmentBestPracticesPublic.md)
* [Import a ServiceNow Application from Source Control](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_devenvironment_quebec_importing_an_application_from_source_control)
* This example is based off of the ServiceNow [Building Your First Spoke guidebook](https://developer.servicenow.com/connect.do#!/event/knowledge2020/CCW2510)

## Help & Support
---


# yed-spoke-example

Example ServiceNow IntegrationHub spoke to interact with Yubico Enterprise Delivery API

### Tutorial

A full walk through of this tutorial can be found at [this location](https://yubicolabs.github.io/yed-spoke-example/)

# Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Create a Scoped Application](#create-a-scoped-application)
- [Create a Catalog Item for your YubiKey Order](#create-a-catalog-item-for-your-yubikey-order)
- [Create the Action](#create-the-action)
- [Define Action Inputs](#define-action-inputs)
- [The Input Script Step](#the-input-script-step)
- [Create a Connection Alias](#create-a-connection-alias)
- [The REST Step](#the-rest-step)
- [The Output Script Step](#the-output-script-step)
- [Action Outputs](#action-outputs)
- [Create the Shipment Request Flow](#create-the-shipment-request-flow)
- [Add the Flow Logic to the Flow](#add-the-flow-logic-to-the-flow)
- [Add the Flow to the Catalog Item](#add-the-flow-to-the-catalog-item)
- [Test the Flow](#test-the-flow)
- [Call the Flow From a Workflow](#call-the-flow-from-a-workflow)
- [Test the Workflow](#test-the-workflow)
- [Bonus Lab - Send your users an email with the tracking link information](#bonus-lab---send-your-users-an-email-with-the-tracking-link-information)
- [Create the GET Shipments Action](#create-the-get-shipments-action)
- [Update the Flow to Send Shipment Tracking Information](#update-the-flow-to-send-shipment-tracking-information)
- [Cancelling Your Test Orders](#cancelling-your-test-orders)

## Overview

---

[Yubico Enterprise Delivery](https://www.yubico.com/products/yubienterprise/) (YED) is a global service that helps organizations deliver YubiKeys to remote and in-office users. Organizations can automate delivery by integrating the YED REST API into their IT and service catalog flows.

[ServiceNow IntegrationHub](https://www.servicenow.com/products/integration-hub.html) is a centralized place to build and manage integrations which is made up of a series of "Spokes". [Spokes](https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/app_store_learnv2_flowdesigner_quebec_developing_for_flow_designer/app_store_learnv2_flowdesigner_quebec_working_with_spokes) are self-contained scoped applications that contain all of the artifacts that make up an integration, primarily "Actions".

In this example we will walk through the process of creating a YED API Spoke and focus on adding a YubiKey to the service catalog and sending a shipment request to YED when the user checks out of their cart.

**Note** - This example is a proof of concept to demonstrate the ability to integrate the YED API into ServiceNow, and is not meant to run as-is in production.

## Prerequisites

---

- [Free Personal ServiceNow Developer Instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/rome/new_to_servicenow/app_store_learnv2_buildmyfirstapp_rome_personal_developer_instances) (Requires signing up to the ServiceNow Developer Program)
  - [IntegrationHub active on the personal developer instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_activating_integrationhub)
- A Yubico Enterprise Delivery account (See your organization's Yubico Enterprise Owner or contact your [Yubico sales person](https://pages.yubico.com/contact))

## Create a Scoped Application

---

The first step when building a new Spoke is to create a Scoped Application. The following instructions describe how to setup the YED API Spoke your personal ServiceNow developer instance.

1. Navigate to **System Applications > Studio**  
   ![](/images/1-studio.png)
2. Click the **Create Application** button
3. Click the **Let's get started** button
   ![](/images/2-get-started.png)
4. Fill out the "Create Application" form with the following values

- **Name:** Yubico Enterprise Delivery API Spoke
  ![](/images/3-create-app.png)

5. Click the **Create** button
6. In the subsequent dialog click the **Continue in Studio (Advanced)** link
   ![](/images/4-continue.png)

## Create a Catalog Item for your YubiKey Order

---

Let's create a Catalog Item to order your YubiKey 5NFC

### Create Catalog Item

1. Navigate to **Service Catalog > Catalog Builder** link  
   ![](/images/97-catalog-builder.png)
2. Click Create a new catalog item
   ![](/images/98-create-catalog-item.png)
3. Click Continue
4. You will be asked to select a template. Choose the **'Standard items in Service Catalog'** template. Once selected choose **Use this item template**
   ![](/images/100-select-template.png)

### Add the Catalog Item Details

Fill out the detail form with the following values
![](/images/101-catalog-item-detail.png)

1. **Item name:** YubiKey 5NFC
2. **Short description:** Order your YubiKey 5 NFC
3. **Image:** Feel free to select an YubiKey 5NFC image from the [official Yubico image library](https://brandfolder.yubico.com/yubico/press-room-images-logos)
4. **Description:** The YubiKey 5 Series is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.
5. Click **Continue to Location**

### Add Catalog Item Location Information

This section will determine what categories your Catalog Item will appear in

1. Under Categories click the **Edit** button next to Selected Categories
   ![](/images/102-location-cats.png)
2. Using the Left Pointed Arrow, remove categories, leaving only Hardware, and Peripherals in the Selected column.
   ![](/images/103-select-cats.png)
3. Click Save selections
4. Once returned to the Location Tab, click **Continue to Questions**

### Add a hidden question

This section will describe how to set a hidden value to default the Product ID of the key you want your users to order

1. Click **Insert new question**  
   ![](/images/104-insert-qx.png)
2. In the form select the following values

- **Question type:** Choice
- **Question subtype:** Radio
- **Question label:** YubiKey Product ID
- **Name:** yubikey_product_id
  ![](/images/105-qx-details.png)
- Select the **Hidden** checkbox
- Click **Continue to Choices**

3. In the **Choices** tab, click on the + in Available Choices. Insert the following details

- **Display Name:** yubikey_5nfc
- **Value:** 1
  ![](/images/106-qx-choices.png)

4. Click **Insert Question**
5. Once back to the questions tab, click **Fulfillment** tab
   ![](/images/107-qx-next-step.png)

### Choose the selected Flow to process this item

This will select the ServiceNow Flow that will be triggered when the Catalog Item is submitted. You will create this at a later stage, for now select **Service Catalog item request**

![](/images/108-select-flow.png)

Then click **Continue to Review and Submit**

### Finalize the Catalog Item

1. Review your items and click **Submit**

Your Catalog Item has been created. We will now proceed to create the action to handle your submission.

## Create the Action

---

Now that you have a scoped app and a YubiKey in the catalog, it's time to create the shipment request action. All of the actions in this example will be created in the Yubico Enterprise API Spoke.

### Launch the flow designer

To launch the flow designer, navigate to **Flow Designer > Designer**
![](/images/6-flow-designer.png)

This opens a new UI where you will manage and build Actions, Flows, and Subflows

![](/images/7-flow-designer-ui.png)

### Create the shipment request action

1. Click the **+ New** button, and then click **Action** in the resulting menu  
   ![](/images/19-new-action.png)
2. Fill out the Action Properties form

- **Name:** YED Shipment Request
- **Application:** Yubico Enterprise Delivery API Spoke
- **Description:** Place a request for a shipment

![](/images/20-action-properties.png) 3. Click the **Submit** button and you will be taken to the new/empty Action
![](/images/21-action-ui.png)

## Define Action Inputs

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

| **Label**                 | **Type** | **Mandatory** |
| ------------------------- | -------- | ------------- |
| Delivery Type             | Integer  | off           |
| Country Code 2            | String   | on            |
| Recipient                 | String   | on            |
| Recipient Email           | String   | off           |
| Recipient Firstname       | String   | off           |
| Recipient Lastname        | String   | off           |
| Recipient Telephone       | String   | off           |
| Street Line 1             | String   | on            |
| Street Line 2             | String   | off           |
| Street Line 3             | String   | off           |
| City                      | String   | on            |
| Region                    | String   | off           |
| Postal Code               | String   | on            |
| Product ID                | String   | on            |
| Inventory Product ID      | Integer  | on            |
| Shipment Product Quantity | Integer  | on            |

![](/images/22-2-create-input.png)

3. **Save** the Action

## The Input Script Step

---

At this point, the Action is getting the shipment address, product, and quantity. Now you will use a Script Step to process the input data and create a shipment exact request payload.

1. Add a new Action Step. When prompted, choose the **Script** step
   ![](/images/23-add-new-step.png)
2. When prompted, choose the **Script** step
   ![](/images/24-script.png)

### Script input variables

The script step gets its own set of input variables. This allows you to map data from the data pane into script-friendly variables.

1. In the **Input Variables** widget, click the **+ Create Variable** button
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
    USA: "US",
    US: "US",
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
    delivery_type: parseInt(inputs.delivery_type),
    country_code_2: code,
    recipient: inputs.recipient,
    recipient_email: inputs.recipient_email,
    recipient_firstname: inputs.recipient_firstname,
    recipient_lastname: inputs.recipient_lastname,
    recipient_telephone: inputs.recipient_telephone,
    street_line1: inputs.street_line1,
    street_line2: inputs.street_line2,
    street_line3: inputs.street_line3,
    city: inputs.city,
    region: inputs.region,
    postal_code: inputs.postal_code,
    shipment_items: [
      {
        product_id: parseInt(inputs.product_id),
        inventory_product_id: parseInt(inputs.inventory_product_id),
        shipment_product_quantity: parseInt(inputs.shipment_product_quantity),
      },
    ],
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

## Create a Connection Alias

When configuring a REST step there are two options for defining an endpoint connection

- Use Connection Alias
- Define Connection Inline

Connection Inline is great for quick prototyping, or when the request needs to be dynamic.

A Connection Alias offers better security by minimizing the footprint of where you store your secret, and will allow for your ServiceNow admins to make YED API calls consistently across the platform.

Below are the steps for configuring a Connection Alias, which will be used in the following step

**Note** - Do not close your Action Configuration window as we will be returning to it, complete this action in another tab if possible

### Configure the Connection & Credential Alias

1. Navigate back to the ServiceNow dashboard and find **Connections & Credentials**
2. First we will select **Connections & Credentials Alias**  
   ![](/images/129-cred-conn-find.png)
3. Click New
4. Set **Name** to yed_api_alias
5. Leave all other fields on their defaults, click **Submit**
6. Once you return to the main screen, take note of the ID on the row with **yed_api_alias**  
   ![](/images/132-cca-config.png)

### Configure the Credentials

1. Navigate back to the ServiceNow dashboard and find **Connections & Credentials**
2. First we will select **Credentials**  
   ![](/images/129-cred-conn-find.png)
3. Click New
4. Select **API Key Credentials**  
   ![](/images/130-type-cred.png)
5. Fill out the form with the following values

- **Name:** YED API Connection
- **API Key:** Bearer {your YED API Secret here}  
  ![](/images/131-cred-form.png)

6. Click Submit

### Configure the Connection

1. On the menu on the left hand side select **Connections**
2. Click New
3. Select **HTTP(s) Connection**  
   ![](/images/133-conn-type.png)
4. Configure the Form with the following information

- **Name:** yed_api
- **Credential:** YED API Connection (this is the one created in the previous step)
- **Connection alias:** Choose the Connection Alias ID that you created in the previous state
- **Connection URL:** Your YED API URL  
  ![](/images/134-config-conn.png)

5. Click Submit

You can now return to the Flow Designer to configure the REST step - The Alias for your connection will be automatically configured.

## The REST Step

---

The REST step is exclusive to IntegrationHub, and is only available after activating the IntegrationHub Installer plugin.

The IntegrationHub Installer Plugin can be installed following [these steps](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_activating_integrationhub)

### Add the shipment request REST step to the Action

1. Click the + button underneath the Script step you added earlier
   ![](/images/25-add-new-step.png)
2. Click the REST step in the **Integrations** section of the dialog
   ![](/images/26-rest.png)
3. You will be presented with the REST step UI

### Define Connection Details

1. Change the **Connection** choice to "Connection Alias"
2. Change the connection alias to the one created in the previous step
3. Set the **Resource Path** to `/shipments_exact`
4. Set the **HTTP Method** to POST
5. Click the + button under Headers and add the following

| **Name**     | **VALUE**        |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

![](/images/27-2-rest-connection-headers.png)

6. Drag the **Shipment Exact Request** data pill from the data pane to the **Request Content Request Body [Text]** field
   ![](/images/28-request-content.png)
7. **Save** the Rest step

## The Output Script Step

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
  const messages =
    response.shipment_messages === undefined
      ? ""
      : JSON.stringify(response.shipment_messages);
  outputs.shipment_messages = messages;
})(inputs, outputs);
```

### Script Output Variables

1. In the **Output Variables** widget, click the **+ Create Variable** button and add the following

| **Label**              | **Name**               | **Type** | **Mandatory** |
| ---------------------- | ---------------------- | -------- | ------------- |
| Shipment Response      | shipment_response      | String   | off           |
| Shipment Request ID    | shipment_request_id    | String   | off           |
| Shipment State ID      | shipment_state_id      | Integer  | off           |
| Shipment State Message | shipment_state_message | String   | off           |
| Shipment Messages      | shipment_messages      | String   | off           |

![](/images/32-output-variables.png)

6. **Save** the Script step

## Action Outputs

---

Use Action Outputs to return data from the action to Flow Designer. The Script Output variables we just defined are intentionally "private" to the action and are intended for use by scripts or other action steps (this, the camel case naming convention).

The same naming considerations we used for Action Inputs also apply to Action Outputs. Outputs should always be human readable, use natural language, and should not contain underscores or use variable naming conventions like camelCase.

**GOOD:** Score

**BAD:** score

1. Click the **Outputs** section in the **Action Outline**
2. Click the **+ Create Output** button
3. Set the following outputs

| **Label**              | **Name**               | **Type** | **Mandatory** |
| ---------------------- | ---------------------- | -------- | ------------- |
| HTTP Status Code       | http_status_code       | String   | off           |
| HTTP Error Code        | http_error_code        | String   | off           |
| HTTP Error Message     | http_error_message     | String   | off           |
| Shipment Request ID    | shipment_request_id    | String   | off           |
| Shipment State ID      | shipment_state_id      | Integer  | off           |
| Shipment State Message | shipment_state_message | String   | off           |
| Shipment Messages      | shipment_messages      | String   | off           |

![](/images/33-create-action-output.png)

5. Click the **Exit Edit Mode** button
6. Using the Data Pill Picker, set the **Value** of the Script Output Variables to the associated output variables
   ![](/images/34-action-output.png)
7. **Save** the Action

### Test the Action

1. Click the **Test** button
2. Set the following variables

| **Name**                  | **VALUE**          |
| ------------------------- | ------------------ |
| Country Code 2            | US                 |
| Recipient                 | Example Inc.       |
| Street Line 1             | 7788 Foxrun Street |
| City                      | Dedham             |
| Region                    | MA                 |
| Postal Code               | 02026              |
| Product ID                | 1                  |
| Inventory Product Id      | 15                 |
| Shipment Product Quantity | 1                  |

![](/images/35-test-input.png)

3. Click **Run Test**  
   ![](/images/35-test.png)
4. Wait for the processing to complete and click **Your test has finished running. View the action execution details.**
   ![](/images/36-test-finished.png)
5. In the **Output Data** verify the **Shipment Message** is equal to "Awaiting Validation"
   ![](/images/36-test-validate.png)

### Delete Test Order

After every test it is important that you delete any orders directly in the YED Console - See more information below in the section [Cancelling Your Test Orders](#cancelling-your-test-orders)

### Publish the Action

If everything looks good, click the **Publish** button on the action to make it available for all flows.

## Create the Shipment Request Flow

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

### Add the Form Variables

This step will allow you to use the Product ID that was defaulted in Catalog Item step

1. Click the **Select to add an Action, Flow Logic, or Subflow** link
2. Click the **Action** button. Click the **ServiceNow Core** option. Click the **Get Catalog Variables** button.  
   ![](/images/109-get-catalog-var.png)
3. Drag the **Requested Item Records** pill from the table on the right into the **Submitted Request [Requested Item]** Field
4. For the field **Template Catalog Items and Variable Sets**, click the dropdown and select the Catalog Item you created **YubiKey 5NFC**.
5. Use the right facing arrow to move the yubikey_product_id field to the Selected Column  
   ![](/images/110-get-catalog-var.png)
6. Click **Done**

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

| **Name**                  | **VALUE**                                                                      |
| ------------------------- | ------------------------------------------------------------------------------ |
| Delivery Type             | 1                                                                              |
| Country Code 2            | Trigger > Requested Item Record > Requested for > Location > Country           |
| Recipient                 | Trigger > Requested Item Record > Requested for > Company > Name               |
| Recipient Email           | Trigger > Requested Item Record > Requested for > Email                        |
| Recipient Firstname       | Trigger > Requested Item Record > Requested for > First Name                   |
| Recipient Lastname        | Trigger > Requested Item Record > Requested for > Last Name                    |
| Recipient Telephone       | Trigger > Requested Item Record > Requested for > Location > Phone             |
| Street Line 1             | Trigger > Requested Item Record > Requested for > Location > Street            |
| City                      | Trigger > Requested Item Record > Requested for > Location > City              |
| Region                    | Trigger > Requested Item Record > Requested for > Location > State / Province  |
| Postal Code               | Trigger > Requested Item Record > Requested for > Location > Zip / Postal Code |
| Product ID                | yubikey_product_id                                                             |
| Inventory Product Id      | 15                                                                             |
| Shipment Product Quantity | Trigger > Requested Item Record > Quantity                                     |

![](/images/43-2-map-action-inputs.png)

4. Click **Done**

## Add the Flow Logic to the Flow

---

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

13. Drag the **Shipment Request ID** data pill from the data pane next to the **Shipment ID** text
14. Drag the **Shipment State Message** data pill from the data pane next to the **Reason** text
15. Drag the **Shipment Messages** data pill from the data pane next to the **More Details** text
16. Click **Done**
17. Click **Activate**

Challenge: If the shipment fails, return the Shipment State Message and Shipment Messages to the user to fix any errors.

## Add the Flow to the Catalog Item

---

Now we will add the flow to the Catalog Item that we created so that the flow launches whenever the Catalog Item is submitted

1. Navigate to **Service Catalog > Catalog Builder** link  
   ![](/images/97-catalog-builder.png)
2. Click on the **Catalog items** tab on the top of the screen. Find your **YubiKey 5NFC** Catalog Item. Select it and Click **Edit**  
   ![](/images/111-edit-catalog-item.png)
3. Click on the Fulfillment Tab
4. Change Selected Flow to **Yubico YED API Create a Shipment**  
   ![](/images/112-edit-selected-flow.png)
5. Click **Save**
6. Click into the **Review and Submit** tab, click **Submit**

## Test the Flow

---

To test the flow first we must impersonate a user with an address and order a Yubikey

### Order a YubiKey from the Service Catalog

1. Click **System Administrator** dropdown menu then click **Impersonate User**
2. Click **Search for user** and select "Adela Cervantsz"
3. Click **Service Catalog** then click **Peripherals**
4. Click **Yubikey 5NFC**
5. Click **Order Now**
6. Take note of the **Request Number** e.g. REQ0010001
7. Click **Adela Cervantsz** and then select **End Impersonation**

### Launch the flow designer

To launch the flow designer, navigate to **Flow Designer > Designer**

### Test the Request Shipment flow

1. Search for **Yubico YED API Create a Shipment** by name and then select the flow
2. Click **Test**
3. A dialog will open. Click **Requested Item Record** and select the **Request Number** from earlier e.g. REQ0010001
4. Click **Run Test**
5. Click **Your test has finished running. View the flow execution details.**
6. This will open the Execution Details for the test run
7. Click the **YED Shipment Request** action. The Steps section will show the list of steps executed inside of the action, and the step configuration details

### Delete Test Order

After every test it is important that you delete any orders directly in the YED Console - See more information below in the section [Cancelling Your Test Orders](#cancelling-your-test-orders)

## Call the Flow from a Workflow

---

### Create the workflow

1. Open the **Workflow Editor**  
   ![](/images/71-workflow.png)
2. Search for the workflow named **Service Catalog Item Request**
   ![](/images/72-search.png)
3. Click **Service Catalog Item Request** to open the workflow
   ![](/images/73-service-catalog-item-request.png)
4. Click **Workflow Actions** > **Copy**  
   ![](/images/74-copy.png)
5. Set the **Workflow Name** to "Service Catalog YubiKey Request"
6. Delete the following nodes:

- **Approval - User** activity named "CIO Approval"
- **Catalog Task** activity named "Asset Mgmt. Fulfills Order"
- **Notification** named "Inform of Backordered Status"
- **Catalog Task** activity named "Receive Backordered Item"
- **Notification** activity named "Inform Backordered Received"
- **Catalog Task** activity named "Deploy Item to User"
- **Log Message** named "Item Deployed"

![](/images/75-delete.png)

6. Click the **Core** tab and  
   ![](/images/76-core.png)
7. Drag the **Run Script** to the Workflow canvas
8. Set the fields of the Run Script activities properties to the following:

| **Name** | **Value**         |
| -------- | ----------------- |
| Name     | Request YubiKey   |
| Stage    | Order Fulfillment |

![](/images/80-stage.png)

9. Set the **Script** to:

```Javascript
activity.result = shipYubiKey();

function shipYubiKey() {

	try {
		var inputs = {};
		inputs['request_item'] = current;
    inputs['table_name'] = current.getTableName();

		var result = sn_fd.FlowAPI.getRunner().flow('x_490107_yubico_0.yubico_yed_api_create_a_shipment').inForeground().withInputs(inputs).run();

	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
		return -1;
	}

}
```

10. In a new window, navigate to the **Flow Designer**, open the "Yubico YED API Create a Shipment" Flow, click the **...**, then click **Create code snippet**. In the workflow script, replace `x_490107_yubico_0.yubico_yed_api_create_a_shipment` with your flow identifier
    ![](/images/95-snippet.png)
11. Click **Submit**  
    ![](/images/77-submit.png)
12. Delete the arrow from the **Approval Action**
13. Drag the **Approval Action Always Condition box** to **Run Script**
    ![](/images/78-approval-arrow.png)
14. Double click the **Run Script**
15. Click **Conditions**
16. Delete the **Always** condition
    ![](/images/79-delete-always.png)
17. Click **New**
18. Set the fields to the following:

| **Name**          | **Value**                    |
| ----------------- | ---------------------------- |
| Name              | Success                      |
| Short Description | Shipment Awaiting Validation |
| Condition         | activity.result==3           |

![](/images/81-success-condition.png)

19. Click \*_Submit_
20. Click **New**
21. Set the fields to the following:

| **Name**          | **Value**          |
| ----------------- | ------------------ |
| Name              | Failure            |
| Short Description | Shipment Failure   |
| Condition         | activity.result!=3 |

![](/images/82-failure-condition.png)

22. Click \*_Submit_
23. Close the Workflow Conditions view and return to the workflow canvas
24. Drag the **Run Script Success Condition box** to **Notification - Inform Completion**
    ![](/images/83-success-arrow.png)
25. Double-click the **Notification - Inform Completion** and set the **Stage** to "Completed"
    ![](/images/85-stage-completed.png)
26. Click **Update**
27. Right-click **Notification - Inform Completion** and select **Copy Activity**
28. Double-click the new **Notification** activity and set the fields to the following

| **Name** | **Value**                                                            |
| -------- | -------------------------------------------------------------------- |
| Name     | Inform of shipment request failure                                   |
| Stage    | Request Cancelled                                                    |
| Subject  | Your requested item ${number} for ${cat_item} failed due to an error |

29. Click **Submit**
30. Drag the **Run Script Failure Condition Box** to **Notification - Inform of shipment request failure**
31. Drag the **Notification - Inform of shipment request failure Always Condition Box** to **End**
    ![](/images/86-yed-workflow.png)
32. Publish the workflow  
    ![](/images/96-publish.png)

### Set the YubiKey process engine to the workflow

1. Go to **Service Catalog** > **Catalog Definitions** > **Maintain Items**
   ![](/images/87-maintain-items.png)
2. Select the **Yubikey 5NFC**
3. Select the tab **Process Engine**
4. Set the **Workflow** to "Service Catalog YubiKey Request"
5. Click **Update**
   ![](/images/88-2-set-workflow.png)

## Test the Workflow

---

To test the workflow first we must impersonate a user with an address and order a Yubikey

### Order a YubiKey from the Service Catalog

1. Click **System Administrator** dropdown menu then click **Impersonate User**
2. Click **Search for user** and select "Adela Cervantsz"
3. Click **Service Catalog** then click **Hardware**
4. Click **Yubikey 5NFC**
5. Click **Order Now**
6. Take note of the **Request Number** e.g. REQ0010002
7. Click **Adela Cervantsz** and then select **End Impersonation**
8. Open the **Service Catalog** > **Open Records** > **Items**  
   ![](/images/92-open-record.png)
9. Select the **Request Item** e.g. REQ0010002
10. Under the **Approvers** tab, check the box and **Approve** the request.
    ![](/images/93-approve.png)
11. Click **Workflow Context**  
    ![](/images/94-context.png)
12. Go to **Workflow Transition History** and view the workflow execution

### Delete Test Order

After every test it is important that you delete any orders directly in the YED Console - See more information below in the section [Cancelling Your Test Orders](#cancelling-your-test-orders)

## Bonus Lab - Send your users an email with the tracking link information

---

Now that you have created a workflow to create a Shipment to YED, let's use the API to return a tracking link to the customer. The following two sections will use concepts taught in the previous sections such as creating as action, updating and configuring a flow, as well as calling the YED API

## Create the GET Shipments Action

---

We will now create an action that will allow us to get information about the current shipment, which we will use to update the flow and send **Tracking Information** to the user before closing the ticket

### Launch the flow designer

To launch the flow designer, navigate to **Flow Designer > Designer**
![](/images/6-flow-designer.png)

### Create the shipment request action

1. Click the **+ New** button, and then click **Action** in the resulting menu  
   ![](/images/19-new-action.png)
2. Fill out the Action Properties form

- **Name:** YED Get Shipment
- **Application:** Yubico Enterprise Delivery API Spoke
- **Description:** Get information about a specific shipment  
  ![](/images/117-action-properties.png)

3. Click the **Submit** button and you will be taken to the new/empty Action

### Add the shipment request inputs

1. Click the **Inputs** section at the top of the **Action Outline**
2. Click the **Create Input** button and add the following based on the create shipment request object ([GET /shipments_exact](https://console.yubico.com/help/api-req.html))

| **Label**   | **Type** | **Mandatory** |
| ----------- | -------- | ------------- |
| Shipment ID | String   | on            |

![](/images/118-create-input.png)

### Add the shipment request REST step to the Action

1. Click the + button underneath the Script step you added earlier
   ![](/images/25-add-new-step.png)
2. Click the REST step in the **Integrations** section of the dialog
   ![](/images/26-rest.png)
3. You will be presented with the REST step UI
4. For the connection details use the same Connection Alias that you created for the previous action

- **Connection:** Use Connection Alias
- **Connection Alias:** Select your connection alias

3. Set the **Resource Path** to `/shipments_exact/` and drag the **Shipment ID** pill to the end of the URL
4. Set the **HTTP Method** to GET
5. Click the + button under Headers and add the following

| **Name**     | **VALUE**        |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

![](/images/122-rest-connection-headers.png)

### Configure the Output Script

1. Add a new Action Step after the REST step.
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
  outputs.tracking_link = response.tracking_link;
  const messages =
    response.shipment_messages === undefined
      ? ""
      : JSON.stringify(response.shipment_messages);
  outputs.shipment_messages = messages;
})(inputs, outputs);
```

### Script Output Variables

1. In the **Output Variables** widget, click the **+ Create Variable** button and add the following

| **Label**              | **Name**               | **Type** | **Mandatory** |
| ---------------------- | ---------------------- | -------- | ------------- |
| Shipment Response      | shipment_response      | String   | off           |
| Shipment Request ID    | shipment_request_id    | String   | off           |
| Shipment State ID      | shipment_state_id      | Integer  | off           |
| Shipment State Message | shipment_state_message | String   | off           |
| Shipment Messages      | shipment_messages      | String   | off           |
| Tracking Link          | tracking_link          | String   | off           |

![](/images/119-output-variables.png)

6. **Save** the Script step

### Create Action Outputs

1. Click the **Outputs** section in the **Action Outline**
2. Click the **+ Create Output** button
3. Set the following outputs

| **Label**              | **Name**               | **Type** | **Mandatory** |
| ---------------------- | ---------------------- | -------- | ------------- |
| HTTP Status Code       | http_status_code       | String   | off           |
| HTTP Error Code        | http_error_code        | String   | off           |
| HTTP Error Message     | http_error_message     | String   | off           |
| Shipment Request ID    | shipment_request_id    | String   | off           |
| Shipment State ID      | shipment_state_id      | Integer  | off           |
| Shipment State Message | shipment_state_message | String   | off           |
| Shipment Messages      | shipment_messages      | String   | off           |
| Tracking Link          | tracking_link          | String   | off           |

![](/images/120-create-action-output.png)

5. Click the **Exit Edit Mode** button
6. Using the Data Pill Picker, set the **Value** of the Script Output Variables to the associated output variables
   ![](/images/121-action-output.png)
7. **Save** the Action

### Test the Action

1. Click the **Test** button
2. Set the following variables

| **Name**    | **VALUE**                              |
| ----------- | -------------------------------------- |
| Shipment ID | \*Use a shipment ID in your YED portal |

3. Click **Run Test**  
   ![](/images/35-test.png)
4. Wait for the processing to complete and click **Your test has finished running. View the action execution details.**
   ![](/images/36-test-finished.png)
5. In the **Output Data** verify the information is the same as found in the YED Console

### Delete Test Order

After every test it is important that you delete any orders directly in the YED Console - See more information below in the section [Cancelling Your Test Orders](#cancelling-your-test-orders)

### Save and Publish

You've created your action - Be sure to **Save** the **Publish**

## Update the Flow to Send Shipment Tracking Information

---

We will now update the flow to send Shipment Tracking Information to the customer who requested the YubiKey. We will add a loop to the end of the existing flow to continuously check the created shipment for a shipping link to be sent to the customer

1. Launch the flow designer, navigate to **Flow Designer > Designer**
   ![](/images/6-flow-designer.png)
2. Return back to your flow **Yubico YED API Create a Shipment**

### End the Flow of Shipment Creation Failure

1. Click the plus sign under **Send Email**
2. Click Flow Login, then select **End**  
   ![](/images/114-end-flow.png)

### Create Flow Variables

We will need to create new variables to persist some form of state that can be referenced as the flow loops

1. Click the 3 dots **...** on the right side of the screen
2. Click **Flow Variables**
3. Click the + sign twice, you will need 3 variables
4. The variables should follow this format  
   ![](/images/115-create-flow-vars.png)

| **LABEL**       | **NAME**             | **TYPE** |
| --------------- | -------------------- | -------- |
| Shipment ID     | curr_shipment_id     | String   |
| Shipment Status | curr_shipment_status | String   |
| Tracking Link   | tracking_link        | String   |

5. Exit the pop-up
6. Click **Add an Action, Flow Logic, or Subflow**
7. Click Flow Logic, then select **Set Flow Variables**  
   ![](/images/113-set-flow-vars.png)
8. Click the plus sign on the right **twice**, you will need two variables
9. Create the first variable - This will be used to persist the Shipment ID

- **Name:** curr_shipment_id
- **Data:** Drag the **Shipment Request ID** pill from 2 - YED Shipment Request

10. Create the second variable, this will be used to track the latest status of the shipment

- **Name:** status
- **Data:** Drag the **Shipment State ID** pill from 2 - YED Shipment Request OR set it to 3 since we're assuming success  
  ![](/images/116-set-flow-vars.png)

11. Click Done

### Create the GET Shipment Loop

We will now create the loop that will iterate until shipping information is available to send to the customer.

1. Click **Add an Action, Flow Logic, or Subflow**
2. Click **Flow Logic**, then select **Do the following until**  
   ![](/images/123-flow-loop.png)
3. You will need to set the condition that the loop will iterate until the Shipment Status changes to 103 ([defined in the API spec as Shipment Shipped](https://console.yubico.com/help/api-req.html#table-4))

- Drag the flow variable **Shipment Status** pill to Condition 1
- Leave the condition as **is**
- Set the condition value as 103  
  ![](/images/124-flow-condition.png)

4. Click Done

### Create the loop logic

Now we will set what will be done in the loop, this will consist of two actions - Waiting X amount of time, then calling to the GET /shipments_exact API using the Action that was just created.

The reason why there is a delay in time before calling to the API is because a Shipment will not be immediately available once it is created

1. Within the loop click **Add an Action, Flow Logic, or Subflow**
2. Click **Flow Logic**, then select **Wait for a duration of time**
3. Set the **Wait for** value to 24 hrs (or to whatever time fits your requirements)  
   ![](/images/125-flow-wait.png)
4. Click done
5. Within the loop click **Add an Action, Flow Logic, or Subflow**
6. Click **Action**, then select **YED Get Shipment**
7. Drag the flow variable pill **Shipment ID** into the Shipment ID field
8. Click Done  
   ![](/images/126-flow-request.png)
9. Click **Add an Action, Flow Logic, or Subflow**
10. Click Flow Logic, then select **Set Flow Variables**  
    ![](/images/113-set-flow-vars.png)
11. Click the plus sign on the right **twice**, you will need two variables
12. Create the first variable - This will be used to persist the Shipment ID

- **Name:** tracking_link
- **Data:** Drag the **Tracking Link** pill from 9 - YED Get Shipment  
  ![](/images/127-set-track-link.png)

11. Click Done

### Create the email

We will now create the template for the email that will be sent to the user with the tracking information

1. Click **Action**. Click **ServiceNow Core**. Under **Default** click **Send Email**.
2. Set **To** using the pill Trigger - Service Catalog > Requested Item Record > Requested For > Email
3. Set **Subject** to "Your YubiKey has Shipped!"
4. Set **Body** to

```
Your order has been shipped

You can track your shipment using this link

Thank you
```

5. Drag the **Shipment ID** data pill from the Flow Variable data pane next to the **Your order** text
6. Drag the **Tracking Link** data pill from the Flow Variable data pane next to the **link** text  
   ![](/images/128-set-close-email.png)
7. Click **Done**
8. Click **Activate**

## Cancelling Your Test Orders

---

It should be noted that orders made through the YED API are made **directly** on your production inventory. YED does not currently support "sandbox" environments with fake data/inventory. During testing and development it is crucial that you login to the YED Console to remove any orders that were created - Otherwise, your order will be processed and a key from your inventory will be shipped.

Orders are not processed for shipment until **3AM PST** - So ensure your developers/testers are instructed to delete their shipments prior to closing their work day. This time is centrally configured across YED and **cannot be edited**.

## References

---

- [YED API Documentation](https://console.yubico.com/apidocs/)
- [YED API Onboarding Playbook](https://console.yubico.com/help/API_Onboarding_Playbook.html)
- [Spoke Development Best Practices](https://github.com/ServiceNowDevProgram/SpoketoberfestResources/blob/master/SpokeDevelopmentBestPracticesPublic.md)
- [Import a ServiceNow Application from Source Control](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_devenvironment_quebec_importing_an_application_from_source_control)
- This example is based off of the ServiceNow [Building Your First Spoke guidebook](https://developer.servicenow.com/connect.do#!/event/knowledge2020/CCW2510)

## Help & Support

---

Yubico Professional Services provides consultation and workshops focused on technical integration, deployment strategy or both. Contact your Yubico customer success manager to learn more.

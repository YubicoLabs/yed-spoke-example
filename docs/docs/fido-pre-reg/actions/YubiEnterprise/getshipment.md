---
sidebar_position: 3
---

# Get FIDO Pre-reg shipment details

In this step we will configure the custom action that will call to the YubiEnterprise Delivery API to get the details about a FIDO Pre-reg shipment. When ready, this will include the finalized PIN and credential responses.

Before you proceed ensure that you have configured the connection alias and credential used for calling the YubiEnterprise API with your API token.

## Action properties

On the ServiceNow home screen, search for **flow designer**.

Click **Flow Designer**, a new window should open.

![Configuration menu](/img/actions_1.png)

Once the **Flow Designer** page opens, click the **Create new** button, then select **Action**.

![Configuration menu](/img/actions_2.png)

A menu will appear to configure the action's properties. Use the following values to initialize your action.

- **Action name**: YubiEnterprise get shipment (Pre-reg)
- **Application**: YubiEnterprise Delivery App
- **Description**: Get information about a specific YubiEnterprise FIDO Pre-reg shipment

![Configuration menu](/img/pre-reg/pr-19.png)

Click **Submit**.

## Action inputs

Next we are going to configure the inputs that go into the action. These inputs are the parameters that are going to be passed into our API call by our flow.

For each row in the table below, perform the following steps:

1. Click the **+Create Input** button at the top.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label       | Type   | Mandatory |
| ----------- | ------ | --------- |
| Shipment ID | String | on        |

Your actions input menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-20.png)

Click **Save** once your inputs are complete.

## API REST call

Next we will configure the action step for making the REST HTTP call to the YubiEnterprise Delivery API.

On the left side, in the Action Outline, click the **bottom** blue **+** button.

![Add second action](/img/bonus_get_3.png)

Search for **rest** and select the **REST** option

:::note

If the REST option does not appear then you have not activated the IntegrationHub plugin. Follow the instructions in the [prerequisites](/docs/prereqs) section.

:::

![Inputs menu](/img/actions_10.png)

### Connection details

First we will add our API credentials to the REST call. We will utilize the connection alias that was created earlier in this guide.

Ensure that the Connection field is set to **Use Connection Alias**.

Change the **Connection Alias** to the one created earlier in the guide. The **Base URL** should be set automatically based on the connection alias.

Your connection details should look like the example below.

![Connection details final](/img/actions_11.png)

### Request details

Next we will configure the details of the API method call. We will be utilizing the [`GET /fpr/shipments/{id}`](https://console.yubico.com/apidocs/#tag/fido2PreRegisteredShipments/operation/GetFPRShipmentById) API method

Configure the Request Details section with the following values:

- **Build Request**: Manually
- **Resource Path**: Type **/fpr/shipments/** then drag the **Shipment ID** data pill to the end of the url (see the image below for an example)
- **HTTP Method**: GET

The **Headers** should include two header properties using the values below

| Name         | Value            |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

Your request details should look like the example below.

![Request details final](/img/pre-reg/pr-21.png)

## Output script

We will now create a script to format the outputs of the action. This will ensure that we are able to not only capture data from a successful shipment, but to identify and understand potential errors with our shipment.

On the left side, in the Action Outline, click the bottom blue **+** button.

![Action outline 3](/img/bonus_get_5.png)

Search for **scripts** and select the **Script** option

![Script action step](/img/actions_6.png)

### Script inputs

We'll start by creating the input for the script. We will only create one input, which will be the result of the previous REST step call

1. Click the **+Create Variable** button
2. **Name**: responseBody (case sensitive)
3. **Value**: Drag the Response Body data pill from the REST step section on the right side of the menu

Your script inputs menu should look like the example below.

![Script action step](/img/bonus_get_6.png)

### Adding the script

Next we are going to add a script to Script field. Copy the script provided below into the Script field.

```javascript
(function execute(inputs, outputs) {
  const response = JSON.parse(inputs.responseBody);

  const shipment_state_id = response.shipment_state.shipment_state_id;
  outputs.shipment_state_id = shipment_state_id;

  if (shipment_state_id === 103 || shipment_state_id === 104) {
    //Assuming only one shipment for POC
    const shipment_item = response.shipment_items[0];

    //Assuming only one product data item
    const product_data = shipment_item.product_data[0];

    outputs.serial_number = product_data.serial_number;
    outputs.firmware_version = product_data.firmware_version;
    outputs.pin_response = product_data.fido_pin_response;

    //Assuming only one credential for POC
    outputs.cred_response = product_data.fido_credential_responses[0];
  }
})(inputs, outputs);
```

### Script outputs

Lastly, we will add the output variables for the script

For each row in the table below, perform the following steps:

1. Click the **+Create Variable** button at the bottom.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label             | Type    | Mandatory |
| ----------------- | ------- | --------- |
| shipment_state_id | Integer | on        |
| serial_number     | String  | off       |
| firmware_version  | String  | off       |
| pin_response      | String  | off       |
| cred_response     | String  | off       |

Your script outputs menu should look like the example below.

![Script outputs](/img/pre-reg/pr-22.png)

Click **Save** once your output script is complete

## Action outputs

Lastly we will define the outputs of the action. These outputs will be usable by the final flow that will orchestrate the ordering experience. We want to ensure that the action outputs are able to express details about the shipment, and any issues should they have occurred.

We will start by clicking the **Outputs** tab in the **Action Outline** pane.

![Action outline outputs](/img/bonus_get_7.png)

Next we are going to configure the outputs.

For each row in the table below, perform the following steps:

1. Click the **+Create Output** button at the top.
2. Fill in the input using the data provided below to the corresponding field (Note: Unlike the previous examples, the **Name** field is not auto-populated).

| Label               | Name              | Type    | Mandatory |
| ------------------- | ----------------- | ------- | --------- |
| Status Code         | status_code       | String  | on        |
| Shipment State ID   | shipment_state_id | Integer | on        |
| Serial Number       | serial_number     | String  | off       |
| Firmware Version    | firmware_version  | String  | off       |
| PIN Response        | pin_response      | String  | off       |
| Credential Response | cred_response     | String  | off       |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-23.png)

Once complete, press the **Exit Edit Mode** button on the top of the menu.

A new menu should appear showing the outputs you just defined with empty **Value** fields. For each output, you will add a data pill from the **REST step** and **the second** **Script step** sections on the right side of the menu

Use the table below to correlate the correct data pill to a label.

| Label               | Section > Data pill               |
| ------------------- | --------------------------------- |
| Status Code         | REST step > Status Code           |
| Shipment State ID   | Script step > shipment_state_id   |
| Serial Number       | Script step > serial_number       |
| Firmware Version    | Script step > firmware_version    |
| PIN Response        | Script Step > pin_response        |
| Credential Response | Script step > credential_response |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-24.png)

Click **Save** once your outputs are complete

## Publish the action

If everything looks good, click the **Publish** button at the top of the action menu to make the action available for all flows.

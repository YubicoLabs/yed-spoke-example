---
sidebar_position: 6
---

# Create a custom action

In this step we will configure the custom action that will call to the YubiEnterprise Delivery API to create a new YubiKey shipment. Think of the action like a method in a traditional programming environment. This action will be used in the next section when we configure a Flow to complete the orchestration.

Before you proceed ensure that you have configured the connection alias and credential used for calling the API with your API token.

## Action properties

On the ServiceNow home screen, search for **flow designer**.

Click **Flow Designer**, a new window should open.

![Configuration menu](/img/actions_1.png)

Once the **Flow Designer** page opens, click the **Create new** button, then select **Action**.

![Configuration menu](/img/actions_2.png)

A menu will appear to configure the action's properties. Use the following values to initialize your action.

- **Action name**: YubiEnterprise create shipment
- **Application**: YubiEnterprise Delivery App
- **Description**: Place an order for a new YubiKey through the YubiEnterprise Delivery API
- Use the defaults for the remaining properties

![Configuration menu](/img/actions_3.png)

Click **Submit**.

## Action inputs

Next we are going to configure the inputs that go into the action. These inputs are the parameters that are going to be passed into our API call by our flow.

For each row in the table below, perform the following steps:

1. Click the **+Create Input** button at the top.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label                     | Type    | Mandatory |
| ------------------------- | ------- | --------- |
| Delivery Type             | Integer | off       |
| Country Code 2            | String  | on        |
| Recipient                 | String  | on        |
| Recipient Email           | String  | off       |
| Recipient Firstname       | String  | off       |
| Recipient Lastname        | String  | off       |
| Recipient Telephone       | String  | on        |
| Street Line 1             | String  | on        |
| Street Line 2             | String  | off       |
| City                      | String  | on        |
| Region                    | String  | off       |
| Postal Code               | String  | on        |
| Product ID                | String  | on        |
| Inventory Product ID      | Integer | on        |
| Shipment Product Quantity | Integer | on        |

Your actions input menu should look like the example below.

![Inputs menu](/img/actions_4.png)

Click **Save** once your inputs are complete.

## Input script

Next, we will pass our inputs through a script to massage our data to ensure that it's ready to be consumed by our API. The two major functions of this script are to:

- Ensure that number based inputs are converted to Ints
- Enforce character limitations to prevent downstream API errors

On the left side, in the Action Outline, click the blue **+** button.
![Input plus](/img/actions_5.png)

Search for **scripts** and select the **Script** option

![Inputs menu](/img/actions_6.png)

### Script inputs

We'll start by creating inputs for the script. This will utilize the same inputs that we defined in the previous step (yes, sadly this does need to be repeated).

For each of the items in the table below, do the following steps:

1. Click the **+Create Variable** button
2. Set the name using the name provided in the table below (warning: these values are case sensitive)
3. Drag the corresponding data pill from the right side **Data** menu

| Name (case sensitive)     | Data pill                 |
| ------------------------- | ------------------------- |
| delivery_type             | Delivery Type             |
| country_code_2            | Country Code 2            |
| recipient                 | Recipient                 |
| recipient_email           | Recipient Email           |
| recipient_firstname       | Recipient Firstname       |
| recipient_lastname        | Recipient Lastname        |
| recipient_telephone       | Recipient Telephone       |
| street_line1              | Street Line 1             |
| street_line2              | Street Line 2             |
| city                      | City                      |
| region                    | Region                    |
| postal_code               | Postal Code               |
| product_id                | Product ID                |
| inventory_product_id      | Inventory Product ID      |
| shipment_product_quantity | Shipment Product Quantity |

Your script inputs menu should look like the example below.

![Inputs menu](/img/actions_7.png)

### Adding the script

Next we are going to add a script to **Script** field. Copy the script provided below into the **Script** field.

```js
(function execute(inputs, outputs) {
  /*
   * Below are the character constraints of the text inputs
   * An example of handling this is shown in the "recipient" field
   * The same pattern can be used for the other fields you wish to constrain
   *
   * country_code_2: 2
   * recipient: 20
   * recipient_firstname: 15
   * recipient_lastname: 20
   * street_line_1, and 2: 60
   * city: 60
   * region: 50
   * recipient_email: 80
   * recipient_telephone: 40
   *
   * Note, when using a substring, take a few characters off of the
   * limit as special characters count for * more than 1 character
   */

  outputs.shipment_exact_request = JSON.stringify({
    delivery_type: parseInt(inputs.delivery_type),
    country_code_2: inputs.country_code_2,
    recipient: inputs.recipient.substring(0, 15),
    recipient_email: inputs.recipient_email,
    recipient_firstname: inputs.recipient_firstname,
    recipient_lastname: inputs.recipient_lastname,
    recipient_telephone: inputs.recipient_telephone,
    street_line1: inputs.street_line1,
    street_line2: inputs.street_line2,
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

### Script outputs

Lastly, we will add the output variable for the script. This will pass the JSON object that we created in the previous step to the action component that will make the HTTP REST call to the YubiEnterprise Delivery API.

In the **Output Variables** section, click the **+Create Variable** button.

Set the single output using the variables below:

- **Label**: Shipment Exact Request
- **Name**: Will be auto populated based on the label
- **Type**: String (default)
- **Mandatory**: on

Your script outputs menu should look like the example below.

![Scripts outputs](/img/actions_8.png)

Click Save once your script is ready.

## API REST call

Next we will configure the action step for making the REST HTTP call to the YubiEnterprise Delivery API.

On the left side, in the Action Outline, click the **bottom** blue **+** button.

![Add second action](/img/actions_9.png)

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

Next we will configure the details of the API method call. We will be utilizing the [`POST /shipments_exact`](https://console.yubico.com/apidocs/#operation/CreateShipmentExact) API method

Configure the Request Details section with the following values:

- **Build Request**: Manually
- **Resource Path**: /shipments_exact
- **HTTP Method**: POST

The **Headers** should include two header properties using the values below

| Name         | Value            |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

Your request details should look like the example below.

![Request details final](/img/actions_12.png)

### Request content

Next we will add data to the body of our POST request. We will utilize the output of the previous script step. In the **Request Content** section, set the following values

- **Request Type**: Text
- **Request Body**: Drag the **Shipment Exact Request** data pill from the **Script step** section on the right side of the menu.

Your request content should look like the example below.

![Request details final](/img/actions_13.png)

Click save once your API call is complete

## Output script

We will now create another script to format the outputs of the action. This will ensure that we can capture data from a successful shipment, and to identify and understand potential errors.

On the left side, in the Action Outline, click the bottom blue **+** button.
![Action outline 3](/img/actions_14.png)

Search for **scripts** and select the **Script** option

![Script action step](/img/actions_6.png)

### Script inputs

We'll start by creating the input for the script. We will only create one input, which will be the result of the previous REST step call

1. Click the **+Create Variable** button
2. **Name**: responseBody (case sensitive)
3. **Value**: Drag the Response Body data pill from the REST step section on the right side of the menu

Your script inputs menu should look like the example below.

![Script action step](/img/actions_15.png)

### Adding the script

Next we are going to add a script to Script field. Copy the script provided below into the Script field.

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

### Script outputs

Lastly, we will add the output variables for the script

For each row in the table below, perform the following steps:

1. Click the **+Create Variable** button at the bottom.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label                  | Type    | Mandatory |
| ---------------------- | ------- | --------- |
| Shipment Response      | String  | off       |
| Shipment Request ID    | String  | off       |
| Shipment State ID      | Integer | off       |
| Shipment State Message | String  | off       |
| Shipment Messages      | String  | off       |

Your script outputs menu should look like the example below.

![Script outputs](/img/actions_16.png)

Click **Save** once your output script is complete

## Action outputs

Lastly we will define the outputs of the action. These outputs will be usable by the final flow that will orchestrate the ordering experience. We want to ensure that the action outputs are able to express details about the new shipment, or any issues should they occur.

We will start by clicking the **Outputs** tab in the **Action Outline** pane.

![Action outline outputs](/img/actions_17.png)

Next we are going to configure the outputs.

For each row in the table below, perform the following steps:

1. Click the **+Create Output** button at the top.
2. Fill in the input using the data provided below to the corresponding field (Note: Unlike the previous examples, the **Name** field is not auto-populated).

| Label                  | Name                   | Type    | Mandatory |
| ---------------------- | ---------------------- | ------- | --------- |
| HTTP Status Code       | http_status_code       | String  | off       |
| HTTP Error Code        | http_error_code        | String  | off       |
| HTTP Error Message     | http_error_message     | String  | off       |
| Shipment Request ID    | shipment_request_id    | String  | off       |
| Shipment State ID      | shipment_state_id      | Integer | off       |
| Shipment State Message | shipment_state_message | String  | off       |
| Shipment Messages      | shipment_messages      | String  | off       |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/actions_18.png)

Once complete, press the **Exit Edit Mode** button on the top of the menu.

A new menu should appear showing the outputs you just defined with empty **Value** fields. For each output, you will add a data pill from the **REST step** and **the second** **Script step** sections on the right side of the menu

Use the table below to correlate the correct data pill to a label.

| Label                  | Section > Data pill                  |
| ---------------------- | ------------------------------------ |
| HTTP Status Code       | REST step > Status Code              |
| HTTP Error Code        | REST step > Error Code               |
| HTTP Error Message     | REST step > Error message            |
| Shipment Request ID    | Script step > Shipment Request ID    |
| Shipment State ID      | Script Step > Shipment State ID      |
| Shipment State Message | Script step > Shipment State Message |
| Shipment Messages      | Script step > Shipment Messages      |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/actions_19.png)

Click **Save** once your outputs are complete

## Test the action

Lastly we want to ensure that a shipment can be made from our action. This will be used to ensure that our API credentials + script + REST call are configured correctly.

At the top of the Actions menu, click the **Test** button

![Inputs menu](/img/actions_20.png)

A menu should appear, which contains references the inputs that were created earlier in this section. You may utilize the variables below, or you can use other known values.

| Name                      | Value                   |
| ------------------------- | ----------------------- |
| Country Code 2            | US                      |
| Recipient                 | Example Inc.            |
| Recipient Telephone       | 5555555555              |
| Street Line 1             | 5201 Great America Pkwy |
| Street Line 2             | #122                    |
| City                      | Santa Clara             |
| Region                    | CA                      |
| Postal Code               | 95054                   |
| Product ID                | 1                       |
| Inventory Product ID      | 1                       |
| Shipment Product Quantity | 1                       |

:::tip

Below are some tips and pitfalls to watch out for in this initial test

- The address above is Yubico's Santa Clara office
- If you receive a 401 error, that means your API credentials are not correct
- There may be variation in the Product ID and Inventory Product ID field. The variation will be based on the inventory in your YubiEnterprise Console. To help guide you, the list of possible values can be found [here](https://console.yubico.com/help/api-req.html#id7). Otherwise reach out to Yubico Customer Support

:::

When ready click the **Run Test** button at the bottom of the screen.

Wait on the current page until a message appears saying "Your test has finished running. View the action execution details."

![Action test complete](/img/actions_21.png)

Click on the message to see the execution details.

On the execution details screen, scroll until you see the **Output Data** section. The HTTP Status Code should be 200. If the response was not 200, take a look at the tips above, check the error message output, or expand the **Steps** section at the bottom of the details screen to troubleshoot.

Below is an example of a successful outputs screen

![Execution details](/img/actions_22.png)

## Delete the test order

:::danger

After every test it is important that you delete any orders directly in the YubiEnterprise Console - See more information here - [Cancelling Your Test Orders](https://github.com/YubicoLabs/yed-spoke-example#cancelling-my-test-order)

:::

## Publish the action

If everything looks good, click the **Publish** button at the top of the action menu to make the action available for all flows.

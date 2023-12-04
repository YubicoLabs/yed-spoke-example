---
sidebar_position: 5
---

# Create a custom action

In this step we will configure the custom action that will call to the YubiEnterprise Delivery API to create a new YubiKey shipment. Think of the action like a method in a traditional programming environment. This action will be used in the next section when we configure a Flow to complete the orchestration.

Before you proceed ensure that you have configured the connection alias and credential used for calling the API with your API token.

## Action properties

On the ServiceNow home screen, search for **flow designer**. Click **Flow Designer**, a new window should open.

![Configuration menu](/img/actions_1.png)

Once the **Flow Designer** page opens, click the **Create new** button, then select **Action**.

![Configuration menu](/img/actions_2.png)

A menu will appear to configure the action's properties. Use the following values to initialize your action.

- Action name: YubiEnterprise create shipment
- Application: YubiEnterprise Delivery App
- Description: Place an order for a new YubiKey through the YubiEnterprise Delivery API
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
| Street Line 3             | String  | off       |
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

- Click the **+Create Variable** button
- Set the name using the name provided in the table below (warning: these values are case sensitive)
- Drag the corresponding data pill from the right side **Data** menu

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
| street_line3              | Street Line 3             |
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
   * street_line_1, 2, and 3: 60
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

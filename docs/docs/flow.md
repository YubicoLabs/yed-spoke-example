---
sidebar_position: 7
---

# Create a custom flow

In this step we will configure a custom flow that will be triggered by the custom catalog item and use the custom action that we just developed to create a YubiKey shipment.

## Flow properties

On the ServiceNow home screen, search for **flow designer**.

Click **Flow Designer**, a new window should open.

![Configuration menu](/img/actions_1.png)

Once the **Flow Designer** page opens, click the **Create new** button, then select **Flow**.

![Configuration menu](/img/flow_1.png)

A menu will appear to configure the action's properties. Use the following values to initialize your action.

- **Flow name**: YubiEnterprise create shipment
- **Description**: Create a new YubiKey shipment order
- **Application**: YubiEnterprise Delivery App
- Use the defaults for the remaining properties

![Flow properties](/img/flow_2.png)

Click **Submit**.

## Add flow trigger

Next, we're going to add a trigger. This will be the mechanism that will be used to start the flow. In our case, the trigger will be the custom catalog item that we built earlier.

First, click the **+ Add a trigger** button.

![Add a trigger button](/img/flow_3.png)

A menu should appear to search for a trigger. Search for **service catalog** and select **Service Catalog**. This option can also be found in the **Application** category.

![Service catalog trigger option](/img/flow_4.png)

Once selected, press **Done**.

## Add the form variables

Next we will ingest the custom form values that we created when the catalog item was created.

First click the **+ Add an Action, Flow Logic, or Subflow** button.

Next click **Action**. When the menu appears, search for **get catalog variables**, and select **Get Catalog Variables**.

![get catalog variables](/img/flow_5.png)

Once the new menu appears, drag the **Request Item Record** data pill from the **Data** table on the right into the **Submitted Request**.

For the **Template** input, search for **yubikey** and select **YubiKey** (this will refer to the custom catalog item template that we previously created).

Use the right facing arrow to move the following fields to the column on the right

- phone_number
- street address
- apt_or_unit
- city
- postal_code
- region_state
- country_code
- yubikey_model

Your form variables menu should look like the example below.

![final get catalog variables](/img/flow_6.png)

Once ready, press **Done**.

## Add the action

Next we're going to make a call to the action that we configured earlier.

First click the **+ Add an Action, Flow Logic, or Subflow** button.

Next click **Action**. When the menu appears, search for **yubienterprise create shipment**, and select **YubiEnterprise create shipment**.

![add action](/img/flow_7.png)

Next we're going to map information about the user and data collected from the catalog item to the action inputs. For each input, you will add a data pill from the **Data** table on the right to the correlated action input.

Use the table below to correlate the correct data pill, or hardcoded input to a label.

| Label                     | Section > Data pill or default value                         |
| ------------------------- | ------------------------------------------------------------ |
| Delivery Type             | 1                                                            |
| Country Code 2            | Get Catalog Variable > country_code                          |
| Recipient                 | Trigger > Requested Item Record > Requested for > Name       |
| Recipient Email           | Trigger > Requested Item Record > Requested for > Email      |
| Recipient Firstname       | Trigger > Requested Item Record > Requested for > First Name |
| Recipient Lastname        | Trigger > Requested Item Record > Requested for > Last Name  |
| Recipient Telephone       | Get Catalog Variable > phone_number                          |
| Street Line 1             | Get Catalog Variable > street_address                        |
| Street Line 2             | Get Catalog Variable > apt_or_unit                           |
| City                      | Get Catalog Variable > city                                  |
| Region                    | Get Catalog Variable > region_state                          |
| Postal Code               | Get Catalog Variable > postal_code                           |
| Product ID                | Get Catalog Variable > yubikey_model                         |
| Inventory Product ID      | [Your subscription or perpetual order ID*]                   |
| Shipment Product Quantity | Trigger > Requested Item Record > Quantity                   |

:::tip
The inventory product ID will vary based on your YubiEnterprise order. Please consult [this list](https://console.yubico.com/help/api-req.html#id7) to determine which inventory product ID is most relevant to your organization.

The correct item will resemble the subscription used by your organization.

You may call the [`GET /inventory`](https://console.yubico.com/apidocs/#tag/inventory/operation/GetInventoryOfOrganizationInContext) endpoint for a full list of inventory product IDs associated to your organization.

:::

Your action input mappings menu should look like the example below.

![add action final](/img/flow_8.png)

Click **Done**

## Activate the flow

Next we're going to activate the flow, and get our custom catalog item to trigger it when a new request is made.

First, click the **Save** button at the top of the screen. Once the flow is done saving click **Activate**.

![save and activate](/img/flow_9.png)

Next, return to the main ServiceNow menu, and navigate back to the **Catalog Builder**.

![Catalog menu item](/img/catalog_1.png)

Open your **YubiKey** catalog item, either through the **Recently updated items** menu, or the **Catalog items** tab at the top of the page.

![Edit item](/img/flow_10.png)

A menu may appear showing information about your catalog item. Click the **Edit catalog item** button.

![Edit ite menu](/img/flow_11.png)

Using the navigation menu on the left, click on **Fulfillment**.

Once in the **Fulfillment** tab, we're going to change the **Selected flow** value to **YubiEnterprise create shipment**.

![Change fulfillment](/img/flow_12.png)

Click **Save**.

Once the change has been saved, click **Continue to Review and Submit**. When ready, click **Submit**.

A menu indicating that the save was successful will appear. Click **Return to dashboard**, or simply return to the main **ServiceNow** menu.

## Test the flow

Now that we have everything configured, let's attempt to create a shipment using our catalog item.

Return to the main ServiceNow menu. Once back on the home screen, search for **Service Catalog**.

![Search service catalog](/img/flow_13.png)

Once in the **Service Catalog** click into either **Hardware** or **Peripherals**.

![Search service catagories](/img/flow_14.png)

Once in either **Hardware** or **Peripherals** menu, look for the **YubiKey** option.

![In category menu](/img/flow_15.png)

Click into the **YubiKey** item.

Once in the **YubiKey** item, populate the form with shipment information using either the table below, or your own personal/office information.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| Who is this request for | {current user}          |
| When do you need this?  | Today                   |
| Quantity                | 1                       |
| Phone Number            | 5555555555              |
| Street address          | 5201 Great America Pkwy |
| Apt or Unit #           | #122                    |
| City                    | Santa Clara             |
| Postal Code             | 95054                   |
| Region                  | California              |
| Country Code 2          | US                      |
| Recipient               | Example Inc.            |
| YubiKey model           | YubiKey 5 NFC           |

Your form should look like the example below.

![Sample order](/img/flow_16.png)

Once your information is added, click **Order Now**.

If you return to your YubiEnterprise Console, your new order should appear with the information that was provide in the form. If an order did not appear, then something may have gone wrong. Go into the Flow Execution history to troubleshoot.

## Delete the test order

:::danger

After every test it is important that you delete any orders directly in the YubiEnterprise Console - See more information here - [Cancelling Your Test Orders](https://github.com/YubicoLabs/yed-spoke-example#cancelling-my-test-order)

:::

## Congratulations

If an order successfully appeared in your YubiEnterprise Console, then you have completed this guide! You now have the necessary tools to use ServiceNow to order a YubiKey, and can extend this example to meet your specific design. user, and business requirements.

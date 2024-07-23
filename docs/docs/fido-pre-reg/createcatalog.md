---
sidebar_position: 3
---

# Create a catalog item

We are going to start by creating a new catalog item for ordering a YubiKey. This will give you a baseline understanding of the data that will be required to place a FIDO Pre-reg YubiKey order through the YubiEnterprise Delivery API.

Note that this will differ slightly from the [previous section](/yed-spoke-example/docs/catalog) where we built a catalog item for a non-FIDO Pre-reg shipment. This is due to some additional fields that are required in order to successfully place a FIDO Pre-reg shipment.

## Create a scoped application

If not already done, follow the steps in the link below to create a scoped application.

- [Create a scoped application](/yed-spoke-example/docs/scoped_app)

## Create a new catalog item

### Initialize catalog item

On the ServiceNow home screen, search for **catalog builder**.

Click **Catalog Builder**, a new window should open.

![Catalog menu item](/img/catalog_1.png)

Once in the **Catalog Builder** you will click on **Create a new catalog item**.

![Catalog menu item](/img/catalog_2.png)

A page titled **Getting started** will open. Press **Continue**.

A new page titled **Select your item template** will open. For general purposes you should select **Standard items in Service Catalog**. If your organization does not have this template, or has another general purpose template, then you may select your preferred option.

![Catalog menu item](/img/catalog_3.png)

Once your template is selected, press the **Use this item template** button.

### Details

You'll first be prompted to add your catalog item details. Utilize the values below to populate the details menu.

- **Item name**: YubiKey - Pre-reg
- **Short details**: Order your YubiKey with a pre-registered credential
- **Image**: Not required, but feel free to select an image from the official [Yubico image library](https://brandfolder.yubico.com/yubico/press-room-images-logos)
- **Description**: The YubiKey is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.

Your details menu should look like the example below.

![Catalog menu item](/img/pre-reg/pr-1.png)

When ready, click the **Continue to Location** button.

### Location

The location options will allow you to set where in your service catalog your YubiKey item will appear.

On the **Location** screen click **Edit selected catagories**.

![Catalog menu item](/img/catalog_5.png)

A new menu will open where you can select the catagories. Select every option except the **Hardware** and **Peripherals** options, then click on the **left pointed arrow**, to move the item into the **Available options** column. Note that this is not a hard requirement, and the catalog item can be placed in whatever category is most appropriate for your organization.

Once complete, your options should look like the image below.

![Catalog menu item](/img/catalog_6.png)

When ready click the **Save selections** button.

Once you return to the **Location** menu, press the **Continue to Questions** button.

![Catalog menu item](/img/catalog_7.png)

### Questions

Next we will configure the form values that will allow a user to provide their shipping information for receiving their YubiKey. The user will also select the YubiKey that they want to receive.

| Question type | Question subtype | Question Label                                               | Mandatory | Dropdown choices (Label - Value)                |
| ------------- | ---------------- | ------------------------------------------------------------ | --------- | ----------------------------------------------- |
| Text          | Single-line      | First name                                                   | No        | N/A                                             |
| Text          | Single-line      | Last name                                                    | No        | N/A                                             |
| Text          | Single-line      | Organization email                                           | Yes       | N/A                                             |
| Text          | Single-line      | Personal email                                               | Yes       | N/A                                             |
| Text          | Single-line      | Phone number (for carrier)                                   | Yes       | N/A                                             |
| Text          | Single-line      | Street address                                               | Yes       | N/A                                             |
| Text          | Single-line      | Apt or Unit #                                                | No        | N/A                                             |
| Text          | Single-line      | City                                                         | Yes       | N/A                                             |
| Choice        | Dropdown         | Region                                                       | No        | See the Region dropdown list below              |
| Text          | Single-line      | Postal code                                                  | Yes       | N/A                                             |
| Choice        | Dropdown         | Country                                                      | Yes       | See the Country dropdown list below             |
| Choice        | Dropdown         | Is the user receiving their first YubiKey, or a replacement? | Yes       | See the Primary/Replacement dropdown list below |
| Choice        | Dropdown         | Select a YubiKey model                                       | Yes       | See the YubiKey model dropdown list below       |

#### Region dropdown list

Region/state is only a required field for orders to the US/CAN. See [this list](https://console.yubico.com/help/api-req.html#id4) for the full list of US/CAN region codes. The table below only includes a subset of region values to demonstrate the example.

| Label      | Value |
| ---------- | ----- |
| N/A        |       |
| California | CA    |
| Texas      | TX    |
| Washington | WA    |

#### Country dropdown list

The YubiEnterprise API expects the two character ISO country code. This dropdown list provides a human readable version of a country code list. The table below only includes the US to demonstrate the example

| Label                        | Value |
| ---------------------------- | ----- |
| The United States of America | US    |

#### Primary or replacement YubiKey dropdown list

The YubiEnterprise API expects the admin to note if the key should be pulled from the primary or replacement bucket. The values provided below are for customers in the Advanced Plus - Primary and Advanced Plus - Backup tiers. Use [this list](https://console.yubico.com/help/api-req.html#id7) to determine the inventory product ID associated to your YubiEnterprise subscription.

| Label       | Value |
| ----------- | ----- |
| Initial     | 106   |
| Replacement | 107   |

#### YubiKey model dropdown list

The YubiEnterprise API expects the admin to note the specific YubiKey that should be ordered for the user. The values included below are for the two FIDO Pre-reg supported YubiKeys: The YubiKey 5 NFC and YubiKey 5C NFC. For FIPS supported keys, use the values 54 and 55 respectively.

| Label          | Value |
| -------------- | ----- |
| YubiKey 5 NFC  | 1     |
| YubiKey 5C NFC | 29    |

The image below is a preview of what your completed from structure should look like.

![Catalog menu item](/img/pre-reg/pr-2.png)

### Fulfillment

From the navigation pane on the left hand side, click **Fulfillment**.

For the value **Selected flow**, set the value to **Service Catalog item request**.

![Set Fulfillment to Service Catalog item request](/img/catalog_16.png)

:::note

We will need to return to this catalog item to update the **Fulfillment** options to utilize our custom flow which will be configured later in this guide

:::

### Review and submit

Next, from the navigation pane on the left hand side, click **Review and submit**.

Once you've reviewed the items to ensure that they are correct, click **Submit** at the bottom of the page.

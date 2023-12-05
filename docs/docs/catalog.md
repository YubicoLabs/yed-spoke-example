---
sidebar_position: 4
---

# Create catalog item

Next we are going to create the catalog item for ordering a YubiKey. Doing this step now will allow us to move faster once we start configuring the action and flow. This will give you the baseline understanding of the data that will be required to place a YubiKey order through the YubiEnterprise Delivery API.

## Initialize catalog item

On the ServiceNow home screen, search for **catalog builder**. Click **Catalog Builder**, a new window should open.

![Catalog menu item](/img/catalog_1.png)

Once in the **Catalog Builder** you will click on **Create a new catalog item**.

![Catalog menu item](/img/catalog_2.png)

A page titled **Getting started** will open. Press **Continue**.

A new page titled **Select your item template** will open. For general purposes you should select **Standard items in Service Catalog**. If your organization does not have this template, or has another general purpose template, then you may select your preferred option.

![Catalog menu item](/img/catalog_3.png)

Once your template is selected, press the **Use this item template** button.

## Details

You'll first be prompted to add your catalog item details. Utilize the values below to populate the details menu.

- **Item name**: YubiKey
- **Short details**: Order your YubiKey
- **Image**: Not required, but feel free to select an image from the official [Yubico image library](https://brandfolder.yubico.com/yubico/press-room-images-logos)
- **Description**: The YubiKey is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.

Your details menu should look like the example below.

![Catalog menu item](/img/catalog_4.png)

When ready, click the **Continue to Location** button.

## Location

The location options will allow you to set where in your service catalog your YubiKey item will appear.

On the main location screen click **Edit selected catagories**.

![Catalog menu item](/img/catalog_5.png)

A new menu will open where you can select the catagories. Select every option except the **Hardware** and **Peripherals** options, then click on the **left pointed arrow**, to move the item into the **Available options** column. Note that this is not a hard requirement, and can be placed in whatever category is most appropriate for your organization.

Once complete, your options should look like the image below.

![Catalog menu item](/img/catalog_6.png)

When ready click the **Save selections** button.

Once you return to the **Location** menu, press the **Continue to Questions** button.

![Catalog menu item](/img/catalog_7.png)

## Questions

Next we will configure the form values that will allow a user to provide their shipping information for receiving their YubiKey. The user will also select the YubiKey that they want to receive.

### Shipping questions

We'll start with the questions related to a user's address. For each row in the table below, perform the following steps:

1. Click the **Insert new question** button
2. Add the values provided in the table below (the name will be auto populated based on the label)

| Question type | Question subtype | Question Label |
| ------------- | ---------------- | -------------- |
| Text          | Single-line      | Street address |
| Text          | Single-line      | Apt or Unit #  |
| Text          | Single-line      | City           |
| Text          | Single-line      | Postal Code    |

Next we will add a dropdown list for the country code and the region.

:::tip

Note that country code must be the 2 character ISO country code. These values can either be found on the internet, or you can call the GET /countries endpoint on the YubiEnterprise Delivery API.

Also the region (state) field is only required for orders made to the US and Canada. Please ensure that you use the 2 character USPS code, which can be found [here](https://console.yubico.com/help/api-req.html#id2)

:::

We'll start by configuring the region (state). Follow the steps below:

1. Click the **Insert new question** button
2. Change **Question type** to **Choice**
3. Change **Question subtype** to **Dropdown (fixed values)**
4. Set **Question label** to **Region (state)**
5. At this point your new question should look like the image below
   - ![Catalog menu item](/img/catalog_10.png)
6. Click **Continue to choices**
7. In the section labeled **Available Choices** click the **+** button
8. Add one choice with the name **California** and a value of **CA**
9. Add one choice with the name **Texas** and a value of **TX**
10. Add one choice with the name **New York** and a value of **NY**

For this example we'll only include these three states, but you can expand this list to include additional regions based on the location of your workforce.

Your options should look like the image below.

![Catalog menu item](/img/catalog_11.png)

Click on the **Continue to Default values button**

In the dropdown select the **California** value.

Once this is complete press the **Insert question** button

Next we'll do the country code. Follow the steps below:

1. Click the **Insert new question** button
2. Change **Question type** to **Choice**
3. Change **Question subtype** to **Dropdown (fixed values)**
4. Set **Question label** to **Country Code**
5. At this point your new question should look like the image below
   - ![Catalog menu item](/img/catalog_8.png)
6. Click **Continue to choices**
7. In the section labeled **Available Choices** click the **+** button
8. Add one choice with the name **United States of America** and a value of **US**

For now we will only allow orders from the US, but you can expand this list to include additional countries based on the location of your workforce.

Your options should look like the image below.

![Catalog menu item](/img/catalog_9.png)

Click on the **Continue to Default values button**

In the dropdown select the **United States of America** value.

Once this is complete press the **Insert question** button

At this point your questions list should look like the image below

![Catalog menu item](/img/catalog_12.png)

### YubiKey question

Next we are going to prompt the user for the specific YubiKey that they are requesting. We are going to add another dropdown to contain a variety of different keys.

Follow the steps below to add a new question:

1. Click the **Insert new question** button
2. Change **Question type** to **Choice**
3. Change **Question subtype** to **Dropdown (fixed values)**
4. Set **Question label** to **YubiKey model**
5. At this point your new question should look like the image below
   - ![Catalog menu item](/img/catalog_13.png)
6. Click **Continue to choices**
7. In the section labeled **Available Choices** click the **+** button
8. Add one choice with the name **YubiKey 5 NFC** and a value of **1**
9. Add one choice with the name **YubiKey 5C NFC** and a value of **29**
10. Add one choice with the name **YubiKey 5C Nano** and a value of **4**

For this example we'll only include these three YubiKeys, but you can expand, or subtract, from this list based on the YubiKeys that are present in your YubiEnterprise Console.

Your options should look like the image below.

![Catalog menu item](/img/catalog_14.png)

Click on the **Continue to Default values button**

In the dropdown select the **YubiKey 5 NFC** value.

Once this is complete press the **Insert question** button

At this point your questions list should look like the image below

![Catalog menu item](/img/catalog_15.png)

From the navigation pane on the left hand side, click **Submit and review**.

Once you've reviewed the items to ensure that they are correct, click **Submit** at the bottom of the page.

:::note

We will need to return to this catalog item to update the **Fulfillment** options to utilize our custom flow which will be configured later in this guide

:::

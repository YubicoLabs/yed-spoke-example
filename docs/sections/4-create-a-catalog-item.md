---
layout: docs
title: Add a YubiKey to the Service Catalog
permalink: /learn/create-a-catalog-item-for-your-yubikey-order
---
## Create a Catalog Item for your YubiKey Order
---
Let's create a Catalog Item to order your YubiKey 5NFC

### Create Catalog Item
1. Navigate to **Service Catalog > Catalog Builder** link  
  ![]({{site.baseurl}}/assets/images/97-catalog-builder.png)
2. Click Create a new catalog item
  ![]({{site.baseurl}}/assets/images/98-create-catalog-item.png)
3. Click Continue
4. You will be asked to select a template. Choose the **'Standard items in Service Catalog'** template. Once selected choose **Use this item template**
  ![]({{site.baseurl}}/assets/images/100-select-template.png)

### Add the Catalog Item Details
Fill out the detail form with the following values
  ![]({{site.baseurl}}/assets/images/101-catalog-item-detail.png)
1. **Item name:** YubiKey 5NFC
2. **Short description:** Order your YubiKey 5 NFC
3. **Image:** Feel free to select an YubiKey 5NFC image from the [official Yubico image library](https://brandfolder.yubico.com/yubico/press-room-images-logos)
4. **Description:** The YubiKey 5 Series is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.
5. Click **Continue to Location**

### Add Catalog Item Location Information
This section will determine what categories your Catalog Item will appear in  

1. Under Categories click the **Edit** button next to Selected Categories
  ![]({{site.baseurl}}/assets/images/102-location-cats.png)
2. Using the Left Pointed Arrow, remove categories, leaving only Hardware, and Peripherals in the Selected column.
  ![]({{site.baseurl}}/assets/images/103-select-cats.png)
3. Click Save selections
4. Once returned to the Location Tab, click **Continue to Questions**

### Add a hidden question
This section will describe how to set a hidden value to default the Product ID of the key you want your users to order

1. Click **Insert new question**  
![]({{site.baseurl}}/assets/images/104-insert-qx.png)
2. In the form select the following values
* **Question type:** Choice
* **Question subtype:** Radio
* **Question label:** YubiKey Product ID
* **Name:** yubikey_product_id
  ![]({{site.baseurl}}/assets/images/105-qx-details.png)
* Select the **Hidden** checkbox
* Click **Continue to Choices**
3. In the **Choices** tab, click on the + in Available Choices. Insert the following details
* **Display Name:** yubikey_5nfc
*  **Value:** 1
  ![]({{site.baseurl}}/assets/images/106-qx-choices.png)
4. Click **Insert Question**
5. Once back to the questions tab, click **Fulfillment** tab
  ![]({{site.baseurl}}/assets/images/107-qx-next-step.png)

### Choose the selected Flow to process this item
This will select the ServiceNow Flow that will be triggered when the Catalog Item is submitted. You will create this at a later stage, for now select **Service Catalog item request**  

  ![]({{site.baseurl}}/assets/images/108-select-flow.png)

Then click **Continue to Review and Submit**

### Finalize the Catalog Item
1. Review your items and click **Submit**

Your Catalog Item has been created. We will now proceed to create the action to handle your submission.

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/create-a-scoped-application">Previous</a>
  <a class="btn" href="/yed-spoke-example/learn/create-action">Next</a>
</div>
---
layout: docs
title: Add a YubiKey to the Service Catalog
permalink: /learn/add-to-service-catalog
---
## Add a YubiKey to the Service Catalog
---
Let's add a YubiKey 5 NFC to the service catalog.

### Create product catalog hardware model
1. Navigate to **Product Catalog > Hardware Models**
  ![]({{site.baseurl}}/assets/images/8-hardware-models.png)
2. Click **New**
  ![]({{site.baseurl}}/assets/images/9-hardware-models-new.png)
3. Fill out the hardware form with the following values

  **General tab**
  * **Name:** YubiKey 5 NFC
  * **Manufacturer:** Click the magnifying glass icon, create a new manufacturer named 'Yubico', and click Submit
  * **Short description:** Yubico YubiKey 5 NFC
  * **Model categories:** Computer Peripheral, Hardware
  * **Model number:** 1 (Use the response from YED API GET /products to map the product_id of the "YubiKey 5 NFC" to the hardware model number)

    ![]({{site.baseurl}}/assets/images/10-hardware-model-general.png)

  **Product catalog**
  * **Description:** The YubiKey 5 Series is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.

    ![]({{site.baseurl}}/assets/images/11-hardware-model-product-catalog.png)
  
4. Click **Submit**
5. In Hardware Models, search for `YubiKey`, and click **YubiKey 5 NFC**
  ![]({{site.baseurl}}/assets/images/12-hardware-models-search.png)
6. Under **Related Links** click **Publish to Hardware Catalog**
  ![]({{site.baseurl}}/assets/images/13-hardware-model-publish.png)
7. Select the **Peripherals** catalog and click **OK**
  ![]({{site.baseurl}}/assets/images/14-hardware-model-publish-category.png)
8. Under the **Images** tab, upload an [official Yubico image](https://brandfolder.yubico.com/yubico/press-room-images-logos)
  ![]({{site.baseurl}}/assets/images/15-hardware-model-image.png)
9. Navigate to **Self-Service > Service Catalog > Peripherals**
  ![]({{site.baseurl}}/assets/images/16-service-catalog.png)
  ![]({{site.baseurl}}/assets/images/17-service-catalog-peripherals.png)
10. Confirm the **YubiKey 5 NFC** is present.
  ![]({{site.baseurl}}/assets/images/18-service-catalog-yubikey.png)

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/create-a-scoped-application">Previous</a>
  <a class="btn" href="/yed-spoke-example/learn/create-action">Next</a>
</div>
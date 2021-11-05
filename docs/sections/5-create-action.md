---
layout: docs
title: Create the Action
permalink: /learn/create-action
---

## Create the Action
---
Now that you have a scoped app and a YubiKey in the catalog, it's time to create the shipment request action.  All of the actions in this example will be created in the Yubico Enterprise API Spoke.

### Launch the flow designer
To launch the flow designer, navigate to **Flow Designer > Designer**
  ![]({{site.baseurl}}/assets/images/6-flow-designer.png)

This opens a new UI where you will manage and build Actions, Flows, and Subflows

  ![]({{site.baseurl}}/assets/images/7-flow-designer-ui.png)

### Create the shipment request action
1. Click the **+ New** button, and then click **Action** in the resulting menu
  ![]({{site.baseurl}}/assets/images/19-new-action.png)
2. Fill out the Action Properties form

  * **Name:** YED Shipment Request
  * **Application:** Yubico Enterprise Delivery API Spoke
  * **Description:** Place a request for a shipment

  ![]({{site.baseurl}}/assets/images/20-action-properties.png)
3. Click the **Submit** button and you will be taken to the new/empty Action
  ![]({{site.baseurl}}/assets/images/21-action-ui.png)

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/create-a-catalog-item-for-your-yubikey-order">Previous</a>
  <a class="btn" href="/yed-spoke-example/learn/define-action-inputs">Next</a>
</div>
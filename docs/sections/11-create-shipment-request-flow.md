---
layout: page
title: Create the shipment request flow
permalink: /learn/create-shipment-request-flow
---

## Create the shipment request flow
---
Now that you have the Action, lets put it into a Flow and test it.

1. Click the **+ New** button, and then click **Flow** in the resulting menu
  ![](/assets/images/37-new-flow.png)
2. Name the Flow "Yubico YED API Create a Shipment"
3. Set **Run As** to "System User"
  ![](/assets/images/38-flow-properties.png)
4. Click the **Submit** button

### Add a Trigger
Flows run when a Trigger condition is met. For this example, we will run a flow on the Service Catalog.

1. Click the **Select to add a trigger** button
  ![](/assets/images/39-add-trigger.png)
2. Under the **Application** section, click **Service Catalog**
  ![](/assets/images/40-service-catalog-trigger.png)
3. Click **Done**
![](/assets/images/41-trigger-done.png)

### Add the Action to the Flow
Now it's time to add the Action to the Flow.

1. Click the **Select to add an Action, Flow Logic, or Subflow** link
2. Click the **Action** button. Click the **Yubico Enterprise Delivery API** Spoke. Click the **YED Shipment Request** Action.
![](/assets/images/42-add-action.png)
3. The Action is now part of the Flow.

### Map service catalog fields to action input variables

1. Set the **Delivery Type** to a value of 1 or your organization's preferred delivery type 
2. Set the **Inventory Product Id** to the value 15 or your organization's inventory product ID
3. Drag the following data pills from the data pane to the action input variables

  | **Name** | **VALUE** |
  | -------- | --------- |
  | Delivery Type | 1 |
  | Country Code 2 | Trigger > Requested Item Record > Requested for > Location > Country |
  | Recipient | Trigger > Requested Item Record > Requested for > Company > Name |
  | Recipient Email | Trigger > Requested Item Record > Requested for > Email |
  | Recipient Firstname | Trigger > Requested Item Record > Requested for > First Name  |
  | Recipient Lastname | Trigger > Requested Item Record > Requested for > Last Name |
  | Recipient Telephone | Trigger > Requested Item Record > Requested for > Location > Phone |
  | Street Line 1 | Trigger > Requested Item Record > Requested for > Location > Street |
  | City | Trigger > Requested Item Record > Requested for > Location > City |
  | Region | Trigger > Requested Item Record > Requested for > Location > State / Province |
  | Postal Code| Trigger > Requested Item Record > Requested for > Location > Zip / Postal Code |
  | Product ID | Trigger > Requested Item Record > Item > Model > Model Number |
  | Inventory Product Id | 15 |
  | Shipment Product Quantity | Trigger > Requested Item Record > Quantity  |
  
  ![](/assets/images/43-map-action-inputs.png)
  
4. Click **Done**
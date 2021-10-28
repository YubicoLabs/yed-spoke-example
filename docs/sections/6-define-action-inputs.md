---
layout: page
title: Define action inputs
permalink: /learn/define-action-inputs
---

## Define action inputs
---
Action Inputs allow you (and users of the Flow Designer) to pass data into your actions. You can think of inputs as method parameters.

### Input Naming Considerations
Action inputs should always have human-friendly names.

**GOOD:** First name

**BAD:** first_name

**GOOD:** Table Name

**BAD:** tableName

### Add the shipment request inputs
1. Click the **Inputs** section at the top of the **Action Outline**
2. Click the **Create Input** button and add the following based on the create shipment request object ([POST /shipments_exact](https://console.dev.in.yubico.org/apidocs/#operation/CreateShipmentExact))

  | **Label** | **Type** | **Mandatory** |
  | --------- | -------- | ------------- |
  | Delivery Type | Integer | off|
  | Country Code 2 | String | on |
  | Recipient | String | on |
  | Recipient Email | String | off |
  | Recipient Firstname | String | off |
  | Recipient Lastname | String | off |
  | Recipient Telephone | String | off |
  | Street Line 1 | String | on |
  | Street Line 2 | String | off |
  | Street Line 3 | String | off |
  | City | String | on |
  | Region | String | off |
  | Postal Code | String | on |
  | Product ID | Integer | on |
  | Inventory Product ID | Integer | on |
  | Shipment Product Quantity | Integer | on |
  
  ![](/assets/images/22-1-create-input.png)

3. **Save** the Action
---
layout: docs
title: Monitor for Low Inventory - Define Action
permalink: /error-handling/low-inventory-action
---

# Monitor for Low Inventory - Define Action

---

## Create the Action

---

Here a new action will be initialized and configured

### Launch the flow designer

To launch the flow designer, navigate to **Flow Designer > Designer**
![]({{site.baseurl}}/assets/images/6-flow-designer.png)

This opens a new UI where you will manage and build Actions, Flows, and Subflows

![]({{site.baseurl}}/assets/images/7-flow-designer-ui.png)

### Create the shipment request action

1. Click the **+ New** button, and then click **Action** in the resulting menu
   ![]({{site.baseurl}}/assets/images/19-new-action.png)
2. Fill out the Action Properties form

- **Name:** YED Inventory Monitor
- **Application:** Yubico Enterprise Delivery API Spoke
- **Description:** Check the remaining amounts of your YED inventory

![]({{site.baseurl}}/assets/images/135-action-properties.png) 3. Click the **Submit** button and you will be taken to the new/empty Action

## Define Action Inputs

---

Here we will define the inputs needed by the action. For this action the only inputs we need is the stock threshold to compare your inventory quantities to.

### Add the request inputs

1. Click the **Inputs** section at the top of the **Action Outline**
2. Click the **Create Input** button and add the following

| **Label**           | **Type** | **Mandatory** |
| ------------------- | -------- | ------------- |
| inventory_threshold | Integer  | on            |

![]({{site.baseurl}}/assets/images/136-create-input.png)

3. **Save** the Action

## The REST Step

---

In this section we will configure our Action to call to the GET /inventory method in order to get the current quantities in our YED inventory.

### Add the shipment request REST step to the Action

1. Click the + button underneath the Script step you added earlier
   ![]({{site.baseurl}}/assets/images/25-add-new-step.png)
2. Click the REST step in the **Integrations** section of the dialog
   ![]({{site.baseurl}}/assets/images/26-rest.png)
3. You will be presented with the REST step UI

### Define Connection Details

1. Change the **Connection** choice to "Connection Alias"
2. Change the connection alias to the one created in the previous step
3. Set the **Resource Path** to `/inventory`
4. Set the **HTTP Method** to GET
5. Click the + button under Headers and add the following

| **Name**     | **VALUE**        |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

![]({{site.baseurl}}/assets/images/137-rest-connection-headers.png)

6. **Save** the Rest step

## The Output Script Step

---

Now we will configure the logic that will analyze the output of the GET /inventory request. The script in this step will look at each of the products in your inventory and compare it to your configured threshold.

1. Add a new Action Step after the REST step.
   ![]({{site.baseurl}}/assets/images/29-add-output-script.png)
2. When prompted, choose the **Script** step
   ![]({{site.baseurl}}/assets/images/30-script.png)

### Script Input Variables

1. In the **Input Variables** widget, click the **+ Create Variable** button
2. Set the **Name** to `responseBody`
3. Drag the **Response Body** data pill from the data pane to the **Value** field. You can now reference the Response Body in your scripts as `inputs.responseBody`
4. Add a new variable
5. Set the name to **inventory_threshold**
6. Drag the **inventory_threshold** data pill from the Input Variables section on the left.
   ![]({{site.baseurl}}/assets/images/138-input-variables.png)
7. Set the script to

```javascript
(function execute(inputs, outputs) {
  const response = JSON.parse(inputs.responseBody);
  const org_prod_inv = response.organization_product_inventory;
  var below_threshold = "";
  for (var i = 0; i < org_prod_inv.length; i++) {
    var item = org_prod_inv[i];
    if (item.organization_product_quantity < inputs.inventory_threshold) {
      var newMessage =
        item.product_name +
        ": Remaining Inventory - " +
        item.organization_product_quantity +
        ", ";
      below_threshold += newMessage;
    }
  }
  if (below_threshold === "") {
    below_threshold = "All your inventory items are above the threshold";
  }
  outputs.inventory = below_threshold;
})(inputs, outputs);
```

### Script Output Variables

1. In the **Output Variables** widget, click the **+ Create Variable** button and add the following

| **Label** | **Name**  | **Type** | **Mandatory** |
| --------- | --------- | -------- | ------------- |
| inventory | inventory | String   | off           |

![]({{site.baseurl}}/assets/images/139-output-variables.png)

6. **Save** the Script step

## Action Outputs

---

1. Click the **Outputs** section in the **Action Outline**
2. Click the **+ Create Output** button
3. Set the following outputs

| **Label**          | **Name**           | **Type** | **Mandatory** |
| ------------------ | ------------------ | -------- | ------------- |
| HTTP Status Code   | http_status_code   | String   | off           |
| HTTP Error Code    | http_error_code    | String   | off           |
| HTTP Error Message | http_error_message | String   | off           |
| Inventory Message  | inventory_message  | String   | off           |

![]({{site.baseurl}}/assets/images/140-create-action-output.png)

4. Click the **Exit Edit Mode** button
5. Using the Data Pill Picker, set the **Value** of the Script Output Variables to the associated output variables
   ![]({{site.baseurl}}/assets/images/141-action-output.png)
6. **Save** the Action

### Test the Action

1. Click the **Test** button
2. Set the following variables (pick a good threshold based on the quantity values in your YED instance)

| **Name**            | **VALUE** |
| ------------------- | --------- |
| inventory_threshold | 600       |

![]({{site.baseurl}}/assets/images/142-test-input.png)

3. Click **Run Test**
   ![]({{site.baseurl}}/assets/images/35-test.png)
4. Wait for the processing to complete and click **Your test has finished running. View the action execution details.**
   ![]({{site.baseurl}}/assets/images/36-test-finished.png)
5. In the **Output Data** verify the **Shipment Message** is equal to "Awaiting Validation"
   ![]({{site.baseurl}}/assets/images/143-test-validate.png)

### Publish the Action

If everything looks good, click the **Publish** button on the action to make it available for all flows.

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/error-handling/low-inventory">Previous</a>
  <a class="btn" href="/yed-spoke-example/error-handling/low-inventory-flow">Next</a>
</div>

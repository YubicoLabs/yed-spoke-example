---
layout: docs
title: Create the GET Shipments Action
permalink: /learn/create-the-get-shipments-action
---

## Create the GET Shipments Action

We will now create an action that will allow us to get information about the current shipment, which we will use to update the flow and send **Tracking Information** to the user before closing the ticket

### Launch the flow designer

To launch the flow designer, navigate to **Flow Designer > Designer**
![]({{site.baseurl}}/assets/images/6-flow-designer.png)

### Create the shipment request action

1. Click the **+ New** button, and then click **Action** in the resulting menu  
   ![]({{site.baseurl}}/assets/images/19-new-action.png)
2. Fill out the Action Properties form

- **Name:** YED Get Shipment
- **Application:** Yubico Enterprise Delivery API Spoke
- **Description:** Get information about a specific shipment  
  ![]({{site.baseurl}}/assets/images/117-action-properties.png)

3. Click the **Submit** button and you will be taken to the new/empty Action

### Add the shipment request inputs

1. Click the **Inputs** section at the top of the **Action Outline**
2. Click the **Create Input** button and add the following based on the create shipment request object ([GET /shipments_exact](https://console.yubico.com/help/api-req.html))

| **Label**   | **Type** | **Mandatory** |
| ----------- | -------- | ------------- |
| Shipment ID | String   | on            |

![]({{site.baseurl}}/assets/images/118-create-input.png)

### Add the shipment request REST step to the Action

1. Click the + button underneath the Script step you added earlier
   ![]({{site.baseurl}}/assets/images/25-add-new-step.png)
2. Click the REST step in the **Integrations** section of the dialog
   ![]({{site.baseurl}}/assets/images/26-rest.png)
3. You will be presented with the REST step UI
4. For the connection details use the same Connection Alias that you created for the previous action

- **Connection:** Use Connection Alias
- **Connection Alias:** Select your connection alias

3. Set the **Resource Path** to `/shipments_exact/` and drag the **Shipment ID** pill to the end of the URL
4. Set the **HTTP Method** to GET
5. Click the + button under Headers and add the following

| **Name**     | **VALUE**        |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

![]({{site.baseurl}}/assets/images/122-rest-connection-headers.png)

### Configure the Output Script

1. Add a new Action Step after the REST step.
2. When prompted, choose the **Script** step
   ![]({{site.baseurl}}/assets/images/30-script.png)

### Script Input Variables

1. In the **Input Variables** widget, click the **+ Create Variable** button
2. Set the **Name** to `responseBody`
3. Drag the **Response Body** data pill from the data pane to the **Value** field. You can now reference the Response Body in your scripts as `inputs.responseBody`
   ![]({{site.baseurl}}/assets/images/31-input-variables.png)
4. Set the script to

```javascript
(function execute(inputs, outputs) {
  outputs.shipment_response = inputs.responseBody;
  const response = JSON.parse(inputs.responseBody);
  outputs.shipment_request_id = response.shipment_id;
  outputs.shipment_state_id = response.shipment_state_id;
  outputs.shipment_state_message = response.shipment_state_message;
  outputs.tracking_link = response.tracking_link;
  const messages =
    response.shipment_messages === undefined
      ? ""
      : JSON.stringify(response.shipment_messages);
  outputs.shipment_messages = messages;
})(inputs, outputs);
```

### Script Output Variables

1. In the **Output Variables** widget, click the **+ Create Variable** button and add the following

| **Label**              | **Name**               | **Type** | **Mandatory** |
| ---------------------- | ---------------------- | -------- | ------------- |
| Shipment Response      | shipment_response      | String   | off           |
| Shipment Request ID    | shipment_request_id    | String   | off           |
| Shipment State ID      | shipment_state_id      | Integer  | off           |
| Shipment State Message | shipment_state_message | String   | off           |
| Shipment Messages      | shipment_messages      | String   | off           |
| Tracking Link          | tracking_link          | String   | off           |

![]({{site.baseurl}}/assets/images/119-output-variables.png)

6. **Save** the Script step

### Create Action Outputs

1. Click the **Outputs** section in the **Action Outline**
2. Click the **+ Create Output** button
3. Set the following outputs

| **Label**              | **Name**               | **Type** | **Mandatory** |
| ---------------------- | ---------------------- | -------- | ------------- |
| HTTP Status Code       | http_status_code       | String   | off           |
| HTTP Error Code        | http_error_code        | String   | off           |
| HTTP Error Message     | http_error_message     | String   | off           |
| Shipment Request ID    | shipment_request_id    | String   | off           |
| Shipment State ID      | shipment_state_id      | Integer  | off           |
| Shipment State Message | shipment_state_message | String   | off           |
| Shipment Messages      | shipment_messages      | String   | off           |
| Tracking Link          | tracking_link          | String   | off           |

![]({{site.baseurl}}/assets/images/120-create-action-output.png)

5. Click the **Exit Edit Mode** button
6. Using the Data Pill Picker, set the **Value** of the Script Output Variables to the associated output variables
   ![]({{site.baseurl}}/assets/images/121-action-output.png)
7. **Save** the Action

### Test the Action

1. Click the **Test** button
2. Set the following variables

| **Name**    | **VALUE**                              |
| ----------- | -------------------------------------- |
| Shipment ID | \*Use a shipment ID in your YED portal |

3. Click **Run Test**  
   ![]({{site.baseurl}}/assets/images/35-test.png)
4. Wait for the processing to complete and click **Your test has finished running. View the action execution details.**
   ![]({{site.baseurl}}/assets/images/36-test-finished.png)
5. In the **Output Data** verify the information is the same as found in the YED Console

### Save and Publish

You've created your action - Be sure to **Save** the **Publish**

### Delete Test Order

After every test it is important that you delete any orders directly in the YED Console - See more information here - [Cancelling Your Test Orders](#cancelling-your-test-orders)

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/bonus-lab">Previous</a>
    <a class="btn" href="/yed-spoke-example/learn/update-the-flow-to-send-shipment-tracking-information">Next</a>
</div>

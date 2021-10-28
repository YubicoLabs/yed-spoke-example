---
layout: page
title: The output script step
permalink: /learn/output-script
---

## The output script step
---
Right now, the Action has sent the shipment request to the REST endpoint and received the response body but doesn't know if the request was successful. In this step, you will parse the output of the REST step.

1. Add a new Action Step after the REST step. 
  ![](/assets/images/29-add-output-script.png)
2. When prompted, choose the **Script** step
  ![](/assets/images/30-script.png)

### Script Input Variables
1. In the **Input Variables** widget, click the **+ Create Variable** button
2. Set the **Name** to `responseBody`
3. Drag the **Response Body** data pill from the data pane to the **Value** field. You can now reference the Response Body in your scripts as `inputs.responseBody`
  ![](/assets/images/31-input-variables.png)
4. Set the script to

```javascript
(function execute(inputs, outputs) {
  outputs.shipment_response = inputs.responseBody;
  const response = JSON.parse(inputs.responseBody);
  outputs.shipment_request_id = response.shipment_id;
  outputs.shipment_state_id = response.shipment_state_id;
  outputs.shipment_state_message = response.shipment_state_message;
  const messages = (response.shipment_messages === undefined) ? "" : JSON.stringify(response.shipment_messages);
  outputs.shipment_messages = messages;
})(inputs, outputs);
```

### Script Output Variables
1. In the **Output Variables** widget, click the **+ Create Variable** button and add the following

  | **Label** | **Name** | **Type** | **Mandatory** |
  | --------- | -------- | -------- | ------------- |
  | Shipment Response | shipment_response | String| off |
  | Shipment Request ID | shipment_request_id | String | off |
  | Shipment State ID | shipment_state_id | Integer | off |
  | Shipment State Message | shipment_state_message | String | off |
  | Shipment Messages | shipment_messages | String | off |

  ![](/assets/images/32-output-variables.png)

6. **Save** the Script step
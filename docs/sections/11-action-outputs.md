---
layout: docs
title: Action Outputs
permalink: /learn/action-outputs
---

## Action Outputs

---

Use Action Outputs to return data from the action to Flow Designer. The Script Output variables we just defined are intentionally "private" to the action and are intended for use by scripts or other action steps (this, the camel case naming convention).

The same naming considerations we used for Action Inputs also apply to Action Outputs. Outputs should always be human readable, use natural language, and should not contain underscores or use variable naming conventions like camelCase.

**GOOD:** Score

**BAD:** score

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

![]({{site.baseurl}}/assets/images/33-create-action-output.png)

5. Click the **Exit Edit Mode** button
6. Using the Data Pill Picker, set the **Value** of the Script Output Variables to the associated output variables
   ![]({{site.baseurl}}/assets/images/34-action-output.png)
7. **Save** the Action

### Test the Action

1. Click the **Test** button
2. Set the following variables

| **Name**                  | **VALUE**          |
| ------------------------- | ------------------ |
| Country Code 2            | US                 |
| Recipient                 | Example Inc.       |
| Street Line 1             | 7788 Foxrun Street |
| City                      | Dedham             |
| Region                    | MA                 |
| Postal Code               | 02026              |
| Product ID                | 1                  |
| Inventory Product Id      | 15                 |
| Shipment Product Quantity | 1                  |

![]({{site.baseurl}}/assets/images/35-test-input.png)

3. Click **Run Test**
   ![]({{site.baseurl}}/assets/images/35-test.png)
4. Wait for the processing to complete and click **Your test has finished running. View the action execution details.**
   ![]({{site.baseurl}}/assets/images/36-test-finished.png)
5. In the **Output Data** verify the **Shipment Message** is equal to "Awaiting Validation"
   ![]({{site.baseurl}}/assets/images/36-test-validate.png)

### Delete Test Order

After every test it is important that you delete any orders directly in the YED Console - See more information here - [Cancelling Your Test Orders](https://github.com/YubicoLabs/yed-spoke-example#cancelling-your-test-orders)

### Publish the Action

If everything looks good, click the **Publish** button on the action to make it available for all flows.

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/output-script">Previous</a>
  <a class="btn" href="/yed-spoke-example/learn/create-shipment-request-flow">Next</a>
</div>

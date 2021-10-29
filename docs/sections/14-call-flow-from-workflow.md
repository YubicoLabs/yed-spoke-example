---
layout: docs
title: Call the Flow From a Workflow
permalink: /learn/call-flow-from-workflow
---

## Call the Flow From a Workflow
---

### Create the workflow

1. Open the **Workflow Editor**  
![](/assets/images/71-workflow.png)
2. Search for the workflow named **Service Catalog Item Request**
![](/assets/images/72-search.png)
2. Click **Service Catalog Item Request** to open the workflow
![](/assets/images/73-service-catalog-item-request.png)
3. Click **Workflow Actions** > **Copy**  
![](/assets/images/74-copy.png)
4. Set the **Workflow Name** to "Service Catalog YubiKey Request"
5. Delete the following nodes:

  * **Approval - User** activity named "CIO Approval"
  * **Catalog Task** activity named "Asset Mgmt. Fulfills Order"
  * **Notification** named "Inform of Backordered Status"
  * **Catalog Task** activity named "Receive Backordered Item"
  * **Notification** activity named "Inform Backordered Received"
  * **Catalog Task** activity named "Deploy Item to User"
  * **Log Message** named "Item Deployed"

  ![](/assets/images/75-delete.png)

6. Click the **Core** tab and 
![](/assets/images/76-core.png)
7. Drag the **Run Script** to the Workflow canvas
8. Set the fields of the Run Script activities properties to the following:

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Request YubiKey |
  | Stage | Order Fulfillment |

  ![](/assets/images/80-stage.png)

9. Set the **Script** to:

```Javascript
activity.result = shipYubiKey();

function shipYubiKey() {
	
	try {
		var inputs = {};
		inputs['request_item'] = current;
    inputs['table_name'] = current.getTableName();

		var result = sn_fd.FlowAPI.getRunner().flow('x_490107_yubico_0.yubico_yed_api_create_a_shipment').inForeground().withInputs(inputs).run();
		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
		return -1;
	}
	
}
```

10. In a new window, navigate to the **Flow Designer**, open the "Yubico YED API Create a Shipment" Flow, click the **...**, then click **Create code snippet**. In the workflow script, replace `x_490107_yubico_0.yubico_yed_api_create_a_shipment` with your flow identifier
![](/assets/images/95-snippet.png)
11. Click **Submit**  
![](/assets/images/77-submit.png)
12. Delete the arrow from the **Approval Action**
13. Drag the **Approval Action Always Condition box** to **Run Script**
![](/assets/images/78-approval-arrow.png)
14. Double click the **Run Script**
15. Click **Conditions**
16. Delete the **Always** condition
![](/assets/images/79-delete-always.png)
17. Click **New**
18. Set the fields to the following:

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Success |
  | Short Description | Shipment Awaiting Validation |
  | Condition | activity.result==3 | 

  ![](/assets/images/81-success-condition.png)

19. Click **Submit*
20. Click **New**
21. Set the fields to the following:

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Failure |
  | Short Description | Shipment Failure |
  | Condition | activity.result!=3 | 

  ![](/assets/images/82-failure-condition.png)

22. Click **Submit*
23. Close the Workflow Conditions view and return to the workflow canvas
24. Drag the **Run Script Success Condition box** to **Notification - Inform Completion**
![](/assets/images/83-success-arrow.png)
25. Double-click the **Notification - Inform Completion** and set the **Stage** to "Completed"
![](/assets/images/85-stage-completed.png)
26. Click **Update**
27. Right-click **Notification - Inform Completion** and select **Copy Activity**
28. Double-click the new **Notification** activity and set the fields to the following

  | **Name** | **Value** |
  | -------- | --------- |
  | Name | Inform of shipment request failure |
  | Stage| Request Cancelled |
  | Subject | Your requested item ${number} for ${cat_item} failed due to an error | 

29. Click **Submit**
30. Drag the **Run Script Failure Condition Box** to **Notification - Inform of shipment request failure**
31. Drag the **Notification - Inform of shipment request failure Always Condition Box** to **End**
![](/assets/images/86-yed-workflow.png)
32. Publish the workflow  
![](/assets/images/96-publish.png)

### Set the YubiKey process engine to the workflow

1. Go to **Service Catalog** > **Catalog Definitions** > **Maintain Items**
![](/assets/images/87-maintain-items.png)
2. Select the **Yubikey 5 NFC**
3. Set the **Workflow** to "Service Catalog YubiKey Request"
4. Click **Update**
![](/assets/images/88-set-workflow.png)

<div class="btns">
  <a class="btn--secondary" href="/learn/test-flow">Previous</a>
  <a class="btn" href="/learn/test-workflow">Next</a>
</div>
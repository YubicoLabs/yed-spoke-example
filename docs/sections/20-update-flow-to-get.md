---
layout: docs
title: Update the Flow to Send Shipment Tracking Information
permalink: /learn/update-the-flow-to-send-shipment-tracking-information
---
## Update the Flow to Send Shipment Tracking Information
We will now update the flow to send Shipment Tracking Information to the customer who requested the YubiKey. We will add a loop to the end of the existing flow to continuously check the created shipment for a shipping link to be sent to the customer

1. Launch the flow designer, navigate to **Flow Designer > Designer**
  ![]({{site.baseurl}}/assets/images/6-flow-designer.png)
2. Return back to your flow **Yubico YED API Create a Shipment**

### End the Flow of Shipment Creation Failure
1. Click the plus sign under **Send Email**
2. Click Flow Login, then select **End**  
  ![]({{site.baseurl}}/assets/images/114-end-flow.png)

### Create Flow Variables
We will need to create new variables to persist some form of state that can be referenced as the flow loops

1. Click the 3 dots **...** on the right side of the screen
2. Click **Flow Variables**
3. Click the + sign twice, you will need 3 variables
4. The variables should follow this format  
  ![]({{site.baseurl}}/assets/images/115-create-flow-vars.png)

  | **LABEL** | **NAME** | **TYPE** |
  | -------- | --------- | --------- |
  | Shipment ID | curr_shipment_id | String |
  | Shipment Status | curr_shipment_status | String | 
  | Tracking Link | tracking_link | String |  

5. Exit the pop-up
6. Click **Add an Action, Flow Logic, or Subflow**
7. Click Flow Logic, then select **Set Flow Variables**  
  ![]({{site.baseurl}}/assets/images/113-set-flow-vars.png)
8. Click the plus sign on the right **twice**, you will need two variables
9. Create the first variable - This will be used to persist the Shipment ID
* **Name:** curr_shipment_id
* **Data:** Drag the **Shipment Request ID** pill from 2 - YED Shipment Request
10. Create the second variable, this will be used to track the latest status of the shipment
* **Name:** status
* **Data:** Drag the **Shipment State ID** pill from 2 - YED Shipment Request OR set it to 3 since we're assuming success  
![]({{site.baseurl}}/assets/images/116-set-flow-vars.png)
11. Click Done

### Create the GET Shipment Loop
We will now create the loop that will iterate until shipping information is available to send to the customer.

1. Click **Add an Action, Flow Logic, or Subflow**
2. Click **Flow Logic**, then select **Do the following until**  
  ![]({{site.baseurl}}/assets/images/123-flow-loop.png)
3. You will need to set the condition that the loop will iterate until the Shipment Status changes to 103 ([defined in the API spec as Shipment Shipped](https://console.yubico.com/help/api-req.html#table-4))
* Drag the flow variable **Shipment Status** pill to Condition 1
* Leave the condition as **is**
* Set the condition value as 103  
  ![]({{site.baseurl}}/assets/images/124-flow-condition.png)
4. Click Done

### Create the loop logic
Now we will set what will be done in the loop, this will consist of two actions - Waiting X amount of time, then calling to the GET /shipments_exact API using the Action that was just created. 

The reason why there is a delay in time before calling to the API is because a Shipment will not be immediately available once it is created

1. Within the loop click **Add an Action, Flow Logic, or Subflow**
2. Click **Flow Logic**, then select **Wait for a duration of time**
3. Set the **Wait for** value to 24 hrs (or to whatever time fits your requirements)  
  ![]({{site.baseurl}}/assets/images/125-flow-wait.png)  
4. Click done
5. Within the loop click **Add an Action, Flow Logic, or Subflow**
6. Click **Action**, then select **YED Get Shipment**
7. Drag the flow variable pill **Shipment ID** into the Shipment ID field
8. Click Done  
  ![]({{site.baseurl}}/assets/images/126-flow-request.png)
7. Click **Add an Action, Flow Logic, or Subflow**
8. Click Flow Logic, then select **Set Flow Variables**  
  ![]({{site.baseurl}}/assets/images/113-set-flow-vars.png)
9. Click the plus sign on the right **twice**, you will need two variables
10. Create the first variable - This will be used to persist the Shipment ID
* **Name:** tracking_link
* **Data:** Drag the **Tracking Link** pill from 9 - YED Get Shipment  
  ![]({{site.baseurl}}/assets/images/127-set-track-link.png)
11. Click Done

### Create the email
We will now create the template for the email that will be sent to the user with the tracking information

1. Click **Action**. Click **ServiceNow Core**. Under **Default** click **Send Email**.
2. Set **To** using the pill Trigger - Service Catalog > Requested Item Record > Requested For > Email
3. Set **Subject** to "Your YubiKey has Shipped!"
4. Set **Body** to 

  ```
  Your order has been shipped

  You can track your shipment using this link

  Thank you
  ```
5. Drag the **Shipment ID** data pill from the Flow Variable data pane next to the **Your order** text 
6. Drag the **Tracking Link** data pill from the Flow Variable data pane next to the **link** text  
    ![]({{site.baseurl}}/assets/images/128-set-close-email.png)
8. Click **Done**
9. Click **Activate**


<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/create-the-get-shipments-action">Previous</a>
    <a class="btn" href="/yed-spoke-example/references">References</a>
</div>

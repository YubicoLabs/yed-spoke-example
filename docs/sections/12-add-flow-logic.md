---
layout: page
title: Add the Flow Logic to the Flow
permalink: /learn/add-flow-logic
---

## Add the Flow Logic to the Flow
Let's handle shipment failures by sending an email to the administrator. 

1. Click the **Select to add an Action, Flow Logic, or Subflow** link
2. Click the **Flow Logic** button. Click the **If** link
3. Set the **Condition** to "Shipment Failure"
4. Drag the **Shipment State ID** data pill from the data pane to the **Condition 1** field 
5. Set the drop down to **is not**
6. Set the value to 3
7. Click **Done**
8. Click **then +**
9. Click **Action**. Click **ServiceNow Core**. Under **Default** click **Send Email**.
10. Set **To** to "admin@example.com"
11. Set **Subject** to "YubiKey shipment failure"
12. Set **Body** to 

  ```
  Shipment ID
  
  Reason
  
  More Details
  
  Next Steps
  1. Cancel the order
  2. Notify user to fix the error and try again
  ```
13. Drag the **Shipment Request ID** data pill from the data pane next to the **Shipment ID** text 
14. Drag the **Shipment State Message** data pill from the data pane next to the **Reason** text 
15. Drag the **Shipment Messages** data pill from the data pane next to the **More Details** text 
16. Click **Done**
17. Click **Activate**

Challenge: If the shipment fails, return the Shipment State Message and Shipment Messages to the user to fix any errors.
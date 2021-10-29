---
layout: docs
title: Test the Workflow
permalink: /learn/test-workflow
---
## Test the Workflow
---
To test the workflow first we must impersonate a user with an address and order a Yubikey

### Order a YubiKey from the Service Catalog
1. Click **System Administrator** dropdown menu then click **Impersonate User**
2. Click **Search for user** and select "Adela Cervantsz"
3. Click **Service Catalog** then click **Peripherals**
4. Click **Yubikey 5 NFC**
5. Click **Order Now**
6. Take note of the **Request Number** e.g. REQ0010002
7. Click **Adela Cervantsz** and then select **End Impersonation**
8. Open the **Service Catalog** > **Open Records** > **Items**
![](/assets/images/92-open-record.png)
9. Select the **Request Item** e.g. REQ0010002
10. Under the **Approvers** tab, check the box and **Approve** the request.
![](/assets/images/93-approve.png)
11. Click **Workflow Context**  
![](/assets/images/94-context.png)
12. Go to **Workflow Transition History** and view the workflow execution

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/call-flow-from-workflow">Previous</a>
    <a class="btn" href="/yed-spoke-example/references">References</a>
</div>

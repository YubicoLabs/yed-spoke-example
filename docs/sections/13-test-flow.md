---
layout: page
title: Test the flow
permalink: /learn/test-flow
---

## Test the flow
---
To test the flow first we must impersonate a user with an address and order a Yubikey

### Order a YubiKey from the Service Catalog
1. Click **System Administrator** dropdown menu then click **Impersonate User**
2. Click **Search for user** and select "Adela Cervantsz"
3. Click **Service Catalog** then click **Peripherals**
4. Click **Yubikey 5 NFC**
5. Click **Order Now**
6. Take note of the **Request Number** e.g. REQ0010001
7. Click **Adela Cervantsz** and then select **End Impersonation**

### Launch the flow designer
To launch the flow designer, navigate to **Flow Designer > Designer**

### Test the Request Shipment flow
1. Search for **Yubico YED API Create a Shipment** by name and then select the flow
2. Click **Test**
3. A dialog will open. Click **Requested Item Record** and select the **Request Number** from earlier e.g. REQ0010001
4. Click **Run Test**
5. Click **Your test has finished running. View the flow execution details.**
6. This will open the Execution Details for the test run
7. Click the **YED Shipment Request** action. The Steps section will show the list of steps executed inside of the action, and the step configuration details

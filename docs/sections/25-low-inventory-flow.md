---
layout: docs
title: Monitor for Low Inventory - Define Flow
permalink: /error-handling/low-inventory-flow
---

## Create the Inventory Request Flow

---

Now that you have the Action, lets put it into a Flow and test it.

1. Click the **+ New** button, and then click **Flow** in the resulting menu
   ![]({{site.baseurl}}/assets/images/37-new-flow.png)
2. Name the Flow "Yubico YED Monitor Inventory"
3. Set **Run As** to "System User"
   ![]({{site.baseurl}}/assets/images/144-flow-properties.png)
4. Click the **Submit** button

### Add a Trigger

Flows run when a Trigger condition is met. For this example, we will run this flow **daily**.

1. Click the **Select to add a trigger** button
   ![]({{site.baseurl}}/assets/images/39-add-trigger.png)
2. Under the **Date** section, click **Daily**
   ![]({{site.baseurl}}/assets/images/145-daily-trigger.png)
3. Change the time to match the desired moment you would like the email to occur
4. Click **Done**
   ![]({{site.baseurl}}/assets/images/146-trigger-done.png)

### Add the Action to the Flow

Now it's time to add the Action to the Flow.

1. Click the **Select to add an Action, Flow Logic, or Subflow** link
2. Click the **Action** button. Click the **Yubico Enterprise Delivery API** Spoke. Click the **YED Inventory Monitor** Action.
   ![]({{site.baseurl}}/assets/images/147-add-action.png)
3. The Action is now part of the Flow.

### Map service catalog fields to action input variables

1. Set the **inventory_threshold** to a value of 600 (or whatever value works based on your current requirements)

| **Name**            | **VALUE** |
| ------------------- | --------- |
| inventory_threshold | 600       |

![]({{site.baseurl}}/assets/images/48-map-action-inputs.png)

4. Click **Done**

## Add Action Item to Send Email

---

Let's now send a daily email to our administrator detailing the items with a "low" inventory count

1. Click **Action**. Click **ServiceNow Core**. Under **Default** click **Send Email**.
2. Set **To** to "admin@example.com"
3. Set **Subject** to "YubiKey - Daily low inventory report"
4. Set **Body** to

```
See below for your YubiKey inventory items with a low inventory amount

Contact your YED Admin or your Yubico representative to restock your inventory

```

5. Drag the **Inventory Message** data pill from the data pane below the first paragraph text
   ![]({{site.baseurl}}/assets/images/149-email-example.png)
6. Click **Done**
7. Click **Activate**

## Test the Flow

---

With the flow configured, let's simulate a run to verify that we are receiving expected results.

1. Near the top of the screen click **Test**
2. Click **Run Test**
3. Wait a moment for the request to process, when complete click **View the flow execution details**
4. You will be taken to a screen showing the status of each of the flows steps. You can expand the details of the email step by clicking in the tile
   ![]({{site.baseurl}}/assets/images/150-flow-test-complete.png)
5. Click the runtime value to see a sample of the email  
   ![]({{site.baseurl}}/assets/images/151-email-sample.png)

## Publish your flow

Return to the tab with your flow, and click **Save** then **Publish**

You now have a daily running job that will send an alert when you are low on your inventory!

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/error-handling/low-inventory-action">Previous</a>
  <a class="btn" href="/yed-spoke-example/references">References</a>
</div>

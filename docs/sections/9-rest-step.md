---
layout: docs
title: The REST Step
permalink: /learn/rest-step
---

## The REST Step

---

The REST step is exclusive to IntegrationHub, and is only available after activating the IntegrationHub Installer plugin.

The IntegrationHub Installer Plugin can be installed following [these steps](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_activating_integrationhub)

### Add the shipment request REST step to the Action

1. Click the + button underneath the Script step you added earlier
   ![]({{site.baseurl}}/assets/images/25-add-new-step.png)
2. Click the REST step in the **Integrations** section of the dialog
   ![]({{site.baseurl}}/assets/images/26-rest.png)
3. You will be presented with the REST step UI

### Define Connection Details

1. Change the **Connection** choice to "Connection Alias"
2. Change the connection alias to the one created in the previous step
3. Set the **Resource Path** to `/shipments_exact`
4. Set the **HTTP Method** to POST
5. Click the + button under Headers and add the following

| **Name**     | **VALUE**        |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

![]({{site.baseurl}}/assets/images/27-3-rest-connection-headers.png)

6. Drag the **Shipment Exact Request** data pill from the data pane to the **Request Content Request Body [Text]** field
   ![](/images/28-request-content.png)
7. **Save** the Rest step

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/create-a-connection-alias">Previous</a>
  <a class="btn" href="/yed-spoke-example/learn/output-script">Next</a>
</div>

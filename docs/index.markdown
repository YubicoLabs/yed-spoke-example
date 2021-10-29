---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: docs
---
## Overview
---
In this tutorial we will walk through the process of creating a YubiEnterpriseDelivery API workflow in ServiceNow and focus on adding a YubiKey to the service catalog and sending a shipment request to YubiEnterpriseDelivery when the user checks out of their cart.

**Note** - This example is a proof of concept to demonstrate the ability to integrate the YED API into ServiceNow, and is not meant to run as-is in production.

[Yubico Enterprise Delivery](https://www.yubico.com/products/yubienterprise/) **(YED)** is a global service that helps organizations deliver YubiKeys to remote and in-office users.  Organizations can automate delivery by integrating the YED REST API into their IT and service catalog flows.

[ServiceNow IntegrationHub](https://www.servicenow.com/products/integration-hub.html) is a centralized place to build and manage integrations which is made up of a series of "Spokes". [Spokes](https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/app_store_learnv2_flowdesigner_quebec_developing_for_flow_designer/app_store_learnv2_flowdesigner_quebec_working_with_spokes) are self-contained scoped applications that contain all of the artifacts that make up an integration, primarily "Actions".

Additional information about this tutorial can be found in our **GitHub** repository [here](https://github.com/YubicoLabs/yed-spoke-example)

### Yubico Developer Program
---
This tutorial has been brought to you by the Yubico Developer Program! For more guides and tutorials please visit [developers.yubico.com](https://developers.yubico.com/)

<div class="btns">
  <a class="btn" href="/yed-spoke-example/learn/prerequisites">Get Started</a>
</div>
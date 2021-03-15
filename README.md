# yed-spoke-example
Example ServiceNow IntegrationHub spoke to interact with Yubico Enterprise Delivery API

## Overview
[Yubico Enterprise Delivery](https://www.yubico.com/products/yubienterprise/) (YED) is a global service that helps organizations deliver YubiKeys to remote and in-office users.  Organizations can automate delivery by integrating the YED REST API into their IT and service catalog flows.

[ServiceNow IntegrationHub](https://www.servicenow.com/products/integration-hub.html) is a centralized place to build and manage integrations which is made up of a series of "Spokes". [Spokes](https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/app_store_learnv2_flowdesigner_quebec_developing_for_flow_designer/app_store_learnv2_flowdesigner_quebec_working_with_spokes) are self-contained scoped applications that contain all fo the artifacts that make up an integration, primarily "Actions".

In this example we will walk through the process of creating a YED API Spoke and focus on adding a YubiKey to the service catalog and sending a shipment request to YED when the user checks out of their cart.

## Prerequisites
* [Free Personal ServiceNow Developer Instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/technology_partner_program/app_store_learnv2_buildmyfirstapp_orlando_personal_developer_instances) (Requires signing up to the ServiceNow Developer Program)
  * [IntegrationHub active on the personal developer instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_activating_integrationhub)
* A Yubico Enterprise Delivery account (See your organization's Yubico Enterprise Owner or contact your [Yubico sales person](https://pages.yubico.com/contact))

## Create a Scoped Application
The first step when building a new Spoke is to create a Scoped Application. The following instructions describe how to setup the YED API Spoke your personal ServiceNow developer instance. 

1. Navigate to **System Applications > Studio**
2. Click the **Create Application** button
3. Click the **Let's get started** button
4. Fill out the "Create Application" form with the following values
  **Name:** Yubico Enterprise Delivery API Spoke
5. Click the **Create** button
6. In the subsequent dialog click the **Continue in Studio (Advanced)** link

## Add a YubiKey to the Service Catalog
Let's add a YubiKey 5 NFC to the service catalog

1. Navigate to **Product Catalog > Hardware Models**
2. Click **New**
3. Fill out the hardware form with the following values
  **General tab**
  **Name:** YubiKey 5 NFC
  **Manufacturer:** Click the magnifying glass icon, create a new manufacturer named 'Yubico', and click Submit
  **Short description:** Yubico YubiKey 5 NFC
  **Model categories:** Computer Peripheral, Hardware, Consumable
  **Asset tracking strategy:** Create consumable asset
  **Model number:** 1 (Use the response from YED API GET /products to map the product_id of the "YubiKey 5 NFC" to the hardware model number)
  **Product catalog**
  **Description:** The YubiKey 5 Series is a hardware based authentication solution that provides superior defense against phishing, eliminates account takeovers, and enables compliance requirements for strong authentication.
4. Click **Submit**
5. 


## Create the shipment request action
Now that you have a scoped app, it's time to create the shipment request action.  All of the actions in this example will be created in the Yubico Enterprise API Spoke.

### Launch the flow designer
To launch the flow designer, navigate to **Flow Designer > Designer**

This opens a new UI where you will manage and build Actions, Flows, and Subflows

## Define action inputs


## The input Script step


## The REST step


## Configure a connection alias and connection


## The output Script step


## Action outputs


## Create the shipment request flow


## References
* [YED API Documentation](https://console.yubico.com/apidocs/)
* [YED API Onboarding Playbook](https://console.yubico.com/help/API_Onboarding_Playbook.html)

## Help & Support


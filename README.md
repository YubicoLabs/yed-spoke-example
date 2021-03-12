# yed-spoke-example
Example ServiceNow IntegrationHub spoke to interact with Yubico Enterprise Delivery API

## Overview
[Yubico Enterprise Delivery](https://www.yubico.com/products/yubienterprise/) (YED) is a global service that helps organizations delivery YubiKeys to remote and in-office users.  Organizations can automate delivery by integrating the YED REST API into their IT and service catalog flows.

[ServiceNow IntegrationHub](https://www.servicenow.com/products/integration-hub.html) is a centralized place to build an manage integrations which is made up of a series of "Spokes". [Spokes](https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/app_store_learnv2_flowdesigner_quebec_developing_for_flow_designer/app_store_learnv2_flowdesigner_quebec_working_with_spokes) are self-contained scoped applications that contain all fo the artifacts that make up an integration, primarily "Actions".

In this example we will walk through the process of creating a YED API Spoke and focus on adding a YubiKey to the service catalog and sending a shipment request to YED when the user checks out of their cart.

## Prerequisites
* [Free Personal ServiceNow Developer Instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/technology_partner_program/app_store_learnv2_buildmyfirstapp_orlando_personal_developer_instances) (Requires signing up to the ServiceNow Developer Program)
* A Yubico Enterprise Delivery account. (See your organization's Yubico Enterprise Owner or contac\t your [Yubico sales person](https://pages.yubico.com/contact))

## Create a Scoped Application


## Add a YubiKey to the Service Catalog


## Create the shipment request action


## Define action inputs


## The input Script step


## The REST step


## Configure a connection alias and connection


## The output Script step


## Action outputs


## Create the shipment request flow


# References
* [YED API Documentation](https://console.yubico.com/apidocs/)
* [YED API Onboarding Playbook](https://console.yubico.com/help/API_Onboarding_Playbook.html)

# Help & Support


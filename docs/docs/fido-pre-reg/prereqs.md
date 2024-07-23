---
sidebar_position: 2
---

# Prerequisites

Before you continue, please ensure that you have read and completed the prerequisites below.

## Prerequisites

### YubiEnterprise Delivery Account

A YubiEnterprise Console **with FIDO Pre-reg enabled** is needed for this tutorial as you will need an API key from your organization's instance. To get access to your Yubico Delivery Account please contact your organization’s YubiEnterprises owner or [contact your Yubico sales person](https://www.yubico.com/contact-us/).

### ServiceNow Developer Instance

A Personal ServiceNow Developer Instance can be acquired for free by signing up for the ServiceNow Developer Program

:::tip
If your organization already has a dedicated ServiceNow instance, then please ignore the steps below and contact your ServiceNow administrator for access to a development environment.
:::

Please visit the following resources to sign up for the ServiceNow Developer Program, and to learn how to set up a Personal Developer Instance

- [ServiceNow Registration](https://developer.servicenow.com/dev.do)
- [Create a Free Personal ServiceNow Developer Instance](https://developer.servicenow.com/dev.do#!/learn/learning-plans/rome/new_to_servicenow/app_store_learnv2_buildmyfirstapp_rome_personal_developer_instances)

Once you have your Developer Instance, please ensure that IntegrationHub is active on your environment

- [Enabling ServiceNow IntegrationHub](https://developer.servicenow.com/dev.do#!/learn/learning-plans/rome/servicenow_application_developer/app_store_learnv2_rest_rome_activating_integrationhub)

Note that our example is using ServiceNow's Vancouver build.

### Supported identity providers

An IdP that supports FIDO Pre-reg will also be required for implementing this example. See the options below for the IdPs included in this guide. Please ensure that you work with your IdP to ensure that your tenant has all of the required components to leverage FIDO Pre-reg.

- Okta

Click the **Next** button once you have the prerequisites arranged.

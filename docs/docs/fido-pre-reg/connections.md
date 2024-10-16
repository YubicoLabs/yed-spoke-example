---
sidebar_position: 4
---

# Configure connection credentials

You will need to configure two connection credentials:

- One for the YubiEnterprise Delivery API
- One for the IdP that you will be leveraging

Start by using the instructions below for generating an API token for each service.

## Generate a YubiEnterprise Delivery API token

- [Generating API Tokens](https://console.yubico.com/help/api-best-practices-faq.html#generating-api-tokens)

## Generate an IdP API token

Below are instructions for generating an API token for FIDO Pre-reg supported IdPs

### Okta

- [Create an API token](https://developer.okta.com/docs/guides/create-an-api-token/main/)

## Establish credentials in ServiceNow

See [this section](/yed-spoke-example/docs/connections) from earlier in this guide to establish an API credential in ServiceNow. You will need to perform this step for both of the API tokens generated above.

::::warning

The link to the previous section above references configurations for specifically the YubiEnterprise API. When configuring your IdP ensure that you set the **API Token/Secret** and **Base URL** to match what's expected for your IdP.

::::

:::warning

When creating the credential for Okta and adding the API Key, do not add `Bearer` before the token, instead add `SSWS`. See [Okta API tokens](https://developer.okta.com/docs/guides/create-an-api-token/main/#okta-api-tokens) for more information.

:::
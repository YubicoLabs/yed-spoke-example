---
sidebar_position: 4
---

# Configure connection credentials

In this step we will add our YubiEnterprise Delivery API to ServiceNow to allow our application to send and receive shipment details from the YubiEnterprise API. This credential will be reusable throughout your application, and prevents us from having to manually enter the API token inline every time we want to configure a new API call.

- Generating

## Prerequisites

### Yubico Enterprise Delivery API token

As mentioned in the [earlier prerequisites section](/docs/prereqs#yubico-enterprise-delivery-account), you will need access to a YubiEnterprise Delivery account. Once you have access to your account, follow the steps at the link below to generate your API token. Ensure that you keep this token in a secure place that can be referenced later.

- [Setting up API Caller and Generating Token](https://console.yubico.com/help/API_Onboarding_Playbook.html#setting-up-api-caller-and-generating-token)

## Connections & Credential Alias

On the ServiceNow home screen, search for **Connections & Credentials**.

We will begin by entering the **Connections & Credentials Alias** menu.

![Configuration menu](/img/connections_1.png)

Once in the **Connections & Credentials Alias** menu, click **New** at the top right corner.

In the configuration menu, set the name using the value below. The rest of the fields can be left on their defaults. See the image below for an example.

- **Name**: YubiEnterprise Delivery API

![Configuration menu](/img/connections_2.png)

Click **Submit** at the top right corner. Once configured, return to the ServiceNow home page.

## Credential

:::info
Before you proceed with this section, ensure that you have [generated your API token](https://console.yubico.com/help/API_Onboarding_Playbook.html#setting-up-api-caller-and-generating-token) from the YubiEnterprise Console
:::

On the ServiceNow home screen, search for **Connections & Credentials**.

This time select the **Credentials** menu.

![Configuration menu](/img/connections_3.png)

Once in the **Credentials** menu, click **New** at the top right corner.

On the next screen, select **API Key Credentials** (this is typically the first one).

In the next menu, you will configure your API credential. On the configuration menu, provide the following values:

- **Name**: YubiEnterprise Delivery API
- **API Key**: Bearer {insert your YubiEnterprise API token here}
- Use the defaults for the other properties

:::warning
Do not forget to append "Bearer " before pasting your API token into the **API Key** field

ex. Bearer eyj0eX........
:::

![Configuration menu](/img/connections_4.png)

Once finished, click **Submit**

## Connections

On the ServiceNow home screen, search for **Connections & Credentials**.

This time select the **Connections** menu.

![Configuration menu](/img/connections_5.png)

Once in the **Connections** menu, click **New** at the top right corner.

On the next screen, select **HTTP(s) Connection** (this is typically the second one).

In the next menu, you will configure your connection details. Here you will use the Connection Alias, and Credential that were configured above. In the menu, provide the following values

- **Name**: YubiEnterprise Delivery API
- **Credential**: Use the search icon on the right to search for the credential named "YubiEnterprise Delivery API"
- **Connection alias**: Use the search icon on the right to search for the connection alias that you previously created (ex. x_703594_yubienter.YubiEnterprise_Delivery_API)
- **Connection URL**: https://api.console.yubico.com/v1/
- Use the defaults for the other properties

![Configuration menu](/img/connections_6.png)

Once finished, click **Submit**

Now that your API credentials are configured, we can build the action that will be used to make a YubiEnterprise shipment request.

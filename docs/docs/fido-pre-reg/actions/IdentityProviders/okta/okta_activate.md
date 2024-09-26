---
sidebar_position: 3
---

# Create Okta FIDO Pre-reg activate request

In this step we will configure an action to finalize a FIDO Pre-reg activation request to Okta. This is the second part of the FIDO Pre-reg ceremony which will provide the JWE encrypted PIN and credential response for the final activation of the YubiKey

Before you proceed ensure that you have configured the connection alias and credential used for calling the Okta API with your API token.

## Action properties

On the ServiceNow home screen, search for **flow designer**.

Click **Flow Designer**, a new window should open.

![Configuration menu](/img/actions_1.png)

Once the **Flow Designer** page opens, click the **Create new** button, then select **Action**.

![Configuration menu](/img/actions_2.png)

A menu will appear to configure the action's properties. Use the following values to initialize your action.

- **Action name**: Okta Activate Credential
- **Application**: YubiEnterprise Delivery App
- **Description**: Activate a FIDO2 credential in Okta

![Configuration menu](/img/pre-reg/pr-50.png)

Click **Submit**.

## Action inputs

Next we are going to configure the inputs that go into the action. These inputs are the parameters that are going to be passed into our API call by our flow.

For each row in the table below, perform the following steps:

1. Click the **+Create Input** button at the top.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label                       | Type   | Mandatory |
| --------------------------- | ------ | --------- |
| PIN Response                | String | on        |
| Credential Response         | String | on        |
| Authenticator Enrollment ID | String | on        |
| Fulfillment Provider        | String | on        |
| User ID                     | String | on        |
| Serial Number               | String | on        |
| Version                     | String | on        |
| Yubico Signing Keys         | String | on        |

Your actions input menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-51.png)

Click **Save** once your inputs are complete.

## Input script

Next, we will pass our inputs through a script to format the request body for the Okta API

On the left side, in the Action Outline, click the blue **+** button.
![Input plus](/img/actions_5.png)

Search for **scripts** and select the **Script** option

![Inputs menu](/img/actions_6.png)

### Script inputs

We'll start by creating inputs for the script. This will utilize the same inputs that we defined in the previous step (yes, sadly this does need to be repeated).

For each of the items in the table below, do the following steps:

1. Click the **+Create Variable** button
2. Set the name using the name provided in the table below (warning: these values are case sensitive)
3. Drag the corresponding data pill from the right side **Data** menu

| Name (case sensitive)       | Data pill                   |
| --------------------------- | --------------------------- |
| pin_response                | PIN Response                |
| credential_response         | Credential Response         |
| fulfillment_provider        | Provider                    |
| user_id                     | User ID                     |
| serial_number               | Serial Number               |
| version                     | Version                     |
| authenticator_enrollment_id | Authenticator Enrollment ID |
| signing_keys                | Yubico Signing Keys         |

Your script inputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-52.png)

### Adding the script

Next we are going to add a script to **Script** field. Copy the script provided below into the **Script** field.

```js
(function execute(inputs, outputs) {
  const parsed_signing_keys = JSON.parse(inputs.signing_keys)
  outputs.request_body = JSON.stringify({
    fulfillmentProvider: inputs.fulfillment_provider,
    userId: inputs.user_id,
    serial: inputs.serial_number,
    version: inputs.version,
    yubicoSigningJwks: inputs.signing_keys,
    pinResponseJwe: inputs.pin_response,
    credResponses: [
      {
        credResponseJwe: inputs.credential_response,
        authenticatorEnrollmentId: inputs.authenticator_enrollment_id,
      },
    ],
  });
})(inputs, outputs);
```

### Script outputs

Lastly, we will add the output variable for the script.

In the **Output Variables** section, click the **+Create Variable** button.

Set the single output using the variables below:

- **Label**: request_body
- **Name**: Will be auto populated based on the label
- **Type**: String (default)
- **Mandatory**: on

Your script outputs menu should look like the example below.

![Scripts outputs](/img/pre-reg/pr-41.png)

Click Save once your script is ready.

## API REST call

Next we will configure the action step for making the REST HTTP call to the Okta Activate API.

On the left side, in the Action Outline, click the **bottom** blue **+** button.

![Add second action](/img/actions_9.png)

Search for **rest** and select the **REST** option

:::note

If the REST option does not appear then you have not activated the IntegrationHub plugin. Follow the instructions in the [prerequisites](/docs/prereqs) section.

:::

![Inputs menu](/img/actions_10.png)

### Connection details

First we will add our API credentials to the REST call. We will utilize the connection alias that was created earlier in this guide.

Ensure that the Connection field is set to **Use Connection Alias**.

Change the **Connection Alias** to the Okta option created earlier in the guide. The **Base URL** should be set automatically based on the connection alias.

Your connection details should look like the example below.

![Connection details final](/img/pre-reg/pr-28.png)

### Request details

Next we will configure the details of the API method call. We will be utilizing the [`POST /webauthn-registration/api/v1/activate`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/WebAuthnPreregistration/#tag/WebAuthnPreregistration/operation/activatePreregistrationEnrollment) API method

Configure the Request Details section with the following values:

- **Build Request**: Manually
- **Resource Path**: /webauthn-registration/api/v1/activate
- **HTTP Method**: POST

The **Headers** should include two header properties using the values below

| Name         | Value            |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

Your request details should look like the example below.

![Request details final](/img/pre-reg/pr-53.png)

### Request content

Next we will add data to the body of our POST request. We will utilize the output of the previous script step. In the **Request Content** section, set the following values

- **Request Type**: Text
- **Request Body**: Drag the **request_body** data pill from the **Script step** section on the right side of the menu.

Your request content should look like the example below.

![Request details final](/img/pre-reg/pr-44.png)

Click save once your API call is complete

## Action outputs

Lastly we will define the outputs of the action. These outputs will be usable by the final flow that will orchestrate the ordering experience. We want to ensure that the action outputs are able to express details about the new credential activation.

We will start by clicking the **Outputs** tab in the **Action Outline** pane.

![Action outline outputs](/img/actions_14.png)

Next we are going to configure the outputs.

For each row in the table below, perform the following steps:

1. Click the **+Create Output** button at the top.
2. Fill in the input using the data provided below to the corresponding field (Note: Unlike the previous examples, the **Name** field is not auto-populated).

| Label       | Name        | Type   | Mandatory |
| ----------- | ----------- | ------ | --------- |
| Status Code | status_code | String | on        |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-54.png)

Once complete, press the **Exit Edit Mode** button on the top of the menu.

A new menu should appear showing the outputs you just defined with empty **Value** fields. For each output, you will add a data pill from the **REST step** and **the second** **Script step** sections on the right side of the menu

Use the table below to correlate the correct data pill to a label.

| Label       | Section > Data pill     |
| ----------- | ----------------------- |
| Status Code | REST step > Status Code |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-55.png)

Click **Save** once your outputs are complete

## Publish the action

If everything looks good, click the **Publish** button at the top of the action menu to make the action available for all flows.

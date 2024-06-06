---
sidebar_position: 2
---

# Create Okta FIDO Pre-reg enrollment request

In this step we will configure an action to create a FIDO Pre-reg enrollment request to Okta. This is the initial part of the FIDO Pre-reg ceremony which will provide the JWE encrypted PIN and credential requests

Before you proceed ensure that you have configured the connection alias and credential used for calling the Okta API with your API token.

## Action properties

On the ServiceNow home screen, search for **flow designer**.

Click **Flow Designer**, a new window should open.

![Configuration menu](/img/actions_1.png)

Once the **Flow Designer** page opens, click the **Create new** button, then select **Action**.

![Configuration menu](/img/actions_2.png)

A menu will appear to configure the action's properties. Use the following values to initialize your action.

- **Action name**: Okta Create Enrollment
- **Application**: YubiEnterprise Delivery App
- **Description**: Create an Okta FIDO Pre-reg enrollment

![Configuration menu](/img/pre-reg/pr-35.png)

Click **Submit**.

## Action inputs

Next we are going to configure the inputs that go into the action. These inputs are the parameters that are going to be passed into our API call by our flow.

For each row in the table below, perform the following steps:

1. Click the **+Create Input** button at the top.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label                 | Type   | Mandatory |
| --------------------- | ------ | --------- |
| User ID               | String | on        |
| Fulfillment Provider  | String | on        |
| RP ID                 | String | on        |
| Yubico Transport Keys | String | on        |

Your actions input menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-36.png)

Click **Save** once your inputs are complete.

## Input script - Parse JWKS

Next, we will pass our inputs through a script to select one of Yubico's transport keys

On the left side, in the Action Outline, click the blue **+** button.
![Input plus](/img/actions_5.png)

Search for **scripts** and select the **Script** option

![Inputs menu](/img/actions_6.png)

### Script inputs

We'll start by creating inputs for the script. This script will intake the Yubico Transport Key JWKS.

For each of the items in the table below, do the following steps:

1. Click the **+Create Variable** button
2. Set the name using the name provided in the table below (warning: these values are case sensitive)
3. Drag the corresponding data pill from the right side **Data** menu

| Name (case sensitive) | Data pill             |
| --------------------- | --------------------- |
| yubico_transport_jwks | Yubico Transport Keys |

Your script inputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-37.png)

### Adding the script

Next we are going to add a script to the **Script** field. Copy the script provided below into the **Script** field.

```js
(function execute(inputs, outputs) {
  const jwks = JSON.parse(inputs.yubico_transport_jwks);

  const randomIndex = Math.floor(Math.random() * jwks.keys.length);
  const selectedKey = jwks.keys[randomIndex];
  outputs.jwk = selectedKey;
})(inputs, outputs);
```

### Script outputs

Lastly, we will add the output variable for the script. This will be the randomly selected JWK from the list of Yubico Transport Keys.

In the **Output Variables** section, click the **+Create Variable** button.

Set the single output using the variables below:

- **Label**: jwk
- **Name**: Will be auto populated based on the label
- **Type**: String (default)
- **Mandatory**: on

Your script outputs menu should look like the example below.

![Scripts outputs](/img/pre-reg/pr-38.png)

Click Save once your script is ready.

## Input script - Format request body

Next, we will pass our inputs through a script to format the request body for the Okta API call.

On the left side, in the Action Outline, click the blue **+** button.
![Input plus](/img/pre-reg/pr-39.png)

Search for **scripts** and select the **Script** option

![Inputs menu](/img/actions_6.png)

### Script inputs

We'll start by creating inputs for the script. This will utilize the same inputs that we defined in the previous step (yes, sadly this does need to be repeated).

For each of the items in the table below, do the following steps:

1. Click the **+Create Variable** button
2. Set the name using the name provided in the table below (warning: these values are case sensitive)
3. Drag the corresponding data pill from the right side **Data** menu

| Name (case sensitive) | Data pill            |
| --------------------- | -------------------- |
| userId                | User ID              |
| fulfillmentProvider   | Fulfillment Provider |
| yubicoTransportKeyJWK | jwk                  |
| enrollmentRpIds       | RP ID                |

Your script inputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-40.png)

### Adding the script

Next we are going to add a script to **Script** field. Copy the script provided below into the **Script** field.

```js
(function execute(inputs, outputs) {
  outputs.request_body = JSON.stringify({
    fulfillmentProvider: inputs.fulfillmentProvider,
    userId: inputs.userId,
    yubicoTransportKeyJWK: inputs.yubicoTransportKeyJWK,
    enrollmentRpIds: [inputs.enrollmentRpIds],
  });
})(inputs, outputs);
```

### Script outputs

Lastly, we will add the output variables for the script.

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

Next we will configure the action step for making the REST HTTP call to the Okta Enrollment API.

On the left side, in the Action Outline, click the **bottom** blue **+** button.

![Add second action](/img/pre-reg/pr-42.png)

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

Next we will configure the details of the API method call. We will be utilizing the [`POST /webauthn-registration/api/v1/enroll`](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/WebAuthnPreregistration/#tag/WebAuthnPreregistration/operation/enrollPreregistrationEnrollment) API method

Configure the Request Details section with the following values:

- **Build Request**: Manually
- **Resource Path**: /webauthn-registration/api/v1/enroll
- **HTTP Method**: POST

The **Headers** should include two header properties using the values below

| Name         | Value            |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

Your request details should look like the example below.

![Request details final](/img/pre-reg/pr-43.png)

### Request content

Next we will add data to the body of our POST request. We will utilize the output of the previous script step. In the **Request Content** section, set the following values

- **Request Type**: Text
- **Request Body**: Drag the **request_body** data pill from the **Script step (2)** section on the right side of the menu.

Your request content should look like the example below.

![Request details final](/img/pre-reg/pr-44.png)

Click save once your API call is complete

## Output script

We will now create another script to format the outputs of the action. This will ensure that we can capture data from a enrollment request.

On the left side, in the Action Outline, click the bottom blue **+** button.
![Action outline 3](/img/pre-reg/pr-45.png)

Search for **scripts** and select the **Script** option

![Script action step](/img/actions_6.png)

### Script inputs

We'll start by creating the input for the script. We will only create one input, which will be the result of the previous REST step call

1. Click the **+Create Variable** button
2. **Name**: responseBody (case sensitive)
3. **Value**: Drag the Response Body data pill from the REST step section on the right side of the menu

Your script inputs menu should look like the example below.

![Script action step](/img/actions_15.png)

### Adding the script

Next we are going to add a script to Script field. Copy the script provided below into the Script field.

```javascript
(function execute(inputs, outputs) {
  const response = JSON.parse(inputs.responseBody);

  outputs.pin_request_jwe = response.pinRequestJwe;

  /*
   * Cred requests are located inside a map
   * For POC, we're assuming one credential
   */
  const credRequest = response.credRequests[0];
  outputs.cred_request_jwe = credRequest.credRequestJwe;
  outputs.key_id = credRequest.keyId;
  outputs.authenticator_enrollment_id = credRequest.authenticatorEnrollmentId;
})(inputs, outputs);
```

### Script outputs

Lastly, we will add the output variables for the script

For each row in the table below, perform the following steps:

1. Click the **+Create Variable** button at the bottom.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label                       | Type   | Mandatory |
| --------------------------- | ------ | --------- |
| pin_request_jwe             | String | on        |
| cred_request_jwe            | String | on        |
| key_id                      | String | on        |
| authenticator_enrollment_id | String | on        |

Your script outputs menu should look like the example below.

![Script outputs](/img/pre-reg/pr-46.png)

Click **Save** once your output script is complete

## Action outputs

Lastly we will define the outputs of the action.

We will start by clicking the **Outputs** tab in the **Action Outline** pane.

![Action outline outputs](/img/pre-reg/pr-47.png)

Next we are going to configure the outputs.

For each row in the table below, perform the following steps:

1. Click the **+Create Output** button at the top.
2. Fill in the input using the data provided below to the corresponding field (Note: Unlike the previous examples, the **Name** field is not auto-populated).

| Label                       | Name                      | Type   | Mandatory |
| --------------------------- | ------------------------- | ------ | --------- |
| PIN Request JWE             | pinRequestJwe             | String | on        |
| Credential Request JWE      | credRequestJwe            | String | on        |
| Key ID                      | keyId                     | String | on        |
| Authenticator Enrollment ID | authenticatorEnrollmentId | String | on        |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-48.png)

Once complete, press the **Exit Edit Mode** button on the top of the menu.

A new menu should appear showing the outputs you just defined with empty **Value** fields. For each output, you will add a data pill from the **Script step** section on the right side of the menu

Use the table below to correlate the correct data pill to a label.

| Label                       | Section > Data pill                       |
| --------------------------- | ----------------------------------------- |
| PIN Request JWE             | Script step > pin_request_jwe             |
| Credential Request JWE      | Script step > cred_request_jwe            |
| Key ID                      | Script step > key_id                      |
| Authenticator Enrollment ID | Script step > authenticator_enrollment_id |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-49.png)

Click **Save** once your outputs are complete

## Publish the action

If everything looks good, click the **Publish** button at the top of the action menu to make the action available for all flows.

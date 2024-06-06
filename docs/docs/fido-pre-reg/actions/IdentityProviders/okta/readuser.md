---
sidebar_position: 1
---

# Read Okta user

In this step we will configure an action to read an Okta user. This is required in order to get the user ID that is used as an input into Okta's FIDO Pre-reg API.

Before you proceed ensure that you have configured the connection alias and credential used for calling the Okta API with your API token.

## Action properties

On the ServiceNow home screen, search for **flow designer**.

Click **Flow Designer**, a new window should open.

![Configuration menu](/img/actions_1.png)

Once the **Flow Designer** page opens, click the **Create new** button, then select **Action**.

![Configuration menu](/img/actions_2.png)

A menu will appear to configure the action's properties. Use the following values to initialize your action.

- **Action name**: Okta Read User
- **Application**: YubiEnterprise Delivery App
- **Description**: Read a user object using Okta's API

![Configuration menu](/img/pre-reg/pr-25.png)

Click **Submit**.

## Action inputs

Next we are going to configure the inputs that go into the action. These inputs are the parameters that are going to be passed into our API call by our flow.

For each row in the table below, perform the following steps:

1. Click the **+Create Input** button at the top.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label      | Type   | Mandatory |
| ---------- | ------ | --------- |
| User Login | String | on        |

Your actions input menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-26.png)

Click **Save** once your inputs are complete.

## API REST call

Next we will configure the action step for making the REST HTTP call to Okta's API.

On the left side, in the Action Outline, click the **bottom** blue **+** button.

![Add second action](/img/pre-reg/pr-27.png)

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

Next we will configure the details of the API method call. We will be utilizing the [`GET /api/v1/users/{id}`](https://developer.okta.com/docs/reference/api/users/#get-user) API method

Configure the Request Details section with the following values:

- **Build Request**: Manually
- **Resource Path**: Type **/api/v1/users/** then drag the User Login data pill to the end of the url (see the image below for an example)
- **HTTP Method**: GET

The **Headers** should include two header properties using the values below

| Name         | Value            |
| ------------ | ---------------- |
| Accept       | application/json |
| Content-Type | application/json |

Your request details should look like the example below.

![Request details final](/img/pre-reg/pr-29.png)

Click **Save** once your request is complete.

## Output script

We will now create a script to extract the user ID from the REST Step's request body.

On the left side, in the Action Outline, click the bottom blue **+** button.
![Action outline 3](/img/pre-reg/pr-30.png)

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
  outputs.user_id = response.id;
})(inputs, outputs);
```

### Script outputs

Lastly, we will add the output variables for the script

For each row in the table below, perform the following steps:

1. Click the **+Create Variable** button at the bottom.
2. Fill in the input using the data provided below to the corresponding field (note that name will be automatically input).

| Label   | Type   | Mandatory |
| ------- | ------ | --------- |
| user_id | String | on        |

Your script outputs menu should look like the example below.

![Script outputs](/img/pre-reg/pr-31.png)

Click **Save** once your output script is complete

## Action outputs

Lastly we will define the outputs of the action, which will only be the user ID.

We will start by clicking the **Outputs** tab in the **Action Outline** pane.

![Action outline outputs](/img/pre-reg/pr-32.png)

Next we are going to configure the outputs.

For each row in the table below, perform the following steps:

1. Click the **+Create Output** button at the top.
2. Fill in the input using the data provided below to the corresponding field (Note: Unlike the previous examples, the **Name** field is not auto-populated).

| Label   | Name    | Type   | Mandatory |
| ------- | ------- | ------ | --------- |
| User ID | user_id | String | on        |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-33.png)

Once complete, press the **Exit Edit Mode** button on the top of the menu.

A new menu should appear showing the outputs you just defined with empty **Value** fields. For each output, you will add a data pill from the **REST step** and **the second** **Script step** sections on the right side of the menu

Use the table below to correlate the correct data pill to a label.

| Label   | Section > Data pill   |
| ------- | --------------------- |
| User ID | Script step > user_id |

Your actions outputs menu should look like the example below.

![Inputs menu](/img/pre-reg/pr-34.png)

Click **Save** once your outputs are complete

## Publish the action

If everything looks good, click the **Publish** button at the top of the action menu to make the action available for all flows.

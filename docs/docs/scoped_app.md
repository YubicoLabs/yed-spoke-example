---
sidebar_position: 3
---

# Create a scoped application

We'll begin by creating a scoped application in your ServiceNow instance. This will help to ensure that your YubiEnterprise components are scoped together, and won't impact other parts of your system.

We'll begin at the home page, shown below.

Begin by searching for **system applications**.

Under **System Applications** click **Studio**.

![Scoped application menu](/img/scoped_app_1.png)

Once the page loads, click **Create Application**.

A **Get started** window might appear. If this menu appears for you, then click **Let's get started**. Otherwise, proceed to the next step where you will configure your application.

Next, a menu will appear to configure the name and description of your application. Add the following values to menu. An example of the final product will be shown below.

- **Name**: YubiEnterprise Delivery App
- **Description**: Application for ordering YubiKeys through your service catalog
- **Additional settings**: Select Scoped
- **Scope**: Use default

:::note
Note, these values have no impact on the actual example; feel free to use any naming standards used by your organization
:::

![Configuration menu](/img/scoped_app_2.png)

Once configured, click **Create**.

When asked about roles, leave the menu empty and click **Continue**.

![Configuration menu](/img/scoped_app_3.png)

When asked about the format, select **Classic**. Once selected, press **Continue**.

![Configuration menu](/img/scoped_app_4.png)

When prompted about tables, leave the menu empty and click **Done with tables**.

![Configuration menu](/img/scoped_app_5.png)

A success menu should appear, indicating that your app was created. You can close this window and return to the ServiceNow home menu.

![Configuration menu](/img/scoped_app_6.png)

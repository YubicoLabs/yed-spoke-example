---
layout: docs
title: The Input Script Step
permalink: /learn/create-a-connection-alias
---

## Create a Connection Alias
When configuring a REST step there are two options for defining an endpoint connection 
* Use Connection Alias
* Define Connection Inline

Connection Inline is great for quick prototyping, or when the request needs to be dynamic. 

A Connection Alias offers better security by minimizing the footprint of where you store your secret, and will allow for your ServiceNow admins to make YED API calls consistently across the platform.

Below are the steps for configuring a Connection Alias, which will be used in the following step

**Note** - Do not close your Action Configuration window as we will be returning to it, complete this action in another tab if possible

### Configure the Connection & Credential Alias
1. Navigate back to the ServiceNow dashboard and find **Connections & Credentials**
2. First we will select **Connections & Credentials Alias**  
  ![]({{site.baseurl}}/assets/images/129-cred-conn-find.png)
3. Click New
4. Set **Name** to yed_api_alias
5. Leave all other fields on their defaults, click **Submit**
6. Once you return to the main screen, take note of the ID on the row with **yed_api_alias**  
  ![]({{site.baseurl}}/assets/images/132-cca-config.png)

### Configure the Credentials
1. Navigate back to the ServiceNow dashboard and find **Connections & Credentials**
2. First we will select **Credentials**  
  ![]({{site.baseurl}}/assets/images/129-cred-conn-find.png)
3. Click New
4. Select **API Key Credentials**  
  ![]({{site.baseurl}}/assets/images/130-type-cred.png)
5. Fill out the form with the following values
* **Name:** YED API Connection
* **API Key:** Bearer {your YED API Secret here}  
  ![]({{site.baseurl}}/assets/images/131-cred-form.png)
6. Click Submit

### Configure the Connection
1. On the menu on the left hand side select **Connections**
2. Click New
3. Select **HTTP(s) Connection**  
  ![]({{site.baseurl}}/assets/images/133-conn-type.png)
4. Configure the Form with the following information
* **Name:** yed_api
* **Credential:** YED API Connection (this is the one created in the previous step)
* **Connection alias:** Choose the Connection Alias ID that you created in the previous state
* **Connection URL:** Your YED API URL  
  ![]({{site.baseurl}}/assets/images/134-config-conn.png)
5. Click Submit

You can now return to the Flow Designer to configure the REST step - The Alias for your connection will be automatically configured.

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/input-script">Previous</a>
  <a class="btn" href="/yed-spoke-example/learn/rest-step">Next</a>
</div>
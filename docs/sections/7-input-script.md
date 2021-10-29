---
layout: docs
title: The Input Script Step
permalink: /learn/input-script
---

## The Input Script Step
---
At this point, the Action is getting the shipment address, product, and quantity. Now you will use a Script Step to process the input data and create a shipment exact request payload.

1. Add a new Action Step. When prompted, choose the **Script** step
  ![](/assets/images/23-add-new-step.png)
2. When prompted, choose the **Script** step
  ![](/assets/images/24-script.png)

### Script input variables
The script step gets its own set of input variables. This allows you to map data from the data pane into script-friendly variables.

1. In the **Input Variables** widget, click the **+ Create Variable** button 
2. Set the **Name** to `delivery_type`
3. Drag the **Delivery Type** data pill from the data pane to the **Value** field. You can now reference the Delivery Type in your script as `inputs.delivery_type`.
4. Repeat steps 1-3 for each of the action input variables

  ![](/assets/images/23-script-input.png)

5. Set the script to the following. 
   Note: Ensure the input variable names match the script variables below otherwise the input values will not be mapped.

```javascript
(function execute(inputs, outputs) {

  // Enforce API constraints here. See https://console.yubico.com/help/API_Onboarding_Playbook.html?highlight=max#executing-a-shipping-request for full list
  // A. 2 character country codes only
  const countryCodeMap = {
    "USA": "US",
    "US": "US"
  };
  const code = countryCodeMap[inputs.country_code_2];
  
  // The rest of the constraints are left as an exercise for the reader
  // B. recipient_firstname max = 15
  // C. recipient_lastname max = 20
  // D. recipient max = 20
  // E. street_line max = 40. Overflow address to street_line2 and street_line3
  // F. city max = 20
  // G. region max = 20
  // H. postal_code max = 20
  // I. recipient_email max = 40
  // J. recipient_telephone max = 14

  outputs.shipment_exact_request = JSON.stringify({
    "delivery_type": parseInt(inputs.delivery_type),
    "country_code_2": code,
    "recipient": inputs.recipient,
    "recipient_email": inputs.recipient_email,
    "recipient_firstname": inputs.recipient_firstname,
    "recipient_lastname": inputs.recipient_lastname,
    "recipient_telephone": inputs.recipient_telephone,
    "street_line1": inputs.street_line1,
    "street_line2": inputs.street_line2,
    "street_line3": inputs.street_line3,
    "city": inputs.city,
    "region": inputs.region,
    "postal_code": inputs.postal_code,
    "shipment_items": [
      {
      "product_id": parseInt(inputs.product_id),
      "inventory_product_id": parseInt(inputs.inventory_product_id),
      "shipment_product_quantity": parseInt(inputs.shipment_product_quantity)
    }
   ]
  });

})(inputs, outputs);
```

### Script output variables
Similar to Script Input Variables, Script Output Variables allow you to pass data out of your script to other steps in the action. These variables are internal to the action, and are not surfaced in Flow Designer.

1. In the **Output Variables** widget, click the **+ Create Variable** button
2. Set the **Label** and **Name** to "Shipment Exact Request". Leave the **Type** as String
  ![](/assets/images/24-script-output.png)
3. You will now see a new data pill in the **Script step** section of the Data Pane
4. **Save** the Script step

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/define-action-inputs">Previous</a>
  <a class="btn" href="/yed-spoke-example/learn/rest-step">Next</a>
</div>
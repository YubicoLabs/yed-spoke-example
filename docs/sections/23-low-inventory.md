---
layout: docs
title: Monitor for Low Inventory
permalink: /error-handling/low-inventory
---

## Monitor for Low Inventory

---

We will use our skills learned in previous sections to enhance the functionality of our YED ServiceNow application to monitor and alert an admin if any of our inventory items fall behind a specific threshold. We will accomplish this by creating a new Action that makes a REST call to the YED API's GET /inventory method, and a workflow that calls this action on a daily occurrence.

<div class="btns">
  <a class="btn--secondary" href="/yed-spoke-example/learn/bonus-lab">Previous</a>
  <a class="btn" href="/yed-spoke-example/error-handling/low-inventory-action">Next</a>
</div>

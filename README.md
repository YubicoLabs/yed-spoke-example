<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Apache-2.0][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://assets.brandfolder.com/q2tsde-8kenzk-4cg1pz/v/8222261/original/Yubico%20Logo%20Big%20(PNG).png" alt="Logo" width="363" height="100">
  </a>

<h3 align="center">YED ServiceNow Spoke</h3>

  <p align="center">
    Integrate ServiceNow with the YED API to allow your workforce to request their YubiKey in the same way they make other IT requests
    <br />
    <a href="https://github.com/YubicoLabs/yed-spoke-example/tree/master#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/YubicoLabs/yed-spoke-example/issues">Report Bug</a>
    ·
    <a href="https://github.com/YubicoLabs/yed-spoke-example/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The project</a>
    </li>
    <li>
      <a href="#built-with">Built with</a>
    </li>
    <li>
      <a href="#getting-started">Getting started</a>
    </li>
    <li><a href="#next-steps">Next steps</a></li>
    <li><a href="#faqs-and-common-issues">FAQs and common issues</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project will demonstrate how to integrate the YubiEnterpriseDelivery API into a ServiceNow custom application. The end goal of this project is to allow your users to use your standard IT Services tool to request a YubiKey directly from your YubiEnterprise inventory.

[Yubico Enterprise Delivery](https://www.yubico.com/products/yubienterprise/) (YED) is a global service that helps organizations deliver YubiKeys to remote and in-office users. Organizations can automate delivery by integrating the YED REST API into their IT and service catalog flows.

[ServiceNow IntegrationHub](https://www.servicenow.com/products/integration-hub.html) is a centralized place to build and manage integrations which is made up of a series of “Spokes”. [Spokes](https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/app_store_learnv2_flowdesigner_quebec_developing_for_flow_designer/app_store_learnv2_flowdesigner_quebec_working_with_spokes) are self-contained scoped applications that contain all of the artifacts that make up an integration, primarily “Actions”.

**Disclaimer** - This project is not meant to act as a production ready solution for **all** organizations. It is meant to demonstrate how sample Actions/Flows that are capable of making YED requests.

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

- [YubiEnterprise Delivery](https://console.yubico.com/help/introduction.html)
- [YubiEnterprise API](https://console.yubico.com/apidocs/#operation/CreateShipmentExact)
- [ServiceNow](https://www.servicenow.com/)
- [ServiceNow Personal Developer Instance](https://developer.servicenow.com/dev.do#!/home)

Prerequisites are covered in more detail in the [full walkthrough for setting up a custom application](#getting-started).

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

Provided in the link below is a full walkthrough which will guide you to:

- Create a custom application
- Create a new catalog item for ordering YubiKey
- Create the necessary Flows and Actions
- Integrate the Flow with an approval process
- Error reporting, and alerts

**Note** - There will be specific business requirements for your implementation. This guide will demonstrate our best practices to get you to a working solution - After you complete the guide please begin to experiment to tweak the solution to adhere to your requirements.

<div style="display:block; margin-top: 30px; margin-bottom: 30px">
<a style="color:white; background-color:#9aca3c; padding: 1.5em; cursor: pointer" href="https://yubicolabs.github.io/yed-spoke-example/" target="_blank">Link to the full walkthrough</a>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

## Next steps

Because this example is meant to act as a demo, there are a few items that need to be considered to make your deployment "production ready".

### Policies to prevent abuse

This application will allow a user to order as many keys as they desire. Additional logic will need to be built to limit the number of orders based on your requirements

### Extending Catalog Item

Our example assumes that your users information is all stored within ServiceNow. With the reality of work-from-home it's possible that the address in the users' ServiceNow account is not where they are currently working from.

You may need to create your own Catalog Form that allows a user to enter in their address.

Other items to consider for this are:

- Telephone
- Email
- Product type and quantity

Don't forget to modify the data inputs when passing the request to your YED Action

### Address Validation

If you are allowing the user to self enter their own address, then we advise that you perform some address validation on their input. YED has a method, [/validate-address](https://console.yubico.com/apidocs/#operation/ValidateAddress), which will indicate whether an address is shippable for Yubico.

Pre-validating an address before a submission will prevent an influx of shipments appearing in the console that will not ship due to address errors

### Multi-Region PO support

The current demo is configured for a single region PO. You will need to use the proper API token for the user’s region, e.g. North America / Canada is one region, EMEA is a different region and each have their own associated API token.

More information can be found [here](#multi-region-purchase-orders--organizations)

<p align="right">(<a href="#top">back to top</a>)</p>

## FAQs and Common Issues

### Cancelling my Test Order

It should be noted that orders made through the YED API are made **directly** on your production inventory. YED does not currently support "sandbox" environments with fake data/inventory. During testing and development it is crucial that you not only delete orders directly from this application, but you must login to the YED Console to verify the order was removed, and to delete any lingering test shipments - Otherwise, your order will be processed and a key from your inventory will be shipped.

Orders are not processed for shipment until **3AM PST** - So ensure your developers/testers are instructed to delete their shipments prior to closing their work day. This time is centrally configured across YED and **cannot be edited**.

### Multi-Region Purchase Orders / Organizations

If organizations are shipping keys to both the US/Canada and to EMEA, two API tokens are required, as both regions are treated as different organizations.

A user will not be able to perform operations in a EU YED instance while logged in to their US/CAN instance (the same is true of the inverse).

Before implementing a solution you should consider how many YED organizations your company will be utilizing, and how to guide your users to the appropriate portal with the correct API key for their region.

This site will be updated in the future with Multi-Region PO Support.

More information on this can be found [here](https://console.yubico.com/help/api-req.html#users-roles-and-organizations)

### My API calls to YED are failing

There might be two reasons for this - You might not have configured your API secret, or your YED API URL is incorrect. See this section on [creating credential aliases](https://yubicolabs.github.io/yed-spoke-example/learn/create-a-connection-alias)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[Yubico Developer Program](https://developers.yubico.com/)

Project Link: [https://github.com/YubicoLabs/yed-spoke-example](https://github.com/YubicoLabs/yed-spoke-example)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/YubicoLabs/yed-spoke-example.svg?style=for-the-badge
[contributors-url]: https://github.com/YubicoLabs/yed-spoke-example/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/YubicoLabs/yed-spoke-example.svg?style=for-the-badge
[forks-url]: https://github.com/YubicoLabs/yed-spoke-example/network/members
[stars-shield]: https://img.shields.io/github/stars/YubicoLabs/yed-spoke-example.svg?style=for-the-badge
[stars-url]: https://github.com/YubicoLabs/yed-spoke-example/stargazers
[issues-shield]: https://img.shields.io/github/issues/YubicoLabs/yed-spoke-example.svg?style=for-the-badge
[issues-url]: https://github.com/YubicoLabs/yed-spoke-example/issues
[license-shield]: https://img.shields.io/github/license/YubicoLabs/yed-spoke-example.svg?style=for-the-badge
[license-url]: https://github.com/YubicoLabs/yed-spoke-example/blob/master/LICENSE

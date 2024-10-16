# E-commerce Automation Testing with Cypress

This repository contains end-to-end test automation framework for an e-commerce website using Cypress. It includes tests for the shopping and checkout process, ensuring that users can successfully navigate through the site and complete purchases.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests Locally](#running-tests-locally)
- [Continuous Integration](#continuous-integration)
- [Test Reports](#test-reports)
- [Contributions](#contributions)
- [Authors](#authors)
- [Show your Support](#show-your-support)

## Features
- Automated testing for the entire shopping and checkout process.
- Uses the Page Object Model (POM) for better organization and maintainability.
- Integrated with Mochawesome for comprehensive test reporting.
- Generates fake data for testing (addresses, names, etc.).
- CI/CD integration using GitHub Actions for automatic test execution on push or pull request.

## Technologies Used
- [Cypress](https://www.cypress.io/) - JavaScript End-to-End Testing Framework
- [Faker](https://github.com/marak/Faker.js/) - Library for generating fake data
- [Mochawesome](https://github.com/adamgruber/mochawesome) - HTML/CSS Report generator for Mocha tests
- [GitHub Actions](https://github.com/features/actions) - CI/CD integration

## Installation

1. Clone this repository:
```bash 
   git clone https://github.com/Sylvestre01/E-commerce-Checkout-Test.git
   cd Ecommerce-UI-Test
   ````

2. Install the required dependencies:
```bash 
   npm install
   ````

## Configuration
You can configure the Cypress settings by editing the cypress.json file. Here you can set base URL, timeouts, and other options as needed.

## Running Tests locally
- To run the tests locally, use the following command:
```bash 
   npm run test
   ````
This will execute all the Cypress tests in headless mode.

If you want to open the Cypress Test Runner, use:
```bash
   npx cypress open
   ````

## Continuous Integration
This project is configured with GitHub Actions to run tests automatically on each push or pull request. The configuration file is located at .github/workflows/cypress-tests.yml.

- Workflow Overview
- The workflow checks out the code.
- Sets up Node.js.
- Installs dependencies.
- Generates fake data (if applicable).
- Runs the Cypress tests.
- Generates and uploads test reports and artifacts (screenshots/videos) for review.

## Test reports
Test reports are generated using Mochawesome and can be found in the cypress/reports/ directory after running the tests. You can view the reports by opening the report.html file in your browser.

To generate reports after running tests, use:
```bash
   npm run test:report
   ````
## Contributions
Contributions are welcome! If you have suggestions for improvements or features, please create an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
```bash
   git checkout -b feature/my-new-feature
   ````
3. Commit your changes:
```bash
   git commit -m "Add some feature"
   ````
4. Push to the branch:
```bash
   git push origin feature/my-new-feature
   ````
5. Create a new Pull Request.
 

## Authors
| 👤 Name        | Github                                         | LinkedIn                                                   |
|----------------|------------------------------------------------|------------------------------------------------------------|
| Sylvester Udoh | [@Sylvestre01](https://github.com/Sylvestre01) |[@SylvesterUdoh](https://www.linkedin.com/in/sylvester-udoh/) |


## Show your Support
Give a ⭐️ if you like this project!


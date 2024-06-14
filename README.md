# Project directory structure
## General layout of the test framework
<img width="282" alt="Screenshot 2024-06-07 at 9 53 45 AM" src="https://github.com/nicholas-key/leonardo_e2e/assets/172714832/8cc96310-377d-4800-ab85-bf71b6544ecd">

## Description of files / directories
1. `node_modules`: packages that are installed as part of installing (we rarely touch these files here unless really necessary):
    1. `playwright`
    2. `@playwright/test` 
    3. `@cucumber/cucumber`
    4. `ts-node` 
    5. `Typescript`
2. `features`: subdirectory that contains `cucumber BDD` in the form of `gherkin syntax`. `imageGeneration.feature` captures the scenario for **text-to-image flow**
3. `pages`: subdirectory that contains the abstraction of the pages in Leonardo.ai site. It also houses the helper module `PageObjectHelpers.ts` to allow code reusability
4. `steps`: test driver 
5. `test-results`: you can find the test reports in the form of html and json 
6. `cucumber.json`: configuration file for cucumber
7. `package.json`: runtime configuration for node
8. `tsconfig.json`: configuration file for typescript

## Scenario in gherkin 
`imageGeneration.feature` captures the text-to-image flow

```
GIVEN a logged in user
AND the Image Generation page
AND the “Leonardo Lightning XL” model
AND Alchemy turned off
AND a prompt of “a successful end to end test”
AND image dimensions of 512 x 512
AND Number of Images is 1
WHEN the generate button is clicked
THEN the generated image displays successfully
```

# Execution of the test
1. Go into the leonardo_e2e directory
```
cd leonardo_e2e
```
2. Run the test with the following command
```
npm test
```

# Interpreting the test result
## Output from the terminal
```
leonardo_e2e$ npm test                             
                                                                       
> leonardo_e2e_automated_test@1.0.0 test                                
> cucumber-js test                                                      
                                                                       
1) Scenario: Generate 1 image with Alchemy off, 512x512, "Leonardo Lightning XL" model # src/test/features/imageGeneration.feature:4             
  ✔ Given a logged in user # src/test/steps/ImageGeneration.ts:23      
  ✔ And the Image Generation page # src/test/steps/ImageGeneration.ts:37
  ? And the "Leonardo Lightning XL" model # src/test/steps/ImageGeneration.ts:44                                                                
      Pending                                                          
  - And Alchemy turned off # src/test/steps/ImageGeneration.ts:48      
  - And a prompt of "a successful end to end test" # src/test/steps/ImageGeneration.ts:52                                                       
  - And image dimensions of 512 x 512 # src/test/steps/ImageGeneration.ts:56                                                                    
  - And Number of Images is 1 # src/test/steps/ImageGeneration.ts:60   
  - When the generate button is clicked # src/test/steps/ImageGeneration.ts:64                                                                  
  - Then the generated image displays successfully # src/test/steps/ImageGeneration.ts:68                                                       
                                                                       
                                                                       
9/9 steps [============================================================]
1 scenario (1 pending)                                                  
9 steps (1 pending, 6 skipped, 2 passed)                                
0m21.970s (executing steps: 0m18.790s)
```

## Test report (in the form of html)
The test report is available in `leonardo_e2e/test-results/cucumber-report.html`
<img width="879" alt="Screenshot 2024-06-07 at 9 50 31 AM" src="https://github.com/nicholas-key/leonardo_e2e/assets/172714832/9eef3df4-6c67-432b-a4ef-39776c865df3">

# Best practices
1. `Abstraction of pages`: Login and Image Generation pages are abstracted and implemented as Page Object Models so that the test can catch up with the changes in the product (eg the frontend)
2. `Separation of CSS selectors`: the element selectors are distinctively declared as variables to allow reusability instead of hardcoded in the test logic
3. `Separation of page logic and test implementation`: The test driver calls and makes use of the methods exposed by the page objects, hence simplifies the maintenance and readability of the work

# Breakdown of the work 
I gave myself 2 hours to attempt to work on this prototype. This is the breakdown to reflect on where and how the time is spent:
1. `Requirements gathering`: Understand the requirements as presented in the document. Proceeded to implement the solution with Playwright, Cucumber and Typescript. Best practices include:
    1. implementing page object model
    2. modularized implementation (for example, separation of test implementation, helper methods and user actions)
2. `Exploratory testing`: Followed along the gherkin syntax as provided in the document. Learned that a few options such as Alchemy mode and image size of 512x512 are only available with Legacy Mode turned on in the Image Generation page
3. `Scoping down of implementation`: there are several scenarios in the Login page such as create new account and user login via credentials or identity provider. I chose to implement the authentication flow with credentials.
4. `Rinse-wash-repeat of implementation`: this is to ensure that the implementation continuously functional and not broken or failing
5. `Documentation of this work`: to aid the understanding of the implementation such as the structure of the directories and the reasoning of the choices made in the work

# Good to haves 
These are the good-to-have areas:
1. `Configuration and setup of the test environment`: capture and document the command lines that are used to install and setup the test execution
2. `Implementation of additional test utilities`: Reporting, recordings, screenshots, hooks, fixtures would be helpful to have
3. `Cross browser testing`: I chose to run the test with chromium to allow myself to achieve proof of concept. Execution of other browsers would further enhance the test coverage.
4. `Test analytics`: the generation of the test report in the form of json allows monitoring and analytics especially in the CI pipeline
5. `Test execution via tagging`: I wanted to make the test execution more robust by introducing test execution by tagging. For example, it is declared in the feature file with @legacy_mode. This approach can potentially allow selective execution of tests (especially when the number of tests grows over time and warrants the need of some kind of grouping)

# Overall outcome
Demonstration of a functional work and documentation within 2 hours time bound which included all the testing efforts and methodology required to build this framework from scratch

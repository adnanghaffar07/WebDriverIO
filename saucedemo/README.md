# Sauce End to End Testing 
### Installation
Install the dependencies and devDependencies and run the WebdriverIO tests .

1. Install node.js "https://nodejs.org/en/download/".
2. Install java jdk "https://www.oracle.com/java/technologies/javase-downloads.html".
3. Open terminal and run command on project root directory "npm intall".

```sh
$ npm install
```

### How to run the tests
1. Clone the project 
2. To run the project open terminal and on project root directory excute following command
```sh
$ cd path/proejct
$ npx wdio run wdio.conf.js
```
3. It will ask you to enter the credentials, so please enter the credentials on the command line
4. To generate report open terminal and on project root directory excute command "allure generate llure-results --clean -o allure-report".
6. To excess the report open terminal and on project root directory exccute command "allure serve". 

Please consult with Adnan Ghaffar[technisoft.adnan@gmail.com]

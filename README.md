# Task
We would like you to make a step-by-step code review of the code snippet in the link below and record a video in English. In this video, you should describe what do you need in order to run it, what is its purpose, the expected result, and external dependencies.

# Purpose
  - The purpose of the code is to grab a CSV file with suffix technologies.csv, grab the predefined columns in the testData object, get the value for each column from each row and build an object with the column name being the object property key.

# Dependencies
  In order to run the code I need to setup package.json so I define any depdencies I need and install them using a package manager.
  - Running *npm init* will ask me a bunch of questions about my package and create a package.json
  - The code itself requires one external dependecy called *csv-parse*. Once I define package.json I can run *npm install csv-parse* which will install the external dependecy needed.

# Running the code
   - The file itself exports the function getData but it wont execute it. In order for this function to be executed I will need to import the function from the executable file and execute it, e.g. index.js. The function function prefix of the csv file which needs to be passed as a perameter.
  
   We can create an index.js file an type the following in order to run it: 
   ```
    const getData = require("./parser");

    async function start() {
      const cards = await getData("version_");
      console.log('cards: ', cards);
    }

    start();
   ```

# Errors
  There is one error in the code. The function *configFileLocation* is not returning anything as the object has been defined after return. We need to open the object { after the return like the followingm:
  ```
    const configFileLocation = (name) => {
      return {
        filename: path.join(__dirname, `${name}technologies.csv`),
      };
    };
  ```

# Creating a file
  When the program runs it will look for a cvs file which it can parse. I need to create a csv file in my root directory so it can use it to parse the data. 
  For my example I will create a file called versions_technologies.csv and pass the prefix of *versions_* to the *getData* function so it can find the file. 


# Running the program
  Run the following commands to execute the script:

  npm install
  npm start

  You should see an output in the terminal, logging the details from the CSV file
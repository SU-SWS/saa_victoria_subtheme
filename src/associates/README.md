# associates

__In Terminal:__

To install necessary packages: 'npm install'

To start webpack: 'npm run react-dev'

To start server: 'npm start'

__In Browser:__

Go to http://localhost:3000/


The Stanford Associates application was built in ReactJS on the front end with the headless CMS Contentful for the “back end”. The goal here was to automate the process of adding data to the application without having to hardcode the HTML, and limit the amount of technical knowledge necessary to input data. 

After investigating different ways to add data to the application, it was decided that using Google sheets, via a service called Zapier, to transfer information to Contentful, was the best combination of software to use. It provided the fastest delivery of information and accommodated the criteria of ease of use. 

Contentful creates an API of the data provided to it, which any front end application can request and parse. Zapier was used specifically to batch import large quantities of data at a time, avoiding the mandatory input of thousands of entries, line by line. It does this using Google Sheets, detecting new and/or different information in the spreadsheet, each row creating an entry in Contentful, which is then immediately incorporated into the API and delivered to the React application.

Additional features built into the Associates application on the front end included alphabetical sorting of names, a clickable tab-style layout, auto-suggestions of names when searching for specific information by name or graduation year, and isolating the newest additions to the associates list via a checkbox toggle. Specific formatting and displaying of names, degrees, and dates was handled in the JavaScript code after acquiring the API data.

The application was optimized for deployment on any server by compiling the React code to standard HTML, JS, and CSS.

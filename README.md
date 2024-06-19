<h2>Wiki API</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

1 - git clone https://github.com/KyoukanPT/wiki-API.git

<hr>

<h3>Node Installation</h3>
 
 2 - Download and install <a href="https://nodejs.org/en/download"> Node.js </a> <br> 

<hr>

<h3>Project Folder Directory (Terminal)</h3>

3 - npm install<br>
4 - node app.js

<hr>

<h3>How to use this App locally (In Your Computer)</h3>
- Open a new terminal tab and run the following command: <strong>mongod</strong><br>
- After you successfully connect to MongoDB (Step 4), open another new terminal tab and run the following command: <strong>mongo</strong><br>
- Test API with Postman (see further down below)

<hr>

<h3>MongoDB Documentation</h3>
- Installation instructions - <strong> https://docs.mongodb.com/manual/administration/install-community/ </strong> <br>
- How to use mongo shell to query and manipulate the data in your database - <strong>https://docs.mongodb.com/manual/crud/</strong><br><br>

<hr>

<h3>Populate Database</h3>

```
{
    "title" : "REST",
    "content" : "REST is short for REpresentational State Transfer. IIt's an architectural style for designing APIs."
}


{
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}


{
    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}


{
    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}

```

<hr>

<h3>Test API with Postman(After populating the database)</h3>
- In case you need to install Postman, go to this website - https://www.postman.com/downloads/ <br>
- Select or Create your Workspace - https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/
<br>
<br>
<strong>Testing GET Requests</strong> <br>
<ol>
    <li>Make a collection in Postman — To make a collection in Postman, click on New -> Collection -> CollectionDemo(Any Collection Name you wish) -> Create</li>
    <li>Make a Request — To make a request, click on New -> Request -> GetUser(Any request name you wish) -> Select a collection or folder to save to -> Save to New Collection</li>
    <li>In the “Enter Request URL” text box type : localhost:3000/articles/</li>
    <li>Click on the “Send” Button</li>
    <li>You should be able to see the below response in the Body section</li>
</ol>
<strong>Testing POST Requests</strong> <br>
<ol>
    <li>From the Dropdown, select POST</li>
    <li>In the “Enter Request URL” text box, type : localhost:3000/articles/</li>
    <li>Click on the Body Tab and select the “x-www-form-urlencoded” radio button</li>
    <li>In the Key Colum, add "title" and "content". In the Value Column, add the title and content that you want to insert in your database.</li>
    <li>Click on the "Send" button</li>
    <li>Make a GET Request to : localhost:3000/articles/</li>
    <li>After clicking on the "Send" Button, you should be able to see your post request added to your database, in the Body section</li>
</ol>

<strong>Similarly you can try your hands with PUT, PATCH, DELETE</strong>

<strong>You can check the function of each HTTP Verb here: https://bit.ly/3f844fE</strong>

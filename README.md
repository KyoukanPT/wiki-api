<h2>Wiki API</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

1 - git clone https://github.com/KyoukanPT/wiki-API.git

<hr>

<h3>Project Folder Directory (Terminal)</h3>

2 - npm install<br>
3 - node app.js

<hr>

<h3>How to use this App locally (In Your Computer)</h3>
4 - Open a new terminal tab and run the following command: <strong>mongod</strong><br>
5 - After you successfully connect to MongoDB (Step 4), open another new terminal tab and run the following command: <strong>mongo</strong><br><br>

<h3>MongoDB Documentation</h3>
- Installation instructions - <strong> https://docs.mongodb.com/manual/administration/install-community/ </strong> <br>
- How to use mongo shell to query and manipulate the data in your database - <strong>https://docs.mongodb.com/manual/crud/</strong><br><br>

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


<h3>Test API (After populating the database)</h3>

#  Reddit Feed - Shachar Yaron
I implemented both the REST API and UI.<br>
* The REST API was implemented using Node.js and Express.js <br>
* The UI was implemented using React.js.<br>
<br>
You can check out the deployed app at: https://reddit-shachar-yaron.herokuapp.com/
<br>

or make a request to the REST API:
```
/GET https://reddit-server-shachar-yaron.herokuapp.com/api/v1/subreddits/{subreddit}/top?limit=10
```

## Running locallly

to start the server on port 5000 run:
```
$ cd server
$ npm install
$ npm start
```
to start the UI server on port 3000 run (open another terminal):
```
$ cd web-client
$ npm install
$ npm start
```
You should now be able to see the app on:
```
http://localhost:3000/
```
or to call the server:
```
/GET http://localhost:5000/api/v1/subreddits/news/top
```

# App Overview
1. An HTTP request is sent from the client to the server.<br>
2. The request is received by the server and goes through some middlewares (loggers and error handlers) and then proceeds to the router and to the controller.<br>
3. The controller calls the subredditsService (HTTP/Express context ends here - the service contains only business logic).<br>
4. The service calls Reddit API.<br>
5. The service parses the response.<br>
6. An HTTP response is sent to the client.<br>

Diagram to illustrate:<br>
<kbd>
  <img width=860px src="*image-for-design-diagram-here*">
</kbd>  

<br>
The diagram is also available at: <*diagram-url*>.
<br>

# Tests 
to run the server tests run:
```
$ cd server
$ npm test
```

# License 
This project is licensed under the Apache-2.0 License

This project is yet another Angular Seed/Template project. It follows the best practices defined in [] ()


Instructions for Setting up and Building This Project
Note: You already have installed Node.js, a Git client, Bower, and Grunt cli

1) Open a Node command prompt in the root directory of this project
2) type the following command (without quotes) 'npm install'
   Note: sometimes you might see errors during the install process. Try running the command again. 
3) type the follow command (without quote) 'bower install'

The 'npm install' command will download a bunch of libraries need during the build process. The 'bower install' command
will download all the 3rd part libraries the app needs to run (Angular, Bootstrap, Lodash, etc). After running these 2 
commmands, the project should be ready to build.

4) In the root directory of the project, open a Node command prompt (or continue using the prompt from the steps above)
5) in the terminal, type 'grunt build'

The 'grunt build' command will kick off the build process, which does a bunch of stuff: runs jshint, bundles all js files
into a single js file, minifies all files, etc. The result of the build is a new directory, called build, in the root of 
the project. 

This project also comes with its own Node-based webserver, called Express. Express will act as the webserver for this
project, serving all the html, css, and js files. Express will also act as a proxy server. it listens for requests from 
the app, and when it sees a request for a resource with /db in the url, it knows this request needs to be passed to 
a 3rd party server. The main purpose of this proxy server is to avoid CORS issues. 

NOTE: The server is running on port 80. If you need to run the server on a different port on your local machine
open the server\express.js file. You will see the following line: app.listen(80). Change the 80 to a different number,
like 8080, 9000, etc.

To start the express server, you can perform one of the following steps

6) While still at a Node command prompt in the root directory of the project, type (without quotes):
   'node server\express'  (note on mac you need to type: sudo node server/express if you are using port 80)
7) Or, cd to the server directory, and type 'node express'

After starting the server, you should see a message in your console "Listening on port XX". The server is now running.

8) In your favorite browser, open the following URL to visit the home page of the app:
    http://localhost/#/main
## Overview
This project is yet another Angular Seed/Template project. It follows the best practices defined in my [Angular Best Practices Guide] (https://github.com/jmcunningham/angularjs-styleguide). There is a little more detail about the origins of that guide on my [blog] (http://jmcunningham.net/2014/08/18/yet-another-opinionated-angularjs-best-practices-guide/). While reading about best practices is nice, I think it helps to see how those Best Practices look in a real project. To create this seed, I started by downloading [ngBoilerplate] (https://github.com/ngbp/ngbp). I want to give credit to that project, though I have changed so much that you won't recognize many similarities (some of the build tasks and LESS stuff is still intact from ngBoilerplate).

The app itself is basic and not "pretty". It consists of 2 pages. The first page is a listing of 3 locations. Each location has a button that you can click to go to another page. This second page displays more details on the selected location. Styling is almost non-existent, though there are empty LESS files in place (to let you know where your LESS files should live). The 2nd page also has a button to open a modal, just as an example of how a component (directive) can contain extra functionality (notice that the modal is defined as a subdirectory of the directive, since the modal is meant to be used only by the directive).

## Features
- An example app following many of the best practices from [Angular Best Practices Guide] (https://github.com/jmcunningham/angularjs-styleguide)
- Built-in Express server for serving the app during development.
- An optional proxy server for CORS functionality. This allows you to serve the app from your local machine, and also make requests to a 3rd party server if needed.
- Includes services, directives, Angular UI Bootstrap modal, "fake" server call using promises, a loading bar displays during calls to the server.
- Uses AngularJS, Angular UI Router, Angular UI Bootstrap, Angular Loading Bar, Grunt, Browserify, ngAnnotate, html2js

# TODO
- Add watchify and rewrite the "delta" grunt task
- Add unit tests to show how to integrate test with Browserify
- Add styling to make the app a little more "pretty"
- Remove Bower dependency and use npm for all package management

##Instructions for Setting up and Building This Project
Note: You already have installed Node.js, a Git client (needed by Bower), Bower, and Grunt cli

- Download/clone this repo.
- Open a Node command prompt in the root directory of the project
- type the following command (without quotes) 'npm install'
   Note: sometimes you might see errors during the install process. Try running the command again. 
- type the follow command (without quote) 'bower install'

The 'npm install' command will download a bunch of libraries need during the build process. The 'bower install' command
will download all the 3rd part libraries the app needs to run (Angular, Bootstrap, Lodash, etc). After running these 2 
commmands, the project should be ready to build.

- In the root directory of the project, open a Node command prompt (or continue using the prompt from the steps above)
- in the terminal, type 'grunt build'

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

- While still at a Node command prompt in the root directory of the project, type (without quotes):
   'node server\express'  (note on mac you need to type: sudo node server/express if you are using port 80)
- Or, cd to the server directory, and type 'node express'

After starting the server, you should see a message in your console "Listening on port XX". The server is now running.

- In your favorite browser, open the following URL to visit the home page of the app:
    http://localhost/#/main

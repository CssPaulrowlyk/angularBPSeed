## Overview
This project is yet another Angular Seed/Template project. It follows the best practices defined in my [Angular Best Practices Guide] (https://github.com/jmcunningham/angularjs-styleguide). There is a little more detail about the origins of that guide on my [blog] (http://jmcunningham.net/2014/08/18/yet-another-opinionated-angularjs-best-practices-guide/). While reading about best practices is nice, I think it helps to see how those Best Practices look in a real project. To create this seed, I started by downloading [ngBoilerplate] (https://github.com/ngbp/ngbp). I want to give credit to that project, though I have changed so much that you won't recognize many similarities (some of the build tasks and LESS stuff is still intact from ngBoilerplate).

The new version of this seed project is a 3 view SPA. The home view prompts for a zip code. If the zip code is valid,
you are taken to a view displaying the current conditions for that location. There is also a link to take you to the
forecast page, that displays a 4 day forecast. Not much has been done in the way of styling, other than to get the data
on the page in a fairly simple fashion. Weather is provided by [Weather Underground](http://www.wunderground.com). The app contains my key (for now),
which limits the app to 500 requests per hour.

The app doesn't have much in the way of error handling, as this isn't met to be a full fledged app (yet). Right now, it just
supports the "happy path", assuming the user enters a valid zip code, goes to the current conditions page, then goes to
the forecast page.

I've also added the 6to5ify plugin for Browserify. This enable you to use ES6 in this seed project. I've used let and const
in this app, to prove that 6to5ify is working. I plan to add more ES6 code in the future.

## Features
- An example app following many of the best practices from [Angular Best Practices Guide] (https://github.com/jmcunningham/angularjs-styleguide)
- Uses let and const to prove the app supports ES6 code, via 6to5ify.
- Compile the html template to javascript, and store them in the cache.
- Modules based on CommonJS
- Built-in Express server for serving the app during development.
- An optional proxy server for CORS functionality. This allows you to serve the app from your local machine, and also make requests to a 3rd party server if needed.
- Includes services, directives, a loading bar displays during calls to the server.
- Uses AngularJS, Angular UI Bootstrap, Angular Loading Bar, Grunt, Browserify, 6to5ify, ngAnnotate, html2js

## TODO
- Add more ES6 code
- Add error handling logic, as there is pretty much none at the moment.
- Add watchify and rewrite the "delta" grunt task
- Add unit tests to show how to integrate tests with Browserify
- Add styling to make the app a little more "pretty"
- Remove Bower dependency and use npm for all package management (undecided on this)

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

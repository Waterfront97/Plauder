# Plauder

[![Build Status](https://travis-ci.org/Waterfront97/Plauder.svg?branch=develop)](https://travis-ci.org/Waterfront97/Plauder)

Plauder is a german webchat based on Angular 6, NodeJS and Socket.io.

## Features

* NodeJS Webserver
* Desktop Notifications
* Silent Favicon Notifications
* Send Images via Copy & Paste
* URL Parser

## Installation

The Client folder contains the Angular webclient project.
The Server folder contains the NodeJS webserver project with socket.io.

1. Run `npm install` in the Client and Server folder.
2. Run `ng build --prod` inside the Client folder to build the webclient.
3. Copy all files from `Client/dist/Client/*` to `Server/www/`
4. Start the webserver `node Server/server.js`

## Plauder Update Script (Linux Bash)

You can use the `updatePlauder.sh` script to automate the app deployment.

Make sure you cloned the repository and have a working systemd unit ([example](https://gist.github.com/Waterfront97/178fdc5564d0a4dae96190d9111c4e0c)).

## License

Licensed under the MIT License.

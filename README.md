# Image Server

This example was part of a programming test.

## Objectives:
 Create an endpoint with the following requirements:
 * Download the images from a given JSON file
 * Rename them as photo_#.png, where # is a sequencial number
 * Zip them in a file
 * Make it available for download

## How to run this project
 It is recommended Node v12.13.0.
 
 Install all the dependencies
 `npm init` or `yarn`

 Run the file main.js, make sure the port 3005 is available
 `npm start` or `yarn start`
 
 To specify a port use:
 `PORT=<port> node main.js`

 In order to request the zip file, make a `GET` request to `/mission/images`
 
 A file called mission_01.zip will be downloaded containing all 10 pictures from JSON file.

## Alternative run using Gitpod
  Access the URL: gitpod.io/#https://github.com/dhaubert/serve-zipped-images
  The server will be automatically started.  


/*
 * Read the comments to understand why this works - and add console.log statements
 * too. It's important you understand how this works, so take as much time as you need!
 */

const http = require('http');
const fs   = require('fs');

//Using the new arrow notation we introduced in the video to make the code a bit shorter and cleaner
http.createServer( (req, res) => {

    /* If you paste this code into your own file it won't work.
       You need to change the directory passed to readFile
       to just 'index.html' if you move it to the file up a
       folder */
    fs.readFile('../index.html', (err, data) => {

        /* If there's an error we just throw it and crash the application. In a real web server we would handle
           it differently, as we'll see in the projects at the end of the course */
        if (err) throw err;

        //We return the file data to the client
        res.end(data);

    });

}).listen(8080);
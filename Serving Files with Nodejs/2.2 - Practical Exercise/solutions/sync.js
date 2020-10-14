/*
 * Read the comments to understand why this works - and add console.log statements
 * too. It's important you understand how this works, so take as much time as you need!
 */

const http = require('http');
const fs   = require('fs');

//Using the new arrow notation we introduced in the video to make the code a bit shorter and cleaner
http.createServer( (req, res) => {

    /*
       We read the file and return it to the client.
       If you paste this code into your own file it won't work.
       You need to change the directory passed to readFileSync
       to just 'index.html' if you move it to the file up a
       folder
     */
    var data = fs.readFileSync("../index.html");
    res.end(data);

}).listen(8080);
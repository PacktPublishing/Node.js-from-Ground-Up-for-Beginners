/*

    Don't forget you need to install express and helmet for this app to work. I've already added them to the package
    as dependencies so you can simply run 'npm install' in this directory and they will both automatically install.

    You Should:

    - Serve index.html on the'/' route

    - Serve all files in the 'assets' folder on the '/assets' path using express static functionality.

    - Log the time the request was made for ALL requests using express middleware

    - Log a message such as 'asset being served' for any files server out of the 'assets' directory.
      This message should be printed AFTER the time is logged out


    Hints:

      - Don't forget to call next() at the end of middleware functions!

      - Don't forget to use helmet() for extra security

      - Use res.sendFile() to easily send a file inside a route. All paths to res.sendFile() must be absolute. This
        can be accomplished by using __dirname + '/filename' as the parameter to res.sendFile();


    Good Luck

    - Adam

*/
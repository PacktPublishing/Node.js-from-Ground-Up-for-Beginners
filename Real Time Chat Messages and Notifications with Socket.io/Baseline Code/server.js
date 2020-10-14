/*
  What you should do:

    - Serve index.html as normal using express
    - Serve files in 'assets' on the /assets url using express.static
    - Whenever a new user joins the room you should send them the previous chat history
    - You will receive new messages from clients under the 'message' event that will come with two parameters,
      the name of the person who sent the message and the message itself
    - You should send this message on to all other clients using the same 'message' event and sending along the name
      and message as two seperate parameters

   Hints:

    - In order to make sure socket.io is listening you should do:

      var app = express();
      var httpServer = http.Server(app);

      httpServer.listen(port);

      instead of the usual app.listen();

    - Use socket.broadcast.emit() to send a message to all other sockets but the current one.

    - Use socket.emit() to send a mesasge to the current socket only (useful for sending the previous chat history)
      (When sending the chat history you should send each previous message as a seperate event, in chronological order)

    Good Luck!

    - Adam
 */
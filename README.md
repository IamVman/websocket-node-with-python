# Websocket broadcast (NodeJS with Python)

This is a simple echo broadcast server-client app based on NodeJS and Python 3. The server is essentially built on NodeJS making it easy for production deployment. The client can be any app which can handle WSS.

Currently two clients are provided. One based on NodeJS and another based on Python. You can find them in `/ws_client` and `/ws_server` folders respectively.

## Steps to run
1. Resolve the dependecies for NodeJS and Python
2. Goto ws_server folder and run `node server.js`
3. Once the server is started, goto ws_client folder and run `python client.py`
4. check client-server communication by giving some text in terminal and receiving the same back.
5. That's it !

Feel free to edit the code and modify according to your requirements.

> Best Regards,
> Vivek Mano


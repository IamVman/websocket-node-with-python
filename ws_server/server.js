const web_socket = require('ws')
const wss = new web_socket.Server({port:8000})

wss.on('connection', ws=>{
    console.log("connection inbound")
    rec = ""
    ws.on('message', message =>{
        console.log("we received : %s \n",message)
        ws.send("Received \""+message+"\"")
    })
})

console.log("WS listening on 8000")

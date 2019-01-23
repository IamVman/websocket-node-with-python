const WebSocket = require('ws');
 
const ws = new WebSocket('ws://localhost:8000');
 
ws.on('open', () => {
  ws.send('something');
});
 
ws.on('message', data => {
  console.log(data);
});
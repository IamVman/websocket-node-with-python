from websocket import create_connection

def _send(msg):
    ws = create_connection("ws://localhost:8000")
    ws.send(msg)
    return ws.recv() 

# print(_send("hello from vman"))
# print(_send("2nd test"))

if __name__ == "__main__":
    while(1):
        inp = input("Type msg to send: ")
        print("From server: ",_send(inp),"\n")
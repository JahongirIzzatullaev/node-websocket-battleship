import { httpServer } from "./src/http_server/index.js";
import { WebSocketServer } from 'ws';
import { handleWebSocketConnection } from './src/ws_handlers/connection.js';

const HTTP_PORT = 3000;

httpServer.listen(HTTP_PORT, () => {
    console.log(`HTTP server is listening on http://localhost:${HTTP_PORT}`);
});

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws, req) => {
    handleWebSocketConnection(ws, req);
});

import { handleMessage } from './index.js';
import { log, errorLog } from '../utils/logger.js';

export const handleWebSocketConnection = (ws, req) => {
    const clientAddress = req.socket.remoteAddress;
    log(`New WebSocket connection from ${clientAddress}`);

    ws.send(JSON.stringify({ message: 'Welcome to the WebSocket server!' }));

    ws.on('message', (message) => {
        log(`Received message from ${clientAddress}: ${message}`);
        handleMessage(ws, message);
    });

    ws.on('close', () => {
        log(`WebSocket connection from ${clientAddress} closed`);
    });

    ws.on('error', (error) => {
        errorLog(`WebSocket error from ${clientAddress}: ${error.message}`);
    });
};

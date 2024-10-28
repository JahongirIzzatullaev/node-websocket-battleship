import { log } from "../utils/logger.js";

export const handlePing = (ws) => {
    log('Handling ping request');

    ws.send(JSON.stringify({
        type: 'pong',
        timestamp: new Date().toISOString()
    }));
};

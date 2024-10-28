import { errorLog } from "./logger.js";

export const sendResponse = (ws, originalMessage, type, data) => {
    try {
        const response = {
            ...originalMessage,
            type,
            data: JSON.stringify(data),
            id: 0
        };
        ws.send(JSON.stringify(response));
    } catch (error) {
        errorLog('Error sending response:', error);
    }
};

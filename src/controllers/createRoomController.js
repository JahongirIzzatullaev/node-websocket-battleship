import { log, errorLog } from "../utils/logger.js";

export const handleCreateRoom = (ws, message) => {
    try {
        const data = JSON.parse(message.data);
        log('Handling create_room:', data);
    } catch (error) {
        errorLog('Error handling create_room:', error);
    }
};

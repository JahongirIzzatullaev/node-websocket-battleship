import { log, errorLog } from "../utils/logger.js";

export const handleAddUserToRoom = (ws, message) => {
    try {
        const data = JSON.parse(message.data);
        log('Handling add_user_to_room:', data);
    } catch (error) {
        errorLog('Error handling add_user_to_room:', error);
    }
};

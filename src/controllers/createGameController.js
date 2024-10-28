import { log, errorLog } from "../utils/logger.js";
import {sendResponse} from "../utils/wsUtils.js";

export const handleCreateGame = (ws, message) => {
    try {
        const data = JSON.parse(message.data);
        log('Handling create_game:', data);

        const responseData = {
            idGame: 1,
            idPlayer: 0
        };

        sendResponse(ws, message, 'create_game', responseData);
    } catch (error) {
        errorLog('Error handling create_game:', error);
    }
};

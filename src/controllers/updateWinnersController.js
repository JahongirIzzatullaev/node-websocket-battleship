import { log, errorLog } from "../utils/logger.js";
import {sendResponse} from "../utils/wsUtils.js";

export const handleUpdateWinners = (ws, message) => {
    try {
        const data = JSON.parse(message.data);
        log('Handling update_winners:', data);

        const responseData = [
            {
                name: data.name,
                wins: 0
            }
        ];

        sendResponse(ws, message, 'update_winners', responseData);
    } catch (error) {
        errorLog('Error handling update_winners: ', error);
    }
};

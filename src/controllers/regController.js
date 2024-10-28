import { log, errorLog } from "../utils/logger.js";
import { sendResponse } from "../utils/wsUtils.js";

export const handleRegistration = (ws, message) => {
    try {
        const data = JSON.parse(message.data);
        log('Handling registration:', data);

        const responseData = {
            name: data.name,
            index: 1,
            error: false,
            errorText: 'Registration successful'
        };

        sendResponse(ws, message, 'reg', responseData);
    } catch (error) {
        errorLog('Error handling registration:', error);
    }
};

import { handleRegistration } from "../controllers/regController.js";
import { handleUpdateWinners } from "../controllers/updateWinnersController.js";
import { handleCreateRoom } from "../controllers/createRoomController.js";
import { handleAddUserToRoom } from "../controllers/addUserToRoomController.js";
import { handleCreateGame } from "../controllers/createGameController.js";
import { handlePing } from "../controllers/pingController.js";
import { warnLog, errorLog } from "../utils/logger.js";

const handlers = {
    reg: handleRegistration,
    update_winners: handleUpdateWinners,
    create_room: handleCreateRoom,
    add_user_to_room: handleAddUserToRoom,
    create_game: handleCreateGame,
    ping: handlePing
};

export const handleMessage = (ws, message) => {
    try {
        const parsedMessage = JSON.parse(message);
        const handler = handlers[parsedMessage.type];

        if (handler) {
            handler(ws, parsedMessage);
        } else {
            warnLog(`Unknown message type: ${parsedMessage.type}`);
        }
    } catch (error) {
        errorLog('Error processing message:', error);
    }
};

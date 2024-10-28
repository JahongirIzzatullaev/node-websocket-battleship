export const log = (message) => {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
};

export const errorLog = (error) => {
    console.error(`[ERROR] ${new Date().toISOString()}:`, error);
};

export const warnLog = (error) => {
    console.warn(`[WARN] ${new Date().toISOString()}:`, error);
};

const logging = (): string => {
    return new Date().toISOString();
};

const infoMessage = (namespace: string, message: string, object?: any) => {
    if (object) console.log(`[${logging()}] [INFO] [${namespace}] [${message}]`, object);
    else console.log(`[${logging()}] [INFO] [${namespace}] [${message}]`);
};

const errorMessage = (namespace: string, message: string, object?: any) => {
    if (object) console.error(`[${logging()}] [ERROR] [${namespace}] [${message}]`, object);
    else console.error(`[${logging()}] [ERROR] [${namespace}] [${message}]`);
};

const warnMessage = (namespace: string, message: string, object?: any) => {
    if (object) console.warn(`[${logging()}] [WARN] [${namespace}] [${message}]`, object);
    else console.warn(`[${logging()}] [WARN] [${namespace}] [${message}]`);
};

const debugMessage = (namespace: string, message: string, object?: any) => {
    if (object) console.debug(`[${logging()}] [DEBUG] [${namespace}] [${message}]`, object);
    else console.debug(`[${logging()}] [DEBUG] [${namespace}] [${message}]`);
};

export default {
    infoMessage,
    errorMessage,
    warnMessage,
    debugMessage
};

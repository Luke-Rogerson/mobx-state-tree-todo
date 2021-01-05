// Workaround to fix uuid error - https://github.com/uuidjs/uuid#getrandomvalues-not-supported
export const genId = (): string =>
    `abc${String(Math.floor(Math.random() * 100000))}`

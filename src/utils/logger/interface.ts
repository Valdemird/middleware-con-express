export interface WriteFunc {
    (text: string): void;
}

export interface Logger {
    info: WriteFunc;
    error: WriteFunc;
}

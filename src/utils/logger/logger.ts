import Winston from 'winston';
import { Logger, WriteFunc } from './interface';

const winstonLogger = Winston.createLogger({
    transports: [new Winston.transports.Console()],
});

const info: WriteFunc = (text: string): void => {
    winstonLogger.info(text);
};
const error: WriteFunc = (text: string): void => {
    winstonLogger.error(text);
};

export const logger: Logger = {
    info,
    error,
};

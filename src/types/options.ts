export interface Options {
    connection: ConnectionOptions;
    logging: boolean;
}

export interface ConnectionOptions {
    hostname?: string;
    headers?: { [key: string]: string };
}
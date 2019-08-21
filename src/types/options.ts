export interface Options {
    connection: ConnectionOptions;
}

export interface ConnectionOptions {
    hostname: string;
    headers: { [key: string]: string };
}
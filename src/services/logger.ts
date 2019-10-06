const jsome = require('jsome');

export class LoggerService {
    static log(data: string): void {
        console.log(data);
    }
    
    static logJSON(data: object) {
        jsome(data);
    }
}
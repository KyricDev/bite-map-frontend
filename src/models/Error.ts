export class ErrorModel {
    message: string;

    constructor(data: any) {
        this.message = data.message;
    }
}
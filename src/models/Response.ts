export class ResponseModel {
    data: Object;
    isError: boolean;

    constructor(data: any) {
        this.data = data.data;
        this.isError = data.isError;
    }
}
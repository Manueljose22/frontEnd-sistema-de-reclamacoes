

export class ApiException extends Error {

    public readonly message = ''

    construtor(message: string){
        super()
        this.message = message;
    }
}


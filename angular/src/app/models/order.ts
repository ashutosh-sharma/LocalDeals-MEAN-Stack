export class order{
    public userEmail: string;
    public productId: string;
    public productName: string;

    constructor(userEmail, productId, productName){
        this.userEmail = userEmail;
        this.productId = productId;
        this.productName = productName;
    }
}

export interface orderInterface{
    userEmail: string;
    productId: string;
    productName: string;
}
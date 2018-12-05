export class Item{
    public title: string;
    public price: number;
    public categoryId: number;
    public isAvail: boolean;

    constructor(titleValue, priceValue, categoryIdValue, isAvailValue?){
        this.title = titleValue;
        this.price = priceValue;
        this.categoryId = categoryIdValue;
        this.isAvail = isAvailValue;
    }
}

export interface itemInterface{
    _id?: string;
    title: string;
    price: number;
    categoryId: number;
    isAvail?: boolean;
}
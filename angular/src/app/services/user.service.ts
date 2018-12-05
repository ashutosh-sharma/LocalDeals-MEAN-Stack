import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoryInterface } from '../models/category';
import { itemInterface } from '../models/item';
import { orderInterface } from '../models/order';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getCategoryListFromDB() {
    console.log("getCategorylist request fired!");
    return this.http.get<categoryInterface[]>(`http://localhost:1354/shopkeeper/getCategory`);
  }

  public getItemListFromDB(category : categoryInterface) {
    console.log(`getItem request fired!`);
    return this.http.get<itemInterface[]>(`http://localhost:1354/shopkeeper/getItem/${category.id}`);
  }
}

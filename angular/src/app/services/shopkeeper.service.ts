import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoryInterface } from '../models/category';
import { itemInterface } from '../models/item';

@Injectable()
export class ShopkeeperService {

  constructor(private http: HttpClient) { }

  public addItem(item){
    return this.http.post(`http://localhost:1354/shopkeeper/addItem`, item);
  }
  
  public updateItem(item : itemInterface){
    return this.http.put(`http://localhost:1354/shopkeeper/updateItem/${item._id}`, item);
  }

  public deleteItem(item: itemInterface){
    console.log(item);
    return this.http.delete(`http://localhost:1354/shopkeeper/deleteItem/${item._id}`);
  }
}

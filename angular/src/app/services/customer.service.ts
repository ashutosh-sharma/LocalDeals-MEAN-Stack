import { Injectable } from '@angular/core';
import { orderInterface } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  public addToCart(order: orderInterface){
    console.log(`Ordered Item: ${JSON.stringify(order)}`);
    return this.http.post(`http://localhost:1354/customer/addToCart`, order);
  }

  public getCart(){
    console.log(`get cart request was fired!`);
    return this.http.get(`http://localhost:1354/customer/getCart`);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import { itemInterface } from '../models/item';
import { categoryInterface, category } from '../models/category';
import {orderInterface, order} from '../models/order';
import { HtmlParser } from '@angular/compiler';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})

export class DashboardContent implements OnInit {

  @Input() itemList:itemInterface[];
  @Input() tableHeader;
  @Input() parentComponent;

  private tableTitle = "Item-Title";
  private tablePrice = "Item-Price";
  private tableIsAvail = "Item-Availibility";

  // boolean variable to show/hide edit form for an item
  private displayItemForm;
  private itemToEdit;
  private options;
  private toggleButton;

  constructor(private shopkeeperService: ShopkeeperService, private customerService: CustomerService) {
  }

  ngOnInit(){
    this.displayItemForm = false;
    console.log(`Parent compoent: ${this.parentComponent}, hence loading options accordingly.`);

    if(this.parentComponent === "Customer") {
      this.toggleButton = true;
    }

    if(this.parentComponent === "Shopkeeper"){
      this.toggleButton = false;
    }
  }

  public editItem(item: itemInterface){
    this.itemToEdit = JSON.parse(JSON.stringify(item));
    this.displayItemForm = !this.displayItemForm;
  }

  public deleteItem(item: itemInterface){
    this.shopkeeperService.deleteItem(item).subscribe();
    this.ngOnInit();
  }

  // Only for one user, not maintanin the session
  public addToCart(item: itemInterface){
    console.log(`Sending orderItem to service.`);
    var order: orderInterface={
      // static email coz session is not maintained
      "userEmail" : "email@gmail.com",
      "productId" : item._id,
      "productName" : item.title
    }
    this.customerService.addToCart(order).subscribe();
  }

  public refreshTable(msg){
    this.displayItemForm = false;
    this.ngOnInit();
    console.log(msg);
  }
}

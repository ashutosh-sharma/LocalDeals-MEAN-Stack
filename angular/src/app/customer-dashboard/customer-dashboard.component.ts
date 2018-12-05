import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import { categoryInterface } from '../models/category';
import { itemInterface } from '../models/item';
import { CustomerService } from '../services/customer.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  private categoryList;
  private displayList = false;
  private displayCover = true;

  private itemListFromParent:itemInterface[];
  private categoryHeader;
  private componentName;
  private cartItems;
  // to show cart when link in the dashboards is clicked
  private showCart;

  constructor(private shopkeeperService: ShopkeeperService, private userService: UserService, private customerService: CustomerService) { }

  ngOnInit() {
    this.componentName = "Customer";
    this.showCart = false;
    this.userService.getCategoryListFromDB().subscribe((response)=> {
      console.log(`The response from backend is ${response}`);
      this.categoryList = response;
    });
  }

  public getCategoryItems(category: categoryInterface) {
    console.log(`Calling child method for getting items from CustomerDashboardComponent: ${category}`);
    this.categoryHeader = category.title;
    this.userService.getItemListFromDB(category).subscribe((response) => {
      this.itemListFromParent = response;
    })
    this.showCart = false;
    this.displayList = true;
    this.displayCover = false;
  }

  public seeCart(){
    this.displayList = false;
    this.displayCover = false;
    this.customerService.getCart().subscribe((response) => {
      this.cartItems = response;
    });
    this.showCart = true;
  }
}

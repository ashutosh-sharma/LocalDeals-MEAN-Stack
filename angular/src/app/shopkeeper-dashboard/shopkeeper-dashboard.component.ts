import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import { categoryInterface } from '../models/category';
import { itemInterface } from '../models/item';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-shopkeeper-dashboard',
  templateUrl: './shopkeeper-dashboard.component.html',
  styleUrls: ['./shopkeeper-dashboard.component.css']
})
export class ShopkeeperDashboardComponent implements OnInit {

  // to store data from database
  private categoryList;
  private displayItems = false;
  private itemListFromParent:itemInterface[];
  private categoryHeader;
  private componentName;

  constructor(private shopkeeperService: ShopkeeperService, private userService: UserService) {
  }

  ngOnInit() {
    this.componentName = "Shopkeeper";
    this.userService.getCategoryListFromDB().subscribe((response)=> {
      console.log(`The response from backend is ${response}`);
      this.categoryList = response;
    });
  }

  public getCategoryItems(category: categoryInterface) {
    console.log(`Calling child method for getting items from ShopkeeperDashboard: ${category}`);
    this.categoryHeader = category.title;
    this.userService.getItemListFromDB(category).subscribe((response) => {
      this.itemListFromParent = response;
    })
    this.displayItems = true;
  }

}

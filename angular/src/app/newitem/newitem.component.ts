import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import { itemInterface } from '../models/item';
import { category } from '../models/category';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})

export class NewitemComponent implements OnInit {

  constructor(private shopkeeperService: ShopkeeperService) { }

  ngOnInit() {
  }
  // private id = 0; // fetching this id from the last inserted record from itemTable

  public addItem(form){
    console.log(`Adding new Item: ${JSON.stringify(form.itemName.value)}`);

    var item : itemInterface = {
      "title" : form.itemName.value,
      "price" : form.itemPrice.value,
      "isAvail" : form.isAvail.value,
      "categoryId" : form.categoryId.options[form.categoryId.selectedIndex].value,
    };

    this.shopkeeperService.addItem(item).subscribe(Res=>{
      console.log(Res);
    });
  }
}

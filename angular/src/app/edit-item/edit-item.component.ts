import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import { itemInterface } from '../models/item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @Input() selectedItem;

  @Output() updatedEvent = new EventEmitter();

  constructor(private shopkeeperService: ShopkeeperService) {
  }

  ngOnInit() {
    console.log(`Selected Item on edit form component: ${this.selectedItem}`);
    console.log(`Category Id of item to edit: ${this.selectedItem.categoryId}`);
  }

  public updateItem(form){
    var item: itemInterface={
      "_id" : this.selectedItem._id,
      "title" : form.itemTitle.value,
      "price" : form.itemPrice.value,
      "isAvail" : form.itemAvail.value,
      "categoryId" : form.itemCategory.value
    }

    this.shopkeeperService.updateItem(item).subscribe(Response=>{
      console.log(Response);
    })

    this.updatedEvent.emit('The table has been updated.');
  }
}

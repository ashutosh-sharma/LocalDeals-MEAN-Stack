import { Component, OnInit, Input } from '@angular/core';
import { orderInterface } from '../models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() cartItems:orderInterface[];
  private  tableHeaderEmail = "User Email";
  private tableHeaderProductID = "Prduct Id";
  private tableHeaderProductName = "Product Name";
  private tabelHeaderOptions = "Options";
  
  constructor() { }

  ngOnInit() {
    console.log(`Items fetched from dtabase: ${(this.cartItems)}`);
  }

}
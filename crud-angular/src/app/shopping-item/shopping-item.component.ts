import { Component, OnInit } from '@angular/core';
import {Item} from '../item'
import {DataService} from '../data.service'
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit {

  shoppingItemList: Item[]=[]
  selectedItem:Item
  toggleForm:boolean=false

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.dataService.getShoppingItems()
    .subscribe((items: Item[]) => {
      this.shoppingItemList = items;    
    });
  }

  addItem(form){
    let newItem:Item={
      itemName:form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemPrice: form.value.itemPrice,
      itemBought: false
    }
    this.dataService.addShoppingItems(newItem)
    .subscribe(item => {
      console.log(item)
      this.getItem()
    });
  }

  deleteItem(id){
    this.dataService.deleteShoppingItem(id)
    .subscribe(item => console.log(item))    
    this.getItem()
  }

  showEditForm(item){
    this.selectedItem =item
    this.toggleForm=true
  }

  editItem(form){
    let newItem:Item={
      _id:this.selectedItem._id,
      itemName:form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemPrice: form.value.itemPrice,
      itemBought: this.selectedItem.itemBought
    }
    this.dataService.updateShoppingItem(newItem)
    .subscribe(item => {
      console.log(item)
      this.getItem()
    });
    this.toggleForm=false
  }

  updateItemCheckBox(item){
    item.itemBought=!item.itemBought
    this.dataService.updateShoppingItem(item)
    .subscribe(item => {
      console.log(item)
      this.getItem()
    });
  }

}

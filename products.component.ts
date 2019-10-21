import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
public data=[
  {Name:'Samsung Tv',price:40000.23,Category:'Electronics'},
  {Name:'Nike Casuals',price:4000.23,Category:'shoes'},
  {Name:'Lee Cooper Boot',price:6000.23,Category:'shoes'},
  {Name:'Mobile',price:12000.23,Category:'Electronics'}
  
  
];
public SelectedValue='All';
public All=this.data.length;
public Electronics=this.data.filter(x=>x.Category=='Electronics').length;
public shoes=this.data.filter(x=>x.Category=='shoes').length;
public OnCategoryChanged(selectedValue){
  this.SelectedValue=selectedValue;

}
  

}

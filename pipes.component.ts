import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {
public msg = 'welcome to angular';
public str = 'HELLO';
public price = 450000.23;
public mfd = new Date('2019/02/23');
public number = 234;
public product = {
  Name: 'Samsung Tv',
  price: 3400.23
};
}

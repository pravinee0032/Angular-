import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

  @Input() public All='0';
  @Input() public Electronics='0';
  @Input() public shoes='0';
  public selectedCategoryValue='All';
  @Output() public ComponentChanged:EventEmitter<String>=new EventEmitter<String>();
  public OnCategoryChanged(){
    this.ComponentChanged.emit(this.selectedCategoryValue);
  }

}

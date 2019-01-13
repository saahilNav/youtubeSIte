import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { YouTubeCommonServiceService } from '../you-tube-common-service.service';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  public queryField: FormControl = new FormControl();
  public queryField1: boolean;

  public value1: any;
  public copy: any;
  public showchildren = false;
  public CloneObject: any;
  public enableseacrh = true;

  constructor(private interservice: YouTubeCommonServiceService) {


  }

  ngOnInit() {
    this.showchildren = false;
    this.queryField.valueChanges.subscribe(queryField =>
      this.interservice.searchData(queryField).subscribe(data => {
        this.value1 = data;
        this.enableseacrh = true;
      }));

  }
  gotoVedioDetails(obj) {
    this.showchildren = true;
    this.copy = this.value1;
    console.log("Object list :: ", this.copy);
    this.enableseacrh = false;
    console.log("Object details :: ", obj);
    this.interservice.valueChange.next(obj);
  }

}

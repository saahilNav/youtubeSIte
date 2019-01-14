import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { YoutubserviceService } from '../youtubservice.service';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public data:any=[];
  public showChilren: boolean = false;
  public enableSearch: boolean = true;

  // public enableSearch: boolean = true;
  // public searchTerms = new EventEmitter();
  queryField: FormControl = new FormControl();
  constructor(private interservice: YoutubserviceService) { }

  ngOnInit() {

    this.showChilren = false;
    console.log( this.showChilren )
    this.queryField.valueChanges.subscribe((queryField) => this.interservice.search(queryField)
      .subscribe(response => {
        this.data = response;
        this.interservice.queryField1.emit(this.data);
        // this.enableSearch=true;
      }));

      console.log("gotoDetails", this.showChilren)
  }
  gotoDetail(obj1: any) {
    this.showChilren = true;
    // this.enableSearch=false;
    console.log( this.showChilren );
    this.interservice.queryField1.emit(this.data);
    this.interservice.valueChange.next(obj1);
   
  }

}

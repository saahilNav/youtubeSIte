import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YoutubserviceService } from '../youtubservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public value: any = [];
  public vedioList: any = [];
  @Input() showChilren: boolean;
  // @Output() public childData =new EventEmitter();
  queryField: FormControl = new FormControl();
  constructor(private intervice: YoutubserviceService) {

  }

  ngOnInit() {

    // this.queryField.valueChanges.subscribe((queryField) => this.intervice.search(queryField).subscribe( data=>{
    //   this.vedioList=data}));
    this.intervice.queryField1.subscribe((data) => {
      this.vedioList = data;
    })
  }


  datToDetailComponent(obj: any) {
    //  this.childData.emit(obj);
    console.log("child data in vedolist", obj)
    this.intervice.missionAnnouncedSource.next(obj);
    console.log(this.intervice.missionAnnouncedSource.next(obj));
  }

}

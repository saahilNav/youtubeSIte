import { Component, OnInit, Input } from '@angular/core';
import { YoutubserviceService } from '../youtubservice.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vedio-details',
  templateUrl: './vedio-details.component.html',
  styleUrls: ['./vedio-details.component.scss']
})
export class VedioDetailsComponent implements OnInit {
  public receivValue: any;
  name: string;

  baseUrl = "https://www.youtube.com/embed/";
  // public url: any;
  // // iframeSrc: any;
  constructor(private interservice: YoutubserviceService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.interservice.valueChange.subscribe((data) => {
      this.receivValue = data,
        console.log("this is recive From SearchCOmponent", this.receivValue)
    });
    this. getDatFromVedioList();
  
  }

  getDatFromVedioList() {
    this.interservice.missionAnnouncedSource.subscribe((data)=>{
      this.receivValue=data;
      console.log("in VedioDetails",this.receivValue)
    });
  }

  public getSantizeUrl(url: string) {
    console.log("this is url", url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // public goToDetailsData(obj){
  //  this.receivValue=obj;
  //   console.log("receive data Frm CHild",this.receivValue)
  // }




}

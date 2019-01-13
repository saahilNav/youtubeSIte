import { Component, OnInit, Input } from '@angular/core';
import { YouTubeCommonServiceService } from '../you-tube-common-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vedio-details',
  templateUrl: './vedio-details.component.html',
  styleUrls: ['./vedio-details.component.scss']
})
export class VedioDetailsComponent implements OnInit {

  public value: any;

  public basUrl = "https://www.youtube.com/embed/";


  constructor(private interservice: YouTubeCommonServiceService, private santilizer: DomSanitizer) { }

  ngOnInit() {
    this.interservice.valueChange.subscribe(data => {
      this.value = data;
    })
    this.getDatFromVedioList();
  }
  getDatFromVedioList() {
    this.interservice.valueChange2.subscribe(data => {
      this.value = data;
    })
  }


  getSantilizer(obj) {
    return this.santilizer.bypassSecurityTrustResourceUrl(obj)
  }


}

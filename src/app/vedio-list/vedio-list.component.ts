import { Component, OnInit, Input } from '@angular/core';
import { YouTubeCommonServiceService } from '../you-tube-common-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vedio-list',
  templateUrl: './vedio-list.component.html',
  styleUrls: ['./vedio-list.component.scss']
})
export class VedioListComponent implements OnInit {

  @Input() public inputData: any;
  @Input() public showchildren: boolean;
  @Input() public showchildren1;
  constructor(private interservce: YouTubeCommonServiceService) { }

  ngOnInit() {

  }

  goToVedioDetail(obj) {

    this.interservce.valueChange2.next(obj);
   
  }

}

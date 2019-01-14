import { Component, OnInit, Input } from '@angular/core';
import { YoutubserviceService } from '../youtubservice.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() public vedioItem: any;

  constructor() {
    // console.log("vedioItem",this.vedioItem)
  }

  ngOnInit() {

  }


}

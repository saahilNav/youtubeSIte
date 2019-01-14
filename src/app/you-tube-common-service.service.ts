import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeCommonServiceService {


  constructor(private http: HttpClient) {

  }
  public valueChange = new BehaviorSubject<any>('');
  public valueChange2 = new Subject<any>();
  // public valuechange3=Object.assign({},this.valueChange2)

  goToDetails() {
    return this.http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&type=video&part=snippet&q=")
  }

  searchData(term) {
    return this.http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&type=video&maxResults=10&part=snippet&q=" + term)
  }

}

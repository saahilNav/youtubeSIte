import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Component, EventEmitter} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class YoutubserviceService {

private YOUTUBE_API_KEY = "AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY";
  constructor(private http: HttpClient) {}

  public valueChange: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public missionAnnouncedSource: Subject<any> = new Subject<any>();
   public queryField1:EventEmitter<any> = new EventEmitter<any>();;
  // public  searchTerms=new EventEmitter();
  //  public searchTerms = new Subject<any>();
  // baseUrl: string = 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&YOUTUBE_API_KEY='+ this.YOUTUBE_API_KEY +'&q=';

    
  getDetails(): Observable<any> {
     return this.http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&type=video&part=snippet&q=")  
  }

// getDetails():Observable<any>{

//   // let httpUrl = this.baseUrl;
//   return this.http.get(this.baseUrl);
// }

  search(term: string): Observable<any> {
    return this.http
        .get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjBRPz2l14dM4d0omghFAWBgvc0qjjNGY&type=video&maxResults=7&part=snippet&q='+term);
      }
    
  }



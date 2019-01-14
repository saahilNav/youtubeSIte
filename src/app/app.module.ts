import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubserviceService } from './youtubservice.service';
import { VedioDetailsComponent } from './vedio-details/vedio-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { EmbedVideo } from 'ngx-embed-video';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VedioDetailsComponent,
    VideoListComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    YoutubePlayerModule,
      EmbedVideo.forRoot()
  ],
  providers: [YoutubserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

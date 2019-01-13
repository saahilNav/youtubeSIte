import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { VedioDetailsComponent } from './vedio-details/vedio-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VedioListComponent } from './vedio-list/vedio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    VedioDetailsComponent,
    VedioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

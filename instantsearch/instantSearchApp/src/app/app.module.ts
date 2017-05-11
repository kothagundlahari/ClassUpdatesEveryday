import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule, Jsonp } from '@angular/http';
import { WikipediaSearchService } from './wikipedia-search.service';



@NgModule({
  declarations: [AppComponent],
  providers: [  WikipediaSearchService, Jsonp],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

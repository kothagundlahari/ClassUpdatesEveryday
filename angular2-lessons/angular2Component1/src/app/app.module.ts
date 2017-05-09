import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {WidgetOneModule } from "./widgets/widgets.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    WidgetOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

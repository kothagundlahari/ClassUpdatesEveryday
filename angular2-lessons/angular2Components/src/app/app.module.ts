import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule} from './home/home.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

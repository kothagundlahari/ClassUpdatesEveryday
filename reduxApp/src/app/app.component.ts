import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ clock | async}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 clock = Observable.interval(1000);

 constructor(){
   this.clock.subscribe(console.log.bind(console));
 }

}

import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ clock | async | date: 'yMMMMEEEEdjms' }}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 clock = Observable
   .interval(1000)
   .map(() => new Date ());



}

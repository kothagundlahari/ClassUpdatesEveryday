import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';



@Component({
  selector: 'app-root',

  template: `
    <button (click)="click$.next()">Update</button>
    <h1>{{clock | async | date: 'yMMMMEEEdjms' }}</h1> `,

})
export class AppComponent {

  click$ = new Subject();
  clock ;


   constructor() {
     this.clock = this.click$.map(() => {
       return new Date();
     });
   }

}

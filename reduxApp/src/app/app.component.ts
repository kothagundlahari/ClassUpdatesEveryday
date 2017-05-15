///<reference path="../../../typeScript2/node_modules/rxjs/add/operator/map.d.ts"/>
import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Subject} from '../../../typeScript2/node_modules/rxjs/Subject';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="click$.next()">Update </button>
  <h1>{{ clock | async | date: 'yMMMMEEEEdjms' }}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  click$ = new Subject();

  clock;
  constructor() {
    this.clock = this.click$.map(() => new Date());
  }




}

///<reference path="../../../typeScript2/node_modules/rxjs/add/operator/map.d.ts"/>
import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Subject} from '../../../typeScript2/node_modules/rxjs/Subject';
import 'rxjs/add/observable/merge';

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
    this.clock = Observable.merge(
      this.click$,
      Observable.interval(5000)
    ).map(() => new Date());
  }




}

///<reference path="../../../typeScript2/node_modules/rxjs/add/operator/mapTo.d.ts"/>

import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Subject} from '../../../typeScript2/node_modules/rxjs/Subject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';


@Component({
  selector: 'app-root',
  template: `
    <button (click)="click$.next()">Update</button>
    <h1>{{ clock | async | date: 'yMMMMEEEEdjms' }}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  click$ = new Subject();

  clock;

  constructor() {
    this.clock = Observable.merge(
      this.click$.mapTo('hour'),
      Observable.interval(1000).mapTo('second')
    )
      .startWith(new Date())
      .scan((acc, curr) => {
        const date = new Date(acc.getTime());

        if (curr === 'second') {
          date.setSeconds(date.getSeconds() + 1);
        }

        if (curr === 'hour') {
          date.setHours(date.getHours() + 1);
        }

        return date;
      });
  }


}

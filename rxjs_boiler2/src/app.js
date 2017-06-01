import $ from 'jquery';
import Rx from 'rxjs/Rx';

Rx.Observable.of('hello')
  .mergeMap(v => {
    return  Rx.Observable.of(v+ 'Every One')
})
.subscribe(x => console.log(x));
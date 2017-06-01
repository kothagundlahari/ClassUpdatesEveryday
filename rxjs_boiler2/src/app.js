import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source1$ = Rx.Observable.range(0,5).map(v=>'Merge1:' +v);

const source2$ = Rx.Observable.range(5,5).map(v=>'Merge2:' +v);

Rx.Observable.merge(source1$,source2$)
.subscribe(x=> console.og(x));
import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source$ = new Rx.Observable( observer =>{
        console.log('Creating Observable');
        observer.next("Hello world");
        observer.next('hellp hari');
        observer.error(new Error( 'Error : some thing went wrong '));

        setTimeout(()=>{
            observer.next('time out function');
            observer.complete();

        }, 3000);


    });

source$
.catch(err =>Rx.Observable.of(err))
.subscribe(
    x=>{
        console.log(x);
    },
    err =>{
        console.log(err);
    },
    complete =>{
        console.log('Complete');
    }
);
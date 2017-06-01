import $ from 'jquery';
import Rx from 'rxjs/Rx';

const myPromise = new promise((resolve, reject)=>{
    console.log('Creating Promise');
    setTimeout(()=>{
        reslove('Hello from promise');

    }, 3000);
});

function getUser(username){
    return $.ajax({
        url: 'https://api.github.com/users/'+username,
        dataType : jsnop
    }).promise()
};


const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe(e=>{
    Rx.Observable.fromPromise(getUser(e.target.value))
        .subscribe(x=>{
            $('#name').text(x.data.name);
            $('#blog').text(x.data.blog);
            $('#repos').text('Public Repos:' +x.data.repos);

        })

});


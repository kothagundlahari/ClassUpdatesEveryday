import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Rx.Observable.of('hello')
//   .mergeMap(v => {
//     return  Rx.Observable.of(v+ 'Every One')
// })
// .subscribe(x => console.log(x));


function getUser(username){
    return $.ajax({
        url: 'https:/api.github.com/users/' +username,
        datatype: 'jsnop'

    }).promise();

}


const inputsource$ = Rx.Observable.fromEvent($('#input'), 'keyup')
    .map(e => e.target.value)
    .switchMap(v=>{
        return Rx.Observable.fromPromise(getUser(v));
        }
    )

inputsource$.subscribe(x=>{
    $('#name').text(x.data.name);
    $('#blog').text(x.data.blog);
    $('#repos').text('Public Repos: '+ x.data.public_repos);

})
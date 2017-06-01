import $ from 'jquery';
import Rx from 'rxjs/Rx';
//
// function getGithubUser(username) {
//     return $.ajax({
//         url: 'https://api.github.com/users' + username,
//         dataType: 'jsnop',
//
//     }).promise();
// }
//
// Rx.Observable.fromPromise(getGithubUser('kothagundlahari'))
//     .map(user =>user.data.name)
//     .subcribe(name =>{
//         console.log(name);
//     });
//
//

// const source$ = Rx.Observable.interval(1000)
// .take(10)
// .map(v=> v* v);
//
// source$.subscribe(v=> console.log(v));

const users= [
    {name: 'hari', age:'150'},
    {name: 'hari1', age:'151'},
    {name: 'hari2', age:'152'}
];

const users$ = Rx.Observable.from(users)
.pluck('name');

users$.subscribe(x=> console.log(x));
import {Component} from '@angular/core';
import {SimpleService} from "../service/service.module";

@Component({
  selector: 'home',
  template: `
    <div>I'm a Home component</div>
    <div>{{simpleService.message}}</div>

  `
})
export class HomeComponent {
  constructor(private simpleService: SimpleService) { }
}

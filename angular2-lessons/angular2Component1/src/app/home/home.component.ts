
import {Component} from "@angular/core";
import {SimpleService} from "../service/service.module";
import {WidgetOneComponent} from "../widgets/widget-one.component"
@Component({
  selector: 'home',

  template: `
  <div>I'm a Home component</div>
  <div>{{simpleService.message}}</div>

`
/**    <widget-one></widget-one> .*/
})
export class HomeComponent {
  constructor(private simpleService: SimpleService) { };
}


import {Component} from "@angular/core";
import {SimpleService} from "../service/service.module";
import {WidgetOneComponent} from "../widgets/widget-one.component"
@Component({
  selector: 'home',

  template: `
  <h2 header>Title</h2>
  <div content>Some content</div>
  <h3 footer>Footer</h3>


`
  /**    <widget-one></widget-one> .*/
})
export class HomeComponent {
  constructor(private simpleService: SimpleService) { };
}

import {Component, Input} from "@angular/core";
@Component({
  selector: 'widget-one',
  styles:[`
    :host{
      display: block;
      border: 3px dashed black;
      font-family: "Times New Roman";
    }
`],

  template: `


  <ng-content select="[header]"></ng-content>
  <ng-content select="[content]"></ng-content>

  <ng-content select="[footer]"></ng-content>



`

/** <h3>{{message}}</h3>  .*/

})

export class WidgetOneComponent{

/**  @Input() message; .*/
}

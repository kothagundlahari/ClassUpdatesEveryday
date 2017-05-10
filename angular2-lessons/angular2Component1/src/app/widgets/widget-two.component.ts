import {Component, Input, ViewChild, Renderer} from "@angular/core";

@Component({
    selector: 'widget-two',
    template: `
    <input #input type="text" [value]="message">
`
})

export class WidgetTwoComponent {
  @ViewChild('input') input;

  @Input() message = "default value!"
  constructor(private renderer:Renderer){}

  ngAfterViewInit(){
    this.renderer.invokeElementMethod(
      this.input.nativeElement,
        'focus'
    )
  }
}

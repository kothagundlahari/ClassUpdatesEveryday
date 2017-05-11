import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {WidgetTwoComponent} from "../widgets/widget-two.component";
@Component({
  selector: 'home',
  template: `
<button (click)="onClick()">Move Component</button>
<div #container></div>
`
})
export class HomeComponent {
  @ViewChild('container', { read: ViewContainerRef }) container;

  widgetRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetTwoComponent);

    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);

    this.widgetRef = this.container
      .createComponent(widgetFactory, 2);

    this.widgetRef.instance.message = "I'm third";
  }

  onClick() {
    const randomIndex = Math.floor(Math.random() * this.container.length);

    this.container.move(this.widgetRef.hostView, randomIndex);
  }
}

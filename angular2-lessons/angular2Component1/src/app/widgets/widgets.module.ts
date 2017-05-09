
import {NgModule} from '@angular/core';
import {WidgetOneComponent} from './widget-one.component';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [CommonModule],
  declarations: [WidgetOneComponent],
  exports: [WidgetOneComponent, CommonModule]
})
export class WidgetOneModule {}

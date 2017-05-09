
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {WidgetOneModule} from "../widgets/widgets.module";


@NgModule({

  declarations: [HomeComponent],
  exports: [HomeComponent, WidgetOneModule]
})

export class HomeModule { }

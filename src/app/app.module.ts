import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularReactBrowserModule } from '@angular-react/core';
import { FabDialogModule, FabButtonModule } from '@angular-react/fabric';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ AngularReactBrowserModule, FabButtonModule, FabDialogModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

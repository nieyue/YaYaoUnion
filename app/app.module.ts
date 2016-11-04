import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing,appRoutingProviders }  from './app.routing';//路由组件
import { AppComponent }   from './app.component';
import { PrecisionTargetCustomersComponent }   from './main/precisionTargetCustomers.component';
@NgModule({
  imports:      [ 
      BrowserModule,
      routing ],
  declarations: [
       AppComponent,
       PrecisionTargetCustomersComponent 
       ],
  providers:[
      appRoutingProviders
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

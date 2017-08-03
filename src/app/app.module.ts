import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

var routerConfig: Routes =[
  {path:'',component:ChildComponent},
  {path:'child2',component:Child2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    PriceQuoteComponent,
    LifeComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

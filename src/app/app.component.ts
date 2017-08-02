import { Component,ViewChild,OnInit } from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component" 
import {ChildComponent} from "./child/child.component" 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
/*  @ViewChild("child1")
  child1:ChildComponent;*/

  stock ="";

  title ="Eriollee";

  greeting:string = "hello";

  user:{name:string} = {name:"Eriollee"};

  priceQuote:PriceQuote = new PriceQuote("",0);

  priceQuetoHandler(event: PriceQuote){
  	this.priceQuote = event;
  }

  buyHandler(event: PriceQuote){
  	this.priceQuote = event;
  }
  ngOnInit():void{
  	/*this.child1.greetingMethod("Eriollee");*/
  }

}

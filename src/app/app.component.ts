import { Component,ViewChild,OnInit ,AfterViewInit,AfterContentChecked} from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component" 
import {ChildComponent} from "./child/child.component" 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterContentChecked {
  
  @ViewChild("child1")
  child1:ChildComponent;

  stock ="";

  title ="Eriollee";

  message:string;

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
/*  	setInterval(
  		()=>{
			this.child1.greetingMethod("Eriollee");
  		},5000
  	);
  */ 
  }

  ngAfterViewInit():void{
  	setTimeout(
  		()=>{
			this.message = "Eriollee"
  		},0
  	);
  	console.log("appcomponent ngAfterViewInit");
  }

  ngAfterContentChecked():void{
  	console.log("appcomponent ngAfterContentChecked");
  }

}

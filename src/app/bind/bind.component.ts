import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl:string = "http://placehold.it/400x200";

  size:number = 2;

  divClass:string;

  divClassAny:any = {
  	a:false,
  	b:false,
  	c:false,
  }

  divStyle:any = {
  	color:'red',
  	background:'yellow'
  }

  isBig:boolean = false;

  isDev:boolean = true;

  name:string ="TestDoubleBind";

  constructor() { 

  	setInterval(()=>{
  		this.name="Change"
  	},3000

  		)


  	setTimeout(()=>{
  		this.divClass = "a b c";
  	},3000
  		)

  	setTimeout(()=>{
  		this.isBig = true;
  	},3000)

  	setTimeout(()=>{
  		 this.divClassAny = {
		  	a:true,
		  	b:true,
		  	c:true,
  }
  	},3000)

  	setTimeout(()=>{
  		 this.isDev = false;
  
  	},3000)

  	setTimeout(()=>{
  		 this.divStyle = {
  		 	color:'yellow',
  			background:'red'
  		 }
  
  	},3000)



  }


  ngOnInit() {
  }
   
  //事件绑定
  doOnClick(event:any){
  	console.log(event);
  }

  //Dom 属性 与 html 属性
  doOnInput(event:any){
  	console.log(event.target.value);
  	console.log(event.target.getAttribute('value'));
  	this.name = event.target.value;
  }
}

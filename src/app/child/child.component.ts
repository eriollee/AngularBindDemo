import { Component, OnInit ,Input,OnChanges ,SimpleChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {
  
  @Input()
  greeting:string;

  @Input()
  user:{name:string};
 
  message:string = "Init"

  oldUsername:string;

  changeDetected:boolean = false;

  noChangeCount:number = 0;

  greetingMethod(name:string){
  	console.log("Hello"+name);
  }

  constructor() { }

  ngOnChanges(changes:SimpleChanges):void{
 	console.log(JSON.stringify(changes,null,2));
  }


  ngOnInit() {
  }

  ngDoCheck():void{
  	if(this.user.name !== this.oldUsername){
  		this.changeDetected = true;
  		console.log("DoCheck oldUsername:"+this.oldUsername+"New: "+this.user.name);
  		this.oldUsername = this.user.name;
  	}

  	if(this.changeDetected){
  		this.noChangeCount = 0;
  	}else{
  		this.noChangeCount = this.noChangeCount + 1;
  		console.log("DoCheck 调用" + this.noChangeCount +"次");
  	}

  	this.changeDetected = false;

  }

}

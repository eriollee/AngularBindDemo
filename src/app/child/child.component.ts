import { Component, OnInit ,Input,OnChanges ,SimpleChanges,DoCheck,AfterViewInit,
	AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit,AfterContentChecked,
AfterContentInit,AfterViewChecked,OnDestroy {
  
  

  greetingMethod(name:string){
  	console.log("Hello"+name);
  }

  constructor() { }


  ngOnInit() {
  }

  ngAfterViewInit():void{
  	console.log("ChildComponent ngAfterViewInit");
  }

  ngAfterContentChecked():void{
  	console.log("ChildComponents ngAfterContentChecked");
  }
  
  ngAfterContentInit():void{
  	console.log("ChildComponents ngAfterContentInit");
  }

  ngAfterViewChecked():void{
  	console.log("ChildComponents ngAfterViewChecked");
  }

  ngOnDestroy():void{
  	console.log("ChildComponents ngOnDestroy");
  }

}

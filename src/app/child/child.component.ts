import { Component, OnInit ,Input,OnChanges ,SimpleChanges,DoCheck,AfterViewInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit,AfterContentChecked {
  
  

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
  

}

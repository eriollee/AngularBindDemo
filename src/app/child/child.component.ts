import { Component, OnInit ,Input,OnChanges ,SimpleChanges,DoCheck,AfterViewInit,
	AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  

  greetingMethod(name:string){
  	console.log("Hello"+name);
  }

  constructor() { }


  ngOnInit() {
  }



}

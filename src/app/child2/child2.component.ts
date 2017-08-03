import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy():void{
  	console.log("Child2Components ngOnDestroy");
  }


}

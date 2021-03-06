import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl,FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  /*username:FormControl = new FormControl("aasasa");*/
  formModel:FormGroup = new FormGroup({
  	username:new FormControl("aasasa"),
  	dateRange: new FormGroup({
  		from:new FormControl(),
  		to:new FormControl()
  	}),
  	emails:new FormArray([
  		new FormControl("a@a.com"),
  		new FormControl("b@b.com"),
  		])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
  	console.log(this.formModel.value);
  }

  addEmail(){
  	let emails = this.formModel.get("emails") as FormArray;
  	emails.push(new FormControl());
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import { mobileValidator, equalValidator} from '../validator/validator';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel:FormGroup;

 

  constructor(fb:FormBuilder) { 
  	this.formModel = fb.group({
  		username: ['',[Validators.required,Validators.minLength(6)]],
  		mobile:['',[mobileValidator]],
  		passwordsGroup:fb.group({
  			password:[''],
  			pconfirm:['']
  		},{validator:equalValidator})
  	})
  }

  onSubmit(){
/*  	let isValid:boolean = this.formModel.get("username").valid;
  	console.log("username valid=="+isValid);
  	let errors:any = this.formModel.get("username").errors;
  	console.log("username errors=="+JSON.stringify(errors));*/
  	if(this.formModel.valid){
  	console.log(this.formModel.value);
  	}
  }

  ngOnInit() {
  }

}

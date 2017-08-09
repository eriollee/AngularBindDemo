import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel:FormGroup;

  mobileValidator(control:FormControl):any{
  	var myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))+\d{8}$/;
  	let valid = myreg.test(control.value);
  	console.log("mobile validator:"+valid);
  	return valid? null :{mobile:true};
  } 

  equalValidator(group:FormGroup):any{
  	let password:FormControl = group.get("password") as FormControl;
  	let pconfirm:FormControl = group.get("pconfirm") as FormControl;
  	let valid:boolean = (password.value === pconfirm.value);
  	console.log("equal valid:" + valid);
  	return valid? null :{equal:true};
  }

  constructor(fb:FormBuilder) { 
  	this.formModel = fb.group({
  		username: ['',[Validators.required,Validators.minLength(6)]],
  		mobile:['',[this.mobileValidator]],
  		passwordsGroup:fb.group({
  			password:[''],
  			pconfirm:['']
  		},{validator:this.equalValidator})
  	})
  }

  onSubmit(){
  	let isValid:boolean = this.formModel.get("username").valid;
  	console.log("username valid=="+isValid);
  	let errors:any = this.formModel.get("username").errors;
  	console.log("username errors=="+JSON.stringify(errors));
  	console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}

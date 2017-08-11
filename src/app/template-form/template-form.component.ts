import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:string,valid:boolean,form:any){
  	console.log(form);
  	console.log(valid);
  	console.log(value);
  }

  mobileInvallid:boolean = true;
  mobileUntoucheds:boolean = true;
  onMobileInuput(form:NgForm){
  	console.log("onMobileInuput");
  	if(form){
  		this.mobileInvallid = form.form.get('username').valid;
  		this.mobileUntoucheds = form.form.get('username').untouched;
  	}
  }

}

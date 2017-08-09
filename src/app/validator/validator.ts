
import { FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';

 export function mobileValidator(control:FormControl):any{
    var myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))+\d{8}$/;
    let valid = myreg.test(control.value);
    console.log("mobile validator:"+valid);
    return valid? null :{mobile:true};
  } 

 export function  equalValidator(group:FormGroup):any{
    let password:FormControl = group.get("password") as FormControl;
    let pconfirm:FormControl = group.get("pconfirm") as FormControl;
    let valid:boolean = (password.value === pconfirm.value);
    console.log("equal valid:" + valid);
    return valid? null :{equal:true};
  }
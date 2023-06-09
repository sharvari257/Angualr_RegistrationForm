import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, MinLengthValidator} from '@angular/forms'
//import { ActivatedRoute, Router } from '@angular/router';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  invalidRegister = false;
  errorMessage = '';   
  alert:boolean = false;
  demoForm= new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //*Cpassword: new FormControl('', Validators.required)
   
  })
  

  get FirstName(){return this.demoForm.get('FirstName')}
  get LastName(){return this.demoForm.get('LastName')}
  get email(){return this.demoForm.get('email')}
  get password(){return this.demoForm.get('password')}
  


  postdata() {
    this.alert = true;
    this.router.navigateByUrl('forms');    
   console.log("postdata this.demoForm>>"+this.demoForm);
   console.log("postdata console>>"+this.demoForm.value); 
   console.log("json>>"+JSON.stringify(this.demoForm.value))
   var user_details=this.demoForm.value
   console.log("lastname>>"+user_details["LastName"])
   console.log("firstname>>"+user_details["FirstName"])
   var email=user_details["email"]
   var last=user_details["LastName"]
   var first=user_details["FirstName"]
   var pass=user_details["password"]
  //  var a='curl -X PUT'
  //  console.log("password>>"+JSON.stringify(this.demoForm.get('password')))
   this.http.put('http://restapi.americaniche.com/signup/'+email+'/'+last+'/'+first+'/'+pass,"")
   
   .subscribe((result)=>{
     var r=result;
     console.log("result>>"+result);
   },
   error => {
    if (error.error.email === "duplicated") {
      this.invalidRegister = true;
      this.errorMessage = 'The email address you have used is already registered!';
    } else if (error.error.username === "duplicated") {
      this.invalidRegister = true;
      this.errorMessage = 'The username is not available!';
    }
  },
  () => {
    this.invalidRegister = false;
    this.router.navigate(['forms']);
  })
   
   console.log('http://restapi.americaniche.com/signup/'+email+'/'+last+'/'+first+'/'+pass,"")
  
   //  .subscribe((result)=>{
   //    console.warn("results>>"+result)
 
   //  })
       
   }

  closeAlert(){
    this.alert = false;
  }

  constructor(private router: Router, private http:HttpClient) {  }

  ngOnInit(): void {
  }

}

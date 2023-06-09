import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Route, RouterModule, Routes } from "@angular/router";
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({ 
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {

  alert:boolean = false;
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
    signin : {UserName: any, password: any} = {UserName: "", password: ""};
  demoForm= new FormGroup ({
    UserName: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })
  get UserName(){return this.demoForm.get('UserName')};
  get password(){return this.demoForm.get('password')};


  constructor(private router: Router, private http:HttpClient) {}


  postdata() {
    this.alert = true;
    
   console.log("postdata this.demoForm>>"+this.demoForm);
   console.log("postdata console>>"+this.demoForm.value); 
   console.log("json>>"+JSON.stringify(this.demoForm.value))
   var user_details=this.demoForm.value
   console.log("username>>"+user_details["UserName"])
   var user=user_details["UserName"]
   var pass=user_details["password"]
  //  var a='curl -X POST'
  //  console.log("password>>"+JSON.stringify(this.demoForm.get('password')))
   this.http.post('http://restapi.americaniche.com/login/'+user+'/'+pass,"")
   .subscribe((result)=>{
     var r=result;
     console.log("result>>"+result)
  
   
   }
   );
  
   
   console.log('http://restapi.americaniche.com/login/'+user+"/"+pass,"")
  
   //  .subscribe((result)=>{
   //    console.warn("results>>"+result)
 
   //  })
       
   }
 
   go() {
     this.router.navigateByUrl('register');
   }
   onReset() {
     
     this.demoForm.reset();
 }
  
   ngOnInit() {
     exports: [RouterModule]
     
    }
     
   }


  
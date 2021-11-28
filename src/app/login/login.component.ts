import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string='';
  constructor(private _AuthService:AuthService,private _Router:Router) { }
 loginForm=new FormGroup({
   email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),Validators.required]),
 })
 submitloginForm(loginForm:FormGroup){
this._AuthService.login(loginForm.value).subscribe((response)=>{
  if(response.message=='success')
  {
    localStorage.setItem('userToken',response.token)
    this._AuthService.saveCurrentUser();
     this._Router.navigate(['/home'])
  }
  else{
    this.error=response.message;
  }
})
 }
  ngOnInit(): void {
  }

}

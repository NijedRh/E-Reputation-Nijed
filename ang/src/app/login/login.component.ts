import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  role:any;
  submitted:boolean = false
  user:any;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null,Validators.minLength(8))
    });

  }

  ngOnInit() {
  }


  login() {
    console.log(this.f.password.errors);
this.submitted = true
    if (this.loginForm.valid) {
      localStorage.setItem('email', this.loginForm.get('email').value.toString());
      console.log(this.loginForm.get('email').value.toString());
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            
            localStorage.setItem('token', data.toString());
           // if (data.role==='admin'){
            
            this._router.navigate(['/dash']);
          },
          error => { }
        );
    }
  }
  adminlog(){
    this.submitted = true

    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._myservice.adminlog(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);

            localStorage.setItem('token', data.toString());
           
            
            this._router.navigate(['/dashboard']);
          },
          error => { }
        );
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}

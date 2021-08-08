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
  user:any;
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

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

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}

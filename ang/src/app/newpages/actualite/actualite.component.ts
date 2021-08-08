import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  users: any;
  banks: Object;

  constructor(private _router: Router,private _http: HttpClient,private _myservice: MyserviceService) { }

  ngOnInit(): void {this.showdetails()}

  showdetails(){
  let email = localStorage.getItem('email')
  this._myservice.getAlldetails({'email':email})
    .subscribe(
      data => {
        this.banks = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
}

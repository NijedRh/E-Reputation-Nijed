import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

import {take} from 'rxjs/operators';
import { MyserviceService } from "src/app/myservice.service";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  pythouna: Object;
  collapsed: Boolean;
  constructor(private _router: Router,private _http: HttpClient,private _myservice: MyserviceService,private _activatedRoute: ActivatedRoute) {}

  ngOnInit():void {this.posturl()}

  things = ['Auteur', 'commentaire', 'sentiment'];

  posturl(){
    let URL = localStorage.getItem('URL');
    
    this._myservice.datapy({'URL':URL}).pipe(take(1))
    .subscribe(
      data => {
        this.pythouna = Object.values( data[0])
        for (var i in this.pythouna) {
          this.pythouna[i]["collapsed"] = false;
          console.log(i);
          console.log(this.pythouna[i]);
    
        }

  
        console.log(this.pythouna);
      },
      error => {
        console.log(error);
      });     
  }

 
}

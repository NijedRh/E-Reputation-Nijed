import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss']
})
export class ScrapingComponent implements OnInit {
  pythouna: Object;
  collapsed: Boolean;

  constructor(private _router: Router,private _http: HttpClient,private _myservice: MyserviceService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {  this.posturl() }

  things = ['Auteur', 'commentaire', 'sentiment'];

  /*retrievePythonData(){
    let URL = localStorage.getItem('URL')
    this._myservice.getPythonData({'url':URL})
        .subscribe(
          data => {
            this.pythouna = data;
            console.log(data);
            
          },
          error => {
            console.log(error);
          });

        }*/
       
        posturl(){
          let URL = localStorage.getItem('URL');
          
          this._myservice.datapy({'URL':URL}).pipe(take(1))
          .subscribe(
            data => {
              this.pythouna = Object.values( data[0])
             console.log("salut nijed")
        
              console.log(this.pythouna);
            },
            error => {
              console.log(error);
            });     
        }

        commsdetails(){
          //localStorage.setItem('pythouna', pythouna);
          this._router.navigate(['/main/commentaires'], { relativeTo: this._activatedRoute });

        }

        logout(){
          localStorage.removeItem('token');
          this._router.navigate(['/main/login']);
        }
      

       
}



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
  loading  = false;
  ll: any;
  constructor(private _router: Router,private _http: HttpClient,private _myservice: MyserviceService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    let mytab = JSON.parse(localStorage.getItem('Array'))
    if(mytab){
      this.pythouna = mytab
    }

   }

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
       
        lancerscraping(){
          localStorage.removeItem('Array');
          this.loading = true
          let URL = localStorage.getItem('URL');
          console.log(URL);
          
          this._myservice.datapy({'URL':URL}).pipe(take(1))
          .subscribe(
            data => {
              this.pythouna = Object.values( data[0])
             console.log("salut nijed");
             localStorage.setItem('Array', JSON.stringify(this.pythouna));

           this.loading = false
              console.log(this.pythouna);
              for(var i=1; i< 20;i++){
              
             // this.ll= this.pythouna[1]["commentaires"]["det"][i][1];
             this.ll = this.pythouna[i]["commentaires"]["det"][1];

              console.log('hh');
              console.log(this.ll);
              }
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



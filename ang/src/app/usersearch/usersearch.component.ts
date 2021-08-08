import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.scss']
})
export class UsersearchComponent implements OnInit {
 banks: any;
  sss: Object;

  constructor(private _router: Router,private _http: HttpClient,private _myservice: MyserviceService,private _activatedRoute: ActivatedRoute) {this.retrieveAlluserbanks() }
 
  ngOnInit(): void {this.retrieveAlluserbanks()}
  title = 'Search for your bank here';
  searchText;



  retrieveAlluserbanks(){
    let email = localStorage.getItem('email');
    let URL = localStorage.getItem('URL');
    this._myservice.getAlluserbanks({'email':email})
        .subscribe(
          data => {
            this.banks = data;
            console.log(this.banks);
          },
          error => {
            console.log(error);
          });  
          
         
  }
/*posturl(){
  let URL = localStorage.getItem('URL');
  this._myservice.ddd({'URL':URL})
  .subscribe(
    data => {
      this.sss = data;
      console.log(this.sss);
    },
    error => {
      console.log(error);
    });  
    
}*/
  scrape(URL){
     localStorage.setItem('URL', URL.toString());
     this._router.navigate(['/main/scraping'], { relativeTo: this._activatedRoute });



  }




  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }







}

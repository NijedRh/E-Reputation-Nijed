import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  banks: any;

  constructor(private _router: Router,private _http: HttpClient,private _myservice: MyserviceService) {
    this.retrieveBanks();
   }


  
  ngOnInit():void {
    this.retrieveBanks()
  }
  title = 'Search for your bank here';
  searchText;
 /* banks = [
    { id: 11, name: 'Biat', URL: ' https://www.facebook.com/BanqueInternationaleArabedeTunisie/'},
    { id: 12, name: 'UIB' , URL: 'https://www.facebook.com/societegenerale.UIB'},
    { id: 13, name: 'BH' , URL: 'https://www.facebook.com/BHBank/'},
    { id: 14, name: 'BNA' , URL: 'https://www.facebook.com/BanqueNationaleAgricole/' },
    { id: 15, name: 'Zitouna' , URL: 'https://www.facebook.com/BanqueZitouna'},
    { id: 16, name: 'Société génrerale' , URL: 'https://www.facebook.com/societegenerale/?brand_redir=194666767388228'},
    { id: 17, name: 'Tijeri bank' , URL: 'https://www.facebook.com/AttijariBankTunisie'},
    { id: 18, name: 'BTL' , URL: 'https://www.facebook.com/BTL-Banque-Tuniso-Libyenne-1929312187142909/'},
    { id: 19, name: 'minyar banka' , URL: '*********'},
    { id: 20, name: 'bankaaa' , URL: '*********'}
  ];
*/


retrieveBanks(){
  let URL = localStorage.getItem('URL');
  this._myservice.getAll()
      .subscribe(
        data => {
          this.banks = data;
          console.log(data);
          console.log(this.banks.URL)
        },
        error => {
          console.log(error);
        });

}
/*retrieveAlluserbanks(){
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
*/




scrape(URL){
  localStorage.setItem('URL', URL.toString());

  this._router.navigate(['/pages/tables']);
}





}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhost:3000/users/register', body,{
      observe:'body'
    });
  }
  

  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body,{
      observe:'body'
    });
  }
  adminlog(body:any){
    return this._http.post('http://localhost:3000/admins/adminlog', body,{
      observe:'body'
    });
  }
  

  /*getUserName() {
    return this._http.get('http://localhost:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }*/
  add(body:any){
    return this._http.post('http://localhost:3000/banks/add', body,{
      observe:'body'
    });
  }
  addbanka(body:any){
    return this._http.post('http://localhost:3000/banks/addbanka', body,{
      observe:'body'
    });
  }


  getUserBank(body:any){
    return this._http.post('http://localhost:3000/users/getUserBank',body ,{
        observe: 'body'
      
      });
  
  }
  getBankImage(body:any){
    return this._http.post('http://localhost:3000/banks/getBankImage',body ,{
        observe: 'body'
      
      });
  
  }


  getAlluserbanks(body:any){
    return this._http.post('http://localhost:3000/banks/getAlluserbanks',body ,{
        observe: 'body'
      
      });
  
  }
  getAlldetails(body:any){
    return this._http.post('http://localhost:3000/banks/getAlldetails',body ,{
        observe: 'body'
      
      });
  
  }



  getAll(){
    return this._http.get('http://localhost:3000/banks/getAllbanks', {
      observe: 'body'
    
    });
 }
 getAllbanknames(){
  return this._http.get('http://localhost:3000/users/getAllbanknames', {
    observe: 'body'
  
  });

 }

 
  getAllusers(){
    return this._http.get('http://localhost:3000/users/getAllusers', {
      observe: 'body'
    
    });

}
getUserName() {
  return this._http.get('http://localhost:3000/users/username', {
    observe: 'body',
    params: new HttpParams().append('token', localStorage.getItem('token'))
  });
} 
 /*getPythonData(URL){
  return this._http.post('http://localhost:5000/post_url', URL,{
    observe: 'body'
  
  });
}*/
datapy(URL:any){
  return this._http.post('http://localhost:5000/post_url',URL ,{
      observe: 'body'
    
    });

}
detailspy(URL){
  return this._http.post('http://localhost:5000/details_py',URL ,{
      observe: 'body'
    
    });

}


deleteuser(data){
  return this._http.post( 'http://localhost:3000/users/deleteuser', data,{
    observe: 'body'
  
  })
  
};

deletebank(data){
  return this._http.post( 'http://localhost:3000/banks/deletebank', data,{
    observe: 'body'
  
  })
  
};


}

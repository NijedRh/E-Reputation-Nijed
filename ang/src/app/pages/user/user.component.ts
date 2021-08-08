import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MyserviceService } from "src/app/myservice.service";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
users: Object;
  
currentUser = null;
currentIndex = -1;
loading = false;

constructor(private _router: Router,private _http: HttpClient,private _myservice: MyserviceService,private _activatedRoute: ActivatedRoute) {
  this.retrieveUsers();
 }



ngOnInit():void {
  //this.retrieveUsers();
}
title = 'Search for your user here';
searchText;
/* users = [
  { username: 'minyar', role: 'user', }
  
];*/



retrieveUsers(){
this._myservice.getAllusers()
    .subscribe(
      data => {
        this.users = data;
        console.log(data);
        
      },
      error => {
        console.log(error);
      });
}
/*setActiveTutorial(user, index) {
  this.currentUser = user;
  this.currentIndex = index;
}*/

details(email){

  localStorage.setItem('email', email.toString());
  this._router.navigate(['/actualite'], { relativeTo: this._activatedRoute });

}

delete(id){
let data = {id:id}
console.log(data);

  this._myservice.deleteuser(data).subscribe(  data => {
   this.retrieveUsers()
    
  },
  error => {
    console.log(error);
  });
   /* alert('Success');

  });}*/
}
}
